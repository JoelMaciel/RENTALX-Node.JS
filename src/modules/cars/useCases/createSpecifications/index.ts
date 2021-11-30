import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { CreateSpecificationsController } from './CreateSpecificationsController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationsRespository = new SpecificationRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRespository,
);

const createSpecificationsController = new CreateSpecificationsController(
  createSpecificationUseCase,
);

export { createSpecificationsController };
