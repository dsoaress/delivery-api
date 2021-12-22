import { Request, Response } from 'express'

import { UpdateEndAtUseCase } from './UpdateEndAtUseCase'

export class UpdateEndAtController {
  async handle(req: Request, res: Response) {
    const { deliveryman_id } = req
    const { id } = req.params
    const updateEndAtUseCase = new UpdateEndAtUseCase()
    const result = await updateEndAtUseCase.execute({ id, deliveryman_id })

    return res.json(result)
  }
}
