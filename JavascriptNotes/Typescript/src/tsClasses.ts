//// Classes In Typescript

//// Table Of Content

//// - Creating Classes & Objects
//// - Access Modifiers
//// - Index Signature
//// - Static Methods
//// - Inheritance
//// - Method Overriding

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
    this._total += squatAttempt;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    // anytime the `total` variable gets called, this function gets called.
    if (value === 0) throw new Error("you failed your lifts buddy");
    this._total += this.squatTotal + this.benchTotal + this.deadliftTotal;
  }
}

let lifter = new Competitor(0, "Lu", 511, 10, 10, 10, 30, true);
lifter.firstSquatAttempt(50);

console.log(lifter.total);

//// Access Modifiers ////

// They control the visibility and accessibility of class members (properties and methods).

// 1. public (Default)

// Members declared as public are accessible from anywhere: inside the class, outside the class, and by derived classes.
// If you don't specify an access modifier, public is the default.

// 2. private

// Members declared as private are only accessible within the class where they are declared. They cannot be accessed from outside the class or by derived classes. - DO NOT STORE SENSITIVE DATA USING PRIVATE MEMBERS. Only use private properties for writing robust code.

// 3. protected

// Members declared as protected are accessible within the class where they are declared and by derived (child) classes. They are not accessible from outside the class directly.

//// - Index Signature

// An index signature allows you to define the type of values that can be accessed using a string or number as an index (like object[key]. Only some types are allowed for index signature properties: string, number, symbol, template string patterns, and union types consisting only of these.

//  They are particularly useful when dealing with data structures where the keys are not known at compile time, such as when working with data from an API or when creating dictionaries or maps.

class EatenWingstopWings {
  [digestedWing: number]: number;
}

let orders = new EatenWingstopWings();

orders[1] = 10;

//// - Static Members

// Static members belong to the class itself, not to instances (objects) of the class. They are accessed directly using the class name.
// Useful if we need a single instance of a property in memory.

class MyWingStopHistory {
  private static _totalWingsEaten: number = 0;

  // we typically wouldn't want to change the _totalWingsEaten property outside of the class
  // so we would use the `private` access modifier and a getter to get it's value.

  start() {
    MyWingStopHistory._totalWingsEaten++;
  }

  static get total() {
    return MyWingStopHistory._totalWingsEaten;
  }
}

let myCurrentWingsEaten = new MyWingStopHistory();
myCurrentWingsEaten.start();

console.log(MyWingStopHistory.total); // Output: 1

//// Inheritance ////

class MainHouse {
  constructor(
    public words: string,
    public region: string,
    public religion: string
  ) {}

  get houseInfo() {
    return (
      "The House's words are" +
      " " +
      this.words +
      " while their religion is" +
      this.region
    );
  }

  election() {
    console.log("New Heir");
  }
}

class Vassel extends MainHouse {
  constructor(
    public overlords: string,
    words: string,
    region: string,
    religion: string
  ) {
    super(words, region, religion); // super is used to reference the base class
  }
}

let newHouse = new Vassel(
  "Lord Davos Seaworth",
  "Not sure lol",
  "Crownlands",
  "Faith Of The Seven"
);

// the newHouse variable will have the following 4 properties with the election method.

// - As a best practice, we should implement each class in a separate file.

//// - Method Overriding
