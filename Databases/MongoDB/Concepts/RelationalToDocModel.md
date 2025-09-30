# Table of Content  
<!-- 
## Model for Workloads 
## Design Relationships
## Validate Schemas
-->

## Model for Workloads

Schema

- Blueprint for how data is organized in the database
- Requires gathering system requirements
- Mapping entities and relationships

- Data modeling in mongo requires identifying workloads and query pattens and then design the data model to support it.
- Data that's accessed together should be stored together.

- Documents align with rows in relational databases.
- Fields align with columns.

- The document model is inherently flexible. The document acts a schema which allows us to create similar but different schemas for the same set of entities depending on the needs of our application.
- The flexibility comes from the core design principles: Polymorphism, Easy to work with arrays, and the ability to embed related documents into a parent document/

- Embedding allows us to store documents within parent documents to represent relationships.
- Normalize Data - referencing other documents from the main document.

## Design Relationships

Referencing vs Embedding

Referencing

- A reference establishes a relationship between entities where each entity is typically stored in a separate document and linked togehter using a common key.
- Most often, these docs come from different collections but that is not a requirement.

Embedding

- When embedding, both entities are inside a single doc.

Questions to ask when trying to decide:

1. Simplicity -> Would keeping the pieces of info together lead to a simple data model and code? Y => Embedding DATA that is accessed together should be stored together.
2. Go Together -> Do the pieces of information have a "has-a," "contains", or similar relationship? Y => Embedding
3. Query Atomicity -> Does the application query the pieces of information together? Y => Embedding
4. Update Complexity -> Are the entities updated together? N => Referencing
5. Archival -> Should the entities be archived at the same time? N => Referencing
6. Cardinality -> Is there a high cardinality (current or growing) in the child side of the relationship? N => Embedding
Asking us to think about the possibility of an unbounded array, which we want to avoid.
7. Data Duplication -> Would data duplication be too complicated to manage and undesired? N => Embedding
8. Document Size -> Would the combined size of the pieces of information take too much memory or transfer bandwidth for the application? N => Embed
9. Document Growth -> Would the embedded piece grow without bound? N => Embedding
10. Workload -> Are the pieces of info written at different times in a write-heavy workload? N => Embedding
11. Individuality -> For the child side of the relationship, can the pieces exist by themselves without a parent? => Embedding