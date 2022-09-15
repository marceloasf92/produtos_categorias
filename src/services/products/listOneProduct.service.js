import database from "../../database";

const listOneProductService = async (id) => {
  try {
    const res = await database.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);

    if (res.rows.length === 0) {
      throw "ID does not match any product";
    }

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};
export default listOneProductService;
