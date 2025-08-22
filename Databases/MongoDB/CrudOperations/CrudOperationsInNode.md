# Table of Content

<!--
## Working with MongoDB Documents in Node.js
## Inserting a Document in Node.js Application
## Querying a MongoDB Collection in Node.js
## Updating Documents in Node.js Application
## Deleting Documents in Node.js Application
## Creating MongoDB Transactions in Node.js Application
-->

## Working with MongoDB Documents in Node.js

The MongoDB Node.js driver allows us to represent BSON documents as JS objects.
Documents are the foundational organizing principle of storing data in MongoDB because they provide flexible and concise data representation

BSON

- BSON documents are binary-encoded serialized documents. This means that they are stored in a binary format, which is more compact than text-based JSON documents. This makes them more efficient for storage and transmission.
- Optimized for storage, retrieval, and transmission across the wire;
- More secure that plain text JSON
- More data types than JSON

`const account = {
_id: new ObjectId("2352"),
balance: 1000000
}`

## Inserting a Document in Node.js Application

Inserting A Document

<!--
const dbname = "bank"
const collection_name = "accounts"

const accountsCollection = client.db(dbname).collection(collection_name)

const sampleAccount = {
 account_holder: "Linus Torvalds",
 account_id: "MDB829001337",
 account_type: "checking",
 balance: 50352434,
}

const main = async () => {
 try {
   await connectToDatabase()
   // insertOne method is used here to insert the sampleAccount document
   let result = await accountsCollection.insertOne(sampleAccount)
   console.log(`Inserted document: ${result.insertedId}`)
 } catch (err) {
   console.error(`Error inserting document: ${err}`)
 } finally {
   await client.close()
 }
}

main()
-->

Inserting Many Documents

<!--
const dbname = "bank"
const collection_name = "accounts"

const accountsCollection = client.db(dbname).collection(collection_name)

const sampleAccounts = [
 {
   account_id: "MDB011235813",
   account_holder: "Ada Lovelace",
   account_type: "checking",
   balance: 60218,
 },
 {
   account_id: "MDB829000001",
   account_holder: "Muhammad ibn Musa al-Khwarizmi",
   account_type: "savings",
   balance: 267914296,
 },
]

const main = async () => {
 try {
   await connectToDatabase()
   let result = await accountsCollection.insertMany(sampleAccounts)
   console.log(`Inserted ${result.insertedCount} documents`)
   console.log(result)
 } catch (err) {
   console.error(`Error inserting documents: ${err}`)
 } finally {
   await client.close()
 }
}

main()

-->

## Querying a MongoDB Collection in Node.js

Using find()

<!--
const dbname = "bank"
const collection_name = "accounts"

const accountsCollection = client.db(dbname).collection(collection_name)

// Document used as a filter for the find() method
const documentsToFind = { balance: { $gt: 4700 } }

const main = async () => {
 try {
   await connectToDatabase()
   // find() method is used here to find documents that match the filter
   let result = accountsCollection.find(documentsToFind)
   let docCount = accountsCollection.countDocuments(documentsToFind)
   await result.forEach((doc) => console.log(doc))
   console.log(`Found ${await docCount} documents`)
 } catch (err) {
   console.error(`Error finding documents: ${err}`)
 } finally {
   await client.close()
 }
}

main()
-->

Using findOne()

<!--
const dbname = "bank"
const collection_name = "accounts"

const accountsCollection = client.db(dbname).collection(collection_name)

// Document used as a filter for the findOne() method
const documentToFind = { _id: ObjectId("62a3638521a9ad028fdf77a3") }

const main = async () => {
 try {
   await connectToDatabase()
   // findOne() method is used here to find a the first document that matches the filter
   let result = await accountsCollection.findOne(documentToFind)
   console.log(`Found one document`)
   console.log(result)
 } catch (err) {
   console.error(`Error finding document: ${err}`)
 } finally {
   await client.close()
 }
}

main()
-->

## Updating Documents in Node.js Application

Using updateOne()

<!--
const dbname = "bank"
const collection_name = "accounts"

const accountsCollection = client.db(dbname).collection(collection_name)

const documentToUpdate = { _id: ObjectId("62d6e04ecab6d8e130497482") }

const update = { $inc: { balance: 100 } }


const main = async () => {
  try {
    await connectToDatabase()
    let result = await accountsCollection.updateOne(documentToUpdate, update)
    result.modifiedCount === 1
      ? console.log("Updated one document")
      : console.log("No documents updated")
  } catch (err) {
    console.error(`Error updating document: ${err}`)
  } finally {
    await client.close()
  }
}

main()
-->

Using updateMany()

<!--
const database = client.db(dbname);
const bank = database.collection(collection_name);

const documentsToUpdate = { account_type: "checking" };

const update = { $push: { transfers_complete: "TR413308000" } }

const main = async () => {
  try {
    await connectToDatabase()
    let result = await accountsCollection.updateMany(documentsToUpdate, update)
    result.modifiedCount > 0
      ? console.log(`Updated ${result.modifiedCount} documents`)
      : console.log("No documents updated")
  } catch (err) {
    console.error(`Error updating documents: ${err}`)
  } finally {
    await client.close()
  }
}

main()
-->

## Deleting Documents in Node.js Application

Using deleteOne()

<!--
const dbname = "bank"
const collection_name = "accounts"

const accountsCollection = client.db(dbname).collection(collection_name)

const documentToDelete = { _id: ObjectId("62d6e04ecab6d8e13049749c") }

const main = async () => {
  try {
    await connectToDatabase()
    let result = await accountsCollection.deleteOne(documentToDelete)
    result.deletedCount === 1
      ? console.log("Deleted one document")
      : console.log("No documents deleted")
  } catch (err) {
    console.error(`Error deleting documents: ${err}`)
  } finally {
    await client.close()
  }
}
main()
-->

Using deleteMany()

- using deleteMany() without a filter parameter will delete all documents.
<!-- 
const dbname = "bank"
const collection_name = "accounts"

const accountsCollection = client.db(dbname).collection(collection_name)

const documentsToDelete = { balance: { $lt: 500 } }

const main = async () => {
try {
await connectToDatabase()
let result = await accountsCollection.deleteMany(documentsToDelete)
result.deletedCount > 0
? console.log(`Deleted ${result.deletedCount} documents`)
: console.log("No documents deleted")
} catch (err) {
console.error(`Error deleting documents: ${err}`)
} finally {
await client.close()
}
}

main()
-->

## Creating MongoDB Transactions in Node.js Application

- A multi-document transaction is a group of database operations that will be completed together as unit or not at all.
- They are used when a group of related operations must either all succeed or fail together which is a property known as atomicity.
- Ex could include transferring money on a mobile payment app, or taking an item from an inventory and adding it to a shopping cart.

The steps include:

- Start a client session
  <!--  // const session = client.startSession() -->
  Define the transaction options (optional)
  <!-- const transactionResults = await session.withTransaction(async () => { -->
- Define the sequence of operations to perform inside the transactions
<!-- 
const senderUpdate = await accounts.updateOne(
  { account_id: account_id_sender },
  { $inc: { balance: -transaction_amount } },
  { session }
)
const receiverUpdate = await accounts.updateOne(
  { account_id: account_id_receiver },
  { $inc: { balance: transaction_amount } },
  { session }
)

const transfer = {
transfer_id: "TR21872187",
amount: 100,
from_account: account_id_sender,
to_account: account_id_receiver,
}

const insertTransferResults = await transfers.insertOne(transfer, { session })

const updateSenderTransferResults = await accounts.updateOne(
{ account_id: account_id_sender },
{ $push: { transfers_complete: transfer.transfer_id } },
{ session }
)

const updateReceiverTransferResults = await accounts.updateOne(
{ account_id: account_id_receiver },
{ $push: { transfers_complete: transfer.transfer_id } },
{ session }
)

-->

- Release the resource used by the transaction
<!--
} catch (err) {
  console.error(`Transaction aborted: ${err}`)
  process.exit(1)
} finally {
  await session.endSession()
  await client.close()
}
-->

- By default, multi-document transactions have a 60-second time limits
- It is highly recommended that transactions release or close any resources that they use.
