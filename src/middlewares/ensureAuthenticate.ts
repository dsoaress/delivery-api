import { NextFunction, request, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export async function ensureAuthenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not provided' })
  }

  const [, token] = authHeader.split(' ')

  const { JWT_SECRET } = process.env

  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined')
  }

  try {
    const { sub } = verify(token, JWT_SECRET) as { sub: string }
    request.user_id = sub

    return next()
  } catch (err) {
    return res.status(401).json({ message: 'Token invalid' })
  }
}
