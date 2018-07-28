/**
 * Pex繧ｪ繝励す繝ｧ繝ｳ縺ｮpartialDraw繧堤ｫｯ譛ｫ縺斐→縺ｫ蜿門ｾ励☆繧�
 */
function getPexPartialDraw(ua) {
    if (typeof ua === 'undefined') {
        ua = navigator.userAgent;
    }

    // Chrome57莉･荳翫√∪縺溘�ChromeApp縺ｧ縺ｯPex縺ｮpartialDraw繧貞茜逕ｨ縺励↑縺�
    var chromeMatch = ua.match(/Chrome\/(\d+)\./)
    if (chromeMatch && parseInt(chromeMatch[1]) >= 57) {
        return false;
    }
    if (ua.match(/; ChromeApp/)) {
        return false;
    }

    var targets = [
        'F-04G',
        'HTV31',
        'SO-03G',
    ];

    return !(new RegExp(targets.join('|'), 'i')).test(ua);
}
