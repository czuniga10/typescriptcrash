"use strict";
//basic types
let id = 5;
let company = 'test';
let isPublished = true;
let x = 'hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'hello', true];
//tuple
let person = [1, 'test', true];
//tuple array
let employee;
employee = [
    [1, "test"],
    [2, "another test"],
    [3, "last test"]
];
//union
let prdId = 22;
prdId = "test";
// enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["UP"] = 0] = "UP";
    Direction1[Direction1["DOWN"] = 1] = "DOWN";
    Direction1[Direction1["LEFT"] = 2] = "LEFT";
    Direction1[Direction1["RIGHT"] = 3] = "RIGHT";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["UP"] = "UP";
    Direction2["DOWN"] = "DOWN";
    Direction2["LEFT"] = "LEFT";
    Direction2["RIGHT"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.UP);
console.log(Direction2.UP);
const user = {
    id: 1,
    name: 'john'
};
//type assertion
let cid = 1;
let customerId = cid; //asserting we want type to be number
//function
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
//void return type
function log(message) {
    console.log(message);
}
log(1);
log('hello');
