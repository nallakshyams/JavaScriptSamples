
function fib(num){// return nth num in the fibonacci series
  if(num === 0) return 0;
  if(num === 1) return 1;
  return fib(num-1)+fib(num-2);
}
 //fib(4) // 3    fib:0,1,1,2,3,5,8,13,21,34,55.....
// fib(10) // 55
 //fib(28) // 317811
 fib(0) // 9227465
