import express from 'express'
import "dotenv/config"
import "reflect-metadata"
import { ApolloServer } from '@apollo/server'
import { buildSchema } from 'type-graphql'
import { expressMiddleware } from '@as-integrations/express5'

import { buildContext } from './graphql/context'
import { AuthResolver } from './resolvers/auth.resolver'
import { UserResolver } from './resolvers/user.resolver'
import { ExpenseCategoryResolver } from './resolvers/expenseCategory.resolver'
import { ExpenseResolver } from './resolvers/expense.resolver'

async function main() {
  const app = express()
  const port = process.env["PORT"] || 4000

  const schema = await buildSchema({
    resolvers: [AuthResolver, UserResolver, ExpenseCategoryResolver, ExpenseResolver],
    validate: false,
    emitSchemaFile: './schema.graphql'
  })

  const server = new ApolloServer({
    schema
  })

  await server.start()

  app.use(
    '/graphql',
    express.json(),
    expressMiddleware(server, {
      context: buildContext
    })
  )

  app.listen({ port }, () => {
    console.log(`Server started on port ${port}`)
  })
}

main();
