import { Router } from 'express';

import { CreateSpecificationsController } from '../modules/cars/useCases/createSpecifications/CreateSpecificationsController';

const specificationRoutes = Router();

const createSpecificationsController = new CreateSpecificationsController();

specificationRoutes.post('/', createSpecificationsController.handle);

export { specificationRoutes };
