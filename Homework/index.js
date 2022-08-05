//1
let admin;
let name;

name = "John"
admin = name;

alert(admin)

//2
let result = [];

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        result.push(i)
    }
}
alert(result)

//3
let result = [];
let i = 2;

while (i <= 10) {
    if (i % 2 == 0) {
        result.push(i)
    }
    i++
}
alert(result)

//4
let input;

do {
    input = prompt("Введите число больше 100")
} while (input <= 100)

alert(`Вы ввели число ${input}`)

//5
let age = prompt("Введите возраст", "Подходящий возраст от 14 до 90");

if (14 <= age <= 90) {
    alert("Вы ввели корректный возраст")
} else alert("Возраст некорректный")

//6
let age = prompt("Введите возраст", "Неподходящий диапазон возраста от 14 до 90");

if (age < 14 || age > 90) {
    alert("Вы ввели корректный возраст")
} else alert("Возраст некорректный")

//7
let age = prompt("Введите возраст", "Неподходящий диапазон возраста от 14 до 90");

if (!(age >= 14 && age <= 90)) {
    alert("Вы ввели корректный возраст")
} else alert("Возраст некорректный")

//8
function makeNegative(num) {
    if (num > 0) {
        return -num
    } else
        return num
};

//9
function isDivisible(n, x, y) {
    if (n % x == 0 && n % y == 0) {
        return true
    } else {
        return false
    }
};

//10
function sum(numbers) {
    return numbers.reduce((el, curr) => el = el + curr)
};

//Задача про массив уникальных элементов
//решение 1
let a = [8, "2", "b", 7, "2", 5, 3, 8, 6];
let b = []

function getUnique(a) {
    a.forEach(el => {
        if (!b.includes(el)) {
            b.push(el)
        }
    })
    //return b;
    console.log(a, b)
}

getUnique(a)

//Решение 2

let a = [8, "2", "b", 7, "2", 5, 3, 8, 6];
let b = []

function getUnique(a) {

    b = Array.from(new Set(a))
    //return b;
    console.log(a, b)
}

getUnique(a)
