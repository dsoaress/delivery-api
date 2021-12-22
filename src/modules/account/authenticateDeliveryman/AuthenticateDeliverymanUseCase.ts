import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import { prisma } from '../../../database/prismaClient'

interface AuthenticateDeliveryman {
  username: string
  password: string
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: AuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findUnique({
      where: { username }
    })

    if (!deliveryman) {
      throw new Error('Username or password is incorrect')
    }

    const passwordIsValid = await compare(password, deliveryman.password)

    if (!passwordIsValid) {
      throw new Error('Username or password is incorrect')
    }

    const { JWT_SECRET } = process.env

    if (!JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined')
    }

    const token = sign({ sub: deliveryman.id }, JWT_SECRET, {
      expiresIn: '1d'
    })

    return { token }
  }
}
