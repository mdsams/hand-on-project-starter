import pkg from "mongoose";
const { Schema, model } = pkg;

const apiSchema = new Schema({
  apiId: {
    type: ObjectI,
  },
  apiName: {
    type: String,
    required: true,
  },
  apiEndpoint: {
    type: String,
    required: true,
  },
  apiImage: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
