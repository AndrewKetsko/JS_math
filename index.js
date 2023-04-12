// ??????????????? fibonacci millionth element ??????????????????
//www.codewars.com/kata/53d40c1e2f13e331fc000c26/train/javascript
// https: function fibonacci(n) {
//   const arr = [0, 1];
//   do {
//     arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//     arr.shift(arr[0]);
//     n--;
//   } while (n - 2);
//   return arr;
// };
// console.log(fibonacci(1000));



// function perimeter(n) {
//   const arr = [1, 1];
//       do {
//           arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//   } while (arr.length <= n);
//   return arr.reduce((acc, el, ind) => ind <= n ? acc += el: acc, 0)*4;
// };

// console.log(perimeter(5));

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

// function sumStrings(a, b) {
//     if (a.length > b.length) {
//         b = b.padStart(a.length + 1, '0').split('').reverse();
//         a = a.padStart(a.length + 1, '0').split('').reverse();
//     } else {
//         a = a.padStart(b.length + 1, '0').split('').reverse();
//         b = b.padStart(b.length + 1, '0').split('').reverse();
//             }
//     console.log(a);
//     console.log(b);

//    res = a.map((el, i) => {
//        newEl = +el + +b[i];
//        if (newEl - 10 >= 0) {
//            newEl = newEl - 10;
//            b[i + 1] = +b[i + 1] + 1;
//        }
//         return newEl
//     });
//     console.log(res);

//     res[res.length-1] === 0 ? res.pop() : res;
//     return res.reverse().join('')
// }

// console.log(sumStrings('712569312664357328695151392',
//     '8100824045303269669937')); //712577413488402631964821329

// function multiplied(arr) {
//   const n = arr.length;
//   // если n меньше или равно 0, то возвращаем 1 (базовый случай)
//   if (n <= 0) {
//     console.log(`multiplied([], n =  ${n}) = 1`);
//     return 1;
//   } else {
//     // получаем произведение элементов массива arr до n-1-го элемента
//     // (это делается рекурсивным вызовом функции multiplied)
//       const product = multiplied(arr.slice(0, n - 1));
//       console.log(product);
//       console.log(arr[n - 1]);
//     // умножаем произведение на n-й элемент массива arr
//     const result = product * arr[n - 1];
//     console.log(`multiplied(${arr.slice(0, n)}, n = ${n}) = ${result}`);
//     return result;
//   }
// }
// const arr2 = [1, 2, 3, 4, 5];
// console.log(multiplied(arr2)); // выведет результат и все шаги рекурсии

// function dec2bin(dec) {
//   return (dec >>> 0).toString(2).split('0').join('').length;
// };

// console.log(dec2bin(124458));

// рекурсія: функція повертає n-ний елемент масиву чисел фібоначчі
// function nthFibo(n) {
//   return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n - 1) + nthFibo(n - 2);
// };

// const nthFibo = (n) => Math.round(((1 + 5 ** 0.5) / 2) ** --n / 5 ** 0.5);



// function topThreeWords(text) {
//     const top3words = [];
//     const regexp = /\W?\s\.?/;
//     const res = text.split(regexp);
//     // console.log(res);
//     const obj = {};
//     for (const word of res) {
//         obj[word] ? obj[word] += 1 : obj[word]=1;
//     };
//     // console.log(obj);
//     const top3 = [...Object.entries(obj)].sort((a, b) => a[1] - b[1]).slice(-3);
//     // console.log(top3);
// for (const i of top3) {
//     top3words.unshift(i[0]);
// }
//     console.log(top3words);
//     return top3words;
// };

// topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.`);
