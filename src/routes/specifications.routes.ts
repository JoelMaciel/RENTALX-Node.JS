import { Router } from 'express';

import { createSpecificationsController } from '../modules/cars/useCases/createSpecifications';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {
  return createSpecificationsController.handle(request, response);
});

export { specificationRoutes };
