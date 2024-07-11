import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./products.service";
import { RequestHandler } from "express";

const createAProduct: RequestHandler = async (req, res) => {
  const productData = req.body;
  const result = await ProductServices.createProductIntoDB(productData);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Create Product create successfully !!!",
    data: result,
  });
};

const getAllProduct: RequestHandler = async (req, res) => {
  const result = await ProductServices.getAllProductFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "All Product Retrived Successfully !!!",
    data: result,
  });
};

const getSingleProduct: RequestHandler = async (req, res) => {
  const id: any = req.params.id;
  const result = await ProductServices.getSingleProductFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Single Product Retrived Successfully !!!",
    data: result,
  });
};

export const ProductController = {
  createAProduct,
  getAllProduct,
  getSingleProduct,
};
