import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import introRoutes from './routes/introRoutes';
import { ConnectOptions } from 'mongodb';
// import other routes here

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/intro', introRoutes);
// use other routes here

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGO_URI!;

const mongoose1 = require("mongoose");
console.log(process.env.MONGODB_CONNECT_URI);
mongoose1.connect(process.env.MONGODB_CONNECT_URI);
const connection = mongoose1.connection;
connection.on("error", () => {
  console.log("Error Connecting to Database");
  process.exit(1);
});
connection.on("connected", () => {
  console.log("Connecting to Database Successful");
});

export default app;