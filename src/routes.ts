import { Router } from 'express'

import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController'
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController'
import { CreateClientController } from './modules/clients/createClient/CreateClientController'
import { CreateDeliverymanController } from './modules/deliverymen/createDeliveryman/CreateDeliverymanController'
import { CreateDeliveryController } from './modules/deliveries/createDelivery/CreateDeliveryController'

const routes = Router()
const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const createDeliveryController = new CreateDeliveryController()

routes.post('/clients', createClientController.handle)
routes.post('/clients/authenticate', authenticateClientController.handle)

routes.post('/deliverymen', createDeliverymanController.handle)
routes.post('/deliverymen/authenticate', authenticateDeliverymanController.handle)

routes.post('/deliveries', createDeliveryController.handle)

export { routes }
