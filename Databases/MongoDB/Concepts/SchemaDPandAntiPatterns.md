# Table of Content  
<!--
## Patterns 
### Inheritance Pattern
### Computed Pattern
### Extended Reference Pattern
### Approximation Pattern
### Schema Versioning Pattern

## Anti-Patterns 
### Unbounded Arrays
### Bloated Documents
### Massive Numbers Of Collections
### Unnecessary Indexes
### Data Normalization

## Manage Database Schema Lifecycle
### Schema Evolution
### Schema Migration
-->

## Patterns

### Inheritance Pattern

- The inheritance pattern is based on the notion of polymorphism where each doc in the collection can have a different form/shape and its a key feature of MongoDB's document model.
- There cab ve a parent entity that includes fields shared across all child entities. At the same time the child entities can contain unique fields.
- Use inheritance pattern when your documents have more similarities than differences and you want them in the same collection so they can be read together.

### Computed Pattern

- This pattern allow you to run expensive operations when the data changes and stores the results for quick access.
- Common computations include in [mathematical & Roll-up operations].

Mathematical Operations

- With Mathematical Operations, the goal is to precompute the result when the data is written instead of running the calculation every time we need it.
- Ex would be when a review comes in for a book, calculate it once its added rather than calculate it after each render.

Roll-Up Operations

- Roll-up operations allow us to view data as a whole. They often involve grouping categories from smaller units into large ones, such as hourly, daily, monthly or yearly reports.

### Extended Reference Pattern

- An extended reference is a reference that is rich enough to include all that is needed so that we can avoid a join.
- You create an extended reference by embedding relevant data from multiple documents and different collections into the main document.
- Its primary objectives are to reduce the latency of read operations, avoid round trips to the database and avoid touching too many pieces of data. 
- The result will be faster reads due to a reduced number of joins and lookups.

- When deciding to use the extended reference pattern:
- - think about how you can minimize duplication;  
- - works best with fields that don't change often;
- - bring fields you need

Duplication

- We also need to keep in mind of how to keep duplicated data in sync with the source.
- To manage duplication when a source is updated, first identify what is the list of dependent extended references? - In other words, what other fields need to be updated once the source gets updated?
- Do the extended references need to be updated immediately or can they be updated at a later time. - simple answer for most cases is they can be updated at a later time.

### Approximation Pattern

- This pattern generates a statistically valid approximate number that is not exact.
- We use this pattern when the data is difficult or expensive to calculate and getting the exact number is not critical for our use case. 
- Suitable when working with big data.
- The App Pattern reduces writes and in some cases can help reduce contention on heavily updated documents. 

### Schema Versioning Pattern

## Anti-Patterns

### Unbounded Arrays

- MongoDB defines an unbounded array as a large, growing array with an unlimited number of elements.
- Unbounded arrays can strain application resources and put documents at risk of exceeding the BSON document size limit of 16 megabytes
- A sizable increase can also decrease index performance.

To avoid unbounded arrays:

- Only store data together if it's queried together.
- An array shouldn't grow without bounds.
- High cardinality arrays should not be embedded.

To correct the unbounded array patten:

The Extended Reference Pattern

- This pattern allows us to embed relevant data from multiple documents and different collections into the main document.

Subset Pattern

- This pattern reduced document size by relocating data that isn't frequently accessed.

- Both patterns allows to control the size of the array but the pattern you choose depends on your use case.

### Bloated Documents

- Data that is accessed together, should be stored together HOWEVER, it doesn't mean that all related data should be stored together.
- Bloated documents increase the size of the working set and will eventually impact performance. Database performance is impacted when the working set exceeds the internal cache size.

- WiredTire(Mongo's default storage engine)has an internal cache of 50% of the RAM - 1GB or 256MB - whichever is larger.
- To view the Logical Data Size, you can either use Mongo Atlas's Data explorer or use the .stats method to retrieve the number of documents and the average document size. You can multiple (numOfDocs * avgDocSize) to determine the logical data size of our collection.
- To retrieve the number of documents in a collection using the stats() method in mongosh, use the following:
db.collection.stats().count

- To retrieve the average size of documents in a collection using the stats() method in mongosh, use the following:
db.collection.stats().avgObjSize

- To address this issue we have 2 options:
- We can provision more memory on the cluster at a cost.
- We can update our data model to use the existing memory more efficiently.

### Massive Numbers Of Collections

### Unnecessary Indexes

### Data Normalization
