// Использование методов работы с массивами

let Slice = [2, 33, 33, 45, 4, 5, 6, 7, 8, 33];
console.log(Slice.slice(-2));
////

let Splice = [2, 33, 33, 45, 4, 5, 6, 7, 8, 33];
console.log(Splice.splice(-1, 1));
////

let arr = [2, 33, 33, 45, 4, 5, 6, 7, 8, 33];
let Map = arr.map(
    function one(x) {
        return x + x
    })
console.log('Map => ', Map)
///


let forE = ['q', 'w', 'e', 'r', 't'];
forE.forEach(function (u) {
    console.log(u);
});
////

let fo = [111, 222, 333, 4444, 111];
for (let index = 1; index < 3; ++index) {
    console.log(fo[index]);
}
////

let filt = [111, 77, 7, 5, '3'];
let t = filt.filter(function (num) {
    return num >= 77;
})
console.log(t);
/////

let Reduce = [0, 1, 2, 3, 4, 5, 6];
let result = Reduce.reduce(function (t, el, ind, Reduce) {
    return el * ind
})
console.log(result);

let sum = 0
for (let i = 0; i < Reduce.length; i++) {
    sum += Reduce[i]
}


/////

let Sort = [111, 77, 7, 5, '3'];
Sort.sort(function (a, b) {
    return a - b;
})
console.log(Sort);
////

let Some = [111, 77, 7, 5, 209, '3'];
let c = Some.some(function (elem) {
    if (elem > 200) {
        return true;
    }
}
)
console.log(c);
////

let Every = [2, 4];
let p = Every.every(function (number) {

    return number % 2=== 0
})
console.log('every, проверка на четность', p);

///Задачи

// Поиск индекса элементов в массиве

//Способ 1

let ar = ['cat', 'dog', 'parrot', 'horse'];
let a = ar.indexOf('parrot');
console.log(a);

//Удаление элементов из массива

let ar3 = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion']
console.log(ar3.splice(1, 3));

// Фильтрация массива

ar4 = [31, 10, 'chicken', 9, 'fish', 10]
let pp = ar4.filter(function (num1) {
    return num1 == 10
})
console.log('выбрать 10', pp);

///

ar5 = [31, 10, 'chicken', 9, 'fish', 10]
const result1 = ar5.filter(function (item) {
    if (typeof item === 'string') {
        return item
    }
})
console.log(result1)