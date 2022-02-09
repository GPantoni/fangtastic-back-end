import { Router } from "express";
import { searchProducts } from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/products", searchProducts);

export default productsRouter;
