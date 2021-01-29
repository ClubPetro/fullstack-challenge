import { Router } from 'express';

import { CountryController } from './controllers/CountryController';

const routes = Router();

const countryController = new CountryController();

routes.post('/country', countryController.create);
routes.get('/country', countryController.list);
routes.patch('/country/:id', countryController.update);
routes.delete('/country/:id', countryController.delete);

export { routes };
