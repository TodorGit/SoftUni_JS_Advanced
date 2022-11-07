function calculator() {

    let selector1;
    let selector2;
    let resultSelector;

    let action = {
        init: (selectorA, selectorB, resultSelectorA) => { 
            selector1 = document.querySelector(selectorA);
            selector2 = document.querySelector(selectorB);
            resultSelector = document.querySelector(resultSelectorA);
        },
        add: () => { 
            let firstNum = Number(selector1.value);
            let secNum = Number(selector2.value);
            let sum = firstNum + secNum;
            resultSelector.value = sum;
        },
        substract: () => { 
            let firstNum = Number(selector1.value);
            let secNum = Number(selector2.value);
            let sum  = firstNum - secNum;
            resultSelector.value = sum
        }
    }

    return action;
}




const calculate = calculator();
calculate.init(`#num1`, '#num2', '#result')