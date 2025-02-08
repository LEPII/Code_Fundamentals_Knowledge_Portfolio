//// Classes In Typescript

//// Table Of Content

//// - Creating Classes & Objects
//// - Access Modifiers

//// Creating Classes & Objects  ////

class Competitor {
    
  //  TypeScript provides a shorthand way to initialize class properties directly within the constructor parameters.  This reduces boilerplate code, especially when you have many properties.
  constructor(
    public readonly id: number,
    public name: string,
    public height: number,
    public squatTotal: number,
    public benchTotal: number,
    public deadliftTotal: number,
    private _total: number,
    public huggable?: boolean
  ) {}

  firstSquatAttempt(squatAttempt: number): void {
    if (squatAttempt <= 40) throw new Error("failed attempt");
    this.squatTotal += squatAttempt;
  }
}

let lifter = new Competitor(0, "Lu", 511, 10, 10, 10, 30, true);

lifter.firstSquatAttempt(30);

//// Access Modifiers ////

// They control the visibility and accessibility of class members (properties and methods).

// 1. public (Default)

// Members declared as public are accessible from anywhere: inside the class, outside the class, and by derived classes.
// If you don't specify an access modifier, public is the default.

// 2. private

// Members declared as private are only accessible within the class where they are declared. They cannot be accessed from outside the class or by derived classes.

// 3. protected

// Members declared as protected are accessible within the class where they are declared and by derived (child) classes. They are not accessible from outside the class directly.
