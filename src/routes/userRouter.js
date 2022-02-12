import { Router } from "express";
import { singUp } from "../controllers/userController.js";
import { validateUserSchema } from "../middleware/validateUserSchema.js";

const userRouter = Router();

userRouter.post("/sign-up", validateUserSchema, singUp);

export default userRouter;
