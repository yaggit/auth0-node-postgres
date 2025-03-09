import express from "express";
import { checkJwt } from "../config/auth0";
import { checkRole } from "../middleware/authMiddleware";
import { ProductController } from "../controllers/productController";

const router = express.Router();

router.post("/", checkJwt, checkRole("admin"), ProductController.create);
router.get("/", checkJwt, ProductController.getAll);
router.get("/:id", checkJwt, ProductController.getById);
router.put("/:id", checkJwt, checkRole("admin"), ProductController.update);
router.delete("/:id", checkJwt, checkRole("admin"), ProductController.delete);

export default router;
