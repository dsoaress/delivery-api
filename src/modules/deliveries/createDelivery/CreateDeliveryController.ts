import { Request, Response } from 'express'

import { CreateDeliveryUseCase } from './CreateDeliveryUseCase'

export class CreateDeliveryController {
  async handle(req: Request, res: Response) {
    const { user_id } = req
    const { item_name } = req.body
    const createDeliveryUseCase = new CreateDeliveryUseCase()
    const result = await createDeliveryUseCase.execute({ item_name, client_id: user_id })

    return res.status(201).json(result)
  }
}
