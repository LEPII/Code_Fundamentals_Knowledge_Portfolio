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
  descriptor.value = function () {
    console.log("new implementation")
  };
}

// A method decorator function receives three arguments:

// 1. target: any: - For an instance method (like greet in the example), target is the prototype of the class where the method is defined

// 2. propertyKey: string | symbol - This is the name of the method being decorated. In our example, it would be "add". It can be a string or a symbol.

// 3. descriptor: PropertyDescriptor -  This is an object that describes the property (in this case, the method) being decorated. It's the same descriptor you would get from Object.getOwnPropertyDescriptor(target, propertyKey)
