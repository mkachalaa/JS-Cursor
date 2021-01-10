const optionA = document.querySelector('#function-one').addEventListener('click', optionOne);
const optionB = document.querySelector('#function-two').addEventListener('click', optionTwo);
const optionC = document.querySelector('#function-three').addEventListener('click', optionThree);
const optionD = document.querySelector('#function-four').addEventListener('click', optionFour);
const optionE = document.querySelector('#function-five').addEventListener('click', optionFive);
const optionF = document.querySelector('#function-six').addEventListener('click', optionSix);
const optionG = document.querySelector('#function-seven').addEventListener('click', optionSeven);
const optionH = document.querySelector('#function-eight').addEventListener('click', optionEight);
const optionL = document.querySelector('#function-nine').addEventListener('click', optionNine);
const optionM = document.querySelector('#function-ten').addEventListener('click', optionTen);



function optionOne() {
    const number = prompt("Введіть будь-яке число");

    const getMaxDigit = () =>
        Math.max(...Array.from(String(number)).map((item) => parseInt(item)));

    document.getElementById('result_multi').innerHTML = `Виводить найбільшу цифру в цьому числі ${number}  Результат: ${getMaxDigit(number)} `;
}

function optionTwo() {

    const number = prompt("Введіть число, яке потрібно піднести до степеня");
    const twoNumber = prompt("Введіть степінь, до якого потріббно підняти число");

    const numberToPower = () => {
        let result = number;
        if (twoNumber > 0) {
            for (let i = 1; i < twoNumber; i++) result *= number;
            return result;
        } else if (twoNumber < 0) {
            result = 1;
            for (let i = 0; i < Math.abs(twoNumber); i++) result /= number;
            return result;
        } else if (twoNumber === 0) return 1;
    }

    document.getElementById('result_multi').innerHTML = ` Параметри (число та степінь) ${number} = ${twoNumber}   Результат: ${numberToPower(number, twoNumber)}`;
}

function optionThree() {
    const name = prompt("Введіть своє ім'я з маленької літери");

    const getNameFormatted = () =>
        nameString[0].toUpperCase() + nameString.slice(1).toLowerCase();

    document.getElementById('result_multi').innerHTML = `Результат: ${getNameFormatted(
        name
    )}`;
}

function optionFour() {
    const number = prompt("Введіть суму, що залишилась після оплати податку ");

    const getNetSalary = (salary, tax = 0.195) => +(salary * (1 - tax)).toFixed(2);

    document.getElementById('result_multi').innerHTML = `Результат: ${getNetSalary(
        number
    )}`;

}

function optionFive() {
    const firstNumber = +prompt("Введіть перше число з проміжку");
    const secondNumber = +prompt("Введіть друге число з проміжку");

    const getRandomNumber = () => {
        return +(Math.random() * Math.abs(secondNumber - firstNumber) + (firstNumber > secondNumber ? secondNumber : firstNumber)).toFixed(0);
    }
    document.getElementById('result_multi').innerHTML = `Введені числа ${firstNumber} i ${secondNumber}   Рандомне числo: ${getRandomNumber(
        firstNumber,
        secondNumber
    )}`;
}


function optionSix() {
    const str = prompt("Введіть слово наприклад (Лондон) ");
    const usersLetter = prompt("Введіть букву, яку треба порахувати в цьому слові");

    const charCount = () => {
        let letter_Count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) == usersLetter) {
                letter_Count += 1;
            }
        }
        return letter_Count;
    }
    document.getElementById('result_multi').innerHTML = `Задана буква (${usersLetter}) зустрічалась в заданому слові ${str}  стільки раз  ${charCount(
        str,
        usersLetter
    )} `;
}


function optionSeven() {
    const userAmount = prompt("Для конвертації введіть суму в $ або UAH");

    const convertCurrency = () => {
        const dollarCurrency = 28.5;
        const dollar = userAmount.includes('$');
        const hryvnia = userAmount.includes('UAH');

        if (dollar) {
            const number = parseFloat(userAmount);
            const value = Math.round(number * dollarCurrency) + 'UAH';
            return value;
        }
        if (hryvnia) {
            const number = parseFloat(userAmount);
            const value = Math.round(number / dollarCurrency) + '$';
            return value;
        } else {
            alert('Введіть суму зі знаком $ або UAH');
        }
    }

    document.getElementById('result_multi').innerHTML = `Результат: ${convertCurrency(userAmount)} `;
}


function optionEight() {
    const userAmount = prompt("Генерація випадкового паролю ( тільки числа)");

    const generatePassword = () => {
        const pass = '';
        if (userAmount === 0) userAmount = 8;
        for (let i = 0; i < userAmount; i++) {
            pass += Math.floor(Math.random() * 10);
        }
        return pass;
    }
    document.getElementById('result_multi').innerHTML = `Результат: ${generatePassword(userAmount,)} `;
}


function optionNine() {
    const word = prompt("Введіть будь-яке речення");
    const letter = prompt("Введіть букву, яку бажаєте видалити");
    const deleteLetters = () => {
        let result = '';
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== letter) {
                result += word[i];
            }
        }
        return result;
    }
    document.getElementById('result_multi').innerHTML = `Результат: ${deleteLetters(word)} `;
}


function optionTen() {

    const words = prompt("Перевірка чи є слово паліндромом. Приклад (мадам) ");

    const palindromic = () => {
        let len = words.length;
        let mid = Math.floor(len / 2);

        for (let i = 0; i < mid; i++) {
            if (words[i] !== words[len - 1 - i]) {
                return false;
            }
        }

        return true;
    }

    document.getElementById('result_multi').innerHTML = `Результат: ${palindromic(words)} `;
}