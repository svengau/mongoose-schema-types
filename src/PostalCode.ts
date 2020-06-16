/// <reference path="./index.d.ts" />
const mongoose = require("mongoose");

// We're going to start with a limited set as suggested here:
// http://www.pixelenvision.com/1708/zip-postal-code-validation-regex-php-code-for-12-countries/
// and here:
// https://stackoverflow.com/questions/578406/what-is-the-ultimate-postal-code-and-zip-regex
//
// Which gives us the following countries:
//
// US - United States
// UK - United Kingdom
// DE - Germany
// CA - Canada
// FR - France
// IT - Italy
// AU - Australia
// NL - Netherlands
// ES - Spain
// DK - Denmark
// SE - Sweden
// BE - Belgium
// IN - India
// AT - Austria
// PT - Portugal
// CH - Switzerland
// LU - Luxembourg
//
// This is really a practical decision of weight (of the package) vs. completeness.
//
// In the future we might expand this list and use the more comprehensive list found here:
// http://unicode.org/cldr/trac/browser/tags/release-26-0-1/common/supplemental/postalCodeData.xml

// prettier-ignore
const POSTAL_CODE_REGEXES = [
  /* US */ new RegExp(/^\d{5}([-]?\d{4})?$/),
  /* UK */ new RegExp(/^(GIR|[A-Z]\d[A-Z\d]??|[A-Z]{2}\d[A-Z\d]??)[ ]??(\d[A-Z]{2})$/),
  /* DE */ new RegExp(/\b((?:0[1-46-9]\d{3})|(?:[1-357-9]\d{4})|(?:[4][0-24-9]\d{3})|(?:[6][013-9]\d{3}))\b/),
  /* CA */ new RegExp(/^([ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]) {0,1}(\d[ABCEGHJKLMNPRSTVWXYZ]\d)$/),
  /* FR */ new RegExp(/^(F-)?((2[A|B])|[0-9]{2})[0-9]{3}$/),
  /* IT */ new RegExp(/^(V-|I-)?[0-9]{5}$/),
  /* AU */ new RegExp(/^(0[289][0-9]{2})|([1345689][0-9]{3})|(2[0-8][0-9]{2})|(290[0-9])|(291[0-4])|(7[0-4][0-9]{2})|(7[8-9][0-9]{2})$/),
  /* NL */ new RegExp(/^[1-9][0-9]{3}\s?([a-zA-Z]{2})?$/),
  /* ES */ new RegExp(/^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/),
  /* DK */ new RegExp(/^([D|d][K|k]( |-))?[1-9]{1}[0-9]{3}$/),
  /* SE */ new RegExp(/^(s-|S-){0,1}[0-9]{3}\s?[0-9]{2}$/),
  /* BE */ new RegExp(/^[1-9]{1}[0-9]{3}$/),
  /* IN */ new RegExp(/^\d{6}$/),
  /* AT */ new RegExp(/^\d{4}$/),
  /* PT */ new RegExp(/^\d{4}([\-]\d{3})?$/),
  /* CH */ new RegExp(/^\d{4}$/),
  /* LU */ new RegExp(/^\d{4}$/),
];

function _testPostalCode(postalCode: string) {
  let result = false;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < POSTAL_CODE_REGEXES.length; i++) {
    const regex = POSTAL_CODE_REGEXES[i];

    if (regex.test(postalCode)) {
      result = true;
      break;
    }
  }

  return result;
}

const validate = (value: any) => {
  if (typeof value !== "string") {
    throw mongoose.SchemaType.CastError(
      "PostalCode",
      `Value is not string: ${value}`
    );
  }

  if (!_testPostalCode(value)) {
    throw mongoose.SchemaType.CastError(
      "PostalCode",
      `Value is not a valid postal code: ${value}`
    );
  }

  return value;
};

/**
 * A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium, India, Austria, Portugal, Switzerland or Luxembourg.
 */
class PostalCode extends mongoose.SchemaType {
  public static instance = "PostalCode";
  constructor(key: string, options: object) {
    super(key, options, "PostalCode");
  }

  cast(val: any) {
    validate(val);
    return val;
  }
}

mongoose.Schema.Types.PostalCode = PostalCode;

export default PostalCode;
