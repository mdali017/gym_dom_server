import { model, Schema } from "mongoose";
import { TCategory } from "./category.interface";

const categorySchema = new Schema<TCategory>({
  category_name: { type: String, required: true },
  image: { type: String, required: true },
});

// 3. Create a Model.
export const CategoryModel = model<TCategory>("Category", categorySchema);
