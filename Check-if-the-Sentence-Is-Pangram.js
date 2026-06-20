1/**
2 * @param {string} sentence
3 * @return {boolean}
4 */
5var checkIfPangram = function(sentence) {
6    return new Set(sentence).size === 26
7};