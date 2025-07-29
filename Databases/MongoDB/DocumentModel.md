# Table of Content  
<!-- 
# Section 1 - Overview
## Document Structure
## JSON vs BSON
## Polymorphic Data
## Limits

# Section 2 - Data Types in Mongo
## Boolean
## Null
## String
## Number
## Object
## Array
## Dates
## ObjectId
-->

## Overview

In Mongo's Document's:

* they'll all end with curly braces;
* the data is composed of field/value pairs;
* the fields in MongoDB are strings and should be clear and descriptive;
* the values can be anything from strings, numbers, booleans, arrays, document objects, etc;
* A GOLDEN RULE of MongoDB is that data that is accessed together should be stored together in a single document. This allows Mongo to store diverse data within a single document. To do this we could use arrays or embedded documents.

BSON

* Mongo stores documents in a format called BSON. BSON is a Binary Format which is used for internal storage and transmitting data over the network.
* BSON is an extension on JSON which is meant to be lightweight, traversable, and efficient.
* It also provides additional data types such as dates, object ID, and timestamps.

Polymorphic Data

* Fields may contain several types of data that can vary from one document to the next.
* The types of data include text, geospatial data, time-series, graph data, etc;
* Another advantage is the ease of adding new fields. There is no need to do a complete rebuild of the data immediately. We can update existing documents as needed.
* * all we need to do to being including them in new or updated documents. We don't have to rebuild and re index our entire collection.

Limits

* Maximum document size of 16mb - ensures ensures efficient data retrieval and management. It also prevents documents from consuming too much memory or bandwidth which can degrade performance and make the databse harder to manage.
* In a single document, you could have a maximum of one hundred levels of nesting/embedded documents. This ensures that the code for Mongo can be done simply and efficiently. You'll more than likely will never need more than a few levels of nesting, but it's good to know that the limit exists.

## Data Types 

Boolean

* True or False 
* They are used to represent binary states or conditions such as whether a feature is enabled.

Null

* Null values are used to represent the absence of a value, or an unknown value.

String

* These are sequences to characters used to represent text;
* In Mongo, strings are enclosed in single or double quotes;

Number

* In Mongo, the number type can be integers or floating-point values.
* BSON supports two types of integers: 32 bit and 64 bit. In documents they are represented as Int32 - 32-bit && Int64 - 64-bit
* When it comes to representing floating point values, BSON includes data types called Double and Decimal128 which are used for high precision calculations in financial data.

Objects

* We use objects to embed documents within a parent document. This makes it easier to keep related data together as well as structure our documents.
* Embedding documents provide great flexibility when modeling related data that should be accessed together.

Array

* Denoted by square brakets that are used to groups of values;
* Each element can be any data type;

Dates

* Represent as a timestamp;
* Makes it efficient for querying and sorting;
* Epoch (milliseconds since Jan 1,1970);
* Efficient for storage, easy to convert and fast it allows fast comparisons and computations 

ObjectId

* Every document must have a field called "_id" with a unique value that serves as it's unique identifier
* Can provide any value
* Must be unique
* If non is provided, Mongo will automatically generate unique ObjectId for _id
* They will consist of a timestamp, a random value, and an incremental counter that guarantees its uniqueness;