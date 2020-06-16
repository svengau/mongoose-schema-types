/// <reference path="./index.d.ts" />
const mongoose = require("mongoose");

const validate = (value: any) => {
  const HEXADECIMAL_REGEX = /^[a-f0-9]+$/i;

  if (typeof value !== "string") {
    throw mongoose.SchemaType.CastError(
      "Hexadecimal",
      `Value is not string: ${value}`
    );
  }

  if (!HEXADECIMAL_REGEX.test(value)) {
    throw mongoose.SchemaType.CastError(
      "Hexadecimal",
      `Value is not a valid hexadecimal value: ${value}`
    );
  }

  return value;
};

/**
 * A field whose value is a hexadecimal: https://en.wikipedia.org/wiki/Hexadecimal.
 */
class Hexadecimal extends mongoose.SchemaType {
  public static instance = "Hexadecimal";
  constructor(key: string, options: object) {
    super(key, options, "Hexadecimal");
  }

  cast(val: any) {
    validate(val);
    return val;
  }
}

mongoose.Schema.Types.Hexadecimal = Hexadecimal;

export default Hexadecimal;
