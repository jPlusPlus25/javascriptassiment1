//...rest function using
function add(a,b){
    console.log("a value",a ,"and b value:",b)
}
add(10,20)
add(10,20,30)
add(10,20,30,40)
add(10,20,30,40,50)
/*a value 10 and b value: 20
a value 10 and b value: 20
a value 10 and b value: 20
a value 10 and b value: 20*/
function add(a,...b){
    console.log("a value",a ,"and b value:",b)
}
add(10,20)
add(10,20,30)
add(10,20,30,40)
add(10,20,30,40,50)
/*a value 10 and b value: [ 20 ]
a value 10 and b value: [ 20, 30 ]
a value 10 and b value: [ 20, 30, 40 ]
a value 10 and b value: [ 20, 30, 40, 50 ]*/