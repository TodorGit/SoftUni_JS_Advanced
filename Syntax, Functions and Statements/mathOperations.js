function operations(num1, num2, operator){

    let res;
    switch (operator) {
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1- num2;
            break;
        case '*':
        res = num1 * num2;
        break;
        case '/':
            res = num1 / num2;
            break;
        case '%':
            res = num1 % num2;
            break;
        case '**':
            res = num1 ** num2;
            break;
    
        default:
            break;
    }

    console.log(res);

}

operations(5,6,'+')