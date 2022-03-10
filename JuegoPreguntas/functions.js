function createQuestion(){
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const num3 = getRandomNumber();
    const op1 = '+';
    const op2 = '*';
    const expression = `${num1} ${op1} ${num2} ${op2} ${num3}`
    return{
        q:expression,
        a:eval(expression)
    }
}

function getRandomNumber(){
    return Math.floor(Math.random()*10);
}

module.exports ={
    createQuestion,
    getRandomNumber
}