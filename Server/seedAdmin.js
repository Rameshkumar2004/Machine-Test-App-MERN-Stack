import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from './models/User.js'; // adjust if needed

dotenv.config();

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const email = 'admin@example.com';
  const password = 'admin123';

  const existing = await User.findOne({ email });
  if (existing) {
    console.log('Admin already exists');
    process.exit(0);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ email, password: hashedPassword });
  await user.save();

  console.log('✅ Admin created:');
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  process.exit(0);
};

run().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
