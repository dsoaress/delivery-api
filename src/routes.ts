import { Router } from 'express'

import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController'
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController'
import { CreateDeliverymanController } from './modules/deliverymen/useCases/createDeliveryman/CreateDeliverymanController'

const routes = Router()
const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()

routes.post('/clients', createClientController.handle)
routes.post('/authenticate', authenticateClientController.handle)
routes.post('/deliverymen', createDeliverymanController.handle)

export { routes }
