function prevDay(year, month, day){

    let previous =  new Date(year, month, day - 1).getDate();

    console.log(`${year}-${month}-${previous}`);
}

prevDay(2016, 10, 1)