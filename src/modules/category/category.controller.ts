import { RequestHandler } from "express";
import { categoryServices } from "./category.service";
import { CategoryModel } from "./category.model";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createCategory: RequestHandler = async (req, res) => {
  const categoryData = req.body;
  const result = await categoryServices.createProductCategoryIntoDB(
    categoryData
  );
  res.status(201).json({
    success: true,
    message: "Product Category Created Successfully!!!",
    data: result,
  });
};

const getAllCategory: RequestHandler = async (req, res) => {
  const categoryData = await categoryServices.getAllCategoryFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Category retrived successfull !!!",
    data: categoryData,
  });
};

export const CategoryController = {
  createCategory,
  getAllCategory,
};
