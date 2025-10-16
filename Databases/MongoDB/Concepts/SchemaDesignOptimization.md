# Table of Content  
<!--
## Your Schema 
### Single Collection Pattern
### Subset Pattern
### Bucket Pattern
### Outlier Pattern
### Archive Pattern

## Scale Your Data Model
### Embedding and Referencing in a Shared Environment
### Applying Patterns in a Shared Environment
-->

## Your Schema

### Single Collection Pattern

- To optimize overall performance, we want to use as few queries as possible and avoid $lookup operations.
- The single collection pattern groups related documents of different types into a single collection.
- Makes data retrieval more efficient by avoiding multiple queries to read non embedded related documents.
- You'll avoid expensive $lookup operations

Use Case

- Many to Many Relationships - where you are concerned about data duplication and embedding ins't a good option.
- One to Many Relationship - like a catalog of items / online shopping cart.

Variant 1

- Array of references
- docType field
- One-to-Many
- Many-to-Many

1. add a docType field to each collection - allows us to query the docs by type.
2. add a relatedTo field which will help model the relationships between documents  adn the new collection using an array of references
3. We'll move all the separate documents to a single collection
4. To complete the pattern, we'll have to create an INDEX on the `relatedTo` array to support our application queries.
5. Can now easily retrieve all documents to the specified book. We can also query all documents for a given doc type.

Variant 2

- Overloaded Field - a field is overloaded when it used for another purpose other than its original intent.
- One-to-Many Only 

1. In a bookstore app with a books and reviews collection , we add and overload the single collection ID field.

- Ex: `sc_id:202356` for books and `sc_id: 202356/378` for review - 202 being the id for the book and 378 being the id for the reviews. 

2.Move the documents to the books catalog collection

3.Create in Index for the single collection id to support the application queries. 

### Subset Pattern

- The subset pattern reduces document size by relocating data that is not frequently accessed in the document. 
- Making documents smaller means we can fit more of them in the internal cache, and improves overall DB performance. 
- Use when we have documents with large number of embedded documents - reviews/comments - stored in an array but only a subset of those documents are regularly used by our application

### Bucket Pattern

- The bucket pattern helps us group individual pieces of information into buckets so the documents size is more predictable, read only data that we need, reduce the mumber of documents in a collection, improve index performance and optimized for our system. Useful for One-to-Many Relationships with high card cardinality. 
- It common to use the bucket pattern with the computed pattern to store pre-computed statistic in the bucket.
- Deciding how the data will be queried so that you can decide how granular our bucket should be.
- Ex. If you most important queries need to compute monthly values, you'll group monthly views per book in buckets and store them in a Views collection.

Avoiding Unbounded Arrays 

- Schema validation Tool
- Add logic to our application to specify a threshold for the number of views per bucket document so what whenever a bucket document reaches that threshold, a new bucket document will be created. 

### Outlier Pattern

- The 

### Archive Pattern

## Scale Your Data Model

### Embedding and Referencing in a Shared Environment

### Applying Patterns in a Shared Environment
