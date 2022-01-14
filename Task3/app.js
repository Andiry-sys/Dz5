let n = +prompt("Enter number:");
alert(maxDigit(n));

function maxDigit(num) {
    let result = -1;
    for (let i = num; i > 0; i = Math.floor(i / 10)) {
        let digit = i % 10;
        if (result < digit)
            result = digit;
    }
    return result;
}