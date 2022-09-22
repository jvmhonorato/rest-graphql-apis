const {ApolloServer, gql} = require('apollo-server-express')
const fs = require('fs')
const path = require('path')
const schema = fs.readFileSync(path.join(__dirname,'schema.graphql'))
const resolvers = require('./resolvers')

//GRAPHQL
const typeDefs = gql` ${schema} `



const graphqlServer = new ApolloServer({
typeDefs,
resolvers
})
 module.exports = graphqlServer