import express from "express";
import { getAllUser } from "../controllers/user-controller.js";
const router = express.Router();

router.get('/', getAllUser)

export default router;