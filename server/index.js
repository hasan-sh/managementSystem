const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')

const models = require('./db/Models')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')(models)

// change the name of the db to whatever you want.
mongoose.connect(
  'mongodb://localhost/ams',
  { useNewUrlParser: true }
)

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()

server.applyMiddleware({ app })
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
app.listen(4000, () =>
  console.log(`Now browse to localhost:4000${server.graphqlPath}`)
)
