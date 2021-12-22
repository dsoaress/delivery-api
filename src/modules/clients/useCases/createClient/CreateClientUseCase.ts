import { hash } from 'bcrypt'

import { prisma } from '../../../../database/prismaClient'

interface CreateClient {
  username: string
  password: string
}

export class CreateClientUseCase {
  async execute({ username, password }: CreateClient) {
    const clientExists = await prisma.client.findUnique({
      where: { username }
    })

    if (clientExists) {
      throw new Error('Client already exists')
    }

    const hashedPassword = await hash(password, 10)

    const client = await prisma.client.create({
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

    return client
  }
}
