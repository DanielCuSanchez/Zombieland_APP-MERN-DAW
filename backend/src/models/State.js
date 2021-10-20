const { DB } = require("../database")
const getAllStates = () => {
  const QUERY = `
  SELECT * from estados;
  `
  return DB.query(QUERY)
}

module.exports = { getAllStates }