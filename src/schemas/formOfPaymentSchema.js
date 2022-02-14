import joi, { number, string } from "joi";

const formOfPaymentSchema = joi.object({
  number: number().optional(),
  expDate: number().optional(),
  securityCode: number().min(3).max(3).optional(),
  name: string.optional(),
    house: string().optional(),
    pledge: string().optional()
});

export default formOfPaymentSchema;
