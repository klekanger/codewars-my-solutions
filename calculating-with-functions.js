const zero = x => (x === undefined ? 0 : x(0));
const one = x => (x === undefined ? 1 : x(1));
const two = x => (x === undefined ? 2 : x(2));
const three = x => (x === undefined ? 3 : x(3));
const four = x => (x === undefined ? 4 : x(4));
const five = x => (x === undefined ? 5 : x(5));
const six = x => (x === undefined ? 6 : x(6));
const seven = x => (x === undefined ? 7 : x(7));
const eight = x => (x === undefined ? 8 : x(8));
const nine = x => (x === undefined ? 9 : x(9));

const plus = nxtNum => num => num + nxtNum;
const minus = nxtNum => num => num - nxtNum;
const times = nxtNum => num => num * nxtNum;
const dividedBy = nxtNum => num => Math.floor(num / nxtNum);

console.log(seven(times(five())));
console.log(three(dividedBy(nine())));
console.log(seven(times(seven())));
