/// <reference path="./index.d.ts" />
const mongoose = require("mongoose");

const HSLA_REGEX = /^hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)$/;

const validate = (value: any) => {
  if (typeof value !== "string") {
    throw mongoose.SchemaType.CastError(
      "HSLA",
      `Value is not string: ${value}`
    );
  }

  if (!HSLA_REGEX.test(value)) {
    throw mongoose.SchemaType.CastError(
      "HSLA",
      `Value is not a valid HSLA color: ${value}`
    );
  }

  return value;
};

/**
 * A field whose value is a CSS HSLA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla().
 */
class HSLA extends mongoose.SchemaType {
  public static instance = "HSLA";
  constructor(key: string, options: object) {
    super(key, options, "HSLA");
  }

  cast(val: any) {
    validate(val);
    return val;
  }
}

mongoose.Schema.Types.HSLA = HSLA;

export default HSLA;
