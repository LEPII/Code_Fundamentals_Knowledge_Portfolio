/// RESTful Services

// Representation State Transfer
// We use simple http protocols principles Update and Delete data.
// Every http request has a verb or a method that determines its type of intention.
// HTTP Methods: GET, POST(creating), PUT(updating), DELETE
// Ex. Req = GET /api/customers/1  ==> Res = {id: 1, name""}
// If you're doing POST/PUT request, you should but you should also include the
// customer object in the body of the request.

// As a security best practice you should never ever ever trust what the client sends you.
// You should always validate the input.
// router parameters for essential or required values ex. /api/post/:id
// query string parameter for anything that is optional: ex. ?sortBy=name

// app.get(path, callbackFunction AKA RouteHandler (req, res) => {

// })
// )

/// MIDDLEWARE (or middleware function )

// The Process

// At runtime, when the server receives a request on the server, that request goes through
// a pipeline called the "Request Processing Pipeline".
// In the pipeline, we have one or more middleware functions.
// Each middleware function either terminates the request response cycle by returning
// the response object OR it will pase control to another middleware function.
