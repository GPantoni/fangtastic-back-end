import db from "../database.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function signIn(req, res) {
  const { email, password } = req.body;

  const user = await db.collection("users").findOne({ email });
  if (!user) {
    return res.sendStatus(401);
  }

  if (bcrypt.compareSync(password, user.password)) {
    const token = uuid();
    await db.collection("sessions").insertOne({ token, userId: user._id });
    return res.status(200).send(token);
  }

  res.sendStatus(401);
}
