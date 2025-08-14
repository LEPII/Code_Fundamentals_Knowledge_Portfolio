# Table of Content

<!--
## Inserting Documents in a MongoDB Collection
## Finding Documents in a MongoDB Collection
## Finding Documents by Using Comparison Operators
## Querying on Array Elements in MongoDB
## Finding Documents by Using Logical Operators
-->

## Inserting Documents in a MongoDB Collection

insertOne()

- To use the insertOne method, you will append it to the database and collection name like: db.collectionName.insetOne()
- Ex. while connected to a training Database, we call it on a grades use it like db.grades.insertOne()
- If there's no grades collection, mongo automatically creates it when you use insertOne()
- If there's no \_id field, mongo automatically creates it

insertMany()

- insertMany expects an array of documents that we want to insert each separated by a comma.

## Finding Documents in a MongoDB Collection

find()

- To use the find method, you will append it to the database and collection name like: db.collectionName.find()
- This will return all the documents from a specific collection

To retrieve a specific document from our collection, we can do this in two ways:

1. $eq operator:  
   { field: { $eq: <value> }}

2. implicit syntax of $eq:
   {field: <value>}
   ex: db.grades.find({ grade: "A"})

$in operator

- the $in operator allows us to select all documents that have a field value equal to any of the values specified in the array.
- to structure the query, specific the field that we're interested in followed by $in: then an array of values we want to match.
- db.collection.find({ field: {in: [value, value, etc...]}})
- ex. db.zips.find({city: {in: ["MIAMI", "CHICAGO"]}});

## Finding Documents by Using Comparison Operators

$gt(greater than)
$lt (less than)
$lte (less than or equal to)
$gte (greater than or equal to)

- to use a comparison operator, we specify a field followed by the comparison operator and a value;

$gt(greater than):

- it returns documents where the field contains a value greater than the specified value.
- ex. db.sales.find({ "items.price": { $gt:50}})
- When we run this command, all the results that contain at least one item sub-document where the price is greater than $50

$lt(less than):

- it returns documents where the field contains a value less than the specified value.
- ex. db.sales.find({ "items.price": { $lt:50}})
- When we run this command, all the results that contain at least one item sub-document where the price is lesser than $50

$lte(less than or equal to):

- it returns documents where the field contains a value less than or equal to the specified value.
- ex. db.sales.find({ "items.price": { $lte:50}})
- When we run this command, all the results that contain at least one item sub-document where the price is lesser or equal than $50

$gte(greater than or equal to):

- it returns documents where the field contains a value greater than or equal to the specified value.
- ex. db.sales.find({ "items.price": { $gte:50}})
- When we run this command, all the results that contain at least one item sub-document where the price is greater or equal than $50

## Querying on Array Elements in MongoDB

Common Use Case:

- Searching for every document with the fields that contains the value we specify.

Query Arrays in documents

Ex. db.accounts.find({ products: "InvestmentStock"})
This query is:

- looking for a product's field that has a value equal to invest stock
  OR
- a product's field with an array containing an element equal to investment stock.

- The results provided will have a products field with either an array or a scalar value containing investment stock.
- The results don't provide any documents that don't contain that value.

$elemMatch:

- If you want to query for value/values, but only return a match when they're in an array, this is where $elemMatch comes in.
- To do this, we need to use it along with th $eq operator. This ensures that the products field is an array that contains an "Investment Stock"
  Ex. db.account.find({products: {
  $elemMatch: { $eq: "InvestmentStock"}
  }
  })

- We can also use $elemMatch to find documents where a single array element matches multiple query criteria.
- To do this, we place each query criteria in $elemMatch, separated by a comma.
  Ex. db.account.find({<field>: {
  $elemMatch: { <query1>, <query2>, ...}
  }
  })

Ex. db.sales.find(: {
$elemMatch: { name: "laptop", price: { $gt: 800}, quantity: { $gte: 1} }
}
})

## Finding Documents by Using Logical Operators

$and

- The $and operator performs a logical and operation on an array of one or more expressions. It will return all of the documents that meet all the criteria specified in the array.
- When using the $and operator, if any one of the criteria isn't met in a given document, the document will not be included in the results. 

1. $and operator:
db.collectionName.find({ $and: [{<expression>,{<expression>},{<expression>},...]})
ex. db.routes.find({ $and: [{"airline" : "Southwest Airlines"}, { "stops": { $gte: 1}}]})

2. implicit syntax of $and:
db.collectionName.find({<expression>,<expression>,<expression>})
ex. db.routes.find({"airline" : "Southwest Airlines", "stops": { $gte: 1} })

- the comma here acts as the $and operator

$or

- The $or operator performs a logical or operation on an array of two or more expressions. It will return the documents that meet at least one the criteria specified in the array.
- When using the $and operator, if any one of the criteria isn't met in a given document, the document will not be included in the results. 

1. $or operator:
db.collectionName.find({ $or: [{<expression>,{<expression>},{<expression>},...]})
ex. db.routes.find({ $or: [{"airline" : "Southwest Airlines"}, { "stops": { $gte: 1}}]})

- we can use these operators like multiple $and operations made up of multiple $or operations.
- !! When including the same operator more than once in your query, you need to use the explicit $and operator.
