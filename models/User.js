import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  username: {
    type: String,
  },
  hash: {
    type: String,
    required: true,
  },
});

const User = models.User || model("User", userSchema);

export default User;
