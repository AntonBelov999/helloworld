
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




function game3() {
    let text = prompt("напиши любой текст");
    let reversedText = text.split('').reverse().join('');
    alert(reversedText);
}

game3();

function game4 () {
     const quiz = [
           {
               question: "Какой цвет небо?",
               options: ["1. Красный", "2. Синий", "3. Зеленый"],
               correctAnswer: 2 // номер правильного ответа
           },
           {
               question: "Сколько дней в неделе?",
               options: ["1. Шесть", "2. Семь", "3. Восемь"],
               correctAnswer: 2
           },
           {
               question: "Сколько у человека пальцев на одной руке?",
               options: ["1. Четыре", "2. Пять", "3. Шесть"],
               correctAnswer: 2
           }
       ];

       let num = 0
       for ( i = 0 ; i < quiz.length; i++) {
        let quizQuest  = Number(prompt(`выбери правельный ответ? \n${quiz[i].question \n${quiz[i].options`));
            if(quizQuest === quiz[i]()correctAnswer) {
                num++
            alert(вы ответили верно)
            }else{
                alert(не верно)
            }

                }
            }
       }
            alert (`вы ответили на ${num} вопросов`)

}