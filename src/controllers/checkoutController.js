import db from '../database.js';
import bcrypt from 'bcrypt';

export async function getFormsOfPayment(req, res) {
    const token = req.headers.token;
    const session = await db.collection('sessions').findOne({ token });

    if (!session) {
        return res.sendStatus(401);
      } else {
        const userId = session.userId;
        const user = await db
        .collection('users')
        .findOne({ _id: userId })
        const formsOfPayment = await db.collection(`${user.email}/FoP`).find().toArray()
          res.send(formsOfPayment)
      }
}

export async function addFormOfPayment(req, res) {
  try {
    const data = req.body;

    const token = req.headers.token;

    const session = await db.collection('sessions').findOne({ token });
    if (!session) {
      return res.sendStatus(401);
    } else {
      const userId = session.userId;

      const user = await db
        .collection('users')
        .findOne({ _id: userId })
      await db.collection(`${user.email}/FoP`).insertOne(data);
    }
  } catch (err) {
    console.log(err);
  }
}

export async function removeFormOfPayment(req, res) {}

export async function sendOrder(req, res) {
  const order = req.body;
  const user = req.headers.user;
}