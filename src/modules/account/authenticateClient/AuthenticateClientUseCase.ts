import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import { env } from '../../../config/env'
import { prisma } from '../../../database/prismaClient'

interface AuthenticateClient {
  username: string
  password: string
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: AuthenticateClient) {
    const client = await prisma.client.findUnique({
      where: { username }
    })

    if (!client) {
      throw new Error('Username or password is incorrect')
    }

    const passwordIsValid = await compare(password, client.password)

    if (!passwordIsValid) {
      throw new Error('Username or password is incorrect')
    }

    const token = sign({ sub: client.id }, env.JWT_SECRET_CLIENT, {
      expiresIn: '1d'
    })

    return { token }
  }
}
