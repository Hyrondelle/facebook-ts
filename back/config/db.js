/* eslint-disable no-undef */
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config()

const db =mongoose
  .connect(
    "mongodb+srv://" + process.env.DB_USER_PASS + "@clone.xrknh2m.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
  
  export default db