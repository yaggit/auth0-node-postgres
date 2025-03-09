import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const AUTH0_TOKEN_URL = `https://${process.env.AUTH0_DOMAIN}/oauth/token`;

export class AuthService {
  static async exchangeCodeForToken(code: string) {
    try {
      const response = await axios.post(AUTH0_TOKEN_URL, {
        grant_type: "authorization_code",
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        code,
        redirect_uri: process.env.AUTH0_CALLBACK_URL,
      });
      return response.data;
    } catch (error) {
      console.error("Auth0 Token Exchange Error:", error.response?.data);
      throw new Error("Failed to exchange code for token.");
    }
  }
}
