// // See an example of Observable:
// import * as Rx from "rxjs";
// const observable = Rx.Observable.create((observer) => {
//     observer.next(Math.random());
// });
// // subscription 1  
// observable.subscribe((data) => {
//     console.log(data);
// });
// // subscription 2  
// observable.subscribe((data) => {
//     console.log(data);
// });  


// // Using RxJS Subjects
// import * as Rx from "rxjs";  
// const subject = new Rx.Subject();  
// // subscriber 1  
// subject.subscribe((data) => {  
//     console.log(data);   
// });  
// // subscriber 2  
// subject.subscribe((data) => {  
//     console.log(data);   
// });  
// subject.next(Math.random());  


// How to Convert Observables from Unicast to Multicast
// import * as Rx from "rxjs";  
// const observable = Rx.Observable.create((observer) => {  
//     observer.next(Math.random());  
// });  
// const subject = new Rx.Subject();  
// // subscriber 1  
// subject.subscribe((data) => {  
//     console.log(data);  
// });  
// // subscriber 2  
// subject.subscribe((data) => {  
//     console.log(data);   
// });  
// observable.subscribe(subject);


// // Example using next(v) method:
// import { Subject } from 'rxjs';  
// const subject_test = new Subject();  
// subject_test.subscribe({  
//    next: (v) => console.log(`From Subject : ${v}`)  
// });  
// subject_test.subscribe({  
//    next: (v) => console.log(`From Subject: ${v}`)  
// });  
// subject_test.next("Hello");  
// subject_test.next("Good Morning");


// // Example using complete() method:
// import { Subject } from 'rxjs';  
// const subject_test = new Subject();  
// subject_test.subscribe({  
//    next: (v) => console.log(`From Subject : ${v}`)  
// });  
// subject_test.subscribe({  
//    next: (v) => console.log(`From Subject: ${v}`)  
// });  
// subject_test.next("Hello");  
// subject_test.complete();  
// subject_test.next("Good Morning");


// // Example using error() method:
// import { Subject } from 'rxjs';  
// const subject_test = new Subject();  
// subject_test.subscribe({  
//    error: (e) => console.log(`From Subject : ${e}`)  
// });  
// subject_test.subscribe({  
//    error: (e) => console.log(`From Subject : ${e}`)  
// });  
// subject_test.error(new Error("There is an error message"));


// import { BehaviorSubject } from 'rxjs';  
// const subject = new BehaviorSubject(0); // 0 is the initial value  
// subject.subscribe({  
//   next: (v) => console.log(`observerA: ${v}`)  
// });  
// subject.next(1);  
// subject.next(2);  
// subject.subscribe({  
//   next: (v) => console.log(`observerB: ${v}`)  
// });  
// subject.next(3); 


// import { ReplaySubject } from 'rxjs';  
// const subject = new ReplaySubject(3); // buffer 3 values for new subscribers  
// subject.subscribe({  
//   next: (v) => console.log(`observerA: ${v}`)  
// });  
// subject.next(1);  
// subject.next(2);  
// subject.next(3);  
// subject.next(4);  
// subject.subscribe({  
//   next: (v) => console.log(`observerB: ${v}`)  
// });  
// subject.next(5);


// // How to set a Window time?
// import { ReplaySubject } from 'rxjs';  
// const subject = new ReplaySubject(100, 500 /* windowTime */);  
// subject.subscribe({  
//   next: (v) => console.log(`observerA: ${v}`)  
// });  
// let i = 1;  
// setInterval(() => subject.next(i++), 200);  
// setTimeout(() => {  
//   subject.subscribe({  
//     next: (v) => console.log(`observerB: ${v}`)  
//   });  
// }, 1000);


import { AsyncSubject } from 'rxjs';  
const subject = new AsyncSubject();  
subject.subscribe({  
  next: (v) => console.log(`observerA: ${v}`)  
});  
subject.next(1);  
subject.next(2);  
subject.next(3);  
subject.next(4);  
subject.subscribe({  
  next: (v) => console.log(`observerB: ${v}`)  
});  
subject.next(5);  
subject.complete(); 
