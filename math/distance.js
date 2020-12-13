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
}

const distance = new DistanceClassifier()
module.exports = distance