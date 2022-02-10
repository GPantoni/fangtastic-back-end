import express from "express";
import cors from "cors";
import router from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

<<<<<<< HEAD
app.listen(process.env.PORT, () =>
  console.log(`Listening on PORT ${process.env.PORT}`)
);
=======
app.listen(5000, ()=> console.log("Listening on PORT 5000"));
>>>>>>> main
