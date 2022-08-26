import express from 'express';
import userRoutes from './userRoute';
import expenseRoute from './expenseRoute';

const router = express.Router();

userRoutes(router);
expenseRoute(router);

export default router;
