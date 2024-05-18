import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    email: { type: String, unique: true },
    picture: { type: String },
    name: { type: String },
    googleId: { type: String, unique: true },
  },
  { timestamps: true },
);

export const UserModel = model('users', userSchema);
