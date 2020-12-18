const {confusion_matrix} = require("./metrics")
const a = [1,2,1,2,1]
const b = [1,2,1,2,1]

console.log(confusion_matrix(a,b))