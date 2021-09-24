"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var Server_1 = __importDefault(require("./Server"));
dotenv_1.default.config();
var newServer = new Server_1.default();
newServer.listen();
// console.log('Hola mundo');
// const array:number[] = [1,822,4445,484,454,84,];
// const findMaxNum = ( array:number[] ) => {
//   let tem = array[0];
//   array.forEach((num) => {
//      if(num > tem ){
//          tem = num
//      }
//   });
//   console.log(tem + ' is the max value');
// };
// findMaxNum(array);
// const findLowNum = ( array:Number[] ) => {
//     let tem = array[0];
//     array.forEach((num) => {
//        if(num < tem ){
//            tem = num
//        }
//     });
//     console.log(tem + ' is the low value');
//   };
//   findLowNum(array);
//   console.log('caaa');
//# sourceMappingURL=index.js.map