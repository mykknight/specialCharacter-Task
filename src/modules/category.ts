import { Schema, model } from "mongoose";

interface VCategory {
  name: string;
}

const categorySchema = new Schema<VCategory>({
  name: {
    type: String,
    require: true,
  },
});

const Category = model<VCategory>("Category", categorySchema);

export default Category;
