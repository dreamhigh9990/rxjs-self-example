// import { of, asyncScheduler } from "rxjs";
// import { observeOn } from "rxjs/operators";
// of(1, 2, 3)
//   .pipe(observeOn(asyncScheduler))
//   .subscribe(val => console.log(val));


// // See the synchronous example
// import { of, asyncScheduler } from "rxjs";
// import { observeOn } from "rxjs/operators";
// const observable = of(1, 2, 3);
// console.log("Before sync subscribe");
// observable.subscribe({
//   next(x) {
//     console.log(`Got sync value ${x}`);
//   },
//   error(err) {
//     console.error(`Something wrong occurred: ${err}`);
//   },
//   complete() {
//     console.log("This is done now.");
//   }
// });
// console.log("After sync subscribe");


// See the asynchronous example (By using Scheduler)
import { of, asyncScheduler } from "rxjs";
import { observeOn } from "rxjs/operators";
const observable = of(1, 2, 3);
console.log("Before async subscribe");
observable.pipe(observeOn(asyncScheduler)).subscribe({
  next(x) {
    console.log(`Got async value ${x}`);
  },
  error(err) {
    console.error(`Gomething wrong occurred: ${err}`);
  },
  complete() {
    console.log("This is done now.");
  }
});
console.log("After async subscribe");