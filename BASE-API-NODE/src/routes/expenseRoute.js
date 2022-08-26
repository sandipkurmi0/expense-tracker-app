import ExpenseController from '../controllers/ExpenseController';
import auth from '../middleware/auth.middleware';

export default (router) => {
  router.post(`/api/expense`, auth, ExpenseController.insert);
  router.get(`/api/expense`, auth, ExpenseController.getAll);
  router.get(`/api/expense/:id`, auth, ExpenseController.get);
  router.put(`/api/expense/:id`, auth, ExpenseController.update);
  router.delete(`/api/expense/:id`, auth, ExpenseController.delete);
};
