import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import productsRouter from "./routes/products.routes";
import categoriesRouter from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

export default app.listen(process.env.PORT || 3333, () => {
  console.log(`Running on port ${process.env.PORT || 3333}`);
  startDatabase();
});
