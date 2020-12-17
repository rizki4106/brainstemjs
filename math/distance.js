const math = require("mathjs")
class DistanceClassifier{

    euclidean(x = [], y = []){
        /*
        calculating distance with euclidean method
        */
        let sumdistance = 0
        for(let i = 0; i < x.length; i++){
            let min = x[i] - y[i]
            sumdistance = sumdistance + Math.pow(min,2)
        }
        
        // return the distance
        return Math.sqrt(sumdistance)
    }

    manhattan(x = [], y = []){
        /*
        calculating distance using manhattan distance formula
        */
        let min = []
        for(let i = 0; i < x.length; i++){
            min.push(Math.abs(x[i] - y[i]))
        }
        return math.sum(min)
    }

    chebyshev(x = [], y = []){
        /*
        * get the bigger distance
        */
        let arr = []
        for(let i = 0; i < x.length; i++){
            arr.push(Math.abs(x[i] - y[i]))
        }
    
        return math.max(arr)
    
    }
    
}

const distance = new DistanceClassifier()
module.exports = distance