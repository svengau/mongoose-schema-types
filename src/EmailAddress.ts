/// <reference path="./index.d.ts" />
const mongoose = require("mongoose");

const validate = (value: any) => {
  const EMAIL_ADDRESS_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (typeof value !== "string") {
    throw mongoose.SchemaType.CastError(
      "EmailAddress",
      `Value is not string: ${value}`
    );
  }

  if (!EMAIL_ADDRESS_REGEX.test(value)) {
    throw mongoose.SchemaType.CastError(
      "EmailAddress",
      `Value is not a valid email address: ${value}`
    );
  }

  return value;
};

/**
 * A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/.
 */
class EmailAddress extends mongoose.SchemaType {
  public static instance = "EmailAddress";
  constructor(key: string, options: object) {
    super(key, options, "EmailAddress");
  }

  cast(val: any) {
    validate(val);
    return val;
  }
}

mongoose.Schema.Types.EmailAddress = EmailAddress;

export default EmailAddress;
