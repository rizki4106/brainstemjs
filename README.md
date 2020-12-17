
![](https://img.shields.io/badge/version-0.0.1-red.svg) ![](https://img.shields.io/badge/licence-MIT-green.svg) ![](https://img.shields.io/badge/maintener-github.com/rizki4106-blue.svg) ![](https://img.shields.io/badge/status-BETA-dfd3d3.svg)


[![brainstemjs.png](https://i.postimg.cc/wjQmM336/brainstemjs.png)](https://postimg.cc/cv6H5xQj)

### Brainstemjs
brainstemjs is machine learning library for javascript.

```bash
npm install brainstem
```

### Available Algorithm
| Name |
|------|
|K Nearest Neighbor (KNN)|
|Linear Regression Polynomial Order 1 and Order 2|

### Example
K Nearest Neighbors Algorithm

*try on google colab [https://colab.research.google.com/drive/1dYQ6m1bSl-6EROI5kqAXwBoaXrPx8IyS?usp=sharing](https://colab.research.google.com/drive/1dYQ6m1bSl-6EROI5kqAXwBoaXrPx8IyS?usp=sharing)*
```javascript
const {KNNeighborClassifier} = require("brainstem")
const {accuracy_score} = require("brainstem/metrics")
const {train_test_split} = require("brainstem/selection")

const x = [40, 65, 75, 80]
const y = ["E","D","B","A"]

const knn = new KNNeighborClassifier(n_neighbors = 1, distance = "manhattan")
const [x_train, x_test, y_train, y_test] = train_test_split(x,y, test_size=0.3)
knn.fit(x_train,y_train)

const y_pred = knn.predict(x_test)
console.log(accuracy_score(y_test, y_pred))
```
available distance for K Nearest Neighbors
| Name |
|------|
| Euclidean Distance |
| Manhattan Distance |
<hr/>
Linear Regression Polynomial Order 1

```javascript
const {PolynomialOrderOne} = require("brainstem")
const x = [1,2,3,4,5]
const y = [5,4,3,2,1]

const regression = new PolynomialOrderOne()
regression.fit(x,y)
const result = regression.getResult()
const pred = regression.predict([5])

console.log(result)
console.log(pred)
```
Linear Regression Polynomial Order 2

```javascript
const {PolynomialOrderTwo} = require("brainstem")
const x = [1,2,3,4,5]
const y = [5,4,3,2,1]

const regression = new PolynomialOrderTwo()
regression.fit(x,y)
const result = regression.getResult()
const pred = regression.predict([5])

console.log(result)
console.log(pred)
```

### Real Data

If you want test with real data like read csv file, json or anything else you have to use another library like [danfo.js](https://danfo.jsdata.org/).

*"Danfo.js is an open-source, JavaScript library providing high-performance, intuitive, and easy-to-use data structures for manipulating and processing structured data **Danfo.js** is heavily inspired by the **Pandas** library and provides a similar interface and API. This means users familiar with the Pandas API can easily use Danfo.js."* - https://danfo.jsdata.org/
