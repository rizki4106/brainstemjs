const sort = require('sort-json-array')

function counter(arr = [], k = 2){

    let result = []
    const selected_arr = arr.slice(0,k)
    for(let i = 0; i < k; i++){
        let list_res = {}
        list_res['count'] = selected_arr.filter(items => items == arr[i]).length
        list_res['lable'] = arr[i]
        result.push(list_res)
    }
    return sort(result, 'count', 'des')[0]['lable']
}

module.exports = counter