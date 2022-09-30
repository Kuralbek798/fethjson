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
   let a: number  = 1;
   a = 3;
   let b: number = -10;
   b = 5;
   let c: number = 3.5;
   c = 3.5;
   let d: number = 10_000;
   d = 10_000_000;
   let ac: number = 22;
   ac = 33;

   let aa: string = 'Вася';
   aa = 'Vaca';
   let bb: string = "string";
   bb = "Строка";
   let cc: string = `${aa} лет ${ac}`
   cc = `${aa} лет ${ac}`
   let aaa: boolean = true;
    aaa = false; 
    let cx: number = a + b;
	console.log(cx, aaa, cc, bb, aa, ac, d, c, b );

function getFullName(firstname: string,surname:string):string
{
    return`${firstname} ${surname}`;
}

const getFullNameArrow = (firstname:string,surname: string):string =>{
    return `${firstname} ${surname}`;
}

console.log(getFullName('Куралбек','Агубаев'))
