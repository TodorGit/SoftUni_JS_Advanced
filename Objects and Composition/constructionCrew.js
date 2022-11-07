function constructionCrew(obj){

    console.log(obj.weight);

    if(obj.dizziness === true){
        obj.levelOfHydrated += (0.1 * Number(obj.weight)) * Number(obj.experience);
        obj.dizziness = false;
        return obj
    } else {
        return obj;
    }



}

constructionCrew({ weight: 80,

    experience: 1,
    
    levelOfHydrated: 0,
    
    dizziness: true })