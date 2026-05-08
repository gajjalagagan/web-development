function cal (a,b,callback,callback2){
    callback2()
    return callback(a,b)
}

function sum(a,b){
    console.log(a+b)


}

cal(10,20,sum,function(){
    console.log("another call back")
})