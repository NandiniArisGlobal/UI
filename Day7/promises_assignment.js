let paid=false;
let service= new Promise(function(resolve,reject){
    if (paid)
    {
        resolve("The amount is debited from your account");
    }
    else{
        reject("Transaction failed");
    }
})
service.then(message=>console.log(message)).catch(message=>console.log(message))
.finally(message=>console.log("Payment Processing"));