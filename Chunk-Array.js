1/**
2 * @param {Array} arr
3 * @param {number} size
4 * @return {Array}
5 */
6var chunk = function(arr, size) {
7    let result = []
8for (let i = 0; i < arr.length; i += size) {
9    result.push(arr.slice(i, i + size));
10}
11return result
12};
13