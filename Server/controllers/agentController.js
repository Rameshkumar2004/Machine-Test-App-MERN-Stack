import Agent from '../models/Agent.js';
import bcrypt from 'bcryptjs';

export const createAgent = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    const agentExists = await Agent.findOne({ email });
    if (agentExists) {
      return res.status(400).json({ message: 'Agent already exists' });
    }

    const agent = new Agent({ name, email, mobile, password });
    await agent.save();

    res.status(201).json({ message: 'Agent created successfully', agent });
  } catch (err) {
    console.error('Error creating agent:', err);
    res.status(500).json({ message: 'Server error' });
  }
};


export const getAgents = async (req, res) => {
  try {
    const agents = await Agent.find().select('-password');
    res.status(200).json(agents);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteAgent = async (req, res) => {
  try {
    await Agent.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Agent deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
