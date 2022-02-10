import db from "../database.js";

export async function searchProducts(req, res) {
  const type = req.headers.type
  try {
    const extrato = await db.collection("products").find(type !== "" && {type: type}).toArray();
    res.send(extrato);
  } catch {
    res.sendStatus(500);
  }
}
