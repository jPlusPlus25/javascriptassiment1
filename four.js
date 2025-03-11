//what is spread oprater
//1.create new array/-based on exitingobject
//2.merge arrays /object
//3.extending array element or object properteis
let a=[10,20,30];
let b=[30,40,50];
let c=[...a,...b];
console.log(c)//[ 10, 20, 30, 30, 40, 50 ]
let emp={eid:101,ename:'Arshita',email:'arshitapatel@gmail.com'}
let details={email:'arshitapatel@gmail.com',sal:56000}
let empdetail={...emp,...details}
console.log(empdetail)/*{
    eid: 101,
    ename: 'Arshita',
    email: 'arshitapatel@gmail.com',
    sal: 56000
  }*/
 