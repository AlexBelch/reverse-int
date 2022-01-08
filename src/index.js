module.exports = function reverse(n) {
    let arrChars = String(n).split("");

    if (arrChars[0] === "-") {
        arrChars.shift();
    }

    return arrChars.reverse().join("");
};
