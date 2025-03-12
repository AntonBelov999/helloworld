
function game1() {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(number)
    console.log(Number(number))
    while (true) {
        let userAnswer = prompt('Угадай число');
        if (userAnswer === null) {
            alert('игра остановлена');
            break;
        }
        if (isNaN(userAnswer)) {
            alert('только число');
            continue;
        }
        if (userAnswer < Number(number)) {
            alert('заданное число больше');
        } else if (userAnswer > Number(number)) {
            alert('заданное число меньше');
        } else {
            alert('угадал');
            break;
        }
    }
}


function game2() {

    let firstNumb = Math.floor(Math.random() * 100) + 1;
    let secondNumb = Math.floor(Math.random() * 100) + 1;

    const operator = ['+', '-', '*', '/'];
    const operatorRandom = Math.floor(Math.random() * operator.length);

    let result;

    switch (operator[operatorRandom]) {
        case "+":
            result = firstNumb + secondNumb;
            break;

        case "-":
            result = firstNumb - secondNumb;
            break;

        case "*":
            result = firstNumb * secondNumb;
            break;

        case "/":
        case "/":
            if (secondNumb !== 0) {
                result = firstNumb / secondNumb;
            } else {
                alert('Деление на ноль невозможно, попробуй снова.');
                // Возможно, стоит перезапустить генерацию примера
            }
            return;
           
    }

    let userAnswer = +prompt(`Сколько будет  ${firstNumb} ${operator[operatorRandom]} ${secondNumb} ?`);

    if (userAnswer === result) {
        alert("верный ответ");
    }
    else {
        alert("попробуй еще раз")
    }

}

