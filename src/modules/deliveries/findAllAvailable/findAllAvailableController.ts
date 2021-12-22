import { Request, Response } from 'express'

import { FindAllAvailableUseCase } from './findAllAvailableUseCase'

export class FindAllAvailableController {
  async handle(_req: Request, res: Response) {
    const findAllAvailableUseCase = new FindAllAvailableUseCase()
    const result = await findAllAvailableUseCase.execute()

    return res.json(result)
  }
}
