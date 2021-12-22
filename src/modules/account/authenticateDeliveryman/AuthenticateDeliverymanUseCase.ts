import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import { env } from '../../../config/env'
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

    const token = sign({ sub: deliveryman.id }, env.JWT_SECRET_DELIVERYMAN, {
      expiresIn: '1d'
    })

    return { token }
  }
}
