import { Request, Response } from "express";
import Category from "../modules/category";
import Brand from "../modules/brand";
import Product from "../modules/product";
export const getProductByOne = async (req: Request, res: Response) => {
  const { handleName, categoryName, brandName, minRating, maxRating } =
    req.query;

  try {
    const category = await Category.findOne({ name: categoryName });
    const brand = await Brand.findOne({ name: brandName });

    //first questions
    const query = {
      $or: [
        { handle: handleName as string },
        { brandId: brand?._id },
        {
          category: category?._id,
        },
      ],
    };

    //by rating min and max

    //const ratingProducts = ratingProducts(minRating, maxRating)

    const products = await Product.find(query);

    res
      .status(200)
      .send({ message: "Products fetch successfully", data: products });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const ratingProducts = (min, max) => {
  return Product.aggregate([
    {
      $lookup: {
        from: "Review",
        localField: "reviewId",
        foreignField: "_id",
        as: "reviewId",
      },
    },
    {
      $match: {
        "reviewId.rating": {
          $gte: min ? Number(min) : 0,
          $lte: max ? Number(max) : 5,
        },
      },
    },
  ]);
};

const productVariantPrice = (min, max) => {
  return Product.aggregate([
    {
      $lookup: {
        from: "Variant",
        localField: "variants",
        foreignField: "_id",
        as: "variants",
      },
    },
    {
      $unwind: {
        path: "$variants",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $match: {
        "variants.price": {
          $gte: min ? Number(min) : 0,
          $lte: max ? Number(max) : Infinity,
        },
      },
    },
  ]);
};
