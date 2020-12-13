function accuracy_score(x1 = [], x2 = []){
    let similar = 0
    for(let i = 0; i < x1.length; i++){
        if(x1[i][0] === x2[i][0]){
            similar += 1
        }
    }
    return similar / x1.length
}

module.exports = accuracy_score