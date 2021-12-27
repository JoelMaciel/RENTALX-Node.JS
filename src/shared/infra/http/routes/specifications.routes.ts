import { Router } from 'express';

import { CreateSpecificationsController } from '@modules/cars/useCases/createSpecifications/CreateSpecificationsController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const specificationRoutes = Router();

const createSpecificationsController = new CreateSpecificationsController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post('/', createSpecificationsController.handle);

export { specificationRoutes };
