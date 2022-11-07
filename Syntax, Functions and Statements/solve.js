function solve(numbers){

    console.log(agregate(numbers, x => x));
    console.log(agregate(numbers,x => 1 / x))
    console.log(agregate(numbers, x => x.toString()))

    function agregate(numbers, func){
        let result = numbers[0];

        for(let i = 1; i< numbers.length; i++){
            result += func(numbers[i])
        }

        return result
    }
}

solve([1,2,4])