/// <reference path="./index.d.ts" />
const mongoose = require("mongoose");

const validate = (value: any) => {
  const PHONE_NUMBER_REGEX = /^\+[1-9]\d{1,14}$/;

  if (typeof value !== "string") {
    throw mongoose.SchemaType.CastError(
      "PhoneNumber",
      `Value is not string: ${value}`
    );
  }

  if (!PHONE_NUMBER_REGEX.test(value)) {
    throw mongoose.SchemaType.CastError(
      "PhoneNumber",
      `Value is not a valid phone number of the form +17895551234 (10-15 digits): ${value}`
    );
  }

  return value;
};

/**
 *  A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234.
 */
class PhoneNumber extends mongoose.SchemaType {
  public static instance = "PhoneNumber";
  constructor(key: string, options: object) {
    super(key, options, "PhoneNumber");
  }

  cast(val: any) {
    validate(val);
    return val;
  }
}

mongoose.Schema.Types.PhoneNumber = PhoneNumber;

export default PhoneNumber;
