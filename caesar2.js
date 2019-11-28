// implementation

// < !DOCTYPE html >
//     <html>
//         <head>
//             <title>Caesar Cipher</title>
//         </head>
//         <body>
//             The shift (number from -26 to 26): <Br>
//                 <input type="tel" id="num"><br><br>
//                     Text to encode / decode: <br>
//                         <input type="text" id="txt"><br><br>

//                             <button onclick="caesar()">Encode</button>
//                             <button onclick="decaesar()">Decode</button>
  
  
// 	</body>
// </html>

function caesar() {
    var num = parseInt(document.getElementById("num").value)
    var txt = document.getElementById("txt").value;
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
    // else {
    //     document.write("Number must be from -26 to 26, try again :)")
    // }
    document.write(String.fromCharCode.apply(null, x))
}

function decaesar() {
    var num = parseInt(document.getElementById("num").value) * -1
    var txt = document.getElementById("txt").value;
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
    document.write(String.fromCharCode.apply(null, x))
}