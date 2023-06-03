
 //Global scope
 let a='JavaScript'
 let b=100
 
 function letsLearnScope(){
    console.log(a,b);
    if (true){
        let a ='Python'
        let b=100
        console.log(a,b);
    }
    console.log(a,b);
 }
letsLearnScope()
console.log(a,b);

//Local Scope
// Function scope
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  let value = false
// block scope
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
    console.log(d);
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible


//Declaratiom with var, let and const

function scope(){
    var gravity=9.81
    console.log(gravity);
}
 if (true){
    var gravity=9.81
    console.log(gravity);
 }
 console.log(gravity);

 for(var i=0; i<3; i++){
    console.log(i);
 }
 console.log(i);

 //let vs const in scopes
 function scopes(){
    const gravity=10
    console.log(gravity);
 }
 scopes()

 if (true){
    const gravity=10
    console.log(gravity);
 }