// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [propName: string]: any;
//   }
interface SearchFunc {
  (source: string, subString: string): boolean;
}
export {SearchFunc};