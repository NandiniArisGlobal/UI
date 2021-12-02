const person2={
    fname:"Shiva",
    lname: "Kumar",
    age:50,
    qualification:"SSLC"
};
const arr=[3,1,4,6];
const newarr=[6,2,...arr,9,1,0];
console.log(newarr);
// console.log({...person2});
const person={...person2};
console.log(person);
console.log(`The details of the person: ${person}`);
console.log(`The new array is : ${newarr}`)