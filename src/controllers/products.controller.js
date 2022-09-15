import createProductService from "../services/products/createProduct.service";
import deleteProductService from "../services/products/deleteProduct.service";
import listOneProductService from "../services/products/listOneProduct.service";
import listProductsService from "../services/products/listProducts.service";
import showProductsCategoryService from "../services/products/showProductsCategory.service";
import updateProductService from "../services/products/updateProduct.service";

export default class ProductsController {
  async createProduct(request, response) {
    const { name, price, category_id } = request.body;

    try {
      const createProduct = await createProductService(
        name,
        price,
        category_id
      );
      return response
        .status(201)
        .json({ message: "Product created", product: createProduct });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async listProducts(request, response) {
    try {
      const listProducts = await listProductsService();
      return response.status(200).json(listProducts);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async listOneProduct(request, response) {
    const { id } = request.params;

    try {
      const listOneProduct = await listOneProductService(id);
      return response.json(listOneProduct);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async showProductsByCategory(request, response) {
    const { id } = request.params;

    try {
      const showProductsByCategory = await showProductsCategoryService(id);
      return response.json(showProductsByCategory);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async updateProduct(request, response) {
    const { id } = request.params;
    const { name, price, category_id } = request.body;
    try {
      const updatedProduct = await updateProductService(
        id,
        name,
        price,
        category_id
      );

      return response.json({
        message: "Product updated",
        product: updatedProduct,
      });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async deleteProduct(request, response) {
    const { id } = request.params;

    try {
      const deleteProduct = await deleteProductService(id);

      return response.json({
        message: "Product deleted",
        product: deleteProduct,
      });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}
