const distance = require("../../math/distance")
const {argsort, counter} = require("../../selection")

class KNNeigborClassifier{

    constructor(n_neigbors = 1){
        this.x_train = []
        this.y_train = []
        this.n_neigbors = n_neigbors
    }

    fit(x,y){
        /*
        * fit new value and set it into global variable
        */
        this.x_train = x
        this.y_train = y
    }

    predict(x = []){
        /*
        * predict new value
        */

       let predicted = []
       for(let i = 0; i < x.length; i++){
           predicted.push(this._calculate(x[i]))
       }

        return predicted

    }

    _calculate(x){

        // get the distance

        let distances = []
        this.x_train.forEach(train => {
            distances.push(distance.euclidean([x], [train]))
        })
        
        // get the lable

        const predict = []
        argsort(distances).forEach(items => {
            predict.push(this.y_train[items])
        })

        // get most common lable

        const most_common = counter(predict, this.n_neigbors)
        return most_common
    }
}

module.exports = KNNeigborClassifier