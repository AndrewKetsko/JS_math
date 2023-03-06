// function fibonacci(n) {
//     const arr = [1, 1];
//     do {
//         arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//     } while (arr.length < n);
//     return arr;
// };

// console.log(fibonacci(10));



// function romanize(num) {
//     const lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
//     let roman = '';
//     for (i in lookup) {
//         while ( num >= lookup[i] ) {
//             roman += i;
//             num -= lookup[i];
//         }
//     };
//     return roman;
// };

// console.log(romanize(1998));


function sumStrings(a, b) { 
    if (a.length > b.length) {
        b = b.padStart(a.length + 1, '0').split('').reverse();
        a = a.padStart(a.length + 1, '0').split('').reverse();
    } else {
        a = a.padStart(b.length + 1, '0').split('').reverse();
        b = b.padStart(b.length + 1, '0').split('').reverse();
            }
    console.log(a);
    console.log(b);

   res = a.map((el, i) => {
       newEl = +el + +b[i];
       if (newEl - 10 >= 0) {
           newEl = newEl - 10;
           b[i + 1] = +b[i + 1] + 1;
       }
        return newEl
    });
    console.log(res);

    res[res.length-1] === 0 ? res.pop() : res;
    return res.reverse().join('')
}

console.log(sumStrings('712569312664357328695151392',
    '8100824045303269669937')); //712577413488402631964821329