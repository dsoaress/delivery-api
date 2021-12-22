import { prisma } from '../../../database/prismaClient'

interface FindAllDeliveries {
  client_id: string
}

export class FindAllDeliveriesUseCase {
  async execute({ client_id }: FindAllDeliveries) {
    const deliveries = await prisma.client.findMany({
      where: {
        id: client_id
      },
      select: {
        id: true,
        username: true,
        deliveries: true
      }
    })

    return deliveries
  }
}
