// import { Observable } from 'rxjs';  
// const observable = new Observable(subscriber => {  
//   subscriber.next(10);  
//   subscriber.next(20);  
//   subscriber.next(30);  
//   setTimeout(() => {  
//     subscriber.next(40);  
//     subscriber.complete();  
//   }, 1000);  
// });  

// console.log('These are the values just before subscribe');  
// observable.subscribe({  
//   next(x) { console.log('We have got value ' + x); },  
//   error(err) { console.error('something wrong occurred: ' + err); },  
//   complete() { console.log('Done successfully'); }  
// });  
// console.log('This value is just after subscribe'); 


// function foo() {
//     console.log('Hello World!');
//     return 123;
// }
// const x = foo.call(); // same as foo()  
// console.log(x);
// const y = foo.call(); // same as foo()  
// console.log(y);  


// import { Observable } from 'rxjs';
// var observable = new Observable(
//     function subscribe(subscriber) {
//         subscriber.next("This is my first Observable")
//     }
// );  

// import { Observable } from 'rxjs';  
// var observer = Observable.create(  
//    function subscribe(subscriber) {  
//       subscriber.next("This is my first Observable")  
//    }  
// );


// import { Observable } from 'rxjs';  
// var observer = new Observable(  
//    function subscribe(subscriber) {  
//       subscriber.next("This is my first Observable")   
//    }  
// );  
// observer.subscribe(x => console.log(x));  

// import { Observable } from 'rxjs';
// var observer = new Observable(
//     function subscribe(subscriber) {
//         try {
//             subscriber.next("This is my first Observable");
//             subscriber.next("Testing Observable");
//             subscriber.complete();
//         } catch (e) {
//             subscriber.error(e);
//         }
//     }
// );
// observer.subscribe(x => console.log(x), (e) => console.log(e),
//     () => console.log("Observable is completed now."));  