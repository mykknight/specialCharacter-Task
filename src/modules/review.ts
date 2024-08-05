import { Schema, model } from "mongoose";

interface VReview {
  rating: string;
  comment: string;
}

const reviewSchema = new Schema<VReview>({
  rating: {
    type: String,
    require: true,
  },
  comment: {
    type: String,
    require: true,
  },
});

const Review = model<VReview>("Review", reviewSchema);

export default Review;
