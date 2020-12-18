function confusion_matrix(a = Array, b = Array){
    
    // feature extraction
    let feature = []
    for(let i = 0; i < a.length; i++){
        if(!feature.includes(a[i])){
            feature.push(a[i])
        }
    }

    // calculate accuracy

    let true_data = []
    let false_data = []

    feature.forEach((f, index) => {
        true_data[index] = 0
        false_data[index] = 0
        for(let i = 0; i < b.length; i++){
            if(a[i] == b[i]){
                if(b[i] == f){
                    true_data[index] += 1
                }
            }else{
                if(b[i] == f){
                    false_data[index] += 1
                }
            }
        }
    })

    let matrix = [
        true_data,
        false_data
    ]

    return matrix
}


module.exports = confusion_matrix