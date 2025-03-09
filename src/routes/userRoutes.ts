import express from "express";
import { checkJwt, checkRole } from "../middleware/authMiddleware";
import { UserController } from "../controllers/userController";

const router = express.Router();

router.get("/profile", checkJwt, UserController.getProfile);
router.put("/role", checkJwt, checkRole("admin"), UserController.updateRole);

export default router;
