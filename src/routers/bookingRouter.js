const express = require("express");
const { getbookings, addbookings } = require("../controller/bookingController");
const bookingRouter = express.Router();

bookingRouter.get("/", getbookings);
bookingRouter.post("/add", addbookings);

module.exports = bookingRouter;
