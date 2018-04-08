const {buildSchema} = require('graphql')
const server = require('express-graphql')
const CORS = require('micro-cors')()

const invoices = [
  { id: 1, status: 'Open'},
  { id: 2, status: 'Paid'},
  { id: 3, status: 'Paid'},
];

const schema = buildSchema(`
  type Invoice {
    id: Int!
    status: String
  }

  type Query {
    hello: String
    invoices: [Invoice]
  }
`)

const rootValue = {
  hello: () => 'Hello world',
  invoices: () => invoices
}

module.exports = CORS(server({ schema, rootValue }))