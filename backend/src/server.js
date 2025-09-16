import express from 'express';
 import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from '../config/db.js';
import dotenv from 'dotenv';
import rateLimiter from '../middleware/ratelimiter.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use("/api/notes", notesRoutes);
connectDB();
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});

