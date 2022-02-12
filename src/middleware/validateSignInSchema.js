import signInSchema from "../schemas/signInSchema.js";

export function validateSignInSchema(req, res, next) {
  const signIn = req.body;

  const validation = signInSchema.validate(signIn);
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}
