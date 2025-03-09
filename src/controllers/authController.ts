import { Request, Response } from "express";
import { AuthService } from "../services/authService";

export const login = async (req: Request, res: Response) => {
  res.redirect(
    `https://${process.env.AUTH0_DOMAIN}/authorize?response_type=code&client_id=${process.env.AUTH0_CLIENT_ID}&redirect_uri=${process.env.AUTH0_CALLBACK_URL}&scope=openid profile email`
  );
};

export const callback = async (req: Request, res: Response) => {
  try {
    const { code } = req.query;
    if (!code) return res.status(400).json({ message: "Authorization code missing" });

    const tokenData = await AuthService.exchangeCodeForToken(code as string);
    res.json(tokenData);
  } catch (error) {
    res.status(500).json({ message: "Authentication failed" });
  }
};

export const logout = (req: Request, res: Response) => {
  res.redirect(
    `https://${process.env.AUTH0_DOMAIN}/v2/logout?client_id=${process.env.AUTH0_CLIENT_ID}&returnTo=http://localhost:3000`
  );
};
