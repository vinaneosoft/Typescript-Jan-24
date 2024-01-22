// employeeId-key, contact Number-value
let contactInfo = new Map();
contactInfo.set(1212, 7878787878);
contactInfo.set(1112, 9097909790);
contactInfo.set(1212, 8584858485);
contactInfo.set(2323, 8786878687);
contactInfo.set(4545, 8989898989);
contactInfo.set(8888, 8786878687);
console.log(contactInfo);
console.log(contactInfo.get(8888));
let itr = contactInfo.entries();
let entry;
do {
    entry = itr.next();
    if (entry.done === false)
        console.log(entry.value);
} while (entry.done === false);
let itr2 = contactInfo.keys();
let key;
do {
    key = itr2.next();
    if (key.done === false)
        console.log(key.value);
} while (key.done === false);
