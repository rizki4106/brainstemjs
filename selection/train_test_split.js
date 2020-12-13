function train_test_split(x = [], y = [], test_size=0.2){
    let test = parseInt((x.length / 100) * (test_size * 100))
    // fit the value
    let x_train = [], 
        y_train = [];
    let x_test = [], 
        y_test = []
    let stop_sign = 0

    // testing data
    for(let i = 0; i < test; i++){
        x_test.push(x[i])
        y_test.push(y[i])
        stop_sign += 1
    }

    // split the array

    const break_x = x.slice(stop_sign, x.length),
        break_y = y.slice(stop_sign, y.length);

    // training data
    
    for(let i = 0; i < break_x.length; i++){
        x_train.push(break_x[i])
        y_train.push(break_y[i])
    }

    return [x_train, x_test, y_train, y_test]
}

module.exports = train_test_split