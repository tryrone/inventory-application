const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OtpSchema = new Schema({
  otp_id: { type: Number, required: true },
  type: { type: String, required: true },
  otp: { type: Number },
  phone_number: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
});

const Otp = mongoose.model("Otp", OtpSchema);
module.exports = Otp;
