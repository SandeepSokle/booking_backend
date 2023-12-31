const bookingsModel = require("../Models/bookingModel");

const getbookings = async (req, res, next) => {
  // console.log(req.body);
  try {
    const booking = await bookingsModel.find();

    res.status(200).send({
      msg: "send Successfully!",
      count: booking.length,
      booking,
    });
  } catch (err) {
    console.log(err.message);
  }
};

const addbookings = async (req, res, next) => {
  try {
    const booking = await bookingsModel.create({
      ...req.body,
    });

    console.log({ booking });

    res.status(200).send({
      msg: "booking Successfully!",
      booking,
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  getbookings,
  addbookings,
};
