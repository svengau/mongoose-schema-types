/// <reference path="./index.d.ts" />
const mongoose = require("mongoose");

const validate = (value: any) => {
  const GUID_REGEX = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;

  if (typeof value !== "string") {
    throw mongoose.SchemaType.CastError(
      "GUID",
      `Value is not string: ${value}`
    );
  }

  if (value.startsWith("{")) {
    value = value.substring(1, value.length - 1);
  }

  if (!GUID_REGEX.test(value)) {
    throw mongoose.SchemaType.CastError(
      "GUID",
      `Value is not a valid GUID: ${value}`
    );
  }

  return value;
};

/**
 * A field whose value is a generic Globally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier.
 */
class GUID extends mongoose.SchemaType {
  public static instance = "GUID";
  constructor(key: string, options: object) {
    super(key, options, "GUID");
  }

  cast(val: any) {
    validate(val);
    return val;
  }
}

mongoose.Schema.Types.GUID = GUID;

export default GUID;
