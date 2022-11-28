
export function decimalSep(): string;
export function decimalSep(locale: string): string;
export function decimalSep(locale?: string): string {
    return (1.1).toLocaleString(locale).charAt(1);
}

export function groupSep(): string;
export function groupSep(locale: string): string;
export function groupSep(locale?: string): string {
    let sep = (1000).toLocaleString(locale).charAt(1);
    if (sep == '0') return '';
    return sep;
}

export function formatUsing(num: number, decimal: string): string;
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

export function formatWithLocale(num: number): string;
export function formatWithLocale(num: number, locale: string): string;
export function formatWithLocale(num: number, locale?: string): string {
    if (typeof num != 'number') throw new TypeError(`Expected argument 1 of formatWithLocale to be number, got ${typeof num}`);
    return num.toLocaleString(locale);
}