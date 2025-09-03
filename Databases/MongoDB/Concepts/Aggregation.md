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

## Using $Project, $Count and $Set Stages In a MongoDB Aggregation Pipeline

## Using the $out Stage in a MongoDB Aggregation Pipeline
