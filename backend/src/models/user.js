import pkg from "mongoose";
const { Schema, model } = pkg;

const addressSchema = new Schema({
  street: String,
  houseNo: String,
  pincode: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const UserSchema = new Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: [addressSchema],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  apis: [{ type: Schema.Types.ObjectId, ref: "Api", required: true }],
});

export default model("User", UserSchema);
