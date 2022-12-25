import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getAllUsers,
} from "../controllers/user.controller.js";
import { protect, admin } from "../middleware/auth.middleware.js";

const router = express.Router();
router.route("/").post(registerUser).get(protect, admin, getAllUsers);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;
