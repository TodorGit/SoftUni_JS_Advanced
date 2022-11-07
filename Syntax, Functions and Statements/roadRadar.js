function roadRadar(speed, area){

    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;
    let difference = 0;
    let status ;

    switch(area){
        case 'motorway': if(speed <= motorwayLimit){
            console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
        } else { 
            difference = Math.abs(motorwayLimit - speed); 
            if(difference<= 20){
                status = 'speeding'
            } else if ( difference <= 40 && difference > 20){
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);
        } break;

        case 'interstate': if(speed <= interstateLimit){
            console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
        } else { 
            difference = Math.abs(interstateLimit - speed); 
            if(difference<= 20){
                status = 'speeding'
            } else if ( difference <= 40 && difference > 20){
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);
        } break;

        case 'city': if(speed <= cityLimit){
            console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
        } else { 
            difference = Math.abs(cityLimit - speed); 
            if(difference<= 20){
                status = 'speeding'
            } else if ( difference <= 40 && difference > 20){
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${status}`);
        } break;


        case 'residential': if(speed <= residentialLimit){
            console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
        } else { 
            difference = Math.abs(residentialLimit - speed); 
            if(difference<= 20){
                status = 'speeding'
            } else if ( difference <= 40 && difference > 20){
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${status}`);
        } break;

        default: break; 
    }


}

roadRadar(200, 'motorway')