//// Classes In Typescript

//// Table Of Content

//// - Types of Tests

//// Types of Tests ////

/// Unit Tests

// Unit testing focuses on testing individual, isolated components. These "units" are typically functions, methods, or small classes. It can be  typically be written alongside the code itself.
// This can help with things like early bug detection and refactoring with confidence + faster feedback.

// Best Practices For Unit Tests

// A guideline for how many unit test should be written for a given function should be greater than or equal to the number execution paths.

// Testing Strings

// Your tests shouldn't be too general nor too specific. If they're too specific,they can break easily but if they're too general, they won't give you the confidence that it'll break.

// Testing Arrays

// When testing arrays, you can be too specific (which is what we don't want)
// - when don't look for the exact location of an element of an array.
// - when we check for the array length

///

/// Integration Tests

// Integration testing focuses on verifying the interactions between different parts of the software making sure they work together correctly.

// make a specific test file name for each model

// You should aim to test all your critical routes in your integration tests
// - Prioritize testing the most critical and frequently used routes first
// - Focus more intensely on testing the complex routes.

// For each route, test various scenarios, including:
// --Successful requests with valid data.
// --Requests with invalid or missing data (and ensure proper validation and error responses).
// --Requests that involve relationships between models (e.g., creating a program that belongs to a user).
// --Error conditions (e.g., trying to access a non-existent resource).
// --Pagination, filtering, and sorting (if implemented).
// --Authentication and authorization (if applicable).

// Concepts 
// - Dedicate Test Database
// - Realistic Test Environment (as much as feasible):
// - Seed Test Data Strategically
// - Clear Test Setup and Teardown (beforeEach, afterEach,  beforeAll and afterAll hooks)
// - Avoid Hardcoding IDs
// - Verify Data Changes
// - Focus on Integration Points
// - Descriptive Test Names
// - Error Handling
// - Asynchronous Operations

/// End-To-End Tests
// End-to-end testing simulates real-world user scenarios to verify the entire application flow from start to finish.
