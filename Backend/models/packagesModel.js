const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    packageName: {
      type: String,
      required: true,
    },
    packagePrice: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    advantages: [{
      type: String,
      required: true,
    }],

    addedDate: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },

  }
);

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
