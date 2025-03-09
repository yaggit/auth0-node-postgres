import jwt from "jsonwebtoken";
import { UserModel } from "../models/userModel";
import dotenv from "dotenv";

dotenv.config();

const SECRET = process.env.JWT_SECRET || "supersecretkey";

export const AuthService = {
  async login(email: string, name: string) {
    let user = await UserModel.findUserByEmail(email);

    if (!user) {
      user = await UserModel.createUser({ email, name, role: "user" });
    }

    const token = jwt.sign({ email: user.email, role: user.role }, SECRET, { expiresIn: "1h" });

    return { token, user };
  },
};
