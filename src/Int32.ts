/// <reference path="./index.d.ts" />
const mongoose = require("mongoose");

const INT32_MAX = 0x7fffffff;
const INT32_MIN = -0x80000000;

// code coming from https://github.com/vkarpov15/mongoose-int32/blob/master/int32.js
const validate = (value: any) => {
  var _val = Number(value);
  if (isNaN(_val)) {
    throw new mongoose.SchemaType.CastError(
      "Int32",
      `${value} is not a number"`
    );
  }
  _val = Math.round(_val);
  if (_val < INT32_MIN || _val > INT32_MAX) {
    throw new mongoose.SchemaType.CastError(
      "Int32",
      `${value} is outside of the range of valid BSON int32s: ${INT32_MAX} - ${INT32_MIN}`
    );
  }
  return _val;
};

/**
 * A field whose value is a Int32: https://en.wikipedia.org/wiki/Int32.
 */
class Int32 extends mongoose.SchemaType {
  public static instance = "Int32";
  public static INT32_BSON_TYPE = 16;
  public static INT32_MAX = INT32_MAX;
  public static INT32_MIN = INT32_MIN;

  constructor(key: string, options: object) {
    super(key, options, "Int32");
  }

  /**
   * Cast the given value to something that MongoDB will store as int32
   *
   * @param {any} val
   * @return {Number}
   */
  cast(val: any) {
    return validate(val);
  }
}

Int32.prototype.$conditionalHandlers =
  mongoose.Schema.Types.Number.prototype.$conditionalHandlers;

mongoose.Schema.Types.Int32 = Int32;

export default Int32;
