// pages/api/student.js

import { connectDBstudent } from '@/lib/mongodbstudent';
import Student from '@/models/student';

const handler = async (req, res) => {
  await connectDBstudent();

  if (req.method === 'GET') {
    try {
      const students = await Student.find();
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch students' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
