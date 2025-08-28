# Table of Content

<!--
## Using Mongo Indexes In Collections 
## Creating A Single Field Index in Mongo
## Creating MultiKey Indexes in Mongo
## Working With Compound Indexes In Mongo
## Delete Mongo Indexes 
-->

## Using Mongo Indexes In Collections

What are Indexes?

- Indexes are special data structures that store a small portion of the collection's data in a ordered form that is easy to traverse and search efficiently.
- Indexes point to the document identity and allow you to look up and access and update data faster.
- Indexes are used in MongoDB to improve query performance, speed up queries, reduce disk I/O and reduce the resources required for them.
- Indexes support queries such as equality matches and range-based operations and returns sorted results.  
- Indexes sort data in an ordered form based on the index fields and value sort order that are provided when the index is created

- Without indexes,
- - Mongo has to read every document in a collection by performing a collection scan to check if it matches the query being run.
- - It also needs to sort the results in memory if the query requires a sorted output.
- With Indexes
- - Mongo Only fetches documents identified by the index based on the query and returns the results after
- - If the index has what it needs, Mongo does not need to read the document.

- By default, there is one index per collection, which includes only the _id field.
- Every query should use an index.

- Indexes come with a write-performance cost. When we insert or update documents, we need ot update the index data structure.
- Write performance can degrade if we have too many indexes in a collection, we need to make sure that all the indexes that we have are being used, otherwise, we should delete the unnecessary or redundant indexes.

Most Common Index Types:

- Single Field Indexes
- - Single field indexes are indexes on one field only.

- Compound Indexes
- - Compound Indexes include more than one field in the index.

- In both these indexes, the starting fields or index prefix can be used to support queries.
- Both index types can also be multiKey indexes if they operate on an array field.
- Each array entry has a corresponding index entry.

Ex.
Index: active, accounts

## Creating A Single Field Index in Mongo

- Single Field Indexes are indexes on a single field.
- They support queries & sorts on a single field.

Ex. db.coll.createIndex({fieldname:1}) - we pass the order 1 for ascending.

- Ascending indexes can be used for both ascending or descending sorts.
- Its important to specify the order when using compounding indexes to perform sorts on multiple fields.

Ex. db.coll.createIndex({email:1}, {unique:true})

- The unique constraint helps with the queries helps with the queries and prevents duplication of the email values.

Ex. db.coll.getIndexes()

- shows the indexes that are being used.

Ex. db.coll.explain().find({birthdate: {$gt:ISODate("1995-08-01")}})

- When you append .explain() to a query, MongoDB returns a detailed query execution plan — basically, how it searched for your data.
- The winningPlan sub section tells you what strategy MongoDB used.
- There's typically two stages, an IXSCAN scan (or index scan that uses the birthday index) and a fetch stage which reads only the documents that the index has identified.
- If we return only the birthdate field, this fetch stage won't be necessary and the index covers the query. 

`
"winningPlan": {
  "stage": "FETCH",
  "inputStage": {
    "stage": "IXSCAN",
    "keyPattern": { "email": 1 },
    "indexName": "email_1"
  }
}
`

## Creating MultiKey Indexes in Mongo

How MongoDB works with array fields in an index

- When we define an index on an array field, that index is called a multikey index.
- Multikey indexes can index primitives, sub documents, or sub arrays.
- We can have an array field in a single field index or in a compound index.

For example, the following (if accounts field is an array) will create multikey indexes:

 db.coll.createIndex({accounts:1})
 db.coll.createIndex({email: 1, accounts:1})

- There's a limitation of only one array field per index so if an index has multiple fields, only one of them can be an array.
- Internally, Mongo decomposes the array and stores each unique value found within it as in as an individual index entry. 
- Note that the multikey indexes need to FETCH the documents after the IXSCAN stage because the index entries have each of the array value stored separately. 

When can multikey avoid FETCH?

Rarely — only if:

- You only query by the array field,
- You only project that same array field,
- And nothing else is required.
- But because arrays can have multiple values and ordering matters, Mongo almost always needs FETCH to confirm.

## Working With Compound Indexes In Mongo

What Compound Indexes Are

- it an index on multiple fields.
- Can also be multikey indexes if it includes an array field. (max 1 array field per index)
- Can support queries that match on the prefix of the index fields

How To Create A Compound Index

Ex. db.coll.createIndex({active: 1, birthdate:-1, name:1})

- Any queries that contains active or source by active can use the index because active is the first field or prefix in the index.
- Queries that don't use the index prefix can't use the index, even if they include other fields in it.
- ^ This is because indexes are ordered structures. The order in a compound index matters.
- In general in compound indexes, we fields tested for equality first, followed by fields that are used for sort or range.
- Additionally, if we require specific sorted results in our queries, the sort order of the field values in the index also matters to avoid in-memory sorts.

- Equality predicates test exact matches on a single value, like we do when searching for a specific active customer or birthday value.
- Should be placed first in a compound index
- Reduces query processing time.
- Retrieved few documents.

- Sort predicates determine the order of the results.
- Index sort eliminates the need for in-memory sorts and should be included in the index after the equality fields. This is because once we select a specific value for the first field, the other field values will be in order.
- The sort order in thee field values in the indexes are important if the query results are sorted by more than one field and they mix sort orders, that is some fields are in ascending order and other fields are in descending order.

- Range filters scan fields.
- In general, we recommend that range and sort should be placed after the equality in the index to avoid in memory sort or filtering.  

## Delete Mongo Indexes

Impact of Deleting an Index

- Indexes have a write cost.
- Every time we insert new documents or update them, the index keys need to be updated.
- Too many indexes in a collection can affect system performance.
- We should use delete unused or redundant indexes.

- Before deleting an index, make sure the index is not being used. Deleting an index that's the only index supporting a query will affect the performance of the query.
- With no suitable index, queries would have to scan every document in the collection to return the results.
- We can delete any index except for the default index on the _id.
- Recreating an index that was deleted can cause extra time and resources.
- If we're not sure if the index is needed, hide it before deleting it. Ex. db.coll.hideIndex(<index>)
- Mongo does not use hidden queries but continues to update their keys. Unhiding an index is faster than recreating it. 

How to Delete an Index

Ex. db.coll.dropIndex(<index>)

- We cna also drop indexes in the Atlas UI. 

- To delete multiple Indexes: 

Ex. db.coll.dropIndexes(<index>)

- With no parameter, it deletes all the indexes in the collection.(except for the _id index)