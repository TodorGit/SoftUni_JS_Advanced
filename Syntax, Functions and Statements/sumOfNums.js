function sum(n, m){

    let num1 = Number(n);
    let num2 = Number(m)
    let res = 0;

    for(let i = num1; i <= num2;i++){
        res += i;
    }

    return res
    
}

sum("1","5" )