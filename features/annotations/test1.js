"use strict";
// let info:{
// officeId:number;
// isOpened: boolean;
// contacts:{
// phone: string;
// email: string;
// adres:{
// city: string;
//   }
//  }
// }
const skills = ['Dev', 'DevOps'];
for (const skill of skills) {
    console.log(skill);
}
skills.filter(s => s != 'DevOps');
