import { Router } from "express";
import { createComment, deleteComment, fetchComments, showComment } from "../Controllers/comment.Controllers.js";

const router = Router();

router.get("/", fetchComments);
router.post("/", createComment);
router.get("/:id", showComment);
router.delete("/:id", deleteComment);

export default router;