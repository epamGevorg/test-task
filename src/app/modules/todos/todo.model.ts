import mongoose, { Schema, Document, Types } from "mongoose";
import { Ttodo } from "./todo.entity";

export interface ITodo extends Omit<Ttodo, "ownerId">, Document {
  id: Types.ObjectId;
  ownerId: Types.ObjectId;
}

const Todo = mongoose.model<ITodo>(
  "Todo",
  new Schema(
    {
      userId: {
        type: Number,
        required: true
      },
      completed: {
        type: Boolean,
        required: true
      },
      todo: {
        type: String,
        required: true
      }
    },
    { timestamps: true, collection: "Todo" }
  )
);

export default Todo;
