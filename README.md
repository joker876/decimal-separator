# decimal-separator
[![Version](https://img.shields.io/npm/v/decimal-separator)](https://www.npmjs.com/package/decimal-separator) [![Size](https://img.shields.io/bundlephobia/min/decimal-separator)](https://www.npmjs.com/package/decimal-separator) [![Downloads](https://img.shields.io/npm/l/decimal-separator)](https://opensource.org/licenses/MIT)

Find the decimal and group separators used in any given locale.

## Highlights
* Supports TypeScript!
* Supports Node and browser
* Includes full JSX documentation
* Very lightweight!


## Installation
### NodeJS
```
npm install decimal-separator --save
```

### Browser
Import the script:
```html
<script src="https://joker876.github.io/decimal-separator/decimal-separator.min.js">
```

## Usage
### NodeJS
```typescript
import * from 'decimal-separator';
// or
import { /* function names here */ } from 'decimal-separator';
```

### Browser
```js
DecimalSep.decimalSep();
// or
const { decimalSep, groupSep, ... } = DecimalSep;
```

## Exported functions
### decimalSep
```typescript
function decimalSep(): string;
function decimalSep(locale: string): string;
```
Get the decimal separator for the given locale.

* `locale` - The locale to get the decimal separator from. Optional. If not given, uses the current user's locale.

Returns a string containing the decimal separator.

### groupSep
```typescript
function groupSep(): string;
function groupSep(locale: string): string;
```
Get the group separator for the given locale.

* `locale` - The locale to get the group separator from. Optional. If not given, uses the current user's locale.

Returns a string containing the group separator.

### formatUsing
```typescript
function formatUsing(num: number, decimal: string): string;
function formatUsing(num: number, decimal: string, group: string): string;
```
Formats a number using the given decimal and group separators.

* `num` - The number to format.
* `decimal` - The decimal separator to use.
* `group` - The group separator to use. Optional, defaults to "`.`".

Returns a string containing the number, formatted using the given separators.

### formatWithLocale
```typescript
function formatWithLocale(num: number): string;
function formatWithLocale(num: number, locale: string): string;
```
Formats a number using the given locale.

* `num` - The number to format.
* `locale` - The locale to use to format the number. Optional. If not given, uses the current user's locale.

Returns the number formatted using the given locale.

## Changelog
### 1.1.0
* Added JSX documentation.
* Added this README.

### 1.0.0
Initial release.