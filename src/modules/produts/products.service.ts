import { ProductModel } from "./products.model";
import { TProduts } from "./produts.interface";

const createProductIntoDB = async (productData: TProduts) => {
  const result = await ProductModel.create(productData);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
};
