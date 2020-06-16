/// <reference path="./index.d.ts" />
const mongoose = require("mongoose");

const validate = (value: any) => {
  const parsed = typeof value === "string" ? parseInt(value, 10) : value;

  if (typeof parsed !== "number" || Number.isNaN(parsed)) {
    throw mongoose.SchemaType.CastError(
      "Port",
      `Value is not a number: ${value}`
    );
  }

  if (parsed === Infinity || parsed === -Infinity) {
    throw mongoose.SchemaType.CastError(
      "Port",
      `Value is not a finite number: ${value}`
    );
  }

  if (parsed <= 0 || parsed > 65535) {
    throw mongoose.SchemaType.CastError(
      "Port",
      `Value is not a valid TCP port: ${value}`
    );
  }

  return parsed;
};

/**
 * A field whose value is a valid TCP port within the range of 0 to 65535: https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_ports
 */
class Port extends mongoose.SchemaType {
  public static instance = "Port";
  constructor(key: string, options: object) {
    super(key, options, "Port");
  }

  cast(val: any) {
    validate(val);
    return val;
  }
}

mongoose.Schema.Types.Port = Port;

export default Port;
