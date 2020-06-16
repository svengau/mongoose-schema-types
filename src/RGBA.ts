/// <reference path="./index.d.ts" />
const mongoose = require("mongoose");

const RGBA_REGEX = /^rgba\(\s*(-?\d+|-?\d*\.\d+(?=%))(%?)\s*,\s*(-?\d+|-?\d*\.\d+(?=%))(\2)\s*,\s*(-?\d+|-?\d*\.\d+(?=%))(\2)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)$/;

const validate = (value: any) => {
  if (typeof value !== "string") {
    throw mongoose.SchemaType.CastError(
      "RGBA",
      `Value is not string: ${value}`
    );
  }

  if (!RGBA_REGEX.test(value)) {
    throw mongoose.SchemaType.CastError(
      "RGBA",
      `Value is not a valid RGBA color: ${value}`
    );
  }

  return value;
};

/**
 * A field whose value is a CSS RGBA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba().
 */
class RGBA extends mongoose.SchemaType {
  public static instance = "RGBA";
  constructor(key: string, options: object) {
    super(key, options, "RGBA");
  }

  cast(val: any) {
    validate(val);
    return val;
  }
}

mongoose.Schema.Types.RGBA = RGBA;

export default RGBA;
