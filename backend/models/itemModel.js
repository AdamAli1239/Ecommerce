const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    clothingType: {
      type: String,
      required: true,
    },
    colour: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", itemSchema);
