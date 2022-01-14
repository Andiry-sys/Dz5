let _num = parseInt(prompt(`Enter number `))

function Fi(n) {
    let sum = 0;
    if (n <= 0) {
        return 1
    }
    else {
        return sum = Fi(n - 1) + Fi(n - 2)
    }
}

console.log(Fi(_num));