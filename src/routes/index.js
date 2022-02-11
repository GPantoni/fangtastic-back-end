import { Router } from "express";
import productsRouter from "./productsRouter.js";
import cartRouter from "./cartRouter.js";

const router = Router();
router.use(productsRouter);
router.use(cartRouter)

export default router;