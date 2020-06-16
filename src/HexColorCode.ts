/// <reference path="./index.d.ts" />
const mongoose = require("mongoose");

const HEX_COLOR_CODE = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8})$/;

const validate = (value: any) => {
  if (typeof value !== "string") {
    throw mongoose.SchemaType.CastError(
      "HexColorCode",
      `Value is not string: ${value}`
    );
  }

  if (!HEX_COLOR_CODE.test(value)) {
    throw mongoose.SchemaType.CastError(
      "HexColorCode",
      `Value is not a valid HexColorCode: ${value}`
    );
  }

  return value;
};

/**
 * A field whose value is a hex color code: https://en.wikipedia.org/wiki/Web_colors.
 */
class HexColorCode extends mongoose.SchemaType {
  public static instance = "HexColorCode";
  constructor(key: string, options: object) {
    super(key, options, "HexColorCode");
  }

  cast(val: any) {
    validate(val);
    return val;
  }
}

mongoose.Schema.Types.HexColorCode = HexColorCode;

export default HexColorCode;
