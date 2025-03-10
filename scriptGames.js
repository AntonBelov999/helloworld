
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
const operator = [ '+', '-', '*','/'];
let userAnswer = Number();

console.log(firstNumb,secondNumb)

function getExample(firstNumb ,operator,  secondNumb ) {
    return `${firstNumb} ${operator[Math. floor (Math.random() * 4) + 1;]} ${secondNumb}`;
  }
  
  alert(getExample(firstNumb , secondNumb));
  
  const userAnswer = prompt("посчитай и выведи ответ");
  
  if (userAnswer === result) {
      alert("верный ответ");
  }
  else () {
    alet ( "подумай");
  }
}