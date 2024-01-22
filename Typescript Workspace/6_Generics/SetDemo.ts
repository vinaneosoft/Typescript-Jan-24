
let namesSet=new Set<String>();
namesSet.add("Hari");
namesSet.add("Om");
namesSet.add("Poonam");
namesSet.add("Hari");
namesSet.add("Pooja");
namesSet.add("Amar");
console.log(namesSet);
console.log(namesSet.has("Om"));
console.log(namesSet.delete("Amar"));
let itr=namesSet.entries();   // single values collections gets value-value pair on entries()
let entry;
do{
    entry=itr.next();
    if(entry.done===false)
        console.log(entry.value);
}while(entry.done===false);

let itr2=namesSet.keys(); // single values collections always gets valueset on keys()

let entry2;
do{
    entry2=itr2.next();
    if(entry2.done===false)
        console.log(entry2.value);
    
}while(entry2.done===false); 


class BankAccount{
    constructor(public accountNumber=11111111, public customerId=111, public accountType='savings', public accountBalance=0){
    }
    deposit(amount:number):number{
        this.accountBalance=this.accountBalance+amount; 
        return this.accountBalance;
    }
}//class body ended
let account1=new BankAccount(12345999, 1111);
let account2=new BankAccount(78787878);
let account3=new BankAccount(1233399, 1311,'current');
let account4=new BankAccount(123458989, 1811,'current',45000);
let account5=new BankAccount(313131313, 3333,'savings',48000);
let account6=new BankAccount(313131313, 3333,'savings',48000);

let accountSet=new Set<BankAccount>();
accountSet.add(account1);
accountSet.add(account2);
accountSet.add(account3);
accountSet.add(account4);
accountSet.add(account5);
accountSet.add(account6);
accountSet.forEach(acc=>console.log(acc));
