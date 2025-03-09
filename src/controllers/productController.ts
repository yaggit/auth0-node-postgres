import { Request, Response } from "express";
import { ProductService } from "../services/productService";

export const ProductController = {
  async create(req: Request, res: Response) {
    try {
      const { name, price } = req.body;
      const product = await ProductService.createProduct({ name, price });
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: "Error creating product", error });
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const products = await ProductService.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Error fetching products", error });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await ProductService.getProductById(id);

      if (!product) return res.status(404).json({ message: "Product not found" });

      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Error fetching product", error });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, price } = req.body;
      const updatedProduct = await ProductService.updateProduct(id, { name, price });

      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: "Error updating product", error });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await ProductService.deleteProduct(id);
      res.json({ message: "Product deleted" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting product", error });
    }
  },
};
