# Table of Content

<!--
## Replacing a Document in MongoDB
## Updating Documents using .updateOne()
## Updating MongoDB Documents by using .findAndModify()
## Updating MongoDB Documents by using .updateMany()
## Deleting Documents in MongoDB
-->

## Replacing a Document in MongoDB

replaceOne()
db.collection.replaceOne(filter, replacement, options(not required))

ex. db.books.replaceOne(
{_id: ObjectId("0123456789") },
{
title: "Friends",
authors: ["Chris", "Anthony"],
audibleLength: "2h",
narrator: "Mario"
} )

results will include:
matchedCount: = passed the filter
modifiedCount: = how many of those were modified

## Updating Documents using .updateOne()

updateOne()

- updates a single document

db.collection.updateOne(<filter>,<update>,{options (not required)})

- the filter arguments contains the selection criteria for the update
- the update argument contains an update operator expression that will be used in the update.

$set Operator

- the $set operator adds new fields and values to a document
- it replaces the value of a field with a specified value

upsert

- if the update filter doesn't match any documents then no updates occurs
- in this case, we might want to create a document. - This is what the upsert option allows us to do.
- Upsert(short for update or insert) inserts a document with provided information if matching documents don't exist.
- In either case, the update operation will be carried out.

ex. db.podcasts.updateOne(
{ title: "The Developer Hud" },
{ $set: { topics: ["databases", "MongoDB"] }},
{ upsert: true }
)

$push Operator

- appends a value to an array
- if absent, $push adds the array field with the value as its element

ex. db.podcasts.updateOne(
{ _id: ObjectId("01234") },
{ $push: { hosts: ["Lui"] } })

## Updating MongoDB Documents by using .findAndModify()

.findAndModify()

- .findAndModify returns the document that has just been updated. This  is a powerful method that guarantees the correct version of the document will be returned without another thread modifying the document before we are able to view it. 

When to use .findAndModify() and how .findAndModify() is different from updateOne()? 


- Use Case: Lets say you want to keep track of the number of downloads. One way to update and return the number of downloads is to use the updateOne & findOne methods.
- The problem with this approach is: 

1. that it makes two trips to the server where .findAndModify is only one. 
2. Another user could modify the document before our findOne which would result in a different version of the document.

How to use .findAndModify()

ex. db.podcasts.findAndModify(
query: { _id: ObjectId("01234") },
update: { $inc: { downloads: 1 } },
new: true
)

- By default, the return document does not include the modifications made as part of the update. Set the new option to true so that the modified document is returned.

## Updating MongoDB Documents by using .updateMany()

updateMany()

- updates a multiple documents
- it is not an all-or-nothing operation
- in the rare instance where it fails, the operation will not roll back the updates, so only some documents maybe updates. 
- if this happens, we need to run the update query again to update the remaining documents.
- updateMany() also lacks isolation, meaning that updates will be visible as soon as they're performed. (may not be appropriate for some type of businesses like financial transactions)

db.collection.updateMany(<filter>,<update>,{options (not required)})

ex. db.podcasts.updateMany(
{publishedDate: { $lt: ISODate("2019...") }},
{$set: { status: "LEGACY }})

## Deleting Documents in MongoDB

deleteOne()

db.collection.deleteOne(<filter>, {options (not required)})
ex. db.podcasts.deleteOne({_id: ObjectId("01234")})

deleteMany()

db.collection.deleteMany(<filter>, {options (not required)})
ex. db.podcasts.deleteMany({category: "crime"})
