import * as mongoose from "mongoose";

declare module "mongoose" {
  namespace Schema {
    namespace Types {
      class Currency extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class EmailAddress extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class GUID extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class HSL extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class HSLA extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class HexColorCode extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class Hexadecimal extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class IBAN extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class Int32 extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class IPv4 extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class IPv6 extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class ISBN extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class MAC extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class PhoneNumber extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class Port extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class PostalCode extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class RGB extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class RGBA extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class Url extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
      class UtcOffset extends mongoose.SchemaType {
        constructor(key: string, options?: any);
      }
    }
  }
}
