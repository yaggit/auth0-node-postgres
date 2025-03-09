import { UserModel } from "../models/userModel";

export const UserService = {
  async getUserProfile(email: string) {
    return await UserModel.findUserByEmail(email);
  },

  async updateRole(email: string, role: string) {
    return await UserModel.updateUserRole(email, role);
  },
};
