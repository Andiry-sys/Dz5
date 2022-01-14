let _num1 = parseInt(prompt(`Enter number `))
let _num2 = parseInt(prompt(`Enter number `))

function NOD(num1, num2) {
    if (num2 == 0) {
        return num1
    }

    if (num1 > num2) {
        return NOD(num2, num1 % num2)
    }
    else {
        return NOD(num1, num2 % num1)
    }
}

console.log(NOD(_num1, _num2))