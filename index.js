function fibonacci(n) {
    const arr = [1, 1];
    do {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    } while (arr.length < n);
    return arr;
};

console.log(fibonacci(10));



function romanize(num) {
    const lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let roman = '';
    for (i in lookup) {
        while ( num >= lookup[i] ) {
            roman += i;
            num -= lookup[i];
        }
    };
    return roman;
};

console.log(romanize(1998));


