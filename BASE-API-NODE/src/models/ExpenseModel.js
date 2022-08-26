import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class ExpenseModel {
  // eslint-disable-next-line class-methods-use-this
  initSchema() {
    const schema = new Schema(
      {
        expenseName: {
          type: String,
          required: [true, 'Please add a name'],
          default: null,
        },
        amount: {
          type: Number,
          required: [true, 'Please add a Number'],
          default: null,
        },
        expenseDate: {
          type: Date,
          default: Date.now(),
        },
        expenseCatgory: {
          type: String,
          required: [true, 'Please add a expense Catgory'],
          enum: ['Groceries', 'Transportation', 'Entertainment'],
        },
        paymentType: {
          type: String,
          required: [true, 'Please add a Payment Type'],
          enum: ['Credit', 'Debit', 'Cash'],
        },
        uesr: {
          type: Schema.Types.ObjectId,
          ref: 'users',
          required: true,
        },
        Comments: {
          type: String,
          default: null,
        },
      },
      {
        timestamps: true,
      },
    );
    schema.plugin(uniqueValidator);
    mongoose.model('expense', schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('expense');
  }

  // eslint-disable-next-line class-methods-use-this
  getModel() {
    return mongoose.model('expense');
  }
}

export default ExpenseModel;
