
function caesar() {
    var num = parseInt(document.getElementById("num").value)
    var txt = document.getElementById("txt").value;
    txt = txt.trim();
    var x = [];
    num %= 26
    if (num >= -26 && num <= 26) {
        for (i = 0; i < txt.length; i++) {
            x[i] = txt.charCodeAt(i) + num;
            if (txt.charCodeAt(i) >= 65 && txt.charCodeAt(i) <= 90) {
                if (x[i] >= 65 && x[i] <= 90) {
                    x[i] = x[i];
                }
                else if (x[i] > 90) {
                    x[i] = x[i] - 26;
                }
                else if (x[i] < 65) {
                    x[i] = x[i] + 26;
                }
            }
            if (txt.charCodeAt(i) == 32) {
                x[i] = txt.charCodeAt(i);
            }
            if (txt.charCodeAt(i) >= 97 && txt.charCodeAt(i) <= 122) {

                if (x[i] >= 97 && x[i] <= 122) {
                    x[i] = x[i];
                }
                else if (x[i] > 122) {
                    x[i] = x[i] - 26;
                }
                else if (x[i] < 97) {
                    x[i] = x[i] + 26;
                }
            }
        }
    }
    const dict = {
        a: '&#128512;',
        b: '&#128513;',
        c: '&#128514;',
        d: '&#128515;',
        e: '&#128516;',
        f: '&#128517;',
        g: '&#128518;',
        h: '&#128519;',
        i: '&#128520;',
        j: '&#128521;',
        k: '&#128522;',
        l: '&#128523;',
        m: '&#128524;',
        n: '&#128525;',
        o: '&#128526;',
        p: '&#128527;',
        q: '&#128528;',
        r: '&#128529;',
        s: '&#128530;',
        t: '&#128531;',
        u: '&#128532;',
        v: '&#128533;',
        w: '&#128534;',
        x: '&#128535;',
        y: '&#128536;',
        z: '&#128537;',
    }
    ans = String.fromCharCode.apply(null, x)
    ans = ans.toLowerCase()
    out = ''
    for (let i in ans) {
        // console.log(dict[ans[i]])
        out += dict[ans[i]]
    }
    document.getElementById('answer').innerHTML = 'Encoded Crypto ->   ' + out
}

function getSymbols(string) {
    var index = 0;
    var length = string.length;
    var output = [];
    for (; index < length; ++index) {
        var charCode = string.charCodeAt(index);
        if (charCode >= 0xD800 && charCode <= 0xDBFF) {
            charCode = string.charCodeAt(index + 1);
            if (charCode >= 0xDC00 && charCode <= 0xDFFF) {
                output.push(string.slice(index, index + 2));
                ++index;
                continue;
            }
        }
        output.push(string.charAt(index));
    }
    return output;
}

function decaesar() {
    var num = parseInt(document.getElementById("num").value) * -1
    var out = document.getElementById("txt").value;
    out = out.trim();
    var x = [];
    const dict = {
        '😀': 'a',
        '😁': 'b',
        '😂': 'c',
        '😃': 'd',
        '😄': 'e',
        '😅': 'f',
        '😆': 'g',
        '😇': 'h',
        '😈': 'i',
        '😉': 'j',
        '😊': 'k',
        '😋': 'l',
        '😌': 'm',
        '😍': 'n',
        '😎': 'o',
        '😏': 'p',
        '😐': 'q',
        '😑': 'r',
        '😒': 's',
        '😓': 't',
        '😔': 'u',
        '😕': 'v',
        '😖': 'w',
        '😗': 'x',
        '😘': 'y',
        '😙': 'z',
    }
    var symbols = getSymbols(out)
    var txt = ''

    symbols.forEach(function(symbol){
        txt += dict[symbol]
    })
    num %= 26
    if (num >= -26 && num <= 26) {
        for (i = 0; i < txt.length; i++) {
            x[i] = txt.charCodeAt(i) + num;
            if (txt.charCodeAt(i) >= 65 && txt.charCodeAt(i) <= 90) {
                if (x[i] >= 65 && x[i] <= 90) {
                    x[i] = x[i];
                }
                else if (x[i] > 90) {
                    x[i] = x[i] - 26;
                }
                else if (x[i] < 65) {
                    x[i] = x[i] + 26;
                }
            }
            if (txt.charCodeAt(i) == 32) {
                x[i] = txt.charCodeAt(i);
            }
            if (txt.charCodeAt(i) >= 97 && txt.charCodeAt(i) <= 122) {
                if (x[i] >= 97 && x[i] <= 122) {
                    x[i] = x[i];
                }
                else if (x[i] > 122) {
                    x[i] = x[i] - 26;
                }
                else if (x[i] < 97) {
                    x[i] = x[i] + 26;
                }
            }
        }
    }
    ans = String.fromCharCode.apply(null, x)
    document.getElementById('answer').innerHTML = 'Decoded Crypto ->   ' + ans
}