import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET = process.env.JWT_SECRET || "supersecretkey";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Unauthorized - No Token" });

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid Token" });

    req.user = decoded;
    next();
  });
};

export const checkRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if ((req.user as any).role !== role) return res.status(403).json({ message: "Forbidden - Role Required" });

    next();
  };
};
