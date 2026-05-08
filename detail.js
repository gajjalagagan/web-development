// normal function
function greet() {
    console.log("welcome user")
}
greet()
//anonymous function
function greet1(name) {
    console.log("welcome ", name)

}
greet1("gagan")
// arrow function
setTimeout(function greet2(){
    console.log("hello gagan by time out")
},5000)