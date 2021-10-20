const { Pool } = require('pg')

const config = {
  user: 'postgres',
  host: '127.0.0.1',
  database: 'zombieland',
  password: "wel46com",
  port: 5432
}


const pool = new Pool(config)

const DB = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}

module.exports = { DB }