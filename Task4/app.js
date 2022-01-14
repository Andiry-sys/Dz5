let _num = parseInt(prompt(`Enter number `))

function isPrime(num, div = 2) {


    if (num <= div) return false



    if (num % 2 === 0) return false

    return true

    return isPrime(num)



}

console.log(isPrime(_num));