function objFactory(library, orders){

    const resuly = [];

    for(let order of orders){
        const current = Object.assign({}, order.template);
        for(let part of order.parts){
            current[part] = library[part];
        }

        resuly.push(current);
    }
return resuly

}

