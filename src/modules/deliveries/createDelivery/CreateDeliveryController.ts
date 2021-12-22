import { Request, Response } from 'express'

import { CreateDeliveryUseCase } from './CreateDeliveryUseCase'

export class CreateDeliveryController {
  async handle(req: Request, res: Response) {
    const { item_name, client_id } = req.body
    const createDeliveryUseCase = new CreateDeliveryUseCase()
    const result = await createDeliveryUseCase.execute({ item_name, client_id })

    return res.status(201).json(result)
  }
}
