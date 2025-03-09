import { Request, Response } from "express";
import { UserService } from "../services/userService";

export const UserController = {
  async getProfile(req: Request, res: Response) {
    try {
      const email = (req.user as any).email;
      const user = await UserService.getUserProfile(email);

      if (!user) return res.status(404).json({ message: "User not found" });

      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  },

  async updateRole(req: Request, res: Response) {
    try {
      const { email, role } = req.body;
      if (!email || !role) return res.status(400).json({ message: "Email and role are required" });

      const updatedUser = await UserService.updateRole(email, role);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: "Error updating role", error });
    }
  },
};
