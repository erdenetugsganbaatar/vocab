import { Schema, model } from 'mongoose';

export const TestModel = model(
  'Test',
  new Schema({
    testField: String,
  }),
);
