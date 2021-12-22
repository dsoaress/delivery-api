import { Request, Response } from 'express'

import { FindAllDeliveriesUseCase } from './FindAllDeliveriesUseCase'

export class FindAllDeliveriesController {
  async handle(req: Request, res: Response) {
    const { client_id } = req
    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase()
    const result = await findAllDeliveriesUseCase.execute({ client_id })

    return res.json(result)
  }
}
