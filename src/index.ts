
/**
 * Get the decimal separator for the current user's locale.
 * @returns A string containing the decimal separator.
 */
export function decimalSep(): string;
/**
 * Get the decimal separator for the given locale.
 * @param locale The locale to get the decimal separator from.
 * @returns A string containing the decimal separator.
 */
export function decimalSep(locale: string): string;
export function decimalSep(locale?: string): string {
    return (1.1).toLocaleString(locale).charAt(1);
}

/**
 * Get the group separator for current user's locale.
 * @returns A string containing the group separator.
 */
export function groupSep(): string;
/**
 * Get the group separator for the given locale.
 * @param locale The locale to get the group separator from.
 * @returns A string containing the group separator.
 */
export function groupSep(locale: string): string;
export function groupSep(locale?: string): string {
    let sep = (1000).toLocaleString(locale).charAt(1);
    if (sep == '0') return '';
    return sep;
}

/**
 * Formats a number using the given decimal separator.
 * @param num The number to format.
 * @param decimal The decimal separator to use.
 * @returns A string containing the number, formatted using the given separator.
 */
export function formatUsing(num: number, decimal: string): string;
/**
 * Formats a number using the given decimal and group separators.
 * @param num The number to format.
 * @param decimal The decimal separator to use.
 * @param group The group separator to use.
 * @returns A string containing the number, formatted using the given separator.
 */
export function formatUsing(num: number, decimal: string, group: string): string;
export function formatUsing(num: number, decimal: string, group?: string): string {
    if (typeof num != 'number') throw new TypeError(`Expected argument 1 of formatUsing to be number, got ${typeof num}`);
    //split by the decimal separator
    let split = num
        .toLocaleString('en-US')
        .split('.');
    //format the integer part
    split[0] = split[0].replace(/,/g, group ?? '');
    //join them back and return
    return split.join(decimal ?? '.');
}
/**
 * Formats a number using the current user's locale.
 * @param num The number to format using the given locale.
 * @returns The number formatted using the locale.
 */
export function formatWithLocale(num: number): string;
/**
 * Formats a number using the given locale.
 * @param num The number to format using the given locale.
 * @param locale The locale to use to format the number.
 * @returns The number formatted using the locale.
 */
export function formatWithLocale(num: number, locale: string): string;
export function formatWithLocale(num: number, locale?: string): string {
    if (typeof num != 'number') throw new TypeError(`Expected argument 1 of formatWithLocale to be number, got ${typeof num}`);
    return num.toLocaleString(locale);
}