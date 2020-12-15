const math = require('mathjs')
class PolynomialOrderOne{
    state = {
        value: {
            n: 0,
            x: '',
            sum_x: 0,
            y: '',
            sum_y: 0,
            xy: [],
            sum_xy: 0,
            x_square : [],
            sum_x_square: 0,
            y_square: [],
            sum_y_square: 0,
        },
        mean: {
            x_bar: 0,
            y_bar: 0,
        },
        sumsquare: {
            ssxy: 0,
            ssxx: 0,
            ssyy: 0,
        },
        regression: {
            b: 0,
            a: 0,
            line: 0,
        },
        korelasi: {
            r_square: 0,
            r: 0,
        }
    }

    // sum of n array

    getSum(param){
        return param.reduce((val, items) => {
            return val + items
        })
    }

    // create an array

    getArray(a,b){
        let res = []
        if(a.length === b.length){
            for(let i = 0; i < a.length; i++){
                res.push(a[i] * b[i])
            }
        }
    
        return res
    }

    // sqaured value

    getSquare(param){
        let res = []
        for(let i = 0; i < param.length; i++){
            res.push(Math.pow(param[i], 2))
        }
    
        return res
    }

    // get mean

    getMean(a,b){
        return a / b
    }

    // draw the line

    drawLine(x_axis){
        let res = []
        for(let i = 0; i < x_axis.length; i++){
            res.push((this.state.mean.y_bar - (this.state.sumsquare.ssxy / this.state.sumsquare.ssxx) * this.state.mean.x_bar) + (this.state.sumsquare.ssxy / this.state.sumsquare.ssxx) * x_axis[i])
        }
        return res
    }


    fit(x, y){
        const state_data = this.state
        state_data.value.x = x
        state_data.value.y = y
        state_data.value = {
            x: x,
            y: y,
            n: state_data.value.x.length,
            sum_x: this.getSum(state_data.value.x),
            sum_y: this.getSum(state_data.value.y),
            xy: this.getArray(state_data.value.x, state_data.value.y),
            sum_xy: this.getSum(this.getArray(state_data.value.x, state_data.value.y)),
            x_square: this.getSquare(state_data.value.x),
            sum_x_square: this.getSum(this.getSquare(state_data.value.x)),
            y_square: this.getSquare(state_data.value.y),
            sum_y_square: this.getSum(this.getSquare(state_data.value.y))
        }
        
        state_data.mean = {
            x_bar: this.getMean(state_data.value.sum_x, state_data.value.n),
            y_bar: this.getMean(state_data.value.sum_y, state_data.value.n)
        }
        const ssxy = state_data.value.sum_xy - (state_data.value.sum_x * state_data.value.sum_y / state_data.value.n)
        const ssxx = state_data.value.sum_x_square - (Math.pow(state_data.value.sum_x, 2) / state_data.value.n)
        const ssyy = state_data.value.sum_y_square - (Math.pow(state_data.value.sum_y, 2) / state_data.value.n)
        
        state_data.sumsquare = {
            ssxy: ssxy,
            ssxx: ssxx,
            ssyy: ssyy
        }
        
        state_data.regression = {
            b: state_data.sumsquare.ssxy / state_data.sumsquare.ssxx,
            a: state_data.mean.y_bar - (state_data.sumsquare.ssxy / state_data.sumsquare.ssxx) * state_data.mean.x_bar,
            line: this.drawLine(x)
        }
        state_data.korelasi = {
            r_square: state_data.regression.b * (ssxy / ssyy),
            r: ssxy / Math.sqrt(ssxx * ssyy)
        }
    }

    // return result

    getResult(){
        const state_data = this.state
        return {
            intercept: state_data.regression.a,
            slope: state_data.regression.b,
            slope_line : state_data.regression.line,
            r: state_data.korelasi.r,
            r_square: state_data.korelasi.r_square
        }
    }

    // return prediction

    predict(x = []){

        const data = this.state

        let result = []

        for(let i = 0; i < x.length; i++){
            result.push(data.regression.a + (data.regression.b * x[i]))
        }
        return result
    }
}
class PolynomialOrderTwo{
    state = {
        value : {
            x: '',
            sum_x: 0,
            y: '',
            sum_y: 0,
            xy: '',
            sum_xy: 0,
            x_square: [],
            sum_x_square: 0,
            x_square_y: 0,
            sum_x_square_y: 0,
            x_3: [],
            sum_x_3: 0,
            x_4: [],
            sum_x_4: 0,
        },
        determinan: {
            d: 0,
            d1: 0,
            d2: 0,
            d3: 0,
        },
        koefisien: {
            a: 0,
            b: 0,
            c: 0,
        },
        regression:{
            a: 0,
            b: 0,
            c: 0,
            line: ''
        },
        relation: {
            y_cap: '',
            sum_y_cap: 0,
            y_y_cap_square: '',
            sum_y_y_cap_square: 0,
            y_y_bar : '',
            sum_y_ybar: 0,
            r_square: 0,
        }

    }

    Kali(a,b){
        let result = []
        for(let i = 0; i < a.length; i++){
            result.push(a[i] * b[i])
        }
        return result
    }
    
    getSquare(a, square_num){
        let result = []
        for(let i = 0; i < a.length; i++){
            result.push(Math.pow(a[i], square_num))
        }
        return result
    }
    
    sumArray(array){
        return array.reduce((a,b) => {
            return a + b
        })
    }

    getRegression(x){
        let result = []
        for(let i = 0; i < x.length; i++){
            result.push(this.state.koefisien.a + (this.state.koefisien.b * x[i]) + (this.state.koefisien.c * Math.pow(x[i], 2)))
        }
    
        return result
    }

    // calculate method

    CalculateData(){
        this.state.value.sum_x = this.sumArray(this.state.value.x)
        this.state.value.sum_y = this.sumArray(this.state.value.y)
        // xy
        this.state.value.xy = this.Kali(this.state.value.x, this.state.value.y)
        this.state.value.sum_xy = this.sumArray(this.state.value.xy)
        // x square
        this.state.value.x_square = this.getSquare(this.state.value.x, 2)
        this.state.value.sum_x_square = this.sumArray(this.state.value.x_square)
        // x square y
        this.state.value.x_square_y = this.Kali(this.state.value.x_square, this.state.value.y)
        this.state.value.sum_x_square_y = this.sumArray(this.state.value.x_square_y)
        // x square 3
        this.state.value.x_3 = this.getSquare(this.state.value.x, 3)
        this.state.value.sum_x_3 = this.sumArray(this.state.value.x_3)
        // x square 4
        this.state.value.x_4 = this.getSquare(this.state.value.x, 4)
        this.state.value.sum_x_4 = this.sumArray(this.state.value.x_4)
    }

    CalCulateDeterminant(){
        const states = this.state
        let metric_1 = [
            [states.value.x.length, states.value.sum_x, states.value.sum_x_square],
            [states.value.sum_x, states.value.sum_x_square, states.value.sum_x_3],
            [states.value.sum_x_square, states.value.sum_x_3, states.value.sum_x_4]
        ]
        
        let metric_2 = [states.value.sum_y, states.value.sum_xy, states.value.sum_x_square_y]
        
        states.determinan.d = math.det(metric_1)
        // d1
        states.determinan.d1 = math.det([
            [states.value.sum_y, states.value.sum_x, states.value.sum_x_square],
            [states.value.sum_xy, states.value.sum_x_square, states.value.sum_x_3],
            [states.value.sum_x_square_y, states.value.sum_x_3, states.value.sum_x_4]
        ])
        
        states.determinan.d2 = math.det([
            [states.value.x.length, states.value.sum_y, states.value.sum_x_square],
            [states.value.sum_x, states.value.sum_xy, states.value.sum_x_3],
            [states.value.sum_x_square, states.value.sum_x_square_y, states.value.sum_x_4]
        ])
        
        states.determinan.d3 = math.det([
            [states.value.x.length, states.value.sum_x, metric_2[0]],
            [states.value.sum_x, states.value.sum_x_square, metric_2[1]],
            [states.value.sum_x_square, states.value.sum_x_3, metric_2[2]]
        ])
    }

    CalCulateCoefficient(){
        this.state.koefisien = {
            a: this.state.determinan.d1 / this.state.determinan.d,
            b: this.state.determinan.d2 / this.state.determinan.d,
            c: this.state.determinan.d3 / this.state.determinan.d
        }
    }

    createRegression(){
        this.state.regression = {
            a: this.state.koefisien.a,
            b: this.state.koefisien.b,
            c: this.state.koefisien.c,
            line: this.getRegression(this.state.value.x)
        }
    }

    CalculateRelationship(){
        let y_ycap = []
        let y_ybar = []
        this.state.relation.y_cap = this.state.regression.line
        // y - y cap square
        for(let i = 0; i < this.state.value.y.length; i++){
            y_ycap.push(Math.pow(this.state.value.y[i] - this.state.relation.y_cap[i], 2))
        }
        // y - y bar
        for(let i = 0; i < this.state.value.y.length; i++){
            y_ybar.push(Math.pow(this.state.value.y[i] - (this.state.value.sum_y / this.state.value.y.length),2))
        }
        this.state.relation.y_y_bar = y_ybar
        this.state.relation.y_y_cap_square = y_ycap
        // sum
        this.state.relation.sum_y_y_cap_square = this.sumArray(this.state.relation.y_y_cap_square)
        this.state.relation.sum_y_ybar = this.sumArray(this.state.relation.y_y_bar)
        // r square
        this.state.relation.r_square = 1 - this.state.relation.sum_y_y_cap_square / this.state.relation.sum_y_ybar

    }

    fit(x, y){
        this.state.value.x = x
        this.state.value.y = y
        this.CalculateData()
        this.CalCulateDeterminant()
        this.CalCulateCoefficient()
        this.createRegression()
        this.CalculateRelationship(x)

        return {
            regression : this.state.regression,
            determinant: this.state.determinan,
            value: this.state.value,
            relation: this.state.relation
        }
    }

    getResult(){
        const states = this.state
        return {
            a: states.regression.a,
            b: states.regression.b,
            c: states.regression.c,
            r_square: states.relation.r_square,
            line: states.regression.line,
        }
    }

    predict(x = []){
        const states = this.state
        
        let result = []
        for(let i = 0; i < x.length; i++){
            result.push(states.regression.a + (states.regression.b * x[i]) + (states.regression.c * Math.pow(x[i],2)))
        }

        return result
    }
}

module.exports = {
    PolynomialOrderOne,
    PolynomialOrderTwo
}