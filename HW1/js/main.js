const samsungPrice = 15.678;
const applePrice = 123.965;
const xiaomiPrice = 90.2345;

const maxPrice = Math.max(samsungPrice, applePrice, xiaomiPrice);
console.log(`Максимальне число: ` + maxPrice);

const minPrice = Math.min(samsungPrice, applePrice, xiaomiPrice);
console.log(`Мінімальне число: ` + minPrice);

const allPrice = (samsungPrice + applePrice + xiaomiPrice);
console.log(`Вартість всіх товарів: ` + allPrice);

const totalPrice = Math.floor(samsungPrice) + Math.floor(applePrice) + Math.floor(xiaomiPrice);
console.log(`Вартість без копійок: ` + totalPrice);

const approxPrice = Math.round(allPrice / 100) * 100;
console.log(`Cума товарів округленa: ` + approxPrice);

const evenPrice = (approxPrice % 2 == 0);
console.log(`Cума всіх товарів округлена в меншу сторону є парною: ` + evenPrice);

const smallChange = 500;

const сhangePrice = (smallChange - allPrice);
console.log(`Решта: ` + сhangePrice);

const roundPrice = Number((allPrice) / 3).toFixed(2);
console.log(`Cереднє значення цін: ` + roundPrice);

const min = 10;
const max = 49;
const percent = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Знижка (в відсотках) : ` + percent);

const priceToPay = Number(allPrice - (allPrice * percent / 100)).toFixed(2);
console.log(`Ціна зі знижкою: ` + priceToPay);

const profit = Number((allPrice / 2 - percent).toFixed(2));
console.log(`Чистий прибуток: ` + profit)

document.write(`<i>Максимальне число: ${maxPrice}</i><br>`,
    `<i>Мінімальне число:  ${minPrice}</i><br>`,
    `<i>Вартість всіх товарів: ${allPrice}</i><br>`,
    `<i>Вартість без копійок: ${totalPrice}</i><br>`,
    `<i>Cума товарів округленa: ${approxPrice}</i><br>`,
    `<i>Cума всіх товарів округлена в меншу сторону є парною:  ${evenPrice}</i><br>`,
    `<i>Решта: ${сhangePrice}</i><br>`,
    `<i>Cереднє значення цін:  ${roundPrice}</i><br>`,
    `<strong>Знижка (в відсотках): ${percent}</strong><br>`,
    `<strong>Ціна зі знижкою: ${priceToPay}</strong><br>`,
    `<strong>Чистий прибуток: ${profit}</strong><br>`,
);



