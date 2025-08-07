# Table of Content  
<!-- 
## Using Mongo's Connection String
## Troubleshooting Connection Errors
## Using the MongoDB Shell
-->

## Using Mongo's Connection String

Mongo provides to format for the connection string

- Standard Format
- SRV Format

By default Mongo uses the SRV format. This indicats the client, that the host name that corresponds to a DNS SRV record. 
MongoSH will then query the DNS for running instances of Mongo. 

The connection string has the following format:
mongodb[+srv]://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]

It consists of some mandatory fields and several optional fields enclosed within square brackets.
Understanding the structure of a connection string will help you reverse engineer it in the case you don't have access to a source like atlas in order to copy it. 

Breaking it down:

mongodb:

- required prefix that identifies it at a connection string

+srv:

- Atlas deployments use the SRV connection format by default
- The +srv edition automatically sets the TLS option to true & tells Mongo to use the DNS seed list.
- The DNS seed list has a list of hosts behind it that we connect to. 

<username>:<password>

- These are optional but must be provided if access control is enabled.
= In atlas, access control is enabled by default and it actually can't be disabled.

@]host1[:port1]
ex. @cluster0.a56xnxt.mongodb.net:2500

- Host and optional port number
- If a port number is not specified, Mongo will use the port 27017

[/[defaultauthdb]
ex. my_ldapdb

- The default auth db.
- Optional parameter that lets us specify the authentication db to check the user credentials again.
- Here we are telling Mongo to use the LDAPDB database for authentication.
- By default Mongo will check against the admin cluster if a DB is not specified.

[?options]]
ex. ?retryWrites=true&w=majority

- The connection string provides an option to include a query string that contains connection specific options, such as key value pairs.
- The default connection options allow you to securely connect and interact with your cluster but you can use the query string to find tune the connection behavior.

## Troubleshooting Connection Errors

- Most connection issues stem from safeguards put in place by MongoDB to secure your data. For example, Mongo creates user credentials for authentication to prevent access to our data

Network Access Errors

- Error: Alert number 80 - It looks like this is a MongoDB Atlas Cluster. Please ensure that your Network Access List allows connections from your IP
- This is possible that the access isn't sufficient to allow our current IP address to connect.
- A possible solution is to connect your IP address in Atlas in the "Network Access" security settings.
- Keep in mind that allowing connections from anywhere poses as a security risk. MongoDB warns against doing this in the documentation.

User Authentication Errors

- Error: bad auth : Authentication failed.
- One possible cause of an auth error is typing the password incorrectly. Passwords are case sensitive.
- Another possible cause is that the db user specified doesn't actually exist in Atlas.
- If the user doesn't exist, we need to create it in Atlas by -> going to the DB Access Tab -> Add New Database User8
- You can always edit the user like change the password or modify the user's access privileges.

Too Many Open Connections

- M0, M2, and M5 clusters have a max of 500 open connections.
- You can either scale the cluster to a higher tier or restart the application.
- Consider using the maxPoolSize option to limit the number of connections in a connection pool.

## Using the MongoDB Shell

Insert and Retrieve Documents

- use the insertOne() command. It inserts a single document and returns a document with status of the insert.
- use the find() command to retrieve a document. It executes a query THEN it returns the results

lets say a movie document "Christmas Vacation" is missing from our database

- First verify that the movie doesn't exist in our database by using the find() command.
- The argument of the command is a document containing a field value pair.
ex: db.movies.find({title: "Christmas Vacation"})

Write and use Javascript functions

`function cube (number) {
    if (typeof number !== "number") {
    throw new Error ("Input must be a number")
    }
    return number ** 3;
}`

Switch between databases within a script

- MongoSH, you can switch databases with a .getSibling method 

Load Script

- MongoSH has a load method that allows us to load a JS file into the current shell and run it. 

Edit Commands in editor of choice

- If we want to edit how a function works, we can the `edit` command to open that function in our editor of choice.
- Using an external editor is helpful when we want to make a change to a multiline command or if we want to write a longer command from scratch. 