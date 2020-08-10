const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

module.exports = app

/***
 * GET: BUSCAR LISTAR
 * POST: CRIAR UMA INFORMAÇÃO
 * PUT: ALTERAR UMA INFORMAÇÃO
 * DELETE: DELETAR UMA INFORMAÇÃO 
 * 
 *  SEMPRE NO BACK-END
 */

/**
 * Tipos de parametros:
 * 
 * Query Params: Parametros nomeados enviados na rota após "?"
 * Route Parms: Paramentros utilizados  para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar 
 */

/**
 * SQL: MySQL, SQLite, Oracle
 * NoSQL: MongoDB, CouchDB, etc.
 */

/**
 * Driver: SELECT + FROM user
 * Query Builder: knex
 */
