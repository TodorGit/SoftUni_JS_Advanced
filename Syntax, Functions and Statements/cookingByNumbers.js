function cookingByNumbers(num, com1, com2, com3, com4, com5){

    let startNum = Number(num);
    let arr = [];
    arr.push(com1, com2, com3, com4, com5);
    
    for(el of arr){
       
        switch(el){
            case 'chop': startNum /= 2; console.log(startNum); break; 
            case 'dice': startNum = Math.sqrt(startNum);console.log(startNum); break;
            case 'spice': startNum += 1;console.log(startNum); break;
            case 'bake': startNum *= 3; console.log(startNum) ;break;
            case 'fillet': startNum -= (startNum * 0.20); console.log(startNum); break;
        }
    }

}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')