import database from "../../database";

const deleteProductService = async (id) => {
  try {
    const res = await database.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );

    if (res.rows.length === 0) {
      throw "ID does not match any category";
    }

    return "Deleted product";
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteProductService;
