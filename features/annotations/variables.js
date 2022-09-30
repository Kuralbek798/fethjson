"use strict";
/*let a = 1;
    let b = -10;
    let c = 3.5;
    let d = 10_000;
    
    let aa = 'Вася';
    let bb = "string";
    let cc = `fsfa${d}`;

    let aaa = true;
    let bbb = false;
    let t = a + b
   console.log(`print  result: ${t}`)*/
let a = 1;
a = 3;
let b = -10;
b = 5;
let c = 3.5;
c = 3.5;
let d = 10000;
d = 10000000;
let ac = 22;
ac = 33;
let aa = 'Вася';
aa = 'Vaca';
let bb = "string";
bb = "Строка";
let cc = `${aa} лет ${ac}`;
cc = `${aa} лет ${ac}`;
let aaa = true;
aaa = false;
let cx = a + b;
console.log(cx, aaa, cc, bb, aa, ac, d, c, b);
function getFullName(firstname, surname) {
    return `${firstname} ${surname}`;
}
const getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
console.log(getFullName('Куралбек', 'Агубаев'));
