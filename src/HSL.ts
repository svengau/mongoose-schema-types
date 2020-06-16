/// <reference path="./index.d.ts" />
const mongoose = require("mongoose");

const validate = (value: any) => {
  const HSL_REGEX = /^hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)$/;

  if (typeof value !== "string") {
    throw mongoose.SchemaType.CastError("HSL", `Value is not string: ${value}`);
  }

  if (!HSL_REGEX.test(value)) {
    throw mongoose.SchemaType.CastError(
      "HSL",
      `Value is not a valid HSL color: ${value}`
    );
  }

  return value;
};

/**
 * A field whose value is a CSS HSL color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla().
 */
class HSL extends mongoose.SchemaType {
  public static instance = "HSL";
  constructor(key: string, options: object) {
    super(key, options, "HSL");
  }

  cast(val: any) {
    validate(val);
    return val;
  }
}

mongoose.Schema.Types.HSL = HSL;

export default HSL;
