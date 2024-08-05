import { Schema, Types, model } from "mongoose";

interface VP_Variant {
  name: string;
  price: number;
  variant_options: Types.ObjectId[];
}

const VariantSchema = new Schema<VP_Variant>({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    required: true,
  },
  variant_options: [
    {
      type: Schema.Types.ObjectId,
      ref: "VarientOption",
    },
  ],
});

const Variant = model<VP_Variant>("Brand", VariantSchema);

export default Variant;
