import Agent from '../models/Agent.js';
import ListItem from '../models/ListItem.js';
import { parseCSV } from '../utils/csvParser.js';
import path from 'path';
import fs from 'fs';

const allowedTypes = ['.csv', '.xlsx', '.xls', '.pdf'];

export const uploadList = async (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const file = req.files.file;
  const ext = path.extname(file.name);

  if (!allowedTypes.includes(ext)) {
    return res.status(400).json({ message: 'Invalid file type' });
  }

  const uploadPath = `./uploads/${Date.now()}-${file.name}`;

  try {
    await file.mv(uploadPath);

    const data = await parseCSV(uploadPath); // [{ firstName, phone, notes }]

    const agents = await Agent.find();
    if (agents.length < 5) {
      return res.status(400).json({ message: 'At least 5 agents required' });
    }

    const assignedTasks = [];
    const agentCount = 5;

    for (let i = 0; i < data.length; i++) {
      const agent = agents[i % agentCount];
      const { firstName, phone, notes } = data[i];

      const newTask = new ListItem({
        firstName,
        phone,
        notes,
        agentId: agent._id
      });

      await newTask.save();
      assignedTasks.push(newTask);
    }

    fs.unlinkSync(uploadPath); // Clean up

    res.status(200).json({ message: 'Tasks assigned successfully', tasks: assignedTasks });
  } catch (err) {
    res.status(500).json({ error: 'Failed to process file' });
  }
};

// Get distributed list by agent
export const getList = async (req, res) => {
  try {
    const items = await ListItem.find().populate('agentId', 'name email');
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get list items' });
  }
};
