var arr=[1,2,3,4];
console.log(arr);
arr.push(5,6,7);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(1);
console.log(arr);

var newarr=arr.slice(1,3);
console.log(newarr);
console.log(arr);

var newarr1=arr.splice(1,2);
console.log(newarr1);
console.log(arr);

var newarr2=arr.splice(1,0,2,3);
console.log(newarr2);
console.log(arr);