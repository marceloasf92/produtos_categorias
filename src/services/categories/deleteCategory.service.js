import database from "../../database";

const deleteCategoryService = async (id) => {
  try {
    const res = await database.query(
      "DELETE FROM categories WHERE id = $1 RETURNING *",
      [id]
    );

    if (res.rows.length === 0) {
      throw "ID does not match any category";
    }

    return "Deleted category";
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteCategoryService;
