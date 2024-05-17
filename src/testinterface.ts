import { SearchFunc } from "./employee";

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


class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
  
    constructor(zeroValue: T, addFunction: (x: T, y: T) => T) {
      this.zeroValue = zeroValue;
      this.add = addFunction;
    }
  }
  
  let myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);
  console.log(myGenericNumber.add(5, 10)); // Output: 15
  
  let stringConcat = new GenericNumber<string>("", (x, y) => x + y);
  console.log(stringConcat.add("Hello, ", "World!")); // Output: Hello, World!
  