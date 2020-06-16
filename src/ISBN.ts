/// <reference path="./index.d.ts" />
const mongoose = require("mongoose");

const ISBN_REGEX_ARR = [
  /^(?:ISBN(?:-10)?:? *)?((?=\d{1,5}([ -]?)\d{1,7}\2?\d{1,6}\2?\d)(?:\d\2*){9}[\dX])$/i,
  /^(?:ISBN(?:-13)?:? *)?(97(?:8|9)([ -]?)(?=\d{1,5}\2?\d{1,7}\2?\d{1,6}\2?\d)(?:\d\2*){9}\d)$/i,
];

const validate = (value: any) => {
  if (typeof value !== "string") {
    throw mongoose.SchemaType.CastError(
      "ISBN",
      `Value is not string: ${value}`
    );
  }

  let valid = false;
  for (const regex of ISBN_REGEX_ARR) {
    if (regex.test(value)) {
      valid = true;
      break;
    }
  }

  if (!valid) {
    throw mongoose.SchemaType.CastError(
      "ISBN",
      `Value is not a valid ISBN number: ${value}`
    );
  }

  return value;
};

/**
 * A field whose value is a ISBN-10 or ISBN-13 number: https://en.wikipedia.org/wiki/International_Standard_Book_Number.
 */
class ISBN extends mongoose.SchemaType {
  public static instance = "ISBN";
  constructor(key: string, options: object) {
    super(key, options, "ISBN");
  }

  cast(val: any) {
    validate(val);
    return val;
  }
}

mongoose.Schema.Types.ISBN = ISBN;

export default ISBN;
