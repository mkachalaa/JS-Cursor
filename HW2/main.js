


let isEven;
function multi() {

    const firstNumber = parseInt(document.getElementById('first-number').value);
    const endNumber = parseInt(document.getElementById('end-number').value);
    let sum = 0;

    if (firstNumber > endNumber) {
        alert(`Початкове число має бути менше від ${endNumber}`);
    }

    for (let i = firstNumber; i <= endNumber; i++) {
        if (isEven && i % 2 === 0) {
            continue;
        }
        sum = sum + i;
    }

    document.getElementById('result_multi').innerHTML = `${sum}`
}