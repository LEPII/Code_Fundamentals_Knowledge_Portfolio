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

- A reference establishes a relationship between entities where each entity is typically stored in a separate document and linked together using a common key.
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

### One To One

Embedding

- First option is to co-locate the fields. Below we've includes fields for the headquarters address in the publisher document.

publisher
{
"_id": "pub123",
"name": "Me",
"street": "123 Ave",
"city": "Miami",
"state":"FL",
"country": "US",
"zip":"33303",
}

- We can also group related fields in a sub document -> like how we grouped them in "headquarters" sub-document.

publisher
{
"_id": "pub123",
"name": "Me",
"headquarters"" {
    "street": "123 Ave",
    "city": "Miami",
    "state":"FL",
    "country": "US",
    "zip":"33303",
    }
}

Referencing

publisher
{
"_id": "pub123",
"name": "Me",
"hq_id": "1234"
}

### One To Many

Embedding

- The most common way to embed a one-to-many relationship is to embed the "many side" as an array of sub-documents in the "one side"
- A second way to create one sub-document within the parent document. An attribute from the embedded document can become the key for each sub-document.
- An advantage to embedding a one-to-many document relationship is that there isn't duplication of information.
- It's also a great option if the information on the many side cannot exist by itself.

References

- One way to to use an array of references within a parent document
- A second way is to reference the parent in each of the many child documents.
- OR Can hi bi directional references Child => Parent and Parent => Children.

### Many To Many

Embedding

- We need to embed children in each parent document when embedding a many-to-many relationship.
- We can embed the document using an array in each parent document.
- If there's multiple books for a single author, there will be duplication. NOT ALL DATA DUPLICATION is bad ans it could allow for more effective query performance.

- Another way to embed is to use a single sub document with multiple key value pairs. We can embed the child documents into one sub document within the parent.

References

- When referencing a many-to-many relationship, we need to use an array so we can reference multiple documents within the parent document

- In EVERY relationship, it is possible to create bidirectional references for many-to-many relationships. -> DON'T RECOMMEND SINCE IT IS MORE EXPENSIVE TO MANAGE

## Validate Schema

- The schema acts a contract between DB Users because schema changes cannot be made unless all stakeholders agree.
- Mongo Schema Validation allows you to create validation rules for your fields and gives you control over what is written to the DB. We can define these riles when creating a new collection.
- When adding rules to an existing collection, only newly-inserted documents are checked for validation. Documents already in the collection are only validated when they are updated.

- To define rules, use can either use query operators or the JSON schema standard

- What happens to existing documents in a collection after we define schema validation rules?
- Strict ==> Applies rule to all inserted and updated docs
- Moderate ==> Applies rules to new and existing valid documents

- Invalid docs that existed before the validation rules are set are not checked for validated when they are updated.
- To check for invalid docs are validation rules: run a find query with the {$nor: [validator]} to find docs that don't match the schema.

Validation Actions

- The VA^ has two options:

- Error -> Reject update or insert operations
- Warn -> Allows operation to proceed, records violation in the log
 
- Default action to return an error.