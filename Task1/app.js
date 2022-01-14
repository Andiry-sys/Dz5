let _num = parseInt(prompt(`Enter number `))
let _pow = parseInt(prompt(`Enter pow `))

function Pow(num, pow) {
    if (num == 0) {
        return 0
    }
    if (pow == 0) {
        return 1
    }

    return (pow > 0) ? num * Pow(num, pow - 1) : 1 / Pow(num, -pow)

}

console.log(Pow(_num, _pow));