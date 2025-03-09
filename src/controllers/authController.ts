import { Request, Response } from "express";
import { AuthService } from "../services/authService";

export const AuthController = {
  async login(req: Request, res: Response) {
    try {
      const { email, name } = req.body;
      if (!email || !name) return res.status(400).json({ message: "Email and name are required" });

      const { token, user } = await AuthService.login(email, name);
      res.json({ token, user });
    } catch (error) {
      res.status(500).json({ message: "Login failed", error });
    }
  },
};
