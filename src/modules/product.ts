import { Schema, Types, model } from "mongoose";

interface VProduct {
  name: string;
  handle: string;
  categoryId: Types.ObjectId;
  brandId: Types.ObjectId;
  reviewId: Types.ObjectId;
  variants: Types.ObjectId[];
}

const productSchema = new Schema<VProduct>({
  name: {
    type: String,
    require: true,
  },
  handle: {
    type: String,
    require: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  brandId: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
  },
  reviewId: {
    type: Schema.Types.ObjectId,
    ref: "Review",
  },
  variants: [
    {
      type: Schema.Types.ObjectId,
      ref: "Variant",
    },
  ],
});

const Product = model<VProduct>("Product", productSchema);

export default Product;
