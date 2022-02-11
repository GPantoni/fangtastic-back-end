import { ObjectId } from 'mongodb';
import db from '../database.js';

export async function getProductsById(req, res) {
  const ids = req.headers.ids;
  const idsArr = ids.split(',')
  const products = [];

  try {
  const promises = idsArr.map(async(id) => {
    const product = await db.collection('products').find().toArray()
    products.push(product)
  })

  await Promise.all(promises)
  console.log(products)
  res.send(products)
  

  } catch(err) {
    res.sendStatus(500)
  }
}

export async function getCart(req, res) {
  try {
    //cart is found either through local storage or by logged in user
    //if cart is in local storage, no requisition is made to the api
    if (req.user) {
      const user = await db
        .collection('user')
        .find({ user: req.user })
        .toArray();
      if (!user) {
        return res.sendStatus(400);
      } else if (user.cart) {
        return res.send(user.cart);
      } else {
        return res.send(null);
      }
    }
  } catch (err) {
    res.sendStatus(500);
  }
}

export async function addToCart(req, res) {
  //checar se ja ha item igual no carrinho, caso sim mudar qtdd
  //else, adicionar novo produto
}

export async function removeFromCart(req, res) {
  //qtdd--
  //se qtdd < 0 deletar da colecao carrinho
}
