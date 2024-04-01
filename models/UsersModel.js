const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String },
  nationality: { type: String },
  birthDate: { type: String },
  creationDate: { type: Date, default: Date.now },
  isAdmin: { type: Boolean },
  isSeller: { type: Boolean },
  isCustomer: { type: Boolean },
  isShipper: { type: Boolean },
  isRestricted: { type: Boolean },
  phoneNumber: { type: Number, nullable: true },
  address: { type: String, nullable: true },
  city: { type: String, nullable: true },
  countryCode: { type: String, nullable: true },
  zipCode: { type: Number, nullable: true },
  profilePicture: { type: String, nullable: true },
  phoneNumberIsVerified: { type: Boolean, nullable: true },
  emailIsVerified: { type: Boolean, nullable: true },
});

const Users = mongoose.model("User", UserSchema);
module.exports = Users;
