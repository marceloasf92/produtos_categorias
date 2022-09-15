import createCategoryService from "../services/categories/createCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";
import listOneCategoryService from "../services/categories/listOneCategory.service";
import updateCategoryService from "../services/categories/updateCategory.service";
import deleteCategoryService from "../services/categories/deleteCategory.service";

export default class CategoriesController {
  async createCategory(request, response) {
    const { name } = request.body;

    try {
      const createCategory = await createCategoryService(name);
      return response
        .status(201)
        .json({ message: "Category created", category: createCategory });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async listCategories(request, response) {
    try {
      const listCategories = await listCategoriesService();
      return response.status(200).json(listCategories);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async listOneCategory(request, response) {
    const { id } = request.params;

    try {
      const listOneCategory = await listOneCategoryService(id);
      return response.status(200).json(listOneCategory);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async updateCategory(request, response) {
    const { id } = request.params;
    const { name } = request.body;
    try {
      const updatedCategory = await updateCategoryService(name, id);

      return response.json({
        message: "Category updated",
        category: updatedCategory,
      });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async deleteCategory(request, response) {
    const { id } = request.params;

    try {
      const deletedCategory = await deleteCategoryService(id);

      return response.json({
        message: "Deleted category",
        category: deletedCategory,
      });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}
