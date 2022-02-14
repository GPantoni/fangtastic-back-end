import { Router } from "express";
import { getFormsOfPayment, addFormOfPayment, removeFormOfPayment, sendOrder } from "../controllers/checkoutController.js";
//import { validateformOfPaymentSchema } from "../middleware/validateFormOfPaymentSchema.js";

const checkoutRouter = Router();

checkoutRouter.get("/checkout", getFormsOfPayment);
checkoutRouter.post("/checkout", addFormOfPayment);
checkoutRouter.post("/order", sendOrder);
checkoutRouter.delete('/checkout', removeFormOfPayment)

export default checkoutRouter;

