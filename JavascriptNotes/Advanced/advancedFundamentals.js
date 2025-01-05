// Scoping (Lexical Scoping, Block Scoping)
// Memory Management (Basics of how JS manages memory)

//// GARBAGE COLLECTION

//// GARBAGE COLLECTION ////

// JavaScript handles memory management automatically through a process called garbage collection. This means that the JavaScript engine is responsible for tracking objects and determining when they are no longer in use. When an object becomes unreachable, the garbage collector frees up the memory it occupies.

// Reference Counting: JavaScript often uses a technique called reference counting. Every object keeps track of the number of references pointing to it. When an object's reference count reaches zero, it becomes unreachable and is marked for deletion.

// Mark and Sweep: Another common method is mark and sweep. The garbage collector periodically scans the memory heap, marking reachable objects. Objects that are not marked are considered garbage and are reclaimed.
