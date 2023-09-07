const express = require("express");
const rootRouter = express.Router();
const bookingRouter = require("./bookingRouter");

rootRouter.use("/booking", bookingRouter);

module.exports = rootRouter;
