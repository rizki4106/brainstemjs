const confusion_matrix = require("./confusion_matrix")

function classification_report(a = Array, b = Array){
    
    const matrix = confusion_matrix(a,b)
    let precision = matrix[0][1] / (matrix[0][1] + [matrix[1][0]]);
    let recal = matrix[0][1] / (matrix[0][1] + matrix[1][1])
    let f1 = 2 * ((recal * precision) / (recal + precision))

    return {
        precision: precision,
        recall : recal,
        f1_score: f1
    }

}

module.exports = classification_report