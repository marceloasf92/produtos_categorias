import { Router } from "express";
import ProductsController from "../controllers/products.controller";

const router = Router();

const productsController = new ProductsController();

router.post("", productsController.createProduct);
router.get("", productsController.listProducts);
router.get("/:id", productsController.listOneProduct);
router.patch("/:id", productsController.updateProduct);
router.delete("/:id", productsController.deleteProduct);
router.get("/category/:id", productsController.showProductsByCategory);

export default router;
