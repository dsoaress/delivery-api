import { prisma } from '../../../database/prismaClient'

interface UpdateEndAt {
  id: string
  deliveryman_id: string
}

export class UpdateEndAtUseCase {
  async execute({ id, deliveryman_id }: UpdateEndAt) {
    const result = await prisma.delivery.updateMany({
      where: {
        id,
        deliveryman_id
      },
      data: {
        end_at: new Date()
      }
    })

    if (result.count === 0) {
      throw new Error('Delivery not found')
    }

    const delivery = await prisma.delivery.findUnique({
      where: {
        id
      }
    })

    return delivery
  }
}
