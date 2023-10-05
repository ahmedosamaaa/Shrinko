import { Schema, model } from "mongoose";
import shortid from "shortid";

const urlSchema = new Schema(
  {
    full: {
      type: String,
      required: true,
    },
    short: {
      type: String,
      required: true,
      default: shortid.generate
    },
    clicks: {
      type: Number,
      required: true,
      default: 0
    }
  },
  {
    timestamps: true,
  }
);

export const urlModel = model("Url", urlSchema);
