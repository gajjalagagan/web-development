// class
  class Animal {
    // constructor
    constructor(name) {
      this.name = name;
    }
    // methods
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
// dog obj
  const dog = new Animal('Buddy');
  dog.speak(); // Output: Dog makes a sound.






// class inheritance
class Animal {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }

  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }

  const d1 = new Dog('Buddy');
  d1.speak(); // Output: Buddy barks.//////

  class Cat extends Animal {
    speak() {
      console.log(`${this.name} meows.`);
    }
  }

  const myCat = new Cat('Whiskers');
  myCat.speak(); // Output: Whiskers meows.



//   static keyword

class MathUtil {
    static add(a, b) {
      return a + b;
    }
  }

  console.log(MathUtil.add(5, 10)); // Output: 15
