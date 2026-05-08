class students{
    constructor(name,age,course){
         this.name=name
         this.age=age
         this.course=course
    }
    details(){
        console.log()
        console.log(`name:${this.name}.\n
                    age:${this.age}.\n
                    course:${this.course}`)
    }
}
s1 = new students("Rohan",10,"datascience")
s1.details()