import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ProductModel = {
  async createProduct(data: { name: string; price: number }) {
    return await prisma.product.create({ data });
  },

  async getAllProducts() {
    return await prisma.product.findMany();
  },

  async getProductById(id: string) {
    return await prisma.product.findUnique({ where: { id } });
  },

  async updateProduct(id: string, data: { name?: string; price?: number }) {
    return await prisma.product.update({ where: { id }, data });
  },

  async deleteProduct(id: string) {
    return await prisma.product.delete({ where: { id } });
  },
};
