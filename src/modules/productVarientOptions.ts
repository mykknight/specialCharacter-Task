import { Schema, model } from "mongoose";

interface VOptions {
  name: string;
  value: string;
}

const varientOptionsSchema = new Schema<VOptions>({
  name: {
    type: String,
    require: true,
  },
  value: {
    type: String,
    require: true,
  },
});

const VarientOption = model<VOptions>("VarientOption", varientOptionsSchema);

export default VarientOption;
