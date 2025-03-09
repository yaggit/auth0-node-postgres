import { ProductModel } from "../models/productModel";

export const ProductService = {
  createProduct: ProductModel.createProduct,
  getAllProducts: ProductModel.getAllProducts,
  getProductById: ProductModel.getProductById,
  updateProduct: ProductModel.updateProduct,
  deleteProduct: ProductModel.deleteProduct,
};
