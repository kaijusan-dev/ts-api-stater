import express from 'express';
import * as healthController from '../controllers/health.controller.js';

export const healthRouter = express.Router();

healthRouter.get('/', healthController.health);