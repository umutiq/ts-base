import * as config from '../config';
import mongoose from 'mongoose';
export async function connect(): Promise<void> {
  try {
    await mongoose.connect(config.db.DB_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
