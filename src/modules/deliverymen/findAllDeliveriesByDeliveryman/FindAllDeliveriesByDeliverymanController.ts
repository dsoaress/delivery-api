import { Request, Response } from 'express'

import { FindAllDeliveriesUseCaseByDeliveryman } from './FindAllDeliveriesByDeliverymanUseCase'

export class FindAllDeliveriesByDeliverymanController {
  async handle(req: Request, res: Response) {
    const { deliveryman_id } = req
    const findAllDeliveriesUseCaseByDeliveryman = new FindAllDeliveriesUseCaseByDeliveryman()
    const result = await findAllDeliveriesUseCaseByDeliveryman.execute({ deliveryman_id })

    return res.json(result)
  }
}
