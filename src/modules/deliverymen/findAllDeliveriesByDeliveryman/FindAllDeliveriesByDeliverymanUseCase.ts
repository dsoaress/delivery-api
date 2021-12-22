import { prisma } from '../../../database/prismaClient'

interface FindAllDeliveries {
  deliveryman_id: string
}

export class FindAllDeliveriesUseCaseByDeliveryman {
  async execute({ deliveryman_id }: FindAllDeliveries) {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: deliveryman_id
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
