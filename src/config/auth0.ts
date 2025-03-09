import { Request, Response, NextFunction } from "express";import jwt from "jsonwebtoken";
import jwksRsa from "jwks-rsa";
import dotenv from "dotenv";

dotenv.config();

const authConfig = {
  domain: process.env.AUTH0_DOMAIN!,
  audience: process.env.AUTH0_AUDIENCE!,
};

const checkJwt = (req: Request, res: Response, next: NextFunction): Response | void => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Unauthorized - No Token" });

  const client = jwksRsa({ jwksUri: `https://${authConfig.domain}/.well-known/jwks.json` });

  jwt.verify(
    token,
    (header, callback) => client.getSigningKey(header.kid, (err, key) => callback(null, key!.getPublicKey())),
    { audience: authConfig.audience, issuer: `https://${authConfig.domain}/`, algorithms: ["RS256"] },
    (err, decoded) => {
      if (err) return res.status(401).json({ message: "Invalid Token" });
      req.user = decoded;
      next();
    }
  );
};

export { checkJwt };
