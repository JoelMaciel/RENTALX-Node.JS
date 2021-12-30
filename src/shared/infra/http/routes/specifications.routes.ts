import { Router } from 'express';

import { CreateSpecificationsController } from '@modules/cars/useCases/createSpecifications/CreateSpecificationsController';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';

const specificationRoutes = Router();

const createSpecificationsController = new CreateSpecificationsController();

specificationRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationsController.handle,
);

export { specificationRoutes };
