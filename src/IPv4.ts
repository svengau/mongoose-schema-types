/// <reference path="./index.d.ts" />
const mongoose = require("mongoose");

const IPV4_REGEX = /^(?:(?:(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\/(?:[0-9]|[1-2][0-9]|3[0-2]))?)$/;

const validate = (value: any) => {
  if (typeof value !== "string") {
    throw mongoose.SchemaType.CastError(
      "IPv4",
      `Value is not string: ${value}`
    );
  }

  if (!IPV4_REGEX.test(value)) {
    throw mongoose.SchemaType.CastError(
      "IPv4",
      `Value is not a valid IPv4 address: ${value}`
    );
  }

  return value;
};

/**
 * A field whose value is a IPv4 address: https://en.wikipedia.org/wiki/IPv4.
 */
class IPv4 extends mongoose.SchemaType {
  public static instance = "IPv4";
  constructor(key: string, options: object) {
    super(key, options, "IPv4");
  }

  cast(val: any) {
    validate(val);
    return val;
  }
}

mongoose.Schema.Types.IPv4 = IPv4;

export default IPv4;
