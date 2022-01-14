let n = parseInt(prompt(`Enter number`))

var j = 1;
var i = 2;
var a = new Array();
do {

    if (n % i == 0) {
        a[j] = i;
        j++;
        n = n / i;
    }
    else {
        i++;
    }
}
while (i < n);
a[j] = i;
var res = {};
a.forEach(function (e) {
    res[e] = 1 + ~~res[e];
})

var s = "";
for (k in res) {
    s += k + ':' + res[k] + ',';
}
s = s.substr(0, s.length - 1);
console.log(s);