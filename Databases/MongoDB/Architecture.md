# Table of Content  
<!-- 
## MongoDB Architecture
## CAP Theorem 
## High Availability: Replication  
## Consistency: Read and Write Concerns
## Scaling: Sharding 
-->

## MongoDB Architecture

MongoDB Architecture: Document, Collection, Database, Node, and Clusters

1. Document

* Concept: The fundamental unit of data in MongoDB.
* Analogy (Relational): Similar to a row in a relational database table.
* Structure: A JSON-like BSON (Binary JSON) object. BSON extends JSON with additional data types and is more efficient for storage and network transmission.

Key Characteristics:

* Schemaless (Flexible Schema): Documents within the same collection can have different fields, structures, and data types. This offers great flexibility for evolving data models.
* Rich Data Types: Supports various data types beyond basic JSON, including dates, BSON object IDs, binary data, etc.
* Embedded Documents and Arrays: Documents can contain other documents and arrays of documents, enabling the representation of complex, hierarchical relationships within a single document. This often reduces the need for joins, improving read performance.

2. Collection

* Concept: A grouping of MongoDB documents.
* Analogy (Relational): Similar to a table in a relational database.

Characteristics:

* Holds Documents: A collection contains a set of documents, usually related by their purpose or content.
* No Fixed Schema (Flexible): While documents within a collection often share a similar structure, there's no strict schema enforced at the collection level. This means you can store documents with varying fields in the same collection.
* Dynamic Creation: Collections are created automatically when you first insert a document into them.

3. Database

* 4Concept: A physical container for collections.
* Analogy (Relational): Analogous to a database in a relational database system.

Characteristics:

* Logical Grouping: A database logically groups related collections.
* Multiple Databases: A single MongoDB instance can host multiple databases, each with its own set of collections.
* Isolation: Databases provide a level of isolation, allowing different applications or parts of an application to use separate databases.
Default Databases: MongoDB comes with some default databases like admin, local, and config.

4. Node (Replica Set Member)

* Concept: A single running instance of the mongod process.
* Role in a Replica Set: In a distributed MongoDB deployment, nodes are the individual servers that hold a copy of the data.

Types of Nodes in a Replica Set:

* Primary: The single node in a replica set that receives all write operations. It's responsible for applying operations and replicating them to secondary nodes.
* Secondary: Nodes that asynchronously replicate data from the primary. They can serve read operations (depending on read preferences) and can be elected as the new primary if the current primary becomes unavailable.
* Arbiter: A special type of replica set member that does not hold data but participates in elections to break ties. Arbiters are lightweight and consume fewer resources.

Function: Each node stores a portion or all of the data, handles client requests, and participates in the replication and sharding processes.

5. Clusters (Sharded Cluster)

* Concept: A distributed system that allows MongoDB to scale horizontally by distributing data across multiple servers (shards).

* Purpose: Designed to handle large datasets and high throughput, exceeding the capabilities of a single replica set.

Components of a Sharded Cluster:

* Shards: Each shard is a replica set that holds a subset of the sharded data. Data is partitioned (sharded) across these replica sets.

* Config Servers: Store the metadata for the cluster, including the mapping of data chunks to shards. This information is crucial for the mongos router to direct queries to the correct shard. Config servers themselves are deployed as a replica set for high availability.

* Mongos (Query Routers): Act as an interface between client applications and the sharded cluster. They receive client requests, determine which shard(s) contain the requested data based on the cluster metadata, route the query to the appropriate shard(s), and then aggregate the results before returning them to the client.

How it Works: When data is sharded, a shard key is chosen for a collection. MongoDB uses this key to distribute documents across the shards. When a client application sends a query, the mongos router uses the shard key to route the query to the correct shard, or to all shards if the query doesn't include the shard key or requires a broadcast.

## CAP Theorem

* The CAP Theorem is a fundamental concept in distributed systems, and it's crucial to understand how MongoDB navigates its trade-offs.
* The CAP Theorem states that a distributed data store can only simultaneously guarantee two out of the following three properties:
* Consistency (C): Every read receives the most recent write or an error. In a consistent system, all clients see the same data at the same time, regardless of which node they connect to.
* Availability (A): Every request receives a (non-error) response, without guarantee that it contains the most recent write. This means the system is always operational and responsive, even if some nodes fail.
* Partition Tolerance (P): The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes. In essence, the system can tolerate network failures that split it into multiple isolated partitions.

* MongoDB prioritizes data consistency and the ability to continue operating during network partitions. This means that in certain network failure situations, it might temporarily sacrifice full availability to ensure that data remains consistent and uncorrupted. Developers have the flexibility to adjust read and write concerns to fine-tune the balance between consistency and availability based on their application's specific requirements.

## High Availability: Replication  

## Consistency: Read and Write Concerns

## Scaling: Sharding