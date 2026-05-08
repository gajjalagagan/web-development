const studentnumber4={
    name:"rohan",
    age:11,
    course:"java and python",
    hobbies:"singing and dancing",
}
   
const studentjson = JSON.stringify(studentnumber4)
console.log("json format",studentjson)


const studentobj = JSON.parse(studentjson)
console.log("the recievre ends is",studentobj)
