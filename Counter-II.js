1/**
2 * @param {integer} init
3 * @return { increment: Function, decrement: Function, reset: Function }
4 */
5
6var createCounter = function(init) {
7    let current = init;
8    function increment(){
9        current++
10        return current
11    }
12    function decrement(){
13        current--
14        return current
15    }
16    function reset(){
17        current = init
18        return current
19    }
20
21    return {
22        increment,
23        decrement,
24        reset
25    }
26};
27
28/**
29 * const counter = createCounter(5)
30 * counter.increment(); // 6
31 * counter.reset(); // 5
32 * counter.decrement(); // 4
33 */