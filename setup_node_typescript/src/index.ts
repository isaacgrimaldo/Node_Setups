import dotenv from 'dotenv';
import Server from './Server';
dotenv.config();


const newServer:Server = new Server();
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

  