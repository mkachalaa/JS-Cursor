const samsungPrice = 15.678;
const applePrice = 123.965;
const xiaomiPrice = 90.2345;

let maxPrice = Math.max(samsungPrice, applePrice, xiaomiPrice);
console.log(`Максимальне число: ` + maxPrice);

let minPrice = Math.min(samsungPrice, applePrice, xiaomiPrice);
console.log(`Мінімальне число: ` + minPrice);

let allPrice = (samsungPrice + applePrice + xiaomiPrice);
console.log(`Вартість всіх товарів: ` + allPrice);

let totalPrice = Math.floor(samsungPrice) + Math.floor(applePrice) + Math.floor(xiaomiPrice);
console.log(`Вартість без копійок: ` + totalPrice);

let approxPrice = Math.round(allPrice / 100) * 100;
console.log(`Cума товарів округленa: ` + approxPrice);

let evenPrice = (approxPrice % 2 == 0);
console.log(`Cума всіх товарів округлена в меншу сторону є парною: ` + evenPrice);

let smallChange = 500;

let сhange = (smallChange - allPrice);
console.log(`Решта: ` + сhange);

let roundPrice = ((allPrice) / 3).toFixed(2);
console.log(`Cереднє значення цін: ` + roundPrice);

let percent = Math.floor(Math.random() * 49) + 1;
console.log(`Знижка: ` + percent);

let priceToPay = (allPrice - (allPrice * percent / 100)).toFixed(2);
console.log(`Ціна зі знижкою: ` + priceToPay);

let profit = (priceToPay / 2 - percent).toFixed(2);
console.log(`Чистий прибуток: ` + profit)

document.write(`<i>Максимальне число: ${maxPrice}</i><br>`,
    `<i>Мінімальне число:  ${minPrice}</i><br>`,
    `<i>Вартість всіх товарів: ${allPrice}</i><br>`,
    `<i>Вартість без копійок: ${totalPrice}</i><br>`,
    `<i>Cума товарів округленa: ${approxPrice}</i><br>`,
    `<i>Cума всіх товарів округлена в меншу сторону є парною:  ${evenPrice}</i><br>`,
    `<i>Решта: ${сhange}</i><br>`,
    `<i>Cереднє значення цін:  ${roundPrice}</i><br>`,
    `<strong>Знижка: ${percent}</strong><br>`,
    `<strong>Ціна зі знижкою: ${priceToPay}</strong><br>`,
    `<strong>Чистий прибуток: ${profit}</strong><br>`,

);



