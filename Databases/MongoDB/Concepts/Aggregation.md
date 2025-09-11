# Table of Content

<!--
## Introduction to MongoDB Aggregation
## Using $Match and $Group Stage in a MongoDB Aggregation Pipeline
## Using $Sort and $Limit Stages In a MongoDB Aggregation Pipeline
## Using $Project, $Count and $Set Stages In a MongoDB Aggregation Pipeline
## Using the $out Stage  in a MongoDB Aggregation Pipeline
-->

## Introduction to MongoDB Aggregation

- In the context of databases, aggregation is the analysis and summary of data.
- An aggregation stage is an aggregation operation that is performed on the data and does not permanently alter the source data.
- An aggregation pipeline is a series of stages completed one at a time, in order.
- A pipeline consists of multiple stages where data can be filtered, sorted, grouped, and transformed.
- Documents that are output from one stage become input into the next stage.

ex:
db.coll.aggregate({
{$stage_name: {<expression>}},{$stage_name: {<expression>}}
})

- A stage is an operation performed on the data.
- Some common stages include:
- - $match = filters for data that matches criteria
- - $group = group documents based on criteria
- - $sort puts the documents in a specified order

- The syntax for each stage is dependent on the stage.
- Sometimes field names are prefixed with a $. This is a field path. THis allows us to refer to the value in that field. 
ex. $set {defaultUsername: {
 $concat: ["$first_name","$last_name"]
  }}

## Using $Match and $Group Stage in a MongoDB Aggregation Pipeline

- $match

- filters for data that matches criteria.
- The match stage filters for documents that meet specified conditions and passes those documents to the next stage of the pipeline.
- The match stage takes one argument which is a query. The query works exactly like a find command.
- When using match, place it as early as possible in the pipeline so that it can use indexes. Because it filters, it reduces the number documents which lesses the amount of processing required.

  ex. db.coll.aggregate([
  {$match: {"state": "CA"}
  }
  ])

- $group

- The group stage groups documents according to a group key.
- The output of this stage is one document for each unique value of the group key.

ex.

{
$group: {
_id: <expression>, // group key
<field>: { <accumulator> : <expression>}
}
}

{
$group: {
_id: "$city", // group key
totalZips { $count : {}}
}
}

## Using $Sort and $Limit Stages In a MongoDB Aggregation Pipeline

- $sort

- A $sort stage sorts all input documents and passes them through pipeline in sorted order. (numeric value, string, dates or time stamps)
- We use 1 to indicate ascending order / We use -1 to indicate descending order

- $limit

- The $limit stage limits the number of documents that are passes on to the next aggregation stage
- It only takes a positive integer that represents how many documents to retain

  ex. db.coll.aggregate([
  {
  $sort: {
  pop: -1
  }
  },
  {
  $limit: 3
  }
  ])

## Using $Project, $Count and $Set Stages In a MongoDB Aggregation Pipeline

- $Project

- The project stage determines the out document shape.
- It allows us to specify the existing or new fields that will be returned by the aggregation.
- This stage performs a projection similar to the one we apply in find operations.
- IT should usually be the last stage because it specifies the exact fields in the output.
- Mongo already works out which fields are needed and reads only the fields that are required in the pipeline so there's usually no reason to use project earlier in the pipeline.

Ex. $project: {
<field1>: 1,
<field2>: 0,
<field3>: <new value>,
}

- Projections can either specified as either inclusion or exclusion.
- In the project stage, either include the fields that you would like to keep by setting the value to 1
- OR set the value to 0 if you are specifying the fields that you want to exclude.
- If the project fields are new fields, we can specify the value that we want to assign to them.
- You can also specify a new value to existing fields in project.
  Ex. db.coll.aggregate({ $project: {
    state: 1,
    stage: 0,
    population: "$pop",
  }
  })

- $Set

- The $set stage adds or modified fields in the pipeline
- Use when we want to change existing fields in the pipeline or add new ones to be used in upcoming pipeline stages without having to specify all of the existing fields.
- The $set stage takes the fields and values that we want to add or change

- $Count

- This stage counts the number of documents in the pipeline and returns the total count.
- The count stage receives a string that represents the new fields thats returned with the total document count.

Ex. {$count: "total_zips"}

returns total_zips: 12345

## Using the $out Stage in a MongoDB Aggregation Pipeline

- $out

- The $out aggregation writes the documents that are returned by an aggregation pipeline into a new collection.
- $out MUST be the lat stage in the pipeline.
- Out creates a new collection if it does not already exist BUT if the collection exist, $out replaces the existing collection with new data. Be mindful on what you name the collection unless you want an existing collection to be overwritten.

Ex. $out: {
db: "<db>",
coll: "<newcollection>"
}

- of if you want to use the same database that's used in the aggregation, you could just do:

Ex. $out: {
<newcollection>
}
