let a = [50, 10, -1, 0, 16, -45, 70, 40, 80, -9, 4,];
//task1 +
// const task1 = a.filter(el => (el > 0));
// console.log(task1);

//2 Найдите сумму элементов массива которые меньше 100 по значению --
// let c = [25, 105, 8, 15,];
// let i, sum;
// let answer = c.reduce(function (sum, item,) {
// 	if (sum < 100) {
//     return item + sum;
// 	}
// }, 0);
// console.log(answer);

// //хочу посчитать сумму элементов, не могу понять в чем ошибка
// function array(c){
// 	for (i = 0; i < c.length; i++){
// 	if (c[i] < 100) {
// 		c[i]++;
// 	}
// 	}
// }
// console.log(array(c));--

// //3 Уменьшите каждый элемент массива на 3% +
// a.forEach(function (item, index, array) {
// 	array[index] -= 3;
// })
// //стрелочная
// a.forEach((item, index, array) => {
// 	array[index] -= 3;
// })
// console.log(a);

//4 Если все элементы массива меньше 100 увеличьте их на 5% +
// a.every(function(item,index,array){
// 	if (item <= 100) {
// 		array[index] *= 0.5;
// 	}
// });
// console.log(a);

// //5 Проверьте является ли слово палиндромом (например слово abcddcba подходит т.к. оно "зеркальное")
// let p=('racecar');
// function palindrome(p) {
// 	return p === p.split('').reverse().join('');
// }
// console.log(palindrome(p));

//6 Соедините две строки в одну и переверните наоборот+
// const concat = r1.concat(r2);
// console.log(concat);
// const reversed = concat.reverse();
// console.log(reversed);

//7 //Напишите функцию, которая преобразует первую букву каждого слова строки в верхний регистр+
// let name = 'ivan';
// let surname = 'ivanov';
// let cor = name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
// let corS = surname.substr(0, 1).toUpperCase() + surname.substr(1).toLowerCase();
// console.log(cor, corS);


//Вывести индексы минимальных элементов массива
// let result = a.findIndex(item=>(item<1) 
// );
// console.log(result);







