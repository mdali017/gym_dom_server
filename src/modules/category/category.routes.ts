import express from "express";
import { CategoryController } from "./category.controller";

const router = express.Router();

router.post("/create-catrgory", CategoryController.createCategory);
router.get("/categories", CategoryController.getAllCategory);

export const CategoryRoute = router;
