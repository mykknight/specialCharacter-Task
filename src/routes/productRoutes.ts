import { Router } from "express";
import { getProductByOne } from "../controllers/productController";

const router = Router();

router.post("/searchByHandleCategoryBrand", getProductByOne);

export default router;
