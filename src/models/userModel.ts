import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const UserModel = {
  async findUserByEmail(email: string) {
    return await prisma.user.findUnique({ where: { email } });
  },

  async createUser(data: { email: string; name: string; role: string }) {
    return await prisma.user.create({ data });
  },

  async updateUserRole(email: string, role: string) {
    return await prisma.user.update({ where: { email }, data: { role } });
  },
};
