/// <reference path="./index.d.ts" />
const mongoose = require("mongoose");

const validate = (value: any) => {
  if (typeof value !== "string") {
    throw mongoose.SchemaType.CastError("Url", `Value is not string: ${value}`);
  }
  // new URL will throw an Error if value is not a valid url
  new URL(value);
  return value;
};

class Url extends mongoose.SchemaType {
  public static instance = "Url";
  constructor(key: string, options: object) {
    super(key, options, "Url");
  }

  cast(val: any) {
    validate(val);
    return val;
  }
}

mongoose.Schema.Types.Url = Url;

export default Url;
