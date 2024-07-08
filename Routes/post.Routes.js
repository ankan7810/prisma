import { Router } from "express";
import { createPost, deletePost, fetchPosts, searchPost, showPost } from "../Controllers/post.Controllers.js";

const router = Router();

router.get("/", fetchPosts);
router.post("/", createPost);
router.post("/search", searchPost);
router.get("/:id", showPost);
router.delete("/:id", deletePost);

export default router;