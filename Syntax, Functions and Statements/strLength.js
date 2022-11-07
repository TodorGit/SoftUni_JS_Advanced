function lengths(input, second, third){

    let lengthSum = Number(input.length) + Number(second.length) + Number(third.length);
    let avg = Math.floor(lengthSum / 3);

    console.log(lengthSum);
    console.log(avg);
}

lengths('chocolate', 'ice cream', 'cake')