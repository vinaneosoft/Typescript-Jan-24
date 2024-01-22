
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
