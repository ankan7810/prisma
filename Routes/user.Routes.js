import { Router } from "express";
import { createUser, deleteUser, fetchUsers, showUser, updateUser } from "../Controllers/user.Controllers.js";

const router = Router();

router.get("/", fetchUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.get("/:id", showUser);
router.delete("/:id", deleteUser);

export default router;