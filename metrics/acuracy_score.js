function accuracy_score(x1 = [], x2 = []){
    let similar = 0
    for(let i = 0; i < x1.length; i++){
        if(x1[i] === x2[i]){
            similar += 1
        }
    }
    return similar / x1.length
}

module.exports = accuracy_score