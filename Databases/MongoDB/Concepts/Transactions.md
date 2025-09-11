# Table of Content

<!--
## Introduction to ACID Transactions
## ACID Transactions In Mongo
## Using Transactions In Mongo
-->

## Introduction to ACID Transactions

- Anytime database operations are used to transfer value from one record to another, we need to guarantee that those operations happen altogether or not at all in order to ensure the integrity and consistency of our data.
- ACID transactions are a group of database operations that will be completed together as a unit or completely fail.

- ACID:
- Atomicity: All operations will either succeed or fail together
- Consistency: All changes made by operations are consistent with database constraints
- Isolation: Multiple transactions can happen at the same time without affecting the outcome of the other transaction
- Durability: All the changes that are made by the operation in a transaction will persist, no matter what

## ACID Transactions In MongoDB

- updateOne() is technically an Acid Transaction
- Multi-Document Operations are not inherently atomic and require extra steps to have ACID properties
- Mongo "locks" resources involved in a transaction.
- Incurs perfomrance costs and affects latency.
- Use multi-document transactions as a percise tool.
