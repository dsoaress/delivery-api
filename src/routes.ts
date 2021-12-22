import { Router } from 'express'

import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController'
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController'
import { CreateClientController } from './modules/clients/createClient/CreateClientController'
import { CreateDeliverymanController } from './modules/deliverymen/createDeliveryman/CreateDeliverymanController'
import { CreateDeliveryController } from './modules/deliveries/createDelivery/CreateDeliveryController'
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient'
import { FindAllAvailableController } from './modules/deliveries/findAllAvailable/FindAllAvailableController'
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman'
import { UpdateDeliverymanController } from './modules/deliveries/updateDeliveryman/UpdateDeliverymanController'
import { FindAllDeliveriesController } from './modules/clients/findAllDeliveries/FindAllDeliveriesController'
import { FindAllDeliveriesByDeliverymanController } from './modules/deliverymen/findAllDeliveriesByDeliveryman/FindAllDeliveriesByDeliverymanController'
import { UpdateEndAtController } from './modules/deliveries/updateEndAt/UpdateEndAtController'

const routes = Router()
const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const findAllDeliveriesController = new FindAllDeliveriesController()

const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()

const findAllAvailableController = new FindAllAvailableController()
const findAllDeliveriesByDeliverymanController = new FindAllDeliveriesByDeliverymanController()
const createDeliveryController = new CreateDeliveryController()
const updateDeliverymanController = new UpdateDeliverymanController()
const updateEndAtController = new UpdateEndAtController()

routes.get('/clients/deliveries', ensureAuthenticateClient, findAllDeliveriesController.handle)
routes.post('/clients', createClientController.handle)
routes.post('/clients/authenticate', authenticateClientController.handle)
routes.post('/clients/deliveries', ensureAuthenticateClient, createDeliveryController.handle)

routes.get(
  '/deliverymen/deliveries/available',
  ensureAuthenticateDeliveryman,
  findAllAvailableController.handle
)
routes.get(
  '/deliverymen/deliveries',
  ensureAuthenticateDeliveryman,
  findAllDeliveriesByDeliverymanController.handle
)
routes.post('/deliverymen', createDeliverymanController.handle)
routes.post('/deliverymen/authenticate', authenticateDeliverymanController.handle)
routes.patch(
  '/deliverymen/deliveries/update-deliveryman/:id',
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle
)
routes.patch(
  '/deliverymen/deliveries/update-end-at/:id',
  ensureAuthenticateDeliveryman,
  updateEndAtController.handle
)

export { routes }
