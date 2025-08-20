# Table of Content

<!--
## Sorting and Limiting Query Results in MongoDB 
## Returning specific data from a query in MongoDB
## Counting Documents in A mongoDB Collection 
-->

## Sorting and Limiting Query Results in MongoDB 

Cursor

- A cursor in MongoDB is a pointer to the result set of a query.
- The db.collection.find method returns a cursor and points to the documents that match that query.
- Cursor methods which are chained to queries can then be used to perform actions on the results set.

Sorting the Results

cursor.sort()
ex. db.companies.find({category_code:"music"}).sort({name:1})

- Anytime that you're passing a document to the sort method:
- - a value of 1 will specify that you want ascending order;
- - a value of -1 will specify that you want descending order for that property;
- You can sort multiple properties at the same time by passing additional fields to this document.
- Sorting alphabetization in MongoDB, capital letters will be sorted first and grouped together, followed by the lowercase letters being sorted and put together. (You can change this behavior by using the options document in the sort method)
- We can sort string, numeric fields or fields of just any other type in the same way.

Limiting the Number of Documents in the Results

cursor.limit()

- Limiting the results can enhance performance by avoiding unnecessary data processing.
ex. db.companies.find({category_code:"music"}).sort({number_of_employees:-1}).limit(3)

## Returning specific data from a query in MongoDB

db.collection.find(<query>, <projection>)

- By default, queries in MongoDB returns all fields and their matching documents.
- Sometimes an application will only use data from a subset of these fields.
- We can select the number of fields return. We refer to this process as "projection and it can be used used in most find queries"
- It's important to node that inclusions and exclusion statements can't be combined in most projections. The _id field is the exception.

Include:
db.collection.find(<query>, {<field>:1, <field>:1})
ex. db.inspections.findOne({sector:"Restaurant - 818"}, {business_name:1, result:1,_id:0})

- using 1 as the value, we are using an inclusion approach to our projection document to make sure that only those specific fields are added to the result. 

Exclude:
db.collection.find(<query>, {<field>:0, <field>:0})

- using 0 as the value, we tell Mongo to exclude a field from the results

## Counting Documents in A mongoDB Collection 

db.collection.countDocuments(<query>, <options>)
ex. db.inspections.countDocuments({tripduration: {$gt: 120}, usertype:"Subscriber"})
result ex. 313
