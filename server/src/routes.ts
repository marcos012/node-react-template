import express from 'express';

import ResourceController from './controllers/ResourceController';

const routes = express.Router();

const resourceController = new ResourceController();

routes.get('/', resourceController.index);

export default routes;