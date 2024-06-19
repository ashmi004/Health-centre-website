// pages/api/events.js
import { connectMongoDBEvents } from '@/lib/mongodbevents';
import Event from '@/models/Event';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function GET(req) {
  const url = new URL(req.url);
  const date = url.searchParams.get('date');

  try {
    await connectMongoDBEvents();

    let events;
    if (date) {
      // Filter events by date
      const startDate = new Date(date);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 1);

      events = await Event.find({
        date: {
          $gte: startDate,
          $lt: endDate
        }
      });
    } else {
      events = await Event.find({});
    }

    return NextResponse.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req) {
  const { date, eventName, description } = await req.json();

  try {
    await connectMongoDBEvents();
    const newEvent = new Event({ date, eventName, description, createdAt: new Date() });
    await newEvent.save();
    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    console.error("Error adding event:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req) {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Id is required' }, { status: 400 });
  }

  try {
    await connectMongoDBEvents();
    await Event.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Event deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error("Error deleting event:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
