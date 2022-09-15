import { Router } from "express";
import CategoriesController from "../controllers/categories.controller";

const router = Router();

const categoriesController = new CategoriesController();

router.post("", categoriesController.createCategory);
router.get("", categoriesController.listCategories);
router.get("/:id", categoriesController.listOneCategory);
router.patch("/:id", categoriesController.updateCategory);
router.delete("/:id", categoriesController.deleteCategory);

export default router;
