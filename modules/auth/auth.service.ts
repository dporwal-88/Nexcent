// modules/auth/auth.service.ts

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "./auth.model";
import { connectDB } from "@/lib/db";

const JWT_SECRET = process.env.JWT_SECRET!;; 

export const authService = {
  async register(data: any) {
    await connectDB();

    const existing = await User.findOne({ email: data.email });
    if (existing) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await User.create({
      ...data,
      password: hashedPassword,
    });

    return user;
  },

  async login(data: any) {
    await connectDB();

    const user = await User.findOne({ email: data.email });
    if (!user) throw new Error("Invalid credentials");

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign(
      { id: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    return { user, token };
  },
};