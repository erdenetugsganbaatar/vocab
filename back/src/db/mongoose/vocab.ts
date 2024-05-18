import { Schema, model } from 'mongoose';

export const vocabSchema = new Schema(
  {
    word: {
      type: String,
      required: true,
    },
    translations: {
      type: [String],
    },
    examples: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
);

export const VocabModel = model('vocabs', vocabSchema);