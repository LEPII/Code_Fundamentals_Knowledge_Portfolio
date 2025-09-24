# Table of Content

<!--
## Atlas Search Fundamentals
## Dynamic vs. Static Mappings
## Data Types
## $search operators: text and equals
## $search operators: near and range
## Creating Search Facets
-->

## Atlas Search Fundamentals

- The Atlas search process, mongoT is an abstraction layer that includes the Apache Lucene engine.A
- THe process interfaces with the rest of Atlas Search to enable a seamless integration with MongoDB.
- Using Apache, the mongoT process facilitates search creating search indexes based on rules we supply in the index definition.

Ex. db.movies.createSearchIndex(
"plotIndex",
{
"mappings": { "fields": {"plot": { "type": "string"

}}}})

- Similar to other indexes, search indexes take up space on disk and are continuously updated when documents are inserted, updated, or deleted.
- The mongoT process uses MongoDB Change Stream technology to keep search indexes up to date.
- Now that the search index is set, the mongoT process can query documents we want to search.

- To execute a search query, we use aggregation using the $search and $searchMeta stage.
- The $search stage must be the first stage in an aggregation pipeline otherwise we will get an error.

Ex. db.movies.aggregate([
{
"$search": {
"index": "plotIndex",
"text": {
"query": "space",
"path": "plot"
}
}
}
])

- When this is ran, every document returns has space mentioned in the plot field.
- We can make results easier to read by adding limit and project fields to.

- We can use the $meta aggregation operation in the project stage which allows to see how the results are scored. Ex. "score": { "$meta": "searchScore"}
- Atlas search has a relevance-based scoring system. The documents with the highest score is the most relevant and it is returned first.
- AS gives documents with a higher score if the query term appears frequently in a document, and a lower score if the query term appears across many documents in the collection.

- The $searchMeta stage is used to return the summary of your search results.
- If you wanted to get the count of the documents returned, it would be more performant to use $searchMeta stage instead of adding a count stage at the end of your pipeline.
- Like the $search stage, the $seachMeta stage must be used at the beginning of the aggregation pipeline.

## Dynamic vs. Static Mappings

- Field Mapping: When creating a search index, we need to provide some details on which fields need to be indexed.
- Having the correct field mapped can help with the performance of your search.

Dynamic Mapping

- With DM, we index every field with supported data type.
- DM are great for data sets with unknown or frequently changing fields.
- Also great when experimenting with Atlas Search, so you don't have to constantly update your search index depending on the query.
- DM have have a increased size and performance impacts compared to static mappings.

since we didn't provide a name for the index, it will be saved as default.
each field in the movie collection will be indexed. This means we can create a search query for any of these fields. Even if we added a new field, it will be indexed automatically. 
db.movies.createSearchIndex(
   { "mapping": { "dynamic": true} }
)

Static Mapping

When to use them

## Data Types

## $search operators: text and equals

## $search operators: near and range

## Creating Search Facets
