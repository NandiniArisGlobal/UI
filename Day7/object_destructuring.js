const person={
    fname:"Karthik",
    lname:"Raj",
    height:5,
    weight:60
};
const {height,weight,lname,fname}=person;
console.log(`${fname} ${lname}`);
console.log(`Height: ${height}, Weight: ${weight}`);
const person2={
    fname:"Shiva",
    lname: "Kumar",
    age:50,
    qualification:"SSLC"
};
const {fname:name1,lname:name2,age,qualification:edu}=person2;
console.log(`${name1} ${name2}`);
// const {age,qualification:edu,lname,fname}=person2;
// console.log(`${fname} ${lname}`);
console.log(`Age: ${age}, Eduaction: ${edu}`);