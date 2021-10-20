const { DB } = require("../database")

const getAllInfections = () => {
  const QUERY = `
      SELECT I.id, I.nombre, S.nombre as estado
      FROM infecciones I, estados S
      WHERE
      I.id_estado = S.id
    `
  return DB.query(QUERY, [])
}

const postOneInfection = (infection) => {
  const INSERTION = `
    INSERT INTO infecciones (nombre, id_estado)
    VALUES ($1, $2)
  `
  return DB.query(INSERTION, [infection.nombre, infection.id_estado])
}

module.exports = {
  postOneInfection,
  getAllInfections
}