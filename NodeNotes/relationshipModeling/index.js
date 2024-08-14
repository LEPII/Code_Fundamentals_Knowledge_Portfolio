// Trade off between query PERFORMANCE vs CONSISTENCY.

// When working with related object we have two approaches.

// 1. Using references (Normalization) -> CONSISTENCY 
// - Separate collection between objects (books and authors)
// - Just using referencing the id of another object, there is no relation
// between these two documents in the database. 

let author = {
  name: "Rob Green",
};

let book = {
  author: "id",
};

// 2. Using Embedded Documents (Denormalization) -> PERFORMANCE
// - Using this approach you can embed an author document inside of another document and use a single query. 



let book1 = {
  author1: {
    name1: "Rob Green",
  },
};


// 3. Hybrid 
// Useful for specific properties (like the preview page of multiple items on a E-commerce website)
let author2 = {
  name2: "Rob Green",
  // 50 other properties
};

let book2 = {
  author2: {
    name2: "Ty Hill",
    id2: "ref"
  },
};
