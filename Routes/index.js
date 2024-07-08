import { Router } from "express";
import UserRoutes from "./user.Routes.js";
import PostRoutes from "./post.Routes.js";
import commentRoutes from "./commengt.Routes.js";


const router = Router();
router.use("/api/user", UserRoutes);
router.use("/api/post", PostRoutes);
router.use("/api/comment", commentRoutes);

export default router;