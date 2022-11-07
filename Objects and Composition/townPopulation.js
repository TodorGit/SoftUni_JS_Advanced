function townPopulation(data){

    let obj = {};

    for(el of data){
        
        let [city , population] = el.split(' <-> ');
        population = Number(population);

        if(obj[city] !== undefined){
            population += obj[city]
        }
        
        obj[city] = population;
        
        
    }

    for( let city in obj){
        console.log(`${city} : ${obj[city]}`);
    }

}

townPopulation([
'Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'
])