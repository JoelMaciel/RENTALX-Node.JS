import { Router } from 'express';

import { CreateUserControler } from '../modules/accounts/useCases/createUser/CreateUserController';

const usersRoutes = Router();

const createUserController = new CreateUserControler();

usersRoutes.post('/', createUserController.handle);

export { usersRoutes };
