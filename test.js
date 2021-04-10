const chooseBrackets = (expression) => {
    const brackets = ['(', ')', '{', '}', '[', ']',];
    const expressionArr = expression.split('');

    const filteredBrackets = expressionArr.filter(element => brackets.some(bracket => bracket === element));

    return filteredBrackets;
}

const convertBracketToNumber = (bracket) => {
    switch (bracket) {
        case '{':
            return 3

        case '}':
            return -3

        case  '[':
            return 2

        case  ']':
            return -2

        case  '(':
            return 1

        case ')':
            return -1

        default: return 0
    }
}

const validateConvertNumber = (lastNumber, number) => {
    const numberDifference = lastNumber + number;
    return (numberDifference !== 0 || isNaN(numberDifference))
}

const bracketsValidate = (expression) => {
    const brackets = chooseBrackets(expression);

    if (brackets.length % 2 === 0) {
        let numbers = [];

        for (let bracket of brackets) {
            let number = convertBracketToNumber(bracket);

            if (number < 0) {
                let lastNumber = numbers.pop();

                if (validateConvertNumber(lastNumber, number)) {
                    return false;
                }
            } else {
                numbers.push(number);
            }
        }
    } else {
        return false;
    }

    return true;
}

let a = [-1, 2, -3, 4, -5, 6,];
const trueExpression = 'function testValidate(testVal) ({a: [1, 2, 3,], b: 2, c: {a: 1}})';
const falseExpression = 'function testValidate(testVal) ({a: [1, 2, 3,], b: 2, c: {a: 1}}}';
console.log(bracketsValidate(trueExpression));
console.log(bracketsValidate(falseExpression));