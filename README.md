
# Каррирование функции N переменных

Прочитал про такую замечательную вещь, как [каррирование функций](https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5), и захотел написать реализацию на `JavaScript`.

Использование:
```javascript
// Допустим, мы построили функцию,
// которая считает логарифм числа a по основанию b
const log = (a, b) => Math.log(b) / Math.log(a)

console.log(log(2,8)) // 3
console.log(log(2,16)) // 4
console.log(log(3,9)) // 2.0000000000000004
console.log(log(3,81)) // 4.000000000000001

// И мы хотим с помощью неё построить функцию, которая считает логарифм по основанию 4
const log4 = curry(log)(4)
console.log(log4(2)) // 0.5
console.log(log4(4)) // 1
console.log(log4(8)) // 1.5
console.log(log4(16)) // 2
console.log(log4(64)) // 3
console.log(log4(1024)) // 5
```

Саму функцию `curry` экспортирует [модуль `curry.js`](curry.js).

Тесты [в файле `test.js`](./test.js), запуск:
```
node test.js
```
