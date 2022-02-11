import { Router } from "express";
import { getProductsById, getCart, addToCart, removeFromCart } from "../controllers/cartController.js";

const cartRouter = Router();

cartRouter.get("/cart/products", getProductsById);
cartRouter.get("/cart", getCart);
cartRouter.post("/cart", addToCart);
cartRouter.delete('/cart', removeFromCart)

export default cartRouter;

