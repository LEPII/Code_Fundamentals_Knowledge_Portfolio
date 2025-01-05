








// When dealing with large number of objects, it's better to put their
// methods on their prototype. This way, a single instance of the methods
// will be in the memory. 
Circle.prototype.draw = function() {}

// To get the own/instance properties:
Object.keys(obj);

// To get all the properties (own + prototype): 
for (let key in obj) {}