import bcrypt from "bcrypt";
import db from "../database.js";

export async function singUp(req, res) {
  const user = req.body;

  try {
    const passwordHash = bcrypt.hashSync(user.password, 10);

    await db.collection("users").insertOne({ ...user, password: passwordHash });

    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
}
