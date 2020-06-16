[![npm][npm]][npm-url]
[![node][node]][node-url]
[![downloads][downloads]][downloads-url]

# Mongoose Schema Types plugin

This mongoose types library is a port of the awesome [graphql-scalars](https://github.com/Urigo/graphql-scalars) libraries:

`Currency` `EmailAddress` `GUID` `HSL` `HSLA` `HexColorCode` `Hexadecimal` `IBAN` `Int32` `IPv4` `IPv6` `ISBN` `MAC` `PhoneNumber` `Port` `PostalCode` `RGB` `RGBA` `Url` `UtcOffset`

## Installation

```
npm install --save mongoose-schema-types
```

or

```
yarn add mongoose-schema-types
```

## Usage

```
import mongoose from 'mongoose';
import 'mongoose-schema-types';

const schema = new mongoose.Schema({
    currency: { type: mongoose.Schema.Types.Currency },
    email: { type: mongoose.Schema.Types.EmailAddress },
    guid: { type: mongoose.Schema.Types.GUID },
    hsl: { type: mongoose.Schema.Types.HSL },
    hsla: { type: mongoose.Schema.Types.HSLA },
    hexcolorcode: { type: mongoose.Schema.Types.HexColorCode },
    hexadecimal: { type: mongoose.Schema.Types.Hexadecimal },
    iban: { type: mongoose.Schema.Types.IBAN },
    int32: { type: mongoose.Schema.Types.Int32 },
    ipv4: { type: mongoose.Schema.Types.IPv4 },
    ipv6: { type: mongoose.Schema.Types.IPv6 },
    isbn: { type: mongoose.Schema.Types.ISBN },
    mac: { type: mongoose.Schema.Types.MAC },
    phonenumber: { type: mongoose.Schema.Types.PhoneNumber },
    port: { type: mongoose.Schema.Types.Port },
    postalcode: { type: mongoose.Schema.Types.PostalCode },
    rgb: { type: mongoose.Schema.Types.RGB },
    rgba: { type: mongoose.Schema.Types.RGBA },
    url: { type: mongoose.Schema.Types.Url },
    utcoffset: { type: mongoose.Schema.Types.UtcOffset }
  });
```

## Why?

Many mongoose type plugins exist on npm, but most of them only handle one type. And some of them are not linked to any git repo.

## The Types

### Currency

A field whose value is a [ISO-4217 currency](https://en.wikipedia.org/wiki/ISO_4217) (case insensitive).

### UtcOffset

String that will have a value of format ±hh:mm. [`List of tz database time zones`](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

### EmailAddress

A field whose value conforms to the standard internet email address format as specified in
[RFC822](https://www.w3.org/Protocols/rfc822/).

### Url

A field whose value conforms to the standard URL format as specified in
[RFC3986](https://www.ietf.org/rfc/rfc3986.txt), and it uses real JavaScript `URL` objects.

### PhoneNumber

A field whose value conforms to the standard E.164 format as specified in
[E.164 specification](https://en.wikipedia.org/wiki/E.164). Basically this is `+17895551234`.
The very powerful
[`libphonenumber` library](https://github.com/googlei18n/libphonenumber) is available to take
_that_ format, parse and display it in whatever display format you want. It can also be used to
parse user input and _get_ the E.164 format to pass _into_ a schema.

### PostalCode

We're going to start with a limited set as suggested [here](http://www.pixelenvision.com/1708/zip-postal-code-validation-regex-php-code-for-12-countries/)
and [here](https://stackoverflow.com/questions/578406/what-is-the-ultimate-postal-code-and-zip-regex).

Which gives us the following countries:

- US - United States
- UK - United Kingdom
- DE - Germany
- CA - Canada
- FR - France
- IT - Italy
- AU - Australia
- NL - Netherlands
- ES - Spain
- DK - Denmark
- SE - Sweden
- BE - Belgium
- IN - India

This is really a practical decision of weight (of the package) vs. completeness.

In the future we might expand this list and use the more comprehensive list found [here](http://unicode.org/cldr/trac/browser/tags/release-26-0-1/common/supplemental/postalCodeData.xml).

### GUID

A field whose value is a generic [Globally Unique Identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier).

### Hexadecimal

A field whose value is a [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal).

### Int32

A field whose value is a [int32](http://bsonspec.org/spec.html). See also [wikipedia](https://en.wikipedia.org/wiki/32-bit_computing).

### HexColorCode

A field whose value is a [hex color code](https://en.wikipedia.org/wiki/Web_colors).

### HSL

A field whose value is a [CSS HSL color](<https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla()>).

### IPv4

A field whose value is a [IPv4 address](https://en.wikipedia.org/wiki/IPv4).

### IPv6

A field whose value is a [IPv6 address](https://en.wikipedia.org/wiki/IPv6).

### ISBN

A field whose value is a [ISBN-10 or ISBN-13 number](https://en.wikipedia.org/wiki/International_Standard_Book_Number).

### MAC

A field whose value is a IEEE 802 48-bit [MAC address](https://en.wikipedia.org/wiki/MAC_address).

### Port

A field whose value is a valid [TCP port](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_ports) within the range of 0 to 65535.

### RGB

A field whose value is a [CSS RGB color](<https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba()>).

### RGBA

A field whose value is a [CSS RGBA color](<https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba()>).

### IBAN

Includes IBAN specifications for the following countries:

- AD - Andorra
- AE - United Arab Emirates
- AL - Albania
- AO - Angola
- AT - Austria
- AZ - Azerbaijan
- BA - Bosnia and Herzegovina
- BE - Belgium
- BF - Burkina Faso
- BG - Bulgaria
- BH - Bahrain
- BI - Burundi
- BJ - Benin
- BR - Brazil
- BY - Belarus
- CH - Switzerland
- CI - Côte d'Ivoire
- CM - Cameroon
- CR - Costa Rica
- CV - Cabo Verde
- CY - Cyprus
- DE - Germany
- DK - Denmark
- DO - Dominican Republic
- DZ - Algeria
- EE - Estonia
- ES - Spain
- FI - Finland
- FO - Faroe Islands
- FR - France
- GB - United Kingdom of Great Britain and Northern Ireland
- GE - Georgia
- GI - Gibraltar
- GL - Greenland
- GR - Greece
- GT - Guatemala
- HR - Croatia
- HU - Hungary
- IE - Ireland
- IL - Israel
- IQ - Iraq
- IR - Iran (Islamic Republic of)
- IS - Iceland
- IT - Italy
- JO - Jordan
- KW - Kuwait
- KZ - Kazakhstan
- LB - Lebanon
- LC - Saint Lucia
- LI - Liechtenstein
- LT - Lithuania
- LU - Luxembourg
- LV - Latvia
- MC - Monaco
- MD - Moldova, Republic of
- ME - Montenegro
- MG - Madagascar
- MK - North Macedonia
- ML - Mali
- MR - Mauritania
- MT - Malta
- MU - Mauritius
- MZ - Mozambique
- NL - Netherlands
- NO - Norway
- PK - Pakistan
- PL - Poland
- PS - Palestine, State of
- PT - Portugal
- QA - Qatar
- RO - Romania
- RS - Serbia
- SA - Saudi Arabia
- SC - Seychelles
- SE - Sweden
- SI - Slovenia
- SK - Slovakia
- SM - San Marino
- SN - Senegal
- ST - Sao Tome and Principe
- SV - El Salvador
- TL - Timor-Leste
- TN - Tunisia
- TR - Turkey
- UA - Ukraine
- VA - Holy See
- VG - Virgin Islands (British)
- XK - Kosovo

## License

Released under the [MIT license](./LICENSE.md).

## Contributing

Issues and Pull Requests are always welcome.

## Sponsor

- [Fullstack Rocket](http://www.fullstackrocket.com/)

## Thanks

Thanks to the awesome [graphql-scalars](https://github.com/Urigo/graphql-scalars) library for all the hard work done. All validators and associated documentation come from this lib.

[npm]: https://img.shields.io/npm/v/mongoose-schema-types.svg
[npm-url]: https://npmjs.com/package/mongoose-schema-types
[node]: https://img.shields.io/node/v/mongoose-schema-types.svg
[node-url]: https://nodejs.org
[tests]: http://img.shields.io/travis/webpack-contrib/mongoose-schema-types.svg
[tests-url]: https://travis-ci.org/webpack-contrib/mongoose-schema-types
[downloads]: https://img.shields.io/npm/dt/mongoose-schema-types.svg
[downloads-url]: https://npmjs.com/package/mongoose-schema-types
