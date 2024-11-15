// Первая задача

// let name = prompt("Как вас зовут?");
// let age = prompt("Сколько вам лет?");
// alert(`Привет, ${name}! Вам ${age} лет.`); 
// console.log(`Привет, ${name}! Вам ${age} лет.`);

// Вторая задача
let name;
while (true){
    name = prompt ("Как вас зовут? ");
    if (name && /^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(name)){
        break;
    } else{
        alert("Введите ваше имя корректно: ");
    }
}
let age;
while (true){
    age = prompt("Сколько вам лет? ");
    age = Number(age);
    if (!isNaN(age) && age >= 0){
        break;
    } else{
        alert("Введите ваш возраст корректно: ");
    }
}

if (age >= 18){
    alert(`Вы совершеннолетний`);
    console.log(`Вы совершеннолетний`);
} else {
    alert(`Вы несовершеннолетний`);
    console.log(`Вы несовершеннолетний`);
}

// Третья задача 
let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = 0;

while (userGuess !== randomNumber) {
    userGuess = parseInt(prompt("Угадайте число от 1 до 10:"));

    if (userGuess === randomNumber) {
        alert("Поздравляем! Вы угадали число!");
    } else {
        if (userGuess < randomNumber) {
            alert("Ваше число меньше загаданного.");
        } else if (userGuess > randomNumber) {
            alert("Ваше число больше загаданного.");
        }

        alert("Попробуйте еще раз!");
    }
}

// Четвёртая задача
let value = prompt("Введите пароль: ");
value = Number(value);
const password = 12345;
if (value === password  && !isNaN(value)){
    console.log("Доступ разрещён ");
    alert("Доступ разрещён ");
} else{
    console.log("Доступ запрещён ");
    alert("Доступ запрещён ");
}

// Пятая задача
let calc1 = parseFloat(prompt("Введите первое число: "));
let calc2 = parseFloat(prompt("Введите второе число: "));
let oper = prompt("Введите оператор (+, -, *, /): ");
let result;

if (oper === "+"){
    result = calc1 + calc2;
} else if(oper === "-"){
    result = calc1 + calc2;
} else if(oper === "*"){
    result = calc1 + calc2;
} else if (oper === "/"){
    if (calc2 === 0){
        alert("Деление на ноль!");
    } else{
        result = calc1 / calc2;
    }
} else {
    alert("Неверный оператор ");
}

if (result !== undefined){
    alert("Результат " + result);
}
