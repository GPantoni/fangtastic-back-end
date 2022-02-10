import { Router } from "express";
import productsRouter from "./productsRouter.js";
import userRouter from "./userRouter.js";

const router = Router();
router.use(productsRouter);
router.use(userRouter);

export default router;
