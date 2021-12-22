import { Request, Response } from 'express'

import { UpdateDeliverymanUseCase } from './UpdateDeliverymanUseCase'

export class UpdateDeliverymanController {
  async handle(req: Request, res: Response) {
    const { deliveryman_id } = req
    const { id } = req.params
    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase()
    const result = await updateDeliverymanUseCase.execute({ id, deliveryman_id })

    return res.json(result)
  }
}
