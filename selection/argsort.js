const sort = require("sort-json-array")

function argsort(arr = []){
    let before_result = []
    let argsort_val = []

    arr.forEach((items, i) => {
        let list_arr = {}
        list_arr['value'] = items
        list_arr['index'] = i
        before_result.push(list_arr)
    })

    // sort object
    
    sort(before_result, 'value').forEach(items => argsort_val.push(items.index))
    return argsort_val
    
}

module.exports = argsort