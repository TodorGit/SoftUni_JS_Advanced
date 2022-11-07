function days(month, year){

    let fun =  new Date(year, month, 0).getDate();
    const days = fun
    console.log(days);
}

days(1, 2012)