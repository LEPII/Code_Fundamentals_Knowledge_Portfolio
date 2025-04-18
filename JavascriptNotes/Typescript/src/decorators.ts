//// Decorators

//// Table Of Content

//// - General
//// - Class Decorators
//// - Parameterized Decorators
//// - Decorator Composition
//// - Method Decorators
//// - Accessor Decorators
//// - Property Decorators
//// - Parameter Decorators

//// General ////

// Decorators are a way to add metadata and modify the behavior of classes, methods, properties, or parameters in a declarative manner.

// To use decorators, we have to enable the experimentalDecorators setting in tsconfig.

//// Class Decorators ////

// A class decorator is applied to the entire class declaration. It's declared just before the class keyword and uses the @ symbol followed by the decorator's name.

// A class decorator is essentially a function that receives the constructor function of the class as its single argument.

function Component(constructor: Function) {
  console.log("Component decorator called");
}

@Component
class MyProfileComponent {}

// ^ Basically the same thing as class MyProfileComponent extended Component {} // if `Component` was a parent class

//// Parameterized Decorators ////

function Parameterized(value: number) {
  return (constructor: Function) => {
    console.log("Component decorator called");
  };
}

@Parameterized(1)
class MySecondProfileComponent {}

//// Decorator Composition ////

// We can also apply multiple decorators to a class or its members.

function ChristmasDecorator(constructor: Function) {
  console.log("Christmas component decorator called");
}

@ChristmasDecorator
@Component
class MyThirdProfileComponent {}

//// Method Decorators ////

class MyPeoples {
  // A method decorator is declared immediately before a method definition within a class.
  @MoreFormalHomie
  greet(message: string) {
    console.log("Yo yo yo");
  }
}

function MoreFormalHomie(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value as Function;
  descriptor.value = function (...arg: any) {
    console.log("before");
    original.call(this, ...arg);
    console.log("after");
  };
}

// A method decorator function receives three arguments:

// 1. target: any: - For an instance method (like greet in the example), target is the prototype of the class where the method is defined

// 2. propertyKey: string | symbol - This is the name of the method being decorated. In our example, it would be "add". It can be a string or a symbol.

// 3. descriptor: PropertyDescriptor -  This is an object that describes the property (in this case, the method) being decorated. It's the same descriptor you would get from Object.getOwnPropertyDescriptor(target, propertyKey)

//// Accessor Decorators ////

// Accessor decorators are applied to the get or set accessor of a class member. They are declared immediately before the get or set keyword using the @ symbol followed by the decorator's name.

class NewPerson {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  @capitalize
  get firstName(): string {
    return this._firstName;
  }

  @capitalize
  get lastName(): string {
    return this._lastName;
  }
}

function capitalize(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalGetter = descriptor.get;
  if (originalGetter) {
    descriptor.get = function () {
      const result = originalGetter.call(this);
      return typeof result === "string" ? result.toUpperCase() : result;
    };
  }
}

//// - Property Decorators

// A property decorator is applied directly to a property declaration within a class.

function MaxLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;

    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length > length)
          throw new Error(
            `${propertyName} should be max ${length} characters long`
          );
        value = newValue;
      },
    };
    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User {
  @MaxLength(50)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

//// Parameter Decorators ////

// Parameter Decorators provide a way to interact with the parameters of a class constructor or a method.

// A parameter decorator is declared immediately before a parameter in a constructor or method declaration.

// The primary purpose of a parameter decorator is to observe the existence and position of a parameter within a method or constructor signature. Unlike other decorators, parameter decorators have limited direct influence on the behavior of the parameter itself. Their main uses are:

// - Metadata Attachment
// - Dependency Injection
// - Validation

type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({ methodName, parameterIndex });
}

class TronBike {
  blade(@Watch power: number) {}
}

console.log(watchedParameters); // [{methodName: "power", parameterIndex: 0}]
