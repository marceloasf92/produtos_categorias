import database from "../../database";

const updateProductService = async (id, name, price, category_id) => {
  try {
    const select = await database.query(
      "SELECT * FROM products WHERE id = $1",
      [id]
    );

    name ? name : (name = select.rows[0].name);
    price ? price : (price = select.rows[0].price);
    category_id ? category_id : (category_id = select.rows[0].category_id);

    const exists = await database.query(
      "SELECT * FROM categories WHERE id = $1",
      [category_id]
    );

    if (!exists.rows.length) {
      throw new Error("Category not found");
    }

    const res = await database.query(
      "UPDATE products SET name = $1, price = $2, category_id = $3 WHERE id = $4 RETURNING *",
      [name, price, category_id, id]
    );

    if (res.rows.length === 0) {
      throw "ID does not match any product";
    }

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};
export default updateProductService;
