import { expressjwt } from "express-jwt";
import jwksRsa from "jwks-rsa";
import dotenv from "dotenv";

dotenv.config();

export const checkJwt = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
});

// Role-Based Access Control (RBAC) Middleware
export const checkRole = (role: string) => {
  return (req: any, res: any, next: any) => {
    const userRoles = req.auth?.["https://yourapp.com/roles"] || [];
    if (!userRoles.includes(role)) {
      return res.status(403).json({ message: "Access Denied: Insufficient Role" });
    }
    next();
  };
};
