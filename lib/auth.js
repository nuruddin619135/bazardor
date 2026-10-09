// lib/auth.js

import { betterAuth } from "better-auth/minimal";
import mongoose from "mongoose";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const connectToDatabase = async () => {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI);
  }

  return mongoose.connection.db;
};

const db = await connectToDatabase();

export const auth = betterAuth({
  database: mongodbAdapter(db),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },

    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },
});
