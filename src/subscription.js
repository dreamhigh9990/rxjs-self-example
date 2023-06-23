// // Here, we are using count() operator:
// import { of } from 'rxjs';  
// import { count } from 'rxjs/operators';  
// let all_nums = of(1, 3, 5, 7, 11, 13, 15, 17, 23, 27, 29);  
// let final_val = all_nums.pipe(count());  
// final_val.subscribe(x => console.log("The total count is "+x));


// // Here, we are using the same above example with unsunscribe() method.
// import { of } from 'rxjs';  
// import { count } from 'rxjs/operators';  
// let all_nums = of(1, 3, 5, 7, 11, 13, 15, 17, 23, 27, 29);  
// let final_val = all_nums.pipe(count());  
// let test = final_val.subscribe(x => console.log("The total count is "+x));  
// test.unsubscribe();  


// // Nested Subscription
import { interval } from 'rxjs';  
const observable1 = interval(400);  
const observable2 = interval(300);  
const subscription = observable1.subscribe(x => console.log('This is first: ' + x));  
const childSubscription = observable2.subscribe(x => console.log('This is second: ' + x))
subscription.add(childSubscription);  
setTimeout(() => {  
  // this will unsubscribe BOTH subscription and childSubscription  
  subscription.unsubscribe();  
}, 1000);  