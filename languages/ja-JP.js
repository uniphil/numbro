/*! 
 * numbro.js language configuration
 * language : japanese
 * author : teppeis : https://github.com/teppeis
 */
(function () {
    var language = {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: '千',
            million: '百万',
            billion: '十億',
            trillion: '兆'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: '¥',
            position: 'prefix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: '$ ,0.00',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: '$ ,0'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numbro && this.numbro.language) {
        this.numbro.language('ja-JP', language);
    }
}());
