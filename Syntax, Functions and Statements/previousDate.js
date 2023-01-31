function prevDay(year, month, day){

    let today =  new Date(year, month, day - 1) ;
    let yesterday = new Date(today);


    yesterday.setDate(yesterday.getDate() - 1);

    console.log(`${yesterday.getFullYear()}-${yesterday.getMonth()}-${yesterday.getDate()}`);


}

prevDay(2016, 3, 1)