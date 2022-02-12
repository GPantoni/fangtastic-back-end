import db from "../database.js";
import { ObjectId } from "mongodb";

export async function searchProducts(req, res) {
  const type = req.headers.type
  try {
    const products = await db.collection("products").find(type !== "" && {type: type}).toArray();
    res.send(products);
  } catch {
    res.sendStatus(500);
  }
}

export async function dataProduct(req, res){
  const id = req.headers.id
  try {
    const product = await db.collection("products").find({_id:new ObjectId(id)}).toArray();
    res.send(product);
  } catch {
    res.sendStatus(500);
  }
}