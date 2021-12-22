import { prisma } from '../../../database/prismaClient'

interface CreateDelivery {
  item_name: string
  client_id: string
}

export class CreateDeliveryUseCase {
  async execute({ item_name, client_id }: CreateDelivery) {
    const delivery = await prisma.delivery.create({
      data: {
        item_name,
        client_id
      }
    })

    return delivery
  }
}
