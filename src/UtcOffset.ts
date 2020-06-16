/// <reference path="./index.d.ts" />
const mongoose = require("mongoose");

const validate = (value: any) => {
  const UTC_OFFSET_REGEX = /^([+-]?)(\d{2}):(\d{2})$/;

  if (typeof value !== "string") {
    throw mongoose.SchemaType.CastError(
      "UtcOffset",
      `Value is not string: ${value}`
    );
  }

  if (!UTC_OFFSET_REGEX.test(value)) {
    throw mongoose.SchemaType.CastError(
      "UtcOffset",
      `Value is not a valid UTC Offset: ${value}`
    );
  }

  return value;
};

/**
 * A field whose value is a UTC Offset: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
class UtcOffset extends mongoose.SchemaType {
  public static instance = "UtcOffset";
  constructor(key: string, options: object) {
    super(key, options, "UtcOffset");
  }

  cast(val: any) {
    validate(val);
    return val;
  }
}

mongoose.Schema.Types.UtcOffset = UtcOffset;

export default UtcOffset;
