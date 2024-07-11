import express from "express";
import { ProductController } from "./products.controllers";

const router = express.Router();

router.post("/create-product", ProductController.createAProduct);
router.get("/all-products", ProductController.getAllProduct);
router.get("/all-products/:id", ProductController.getSingleProduct);

export const ProductRoutes = router;
