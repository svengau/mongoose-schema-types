/// <reference path="./index.d.ts" />
const mongoose = require("mongoose");

const validate = (value: any) => {
  const CURRENCY_REGEX = /^(AED|AFN|ALL|AMD|ANG|AOA|ARS|AUD|AWG|AZN|BAM|BBD|BDT|BGN|BHD|BIF|BMD|BND|BOB|BOV|BRL|BSD|BTN|BWP|BYN|BZD|CAD|CDF|CHE|CHF|CHW|CLF|CLP|CNY|COP|COU|CRC|CUC|CUP|CVE|CZK|DJF|DKK|DOP|DZD|EGP|ERN|ETB|EUR|FJD|FKP|GBP|GEL|GHS|GIP|GMD|GNF|GTQ|GYD|HKD|HNL|HRK|HTG|HUF|IDR|ILS|INR|IQD|IRR|ISK|JMD|JOD|JPY|KES|KGS|KHR|KMF|KPW|KRW|KWD|KYD|KZT|LAK|LBP|LKR|LRD|LSL|LYD|MAD|MDL|MGA|MKD|MMK|MNT|MOP|MRU|MUR|MVR|MWK|MXN|MXV|MYR|MZN|NAD|NGN|NIO|NOK|NPR|NZD|OMR|PAB|PEN|PGK|PHP|PKR|PLN|PYG|QAR|RON|RSD|RUB|RWF|SAR|SBD|SCR|SDG|SEK|SGD|SHP|SLL|SOS|SRD|SSP|STN|SVC|SYP|SZL|THB|TJS|TMT|TND|TOP|TRY|TTD|TWD|TZS|UAH|UGX|USD|USN|UYI|UYU|UYW|UZS|VES|VND|VUV|WST|XAF|XAG|XAU|XBA|XBB|XBC|XBD|XCD|XDR|XOF|XPD|XPF|XPT|XSU|XTS|XUA|XXX|YER|ZAR|ZMW|ZWL)$/i;

  if (typeof value !== "string") {
    throw mongoose.SchemaType.CastError(
      "Currency",
      `Value is not string: ${value}`
    );
  }

  if (!CURRENCY_REGEX.test(value)) {
    throw mongoose.SchemaType.CastError(
      "Currency",
      `Value is not a valid Currency value: ${value}`
    );
  }

  return value;
};

/**
 * A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217
 */
class Currency extends mongoose.SchemaType {
  public static instance = "Currency";
  constructor(key: string, options: object) {
    super(key, options, "Currency");
  }

  cast(val: any) {
    validate(val);
    return val;
  }
}

mongoose.Schema.Types.Currency = Currency;

export default Currency;
