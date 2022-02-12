import { Router } from "express";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";
import productsRouter from "./productsRouter.js";

const router = Router();
router.use(userRouter);
router.use(authRouter);
router.use(productsRouter);

export default router;
