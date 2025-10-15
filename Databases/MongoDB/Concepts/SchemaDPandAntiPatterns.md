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
### Case-Sensitivity 

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

- Documents with the different shapes or schema versions can exist within the same collection.
- To help the app identify a new shape, you could use a "schema_version: 2" field or something similar and increment the schema number.
- To have multiple schemas contract relational DB where you can only have 1 schema per table.
- To update existing documents to the new shape, you can either have the application update the shape when the document is accessed OR have a background task performed update on all documents. 

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

- One way to manage this anti-pattern is to drop or archive unused collection.
- Sharding your database is another potential solution.

### Unnecessary Indexes

- Indexes are unnecessary when they are not/rarely used or are covered by another compound index.
- 64 is the limit per collection.
- Indexes require space and when used they are loaded in memory, grows as documents are added and can negatively impact on write performance.
- Before dropping an index, we recommend hiding it with the `hideIndex()` method and `dropIndex()` to permanently drop the index.

### Data Normalization

- Data normalization anti-pattern is when data model separates data that is accessed together into different collections.
- To Fix this you can either use the subset pattern or the extended reference pattern tot keep the data that we need to access together in a single collection.

### Case-Sensitivity

- MongoDB queries are case-sensitive by default.
- Case-Sensitivity Anti Pattern - Using the default, MongoDB query settings but expecting search terms to ignore case
- Could return unexpected results and reduce performance.

Solution

- Use Collations
- A collation defines the language-specific rules that are used by MongoDB to determine how characters in a string are sorted and compared during a query.
- Collations must specify a locale for desire language, e.g. `local: 'en'`; so that language-specific rules are used during the comparison.
- Collations also have a strength level from 1 to 5. Default is 3 which effectively makes the comparisons case sensitive
- To make the comparison case-insensitive we need to make the strength a 1 or 2.
- - A value of 1 compares base characters only, ignoring diacritics or accents and case.
- - A value of 2 includes secondary differences and diacritics.

Using Collations

- Option 1 : Build an index with a given collation, making sure the collation is not case sensitive. We then specify that same collation in our query.
- Option 2 : Assign a default collation when we create a collection. Default collation applies to all indexes on that collection. This collation cannot be changes after the collection has been created.
Any queries against the collection will also use the same collation. We can override the collation at the query level only.
- $regex with /i option. - well supported when used for exact matches. Not efficient when search terms are case insensitive. As a result, this approach isn't recommended.

db.Books.find(
{ title: `Practical MongoDB Aggregations` }
).collation({locale: 'en', strength: 2})

- If theres an index for a search but if it doesn't have the collation, you'll need to first drop the index if it has the same search and add the collation. 

## Manage Database Schema Lifecycle

### Schema Evolution

- Sometimes schemas change as part of a planned update where all stakeholders are informed and aware that changes will be made
- In modern apps, its common for changes to happen Ad hoc, after the initial schema design phase, and during development.
- Atlas Schema Suggestions - A built in tool to automatically monitor your cluster and suggest schema improvement.

### Schema Migration

- Transitions from one schema to the next is known as Schema Migration
- Large number of versions increases complexity.
- Limit the number of schema versions to the minimum required by your organization and use case.

- Once we are ready to migrate to the new version of our schema, there are several strategies that we could use including:
- - Eager Migration - All At Once;
- - Lazy Migration - Where Changes are implemented as data is used;
- - Incremental Migration - Where we take small steps to implement changes;
- - Predictive Migration - Update the Schema based on predictions for future data usage;

- To enforce a schema when there is more than one version is to use the `oneOf` keyword.