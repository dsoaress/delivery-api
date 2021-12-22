import { hash } from 'bcrypt'

import { prisma } from '../../../../database/prismaClient'

interface CreateDeliveryman {
  username: string
  password: string
}

export class CreateDeliverymanUseCase {
  async execute({ username, password }: CreateDeliveryman) {
    const deliverymanExists = await prisma.deliveryman.findUnique({
      where: { username }
    })

    if (deliverymanExists) {
      throw new Error('Deliveryman already exists')
    }

    const hashedPassword = await hash(password, 10)

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashedPassword
      },
      select: {
        id: true,
        username: true,
        created_at: true,
        updated_at: true
      }
    })

    return deliveryman
  }
}
