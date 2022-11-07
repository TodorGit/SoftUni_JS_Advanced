function squareOfStars(n) {
    
    if(n !== null){ 
        for(let i = 0; i < n; i++){
            console.log("* ".repeat(n))
        }  
    } else {
        for(let i = 0; i < 5; i++){
            console.log("* ".repeat(5))
        }  
    }

}

squareOfStars(3)