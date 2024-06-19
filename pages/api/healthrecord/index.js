// pages/api/healthrecord/index.js
import { connectMongoDBHealthRecord } from '@/lib/mongodbhealthrecord';
import HealthRecord from '@/models/HealthRecord';
import { NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      return await addHealthRecord(req, res);
    case 'GET':
      return await getHealthRecords(req, res);
    default:
      res.setHeader('Allow', ['POST', 'GET']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function addHealthRecord(req, res) {
  const {
    studentRollNo,
    studentEmail,
    dateOfVisit,
    doctorName,
    doctorSpecialization,
    prescription,
    causeOfVisit
  } = req.body;

  try {
    await connectMongoDBHealthRecord(); // Connect to MongoDB

    // Create a new instance of HealthRecord model
    const newHealthRecord = new HealthRecord({
      studentRollNo,
      studentEmail,
      dateOfVisit,
      doctorName,
      doctorSpecialization,
      prescription,
      causeOfVisit,
    });

    // Save the new health record to the database
    await newHealthRecord.save();

    // Prepare success message
    const successMessage = 'Health record added successfully';

    // Return JSON response with the new health record and success message
    return res.status(201).json({
      healthRecord: newHealthRecord,
      successMessage
    });

  } catch (error) {
    console.error('Error adding health record:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getHealthRecords(req, res) {
  try {
    const session = await getSession({ req });
    
    if (!session || !session.user.email) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    const userEmail = session.user.email;
    
    await connectMongoDBHealthRecord(); // Ensure MongoDB connection

    // Fetch health records for the logged-in user
    const records = await HealthRecord.find({ studentEmail: userEmail });

    return res.status(200).json(records);
  } catch (error) {
    console.error('Error fetching health records:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
