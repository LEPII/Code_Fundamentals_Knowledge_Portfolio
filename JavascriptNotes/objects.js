// The simplest way to create an object is using an object literal 
const circle = { 
   radius: 1, 
   draw: function() {}
}; 
   
// To create multiple objects with the same structure and behaviuor (methods), use a factory or a constructor. 

// Factory function 
function createCircle(radius) { 
   return {
      radius, 
      draw: function() {}
   } 
} 

// Constructor function 
function Circle(radius) { 
    this.radius = radius; 
    this.draw = function() {}
} 
    
// Every object has a "constructor" property which returns the function that was used to construct or create that object. 
const x = {};
x.constructor; // returns Object() 
   
// In JavaScript, functions are objects. They have properties and methods. 
Circle.name; 
Circle.length;
Circle.constructor; // returns Function()
Circle.call({}, 1); // to call the Circle function 
Circle.apply({}, [1]);

// Value types are copied by their value, reference types are copied by their reference. 
// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
// Reference types are: Object, Function and Array 
   
// JavaScript objects are dynamic. You can add/remove properties: 
circle.location = {};
circle['location'] = {};
                      
delete circle.location; 
                      
// To enumerate the members in an object: 
for (let key in circle) console.log(key, circle[key]);

Object.keys(circle); 
                      
// To see if an object has a given property
if ('location' in circle)
                      
// Abstraction means hiding the complexity/details and showing only the essentials. 
// We can hide the details by using private members. Replace "this" with "let". 

function Circle(radius) { 
   // Public member 
   this.radius = radius; 

   // Private member                       
   let defaultLocation = {};                      
}                       

// To define a getter/setter, use Object.defineProperty():

Object.defineProperty(this, 'defaultLocation', {
    get: function() { return defaultLocation; },
    set: function(value) { defaultLocation = value; }
});


// Getters and Setters in JavaScript
// Getters and setters are special methods in JavaScript that provide a way to control access to object properties. They allow you to define custom logic for retrieving or setting property values, offering greater flexibility and encapsulation.

// When to Use Getters and Setters
// Encapsulation: To hide the implementation details of property access.
// Validation: To validate values before setting them to a property.
// Calculation: To calculate a property value based on other properties.
// Caching: To cache calculated values for performance optimization.
// Data Transformation: To transform data before returning it or setting it.