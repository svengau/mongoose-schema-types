/// <reference path="./index.d.ts" />
const mongoose = require("mongoose");

const RGB_REGEX = /^rgb\(\s*(-?\d+|-?\d*\.\d+(?=%))(%?)\s*,\s*(-?\d+|-?\d*\.\d+(?=%))(\2)\s*,\s*(-?\d+|-?\d*\.\d+(?=%))(\2)\s*\)$/;

const validate = (value: any) => {
  if (typeof value !== "string") {
    throw mongoose.SchemaType.CastError("RGB", `Value is not string: ${value}`);
  }

  if (!RGB_REGEX.test(value)) {
    throw mongoose.SchemaType.CastError(
      "RGB",
      `Value is not a valid RGB color: ${value}`
    );
  }

  return value;
};

/**
 * A field whose value is a CSS RGB color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba().
 */
class RGB extends mongoose.SchemaType {
  public static instance = "RGB";
  constructor(key: string, options: object) {
    super(key, options, "RGB");
  }

  cast(val: any) {
    validate(val);
    return val;
  }
}

mongoose.Schema.Types.RGB = RGB;

export default RGB;
