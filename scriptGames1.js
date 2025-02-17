
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