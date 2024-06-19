import { connectMongoDBUpdates } from '@/lib/mongodbupdates';
import Update from '@/models/updates';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function GET() {
  try {
    await connectMongoDBUpdates();
    const updates = await Update.find({});
    return NextResponse.json(updates);
  } catch (error) {
    console.error("Error fetching updates:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req) {
  const { content } = await req.json();

  try {
    await connectMongoDBUpdates();
    const newUpdate = new Update({ content, createdAt: new Date() });
    await newUpdate.save();
    return NextResponse.json(newUpdate, { status: 201 });
  } catch (error) {
    console.error("Error adding update:", error);
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
    await connectMongoDBUpdates();
    await Update.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Update deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error("Error deleting update:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
