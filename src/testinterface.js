"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const data:SearchFunc={
//     color:"green",
//     a:"asd",
//     b:"asdas",
//     c:1234,
//     d:true
// }
// const employees= (emp:SquareConfig)=>{
//     console.log(emp);
// }
// employees(data);
// let mySearch: SearchFunc;
// mySearch = function (source: string, subString: string): boolean {
//   let result = source.search(subString);
//   return result > -1;
// };
// console.log(mySearch("asd","2"));
var GenericNumber = /** @class */ (function () {
    function GenericNumber(zeroValue, addFunction) {
        this.zeroValue = zeroValue;
        this.add = addFunction;
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber(0, function (x, y) { return x + y; });
console.log(myGenericNumber.add(5, 10)); // Output: 15
var stringConcat = new GenericNumber("", function (x, y) { return x + y; });
console.log(stringConcat.add("Hello, ", "World!")); // Output: Hello, World!
