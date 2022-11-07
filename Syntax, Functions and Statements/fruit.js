function fruit(fruit, weight, pricePerKg){


let weightInKg = Number((weight/1000))
let res = weightInKg * pricePerKg;

console.log(`I need $${res.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);


}

fruit('orange', 2500, 1.80)