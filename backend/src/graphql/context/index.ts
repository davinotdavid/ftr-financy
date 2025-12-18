import { ExpressContextFunctionArgument } from "@as-integrations/express5";
import { verifyJwt } from "../../utils/jwt";
import { JwtPayload } from "jsonwebtoken";

export type GraphQLContext = {
  user?: string
  token?: string
  req: ExpressContextFunctionArgument['req']
  res: ExpressContextFunctionArgument['res']
}

export const buildContext = async ({ req, res }: ExpressContextFunctionArgument): Promise<GraphQLContext> => {
  const authHeader = req.headers.authorization

  let user: string | undefined
  let token: string | undefined

  if (authHeader?.startsWith('Bearer ')) {
    token = authHeader.substring('Bearer '.length)

    try {
      const payload = verifyJwt(token)
      user = payload.id
    } catch (error) {
      throw new Error(`Error verifying JWT token: ${error}`)
    }
  }

  return { user, token, req, res }
}