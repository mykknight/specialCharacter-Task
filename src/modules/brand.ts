import { Schema, model } from "mongoose";

interface VBrand {
  name: string;
}

const brandSchema = new Schema<VBrand>({
  name: {
    type: String,
    require: true,
  },
});

const Brand = model<VBrand>("Brand", brandSchema);

export default Brand;
