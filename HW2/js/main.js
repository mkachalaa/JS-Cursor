
// function multi() {
//     let firstNumber, endNumber, result;
//     firstNumber = document.getElementById('first-number').value;
//     firstNumber = parseInt(firstNumber);

//     endNumber = document.getElementById('end-number').value;
//     endNumber = parseInt(endNumber);




//     result = firstNumber * endNumber;


//     document.getElementById('result_multi').innerHTML = result;

// }

const firstNumber = document.querySelector("first-number");
const endNumber = document.querySelector("end-number");
const result = document.querySelector("result_multi");


function multi() {
    let firstNumber, endNumber, result;
    firstNumber = document.getElementById('first-number').value;
    firstNumber = parseInt(firstNumber);


    endNumber = document.getElementById('end-number').value;
    endNumber = parseInt(endNumber);

    let sum = 0;
    if (firstNumber > endNumber) {
        alert(`Початкове число має бути менше від ${endNumber}`);
        return sum;
    }
    for (let i = firstNumber; i <= endNumber; i++)



        result = firstNumber * endNumber;
    document.getElementById('result_multi').innerHTML = result;


}





