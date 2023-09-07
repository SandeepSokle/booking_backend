const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    bookingType: {
      type: String,
    },
    date: {
      type: Date,
    },
    destinationAirport: {
      type: String,
    },

    email: {
      type: String,
    },
    name: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    pickupLocation: {
      type: String,
    },
    termsAndConditions: {
      type: Boolean,
    },
    time: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const bookingsModel = mongoose.model("bookings", bookingSchema);

module.exports = bookingsModel;
