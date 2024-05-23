import express from "express";
import nodeRouter from "./router/nodeRouter.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/note", nodeRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
