import { TCategory } from "./category.interface";
import { CategoryModel } from "./category.model";

const createProductCategoryIntoDB = async (categoryData: TCategory) => {
  const result = await CategoryModel.create(categoryData);
  return result;
};

const getAllCategoryFromDB = async () => {
  const result = await CategoryModel.find();
  return result;
};

export const categoryServices = {
  createProductCategoryIntoDB,
  getAllCategoryFromDB,
};
