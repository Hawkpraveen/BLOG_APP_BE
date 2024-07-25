import { createPost, getAllPosts } from "../Controllers/postController.js";
import { middleware } from "../Middleware/MiddleWare.js";
import express from "express";

const router = express.Router();

router.post("/createpost", middleware, createPost);
router.get("/getposts", getAllPosts);

export default router;
