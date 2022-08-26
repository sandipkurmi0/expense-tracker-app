import Controller from './Controller';
import Expense from '../models/ExpenseModel';
import ExpenseService from '../services/ExpenseService';

const expenseService = new ExpenseService(new Expense().getInstance());

class ExpenseController extends Controller {
  constructor(service) {
    super(service);
  }
}

export default new ExpenseController(expenseService);
