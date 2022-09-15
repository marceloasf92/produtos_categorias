import database from "../../database";

const showProductsCategoryService = async (category_id) => {
  try {
    const res = await database.query(
      "SELECT p.name, p.price, c.name AS category FROM categories AS c JOIN products AS p ON c.id = p.category_id WHERE c.id = $1",
      [category_id]
    );
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default showProductsCategoryService;
