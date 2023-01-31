function timeToUni(steps, footprintInMeters, speedKMPH){

    let distance = steps * footprintInMeters;

    console.log(distance);


}

timeToUni(4000, 0.60, 5)





























// function solve(fruit, weight, pricePerKg){

//     let moneyNeeded = pricePerKg * weight / 1000;
//     let weigthInKg = weight / 1000;


//     console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weigthInKg.toFixed(2)} kilograms ${fruit}.`)

// }

// solve('orange', 2500, 1.80)


// function egcd(a, b) {
//     if (a == 0)
//         return b;

//     while (b != 0) {
//         if (a > b)
//             a = a - b;
//         else
//             b = b - a;
//     }

//     return a;
// }
