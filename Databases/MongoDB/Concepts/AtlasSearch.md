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

db.movies.createSearchIndex(
{ "mapping": { "dynamic": true} }
)

- Since we didn't provide a name for the index, it will be saved as default.
- each field in the movie collection will be indexed. This means we can create a search query for any of these fields. Even if we added a new field, it will be indexed automatically.

Static Mapping

- Static mapping index specific fields instead of the entire document.
- Since they take up significantly less storage than a dynamic mapped index,
- Ideal if we know the exact shape of our document and do not anticipate the fields to change.

db.movies.createSearchIndex(
"plotReleasedIndex",

{ "mapping": {
"dynamic": true,
"fields": { "plot": {"type": "string"},
"released": {"type": "date"}
}
} }
)

- MDB accomodates polymorphic data.
- If you attempt to insert a document with a field value data type different from the one specified in the search index, that particular document won't be included in the index.

To Do Both:

{ "mapping": {
"dynamic": true,
"fields": { "plot": {"type": "string"},
"released": {"type": "embeddedDocument", "dynamic": true} // this will make every field under the released document indexed.
}
} }
)

## Data Types

- Atlas Search supports common data types such as strings, numbers, booleans, and dates.
- These data types map to their BSON counterparts. Ex. The number maps to the BSON types: double, 32 & 64 bit integers.
- Supported data types also include: Arrays, objectId, document, embeddedDocuments.

- Arrays can hold various data types such as: [strings, dates, objectIds, numbers] - NOT dateFacet, numberFacet
- Indexes an array of strings is no different than indexing a field that is only a string.

  { "mapping": {
  "dynamic": true | false,
  "fields": { "fieldName": "type": "document", "dynamic": true | false, "fields": { "<field-name>": {<field-mapping-definition>}},
  }
  } }

- Document Data Type: - The "document" data type allows us to index fields that are sub-document. We can even index specific fields inside a sub-document.
- However, the document data type can't be used for fields that hold an array of sub-documents.
- To index an array of sub-documents, use the "embeddedDocuments" data type instead which also has the option to index specific fields within a sub-document.
- Atlas Search Indexes embedded documents separate from their parent documents.This is important because it grows the number of documents you have in your index.
- When using the "embeddeDocuments" data type, you can use either Dynamic or Static mapping.

embeddedDocuments Data Type Limitation

- Subdocuments with more than five levels of nesting
- dataFacets or numericFacets
- Embedded Document field highlights

Fields with Multiple Data Types

..."directors": ["Lui", ObjectId(12345)]
..."fields": {directors: [{"type": "string"}, {"type": "objectId"}]}

## $search operators: text and equals

text

- The text operator performs a full-text search of data in our search index.

db.movies.aggregate([
{ "search": {
"index": "plotReleasedIndex",
"text": {
"query": "nature",
"path":"plot",
"fuzzy" {}, // helps search with typos
}
}
}
{"project": {"_id": 0, "title":1, "plot":1 }}
])

equal

- The equal operator returns documents with a field that matches a specified value.
- It can only be used with certain data types: Booleans, Dates, objectIds, Numbers, Text indexed as tokens and arrays. The array type must contain one of the previously mentioned data types. If one of the elements in the array matches the query, the documents will be added dto the results.

db.movies.aggregate([
{ "search": {
"index": "plotReleasedIndex",
"equals": {
"path": "released",
"value": ISODate("1999-03-31T00:00:00.000Z"),
}
}
}
{"project": {"_id": 0, "title":1, "released":1 }}
])

The documents returns are the titles with the release dates of 03/31/1999

## $search operators: near and range

near

- The near search operator performs a search for dates, numbers or geographic locations nearest to a given value or point.
- Returns all documents in collection ordered by their proximity to the provided value.
- A common use is plotting locations near a given point on a map

db.movies.aggregate([
{ "search": {
"index": "plotReleasedIndex",
"near": {
"path": "released",
"origin": ISODate("1999-03-31T00:00:00.000Z"),
"pivot": 2629746000 // helps score our results. 
}
}
}
{"project": {"_id": 0, "title":1, "released":1 }}
])

Pivot

- The pivot value can best be described as the maximum distance from the origin that leads to a score of 0.5.
- The distance is the difference between the index fields value and the specified origin. A result with the distance of zero from the origin is given the highest score of 1.
- As we move away from the origin, the score drops below until it reaches 0.5 at the pivot value. The results past the pivot value are scored progressively below 0.5.
- A pivot value can be a integer or a floating point, depending on the data type use by the origin and its value cannot be 0.
- When the origin is a data or a number, we need to use an integer.
- Because we're searching for the nearest date in our example, the distance from the origin and our pivot value will be in milliseconds.
- When the origin is a GeoJSON location, the pivot value is measured in meters, must be specified as an integer or floating point number.
range

## Creating Search Facets
