import { Schema, model, connect, Types } from "mongoose";
import { TProduts } from "./produts.interface";

// 2. Create a Schema corresponding to the document interface.
const productSchema = new Schema<TProduts>({
  name: {
    type: String,
    required: true,
  },
  regular_price: {
    type: Number,
    required: true,
  },
  offered_price: {
    type: Number,
    required: true,
  },
  para: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "CategoryModel",
  },
});

// 3. Create a Model.
const Product = model<TProduts>("Product", productSchema);

export const ProductModel = Product;
