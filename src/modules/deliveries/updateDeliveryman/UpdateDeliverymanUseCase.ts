import { prisma } from '../../../database/prismaClient'

interface UpdateDeliveryman {
  id: string
  deliveryman_id: string
}

export class UpdateDeliverymanUseCase {
  async execute({ id, deliveryman_id }: UpdateDeliveryman) {
    const delivery = await prisma.delivery.update({
      where: { id },
      data: { deliveryman_id }
    })

    if (!delivery) {
      throw new Error('Delivery not found')
    }

    return delivery
  }
}
