import { Router } from "express";
import productsRouter from "./productsRouter.js";
import cartRouter from "./cartRouter.js";
import userRouter from "./userRouter.js";

const router = Router();
router.use(productsRouter);
router.use(userRouter);

router.use(cartRouter);

export default router;