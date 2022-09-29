import config from '../config';
import mongoose from 'mongoose';
import { logAndExit } from './errors';
export async function connect(): Promise<void> {
  try {
    await mongoose.connect(config.db.DB_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    if (err instanceof Error) {
      logAndExit(err);
    }
  }
}
