//basic types
let id: number = 5
let company: string = 'test'
let isPublished: boolean = true
let x: any = 'hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,'hello', true]

//tuple
let person: [number, string, boolean] = [1, 'test', true]
//tuple array
let employee: [number, string] []

employee = [
  [1, "test"],
  [2, "another test"],
  [3, "last test"]
]

//union
let prdId: string | number = 22
prdId = "test"

// enum
enum Direction1 {
  UP, 
  DOWN,
  LEFT,
  RIGHT
}
enum Direction2 {
  UP = 'UP', 
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

console.log(Direction1.UP)
console.log(Direction2.UP)

//objs
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'john'
}

//type assertion
let cid: any = 1
let customerId = cid as number //asserting we want type to be number

//function
function addNum(x: number,y: number): number {
  return x+y
}

console.log(addNum(1,2))

//void return type
function log(message: string | number): void {
  console.log(message)
}
log(1)
log('hello')