const path = require('path');

module.exports = {
    entry: './dist/index.js',
    mode: 'production',
    output: {
        filename: 'decimal-separator.min.js',
        path: path.resolve(__dirname, 'dist/browser'),
        library: 'DecimalSep',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        auxiliaryComment: 'Find the decimal and group separators used in any given locale.',
    },
};