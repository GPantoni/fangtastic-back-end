import formOfPaymentSchema from "../schemas/formOfPaymentSchema";
export function validateformOfPaymentSchema(req, res, next) {
  const data = req.body;

  const validation = formOfPaymentSchema.validate(data);
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}
