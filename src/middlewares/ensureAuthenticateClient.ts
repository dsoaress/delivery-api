import { NextFunction, request, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import { env } from '../config/env'

export async function ensureAuthenticateClient(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not provided' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub } = verify(token, env.JWT_SECRET_CLIENT) as { sub: string }
    request.client_id = sub

    return next()
  } catch (err) {
    return res.status(401).json({ message: 'Token invalid' })
  }
}
