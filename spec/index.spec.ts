import { decimalSep, formatUsing, groupSep } from '../src/index';

console.log(formatUsing(1.1, ','));

describe('decimalSep', () => {
    it('should be defined', () => {
        expect(decimalSep).toBeDefined();
    });
    it('should be a function', () => {
        expect(typeof decimalSep).toBe('function');
    });
    it('should return the correct separator', () => {
        expect(decimalSep('en-US')).toBe('.');
        expect(decimalSep('fr-FR')).toBe(',');
        expect(decimalSep('pl-PL')).toBe(',');
        expect(decimalSep('zh-CN')).toBe('.');
    });
});
describe('groupSep', () => {
    it('should be defined', () => {
        expect(groupSep).toBeDefined();
    });
    it('should be a function', () => {
        expect(typeof groupSep).toBe('function');
    });
    it('should return the correct separator', () => {
        expect(groupSep('en-US')).toBe(',');
        expect(groupSep('fr-FR')).toBe(' '); //not a space (U+0020), but a narrow non-break space (NNBSP, U+202F)
        expect(groupSep('pl-PL')).toBe('');
        expect(groupSep('pt-BR')).toBe('.');
    });
});
describe('formatUsing', () => {
    let formatUsingAsAny = formatUsing as any;
    it('should be defined', () => {
        expect(formatUsing).toBeDefined();
    });
    it('should be a function', () => {
        expect(typeof formatUsing).toBe('function');
    });
    it('should throw when no arguments passed', () => {
        try {
            expect(formatUsingAsAny()).toThrowError('Expected argument 1 of formatUsing to be number, got undefined');
        } catch (error) {}
    });
    it('should throw when wrong argument passed as number', () => {
        [
            '123',
            true,
            null,
            undefined,
            () => { },
            new Date(),
            /5/g,
            [],
            [1],
            {},
            { foo: 5 },
            Symbol(2),
        ].forEach(v => {
            try {
                expect(formatUsingAsAny(v)).toThrowError(`Expected argument 1 of formatUsing to be number, got ${typeof v}`);
            } catch (error) {}
        });
    });
    it('should format the number correctly (1 arg)', () => {
        [
            [ 5, '5' ],
            [ 500, '500' ],
            [ 5413, '5413' ],
            [ 1.1, '1.1' ],
        ].forEach(v => {
            expect(formatUsingAsAny(v[0])).toBe(v[1]);
        })
    });
    it('should format the number correctly (2 args)', () => {
        [
            [ 5, ',', '5' ],
            [ 500, ',', '500' ],
            [ 5413, ',', '5413' ],
            [ 1.1, ',', '1,1' ],
            [ 1.1, '', '11' ],
            [ 1.1, '.', '1.1' ],
            [ 1.1, 'tuna', '1tuna1' ],
        ].forEach(v => {
            expect(formatUsingAsAny(v[0], v[1])).toBe(v[2]);
        })
    });
    it('should format the number correctly (3 args)', () => {
        [
            [5, ',', ',', '5' ],
            [ 500, ',', ',', '500' ],
            [ 5413, ',', ',', '5,413' ],
            [ 1.1, ',', ',', '1,1' ],
            [ 1.1, '', ',', '11' ],
            [ 1.1, '.', ',', '1.1' ],
            [ 1.1, 'tuna', ',', '1tuna1' ],
            [ 1000, '.', 'f', '1f000' ],
        ].forEach(v => {
            expect(formatUsingAsAny(v[0], v[1], v[2])).toBe(v[3]);
        })
    });
});