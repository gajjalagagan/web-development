friends = saanvith();

function saanvith() {
    return {                 
        name: "A.Saanvith",
        age: 13,
        skills: "maths calculations", 
        intro: function () {
            console.log(`
            details about a.saanvith:
            =========================
            my friend name is ${this.name}    
            my friends age is ${this.age}     
            my friends skills are ${this.skills}
            `);                      
        }
    };
}

console.log(friends);   
friends.intro();        
