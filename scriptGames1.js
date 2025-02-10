
    function game1() {
        let userAnswer;
        userAnswer = Number(prompt('Угадай число'));
        const number = `Math.floor(Math.random() * 100) + 1`;
        if (userAnswer === 56) {
            alert('угадал');
        } else if (userAnswer < 56) {
            alert('заданное число больше');   
        } else if (userAnswer > 56) {
            alert('заданное число меньше');
        } else {
            alert('не понимаю');
        }
    }
   


