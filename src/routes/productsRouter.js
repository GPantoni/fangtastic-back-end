import { Router } from "express";
import { searchProducts, dataProduct } from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/products", searchProducts);
productsRouter.get("/product", dataProduct);

export default productsRouter;
