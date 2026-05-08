//var
if (true) {
    var a = 10
    a = 11
    a = 12
    console.log("the number is", a)

}
//let
if (true) {
    let a = 10
    //a=12//redeclarration is not allowed in let
    a = 13
    console.log("the number is:", a)
}
//const
if (true) {
    const a = 10
    //a=11//redeclaration is not allowed in const
    //a=12//redefinment is not allowed in const
    console.log("the number is", a)
}