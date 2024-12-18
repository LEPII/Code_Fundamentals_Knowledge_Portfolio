// Iterating through req.body

// When handling patch requests in Node.js, you have several options for iterating through req.body properties and updating the corresponding fields in your model.
// Here are the common approaches:

// 1. Direct Property Access:
// Simple and straightforward for updating specific properties.
// Good for scenarios where you know exactly which properties to update.

const updatedData = { ...req.body }; // Create a copy of req.body

// Update specific properties or all if desired
updatedModel.name = updatedData.name;
updatedModel.description = updatedData.description;
// ... other properties

await updatedModel.save();

//

// 2. Object Destructuring:
// Concise and readable for updating multiple properties.
// Well-suited for destructuring complex objects.

const { name, description /* ... other properties */ } = req.body;

updatedModel.name = name;
updatedModel.description = description;
// ... other properties

await updatedModel.save();

//

// 3. Looping Through req.body:
// Flexible for dynamic updates, especially when you don't know the exact properties in advance.
// Can be useful for selectively updating properties based on certain conditions.

for (const key in req.body) {
  if (updatedModel.hasOwnProperty(key)) {
    updatedModel[key] = req.body[key];
  }
}

await updatedModel.save();
