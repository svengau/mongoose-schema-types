/// <reference path="./index.d.ts" />
const mongoose = require("mongoose");

const MAC_REGEX = /^(?:[0-9A-Fa-f]{2}([:-]?)[0-9A-Fa-f]{2})(?:(?:\1|\.)(?:[0-9A-Fa-f]{2}([:-]?)[0-9A-Fa-f]{2})){2}$/;

const validate = (value: any) => {
  if (typeof value !== "string") {
    throw mongoose.SchemaType.CastError("MAC", `Value is not string: ${value}`);
  }

  if (!MAC_REGEX.test(value)) {
    throw mongoose.SchemaType.CastError(
      "MAC",
      `Value is not a valid MAC address: ${value}`
    );
  }

  return value;
};

/**
 * A field whose value is a IEEE 802 48-bit MAC address: https://en.wikipedia.org/wiki/MAC_address.
 */
class MAC extends mongoose.SchemaType {
  public static instance = "MAC";
  constructor(key: string, options: object) {
    super(key, options, "MAC");
  }

  cast(val: any) {
    validate(val);
    return val;
  }
}

mongoose.Schema.Types.MAC = MAC;

export default MAC;
