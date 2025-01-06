// Chapter 1. A Pragmatic Philosophy
// Pragmatic takes responsibility for everything they do. 

// Topic 1. It’s Your Life


// Topic 2. The Cat Ate My Source Code
// Be honest and direct. We must own up to our shortcomings, our ignorance and our mistakes. 

// TEAM TRUST - Your team must be able to trust and rely on you, and you need to be comfortable relying on them as well. It’s essential for creativity and collaboration. In an environment filled with trust, you can safely speak your mind, your ideas and rely on your team members who can then in turn rely on you. 

// TAKE RESPONSIBILITY - You must analyze the risks that are beyond my control. Expect to be accountable for it. 

// 1. Admit it honestly and offer options. Don’t blame someone/something else or make up an excuse. Provide solutions, not excuses.  

// Run the conversation in your mind. Will they ask “Did you consider that?”
// Any time you say “idk” also say “but I’ll find out.” 


// Topic 4 - Stone Soup and Boiled Frogs

// It’s easier to ask for forgiveness than it is to get permission. 

// Topic 5 - Good-Enough Software

// Involve your users in a trade off. 
// The scope and quality of the system you produce should be discussed as part of that system's requirements.
// Early Access To Users can lead to a better end result.  
// Know when to stop.
// Don't spoil the program with over refinement. It may not be perfect, don’t worry, it could be perfect. 

// Challenge

// Look at the tools, OS systems that you use regularly. Consider the effect of modulation on your software. Advantages / Disadvantages of both? 

// Topic 6 -  Your Knowledge Portfolio

// Your ability to learn new things is your most strategic asset. 

// YOUR KNOWLEDGE PORTFOLIO 

// All the facts programmers know about computing, the applications domains the work in and all of their experience as their knowledge portfolios. Meaning it is similar to managing your financial portfolio. 
// Serious investors invest regularly as a habit. 
// Diversification is the key to long term success. 
// Smart investors balance their portfolio between conservative and high/risk high reward.
// Investors try to buy low and sell high for maximum return. 
// Portfolios should be reviewed and rebalanced periodically.

// You must invest in your knowledge portfolio using these 6 guidelines. The good news is that managing this is a skill - which can be learned and improved over time. The trick is to make yourself do it initially and form a habit / until your brain internalizes it. That way, you can suck up new knowledge automatically. 

// Building Your Portfolio 
// Invest In Your Knowledge Portfolio Regularly. Even If It’s Just A Small Amount. Plan It.
// The More You Know (Diversification), The More Valuable You Are. As A Baseline, You Need To Know The In’s And Out’s Of What You Are Working With Currently But Don’t Stop There.  
// Manage Your Risk. Buy Low And Sell High, - Learning A New Tech Before It Becomes Popular Can Be Just As Hard As Finding An Undervalued Stock But The Payoff Should Just Be As Rewarding. 
// Always Review And Rebalance. 
// Learn A New Language Every Year. 
// Read A Technical Book Each Month.
// Experiment With Different Tech Environments.
// Stay Current - Read News And Posts Online About Tech That's Different Of That Of Your Current Project.
// Once You're Comfortable With A Piece Of Tech, Move On And Learn Another One. Regardless If You're Not Going To Use It On A Project.  

// Think critically of the knowledge you read and hear. Quickly analyze what you read/hear by asking the 5 why’s. 
// Ask why at least 5 times. Dig deeper by asking why. 

// Topic 7 - Communicate!

// Tip 11 -  English is just another programming language. 
// Understand the needs, interests and capabilities of your audience. 

// The trick is to get feedback, don’t wait for questions, ask them. The meaning of your communication is the response you get. Know what you want to say. 

// Plan / Write an Outline on what you want to say - Ask yourself: Does this communicate what I want to say that works for them?
// Be An Active Listener
// Get back to people. Always respond, even if it’s with “I’ll get back with you later” 

// The more effective your communication, the more influential you will become. It is what you say and how you say it. 

// Build documentation in, don’t bolt it on. 

// Chapter 2. A Pragmatic Approach 

// Topic 8. The Essence of Good Design

// Good design is easier to change than bad design. ETC(Easier to change) principle. 

// Topic 9. DRY—The Evils of Duplication

// It’s the duplication of knowledge, intent. Expressing the same thing in two different places/ways. Here’s the asset test:

// If a part of the code has to change, do you see yourself making those changes in multiple places and in multiple different formats? 

// Issue: Whenever a module exposes a data structure, you’re coupling all of the code that uses that structure to the implementation of that module. Where possible, always use access/functions to read/write the attributes of objects. It would make it easier to add functionality in the future. 

// Representational Duplication 
// Look for tools that specify the tools in some mutual format.

// Duplication Across External API’s
// If you can’t find such specifications, consider creating one and publishing it. Not only would others find it useful but you may get help maintaining it. 

// Duplication With Data Sources
// Rather than writing code that represents external data in a fixed structure (an instance of a structured class), just stick it to a key/value data structure. (Map/Hash/Dictionary/Object) - Add a simple table validation suite that verifies the map you created contains atleast the data you need in the format you need it. (Your API documentation might be able to generate this)

// InterDeveloper Duplication

// Make it Easy to Reuse   

// Topic 10. Orthogonality

// Orthogonality is a critical concept that you want to produce systems that are easy to design, build and extend. 

// Once you apply Orthogonality directly, you’ll notice an immediate improvement in the quality of systems that you produce.

// In programming, orthogonality refers to the concept of features or functionalities being independent of each other. It essentially means that you can combine different aspects of the language in various ways to achieve your desired outcome without unexpected limitations or interactions.
 
// Keep your code decoupled. Write shy code. 
// If you need to change the object’s state, have the object do it for you.

// Avoid global data.

// In Object Oriented Programming, context is often passed as parameters to object constructors. In other code, you can create structures containing the context and pass around references to them. 

// The singleton pattern in a way for ensuring there is only one instance of an object of a particular class. Many people use this as kind of a global variable particularly in languages like Java that doesn’t support Globals. Be careful with singleton as the can lead to unnecessary leakage. 

// Avoid similar function 
// Duplicate functional code is a sign of structural problems. 

// GET IN THE HABIT OF BEING HIGHLY CRITICAL OF YOUR CODE. Look for any opportunity to reorganize it to improve structure and orthogonality.  - REFACTORING

// Orthogonality and Testing 
// An orthogonalized system is easier to test. Because the interactions are formalized and limited, more of the system testing can be performed on the modular level.
// These tests should be built automatically as part of the build process. 

// Orthogonalize your Documents
// With truly orthogonal documentations, you can truly change the appearance dramatically without changing the content. 

// Living with Orthogonality
// Orthogonality is closely related to the DRY principle. Merge the two and you’ll see your systems are more flexible, understandable, debug and maintained. Consider the tools that have GUI and small bindable command line utilities that are used at shell prompts. Which set is more orthogonal and why? Which is easier to use for the purpose it was intended? Which set is easier to combine with other tools to meet challenges. Which set is easier to learn? 

// Topic 11. Reversibility
// Engineers prefer singular simple solutions to problems. 

// Topic 12. Tracer Bullets
// Tracer Development - To visually illustrate immediate feedback under actual conditions with a moving goal. 

// Look for the important requirements. Those that are defined in the system. Look for the areas where you have doubts and where there are the biggest risks. Then prioritize your development so these are the first areas you code.

// TIP 20 - Use Traceable Bullets to Find The Target

// Topic 13. Prototypes and Post-it Notes

// We build software  prototypes on software to analyze and expose risks and for offer chances for corrections at a greatly reduced cost. You can target different parts of the project. They don’t always have to be code based. You can use post it notes, an interface builder for wireframing, etc.

// They are designed to answer a few questions. 

// Things to prototype: 
// Anything that carries risk;
// Anything that hasn’t been tried before;
// Anything critical to the final system; 
// Anything unproven, experimental or doubtful; 
// Anything you aren’t comfortable with; 

// You can prototype new functionality in existing systems, architecture, structure of external data, third party tools/components, performance issues and UI design. Prototyping is a learning experience. Its value lies not in the code produced but in the lessons learned. 

// Tip 21 : Prototype to learn 

// How to use prototypes: 
// What details can you ignore;

// Prototyping Architecture 
// What you’re looking for is how the system looks as a whole. 
// Are the responsibilities well designed and appropriate? 
// Are the collaboration between components well defined? 
// Is coupling minimalized? 
// Can you identify sources of duplication?  
// Are interface definitions and constraints acceptable?  
// Does every module have an access path to the data it needs during execution? 
// Does it have that access when it needs it? 

// When not to use prototypes: 
// Make sure to communicate that you’re writing disposable code. 

// 14. Domain Languages

// Tip 22 - Program close the program domain. 

// 15. Estimating 
// By learning to estimate and developing this skill to the point where you have an intuitive feeling for these things, you’ll be able to show magical ability to show their feasibility. 
// Tip 23 - Estimate to avoid surprises. 
// Some estimates are more accurate than others.
// Ask yourself: 
// Do they need high accuracy or are they looking for a ball park figure? 
// Recommendation 
// If you think it’ll take less than two weeks, quote your estimate in days. 
// 3 - 6 weeks? Quote it in weeks
// 8-20 weeks, quote it in months.
// > 20 week, think hard before giving an estimate;

// Where do estimates come from? All estimates come from the model of the problem.
// Ask for other’s experience from estimating
// .
// Understand what’s being asked  
// You need to have a grasp of the scope of the domain. 
// Build a model of the system
// Break Your Model Into components 
// Calculator an answer. Don’t be quick to dismiss strange answers. 
// Keep track of your estimates;
// Estimating Projects
// Check requirements, analyze risks and prioritize riskiest items earlier;
// Design, Implement, Intergate;
// Validate with the users;


// Chapter 3. The Basic Tools

// 16. The Power of Plain Text 
// What is plain text? 
// Plain text is made up printable characters in a form that convey information. It could be as simple as a shopping list, milk, coffee, etc.  
// The information part is important, If it’s random gibberish it’s not useful plain text. 

// ALL CODE AFTER ITS WRITTEN IS CONSIDERED LEGACY.
// Easier Testing

// 17. Shell Games  
// The command shell.
// LEARN THE COMMANDS. WILL MAKE YOU MORE EFFICIENT; 

// 18. Power Editing 
// Reindent code following changes;
// Comment/Uncomment blocks of code with a single command 
// undo + redo changes 
// split the editor into multiple panels and navigate between them; 
// Navigate to a particular line number
// sort selected lines; 
// search for both strings and regular expressions and repeat previous searches
// temporarily create multiple cursors based on a selections/pattern match and edit the text each in parallel. 
// Display compilation errors in the current project;
// Run the projects tests

// Can you do all this without using a mouse/trackpad? 

// LEARN THE COMMANDS THAT WILL MAKE YOUR LIFE EASIER 
// The recipe for this is simple. Look at yourself coding. Every time you see yourself doing something repetitive, get in the habit of thinking “there must be a better way” then find it and install it and use it without thinking. How? Repetition. 

// Grow your editor with extensions. 
// No more auto repeat. 
// Lose the mouse and track pad and just use the keyboard 
// Keep notes 
// If you cant find it, build it! 

// 19. Version Control  
// A giant undo key. 

// Knowing you can roll back to any state using the vcs is one thing but can you actually do it? Do you know the commands to do it properly? Learn them now. 
// Spend time on learning and recovering your environment in case of a disaster. What would you need to recover? - in a text/note file. 

// 20. Debugging  

// Psychology Of Debugging
// Debugging is problem solving and attacking it as such. 


// Debugging Strategies
// The best way to fix a bug is to make it reproducible. If you can’t reproduce it, how would you ever know if it’s fixed? And reproducing with a single command. 

// Tip 32 - READ THE ERROR MESSAGE 
// “Use a debugger to trigger the problem. Before anything else, make sure you see the correct value in the debugger?” --GPT This
// Make sure you know how to move up and down the call stack and examine the local stack environment. 

// Sensitivity to Input Values
// Binary Chop Data to debug? 

// Logging And/Or Tracing
// Rubber Duck Method??

// Accept that one or more of your assumptions might be wrong. Prove it.

// When you come across a surprise bug, beyond merely fixing it, you need to determine why this failure wasn’t caught earlier. Consider whether you need to amend the unit or other tests so they would’ve caught it. 

// Also if the bug was the result of bad data that was propagated through a couple levels before causing the explosion, see if parameter checking in those routines would’ve isolated it earlier. While you’re at it, is there any other place in your code that is susceptible to this same bug? NOW is the time to find and fix them. Make sure whatever happens, you’ll know if it happens again. 

// If it took a long time to fix this bug, ask yourself why? Is there anything you can do to making fixing this bug easier next time around? Perhaps you can build better testing hooks or log file analyzers. 


// Discuss this with the whole team

// Debugging Checklist
// Is the problem being reported a direct result of the underlying bug or merely a symptom? 
// Is the bug really in the framework that you’re using? 
// Is it in the OS or in your code? 
// If you can explain this in detail to a coworker, what would you say? 
// If the suspect code passes its unit test, were the tests complete enough? 
// What happens when you run the test with this data? 
// Do the conditions that caused this bug exist anywhere else in this system?

// 21. Text Manipulation  

// 22. Engineering Daybooks 

// The Daybook has 3 main benefits: 

// It is more reliable than memory;

// Chapter 4. Pragmatic Paranoia

// 23. Design by Contract  

// Designing by contract focuses on documenting and agreeing to the rights and responsibilities of software modules to ensure program correctness. 

// What is the correct program? 
// Preconditions
// What must be true in order for the routine to be called? The routine requirements? 
// A routine should never get called with is preconditions will be violated. It is the callers responsibility to pass good data. 

// Postconditions
// What is the routine guaranteed to do? What is the state of the world when the routine is done? Infinite loops are not allowed.

// Class and Variants
// A class ensures that a certain condition is always true from the perspective of a caller. During the internal processing of a routine, the variant may not hold, but by the time the routine executes and controls return to the caller, the end variant must be true. 
// Note that a class cannot give unrestricted rights access to any data member that participates in the end variant. 

// Failure to live up to the contract is a bug.

// Closure for example supports pre and post conditions as well as the more comprehensive instrumentation provided by specs 

// Be strict on what you would expect before you begin and promise as little as possible in return. 

// You must remember to call the class in variant and all base class in variants manually before you exit every method?

// 24. Dead Programs Tell No Lies  

// Every switch statement needs to have a default clause - we want to know when the impossible has happened. It's easy to fall into the “it can’t happen” mentality.


// 25. Assertive Programming  

// Don't use assertions at places of real error handling. Assertions check for thins that never happen. You don’t want to use them for validating user input which may well be wrong. 

// Assertions and Side Effects 
// Leave assertions turned on

// 26. How to Balance Resources 

// The basic pattern for resource allocation can be extended for routines that need more than 1 resource at a time. There are 2 suggestions: 
// Deallocate resources in the opposite order in that which you allocate them. That way, you won’t orphan resources, if one resource contains references to another. 

// When allocating the same set of resources in different places in your code, always allocate them in the same order. This will reduce the possibility of deadlock - `If process A claims resource 1 and is about to claim resource 2 which process B has claimed resource 2 and is trying to get resource 1` the two processes will wait forever. It doesn't matter which kind of resources we are using (transactions, network, memory, files etc) -

// Whoever allocated a resource should be responsible for deallocating it. However, in some languages we can develop the concept further. 

// Objects and Exceptions 

// The equilibrium between allocations and de-allowcations is reminiscent of OO classes constructor and destructor. The class represents a resource, the constructor gives you a particular object of that resource type, and the destructor removes it from your scope. 
// If you are programming in an object oriented language, you may find it useful to encapsulate resources in classes. Each time you need a particular resource type, you instantiate an object of that class. When that object goes out of scope or is reclaimed by the garbage collector, the object destructor and deallocates the wrapped resources. This approach has particular benefits when you’re working with languages where exceptions could interfere with resource deallocation. 

// Balancing and Exceptions

// Languages that support exceptions can make resource deallocation tricky. If an exception is thrown, how do you guarantee that everything allocated prior to the exception is tidied up? The answer depends to some extent on the language support. 

// You general have 2 choices: 

// Use variable scope. 
// Finally Clause in a try/catch block
// A finally clause will ensure that the specified code will run whether or not an exception is raised in the try/catch block. 

// When you can’t balance resources

// There will be times where the basic resources allocation pattern just isn’t appropriate. Commonly this is found in programs that use dynamic data structures. 

// The trick here is to establish a variant for memory allocation. You need to decide who is responsible for data in a agrogatre data structure. 

// What happens when you deallocate the top level structure. You have 3 main option

// The top level structure is also responsible for freeing any sub structures that it contains. These structures recursively delete data they contain and so on. 
// The top level structure is simply deallocated. Any structures that it points to that are not referenced elsewhere are orphaned.
// The top level structure refuses to deallocate itself if it contains any sub structures. The choice here depends on the circumstances of each individual data structure. However you need to make it explicitly for each and implement your decision consistently. 
 
// 27. Don’t Outrun Your Headlights 

// Always take small deliberate steps, checking for feedback and adjusting before proceeding. Feedback - anything that independently confirms or disapproves of your action.  

// Results in a REPL provide feedback on your understanding on APIS and Algorithms
// Unit Tests provide feedback on your last code change. 
// User demo and conversation provide feedback on features and usability. 

// What’s a task that’s too big? 
// Any task that requires fortune telling. 

// Always design your code to be replaceable. Make it easy to throw out your code and replace it with something better suited. Making code will also help with cohesion, coupling and DRY leading to a better design overall. 

// Chapter 5. Bend or Break

// 28. Decoupling

// Coupling is the enemy of change. 


// This list is artificial. Coupling can occur anytime two pieces of code share something. So as you listen to what follows, seek out the underlying pattern so you could apply them to your code and keep out on a lookout for some of the symptoms for coupling, wacky dependencies between unrelated modules/libraries, simple changes to one module that propagate to unrelated modules to the system or break stuff elsewhere in the system. 

// Train Wrecks

// Think about responsibilities.

// You shouldn’t make decisions based on the internal state of an object then update that object. Doing so totally destroys the benefits of encapsulation AND in doing so, spreads the knowledge of the implementations throughout the code. 

// The Law of Demeter 
 
// The LOD is a set of guidelines written in the late 80’s by Ian Holland. He created them to help developers keep their functions cleaner and decoupled. The Lod says that a method defined in class C should only call other instance methods in C, it’s parameters, methods and objects that it creates both in the stack and in the heap, 

// Chains of Method Call

// Global Variables. 

// Try not to have more than one dot when trying to access something, and accessing something. 

// There’s an exception where the rules your chaining are really really unlikely to change. In practice, anything in your application should be likely to change. Anything in a 3rd party should be considered volatile(a value is prone to change over time, outside the control of some code) particularly if they’re known to change API between releases. 

// The Evils of Globalization

// Globally accessible data is an insidious source of coupling between application components.  

// Making code reusable should be part of your coding routine. When you make code reusable, you give it clean interfaces, decoupling it from the rest of your code. This allows you to extract a method/module without dragging everything else along with it and if your code uses global data then it becomes difficult to split it out from the rest. You’ll see this when you write unit tests using global data. 

// Global data include singletons. 

// If all you have is a singleton with a bunch of exported instance variables, then it’s still just global data. It just has a longer name. Folks take the singleton and hide all the data behind methods.

// Global data included external resources. Any mutable external resource is global data. 

// Inheritance adds coupling. 

// Coupled code is hard to change. Alterations in one place can have secondary affects somewhere else in the code which often doesn’t come into light until much later in production. 

// Keeping your code SHY, will help keep you applications decoupled. 

// 29. Juggling the Real World  

// Event - an event represents the availability of information. 

// 4 STRATEGIES 

// FINITE STATE MACHINES
// A finite state machine (FSM) is a programming concept that helps model complex systems

// Here are some key concepts of FSMs: 
// States: The different stages or conditions an application can be in. 
// Transitions: How the FSM moves from one state to another. 
// Events: The triggers for a state transition.

// FSMs have a fixed number of states, inputs, and outputs. For example, a flashlight with one button is a simple FSM. When the button is pressed, the state changes from off to on, and when it's pressed again, the state changes back to off. 

// FSMs can be used to create complex-seeming behavior that mimics physical conditions or emotional states. For example, FSMs can be used in spell checking applications.
// Applications of FSMs:
// Parsing: FSMs are often used to parse text or code, as they can efficiently recognize patterns and structures.
// Game development: FSMs are useful for implementing game logic, such as character behavior, AI, and level progression.
// Network protocols: FSMs are used to define the state transitions and behavior of network protocols, ensuring correct communication.
// User interfaces: FSMs can be used to model the different states of a user interface and the transitions between them.
// Advantages of using FSMs:
// Clear and concise representation: FSMs provide a visual and conceptual understanding of a system's behavior.
// Efficient implementation: FSMs can be implemented efficiently using various techniques, such as state tables or state diagrams.
// Testability: FSMs are easy to test and debug, as their behavior is well-defined and can be verified systematically
// Adding Actions

// A pure FSM is an event stream parser. It’s only output is the final state. We can beef it up by adding actions that are triggered on certain transitions. For ex. we might need to extract all of the strings that are in a source file. To do this in a FSM, we’d simply add an action field to each transition. Action could include things such as “start new string”, “add current character to string”, etc. 

// State machines are underused by developers. They don’t solve all the problems associated with events. 

// THE OBSERVER PATTERN 
// The observer pattern is a software design pattern that defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.  
// Key components of the observer pattern:
// Subject: The object being observed. It maintains a list of observers and provides methods for adding, removing, and notifying observers.
// Observer: The objects that observe the subject. They implement an interface that defines a method to be called when the subject changes state.
// How the observer pattern works:
// A subject object creates an instance of itself.
// One or more observer objects register themselves with the subject, providing a callback function that will be called when the subject changes state.
// The subject changes state.
// The subject notifies all registered observers by calling their callback functions.
// Advantages of the observer pattern:
// Decoupling: It decouples the subject from its observers, making the system more flexible and easier to maintain.
// Efficient updates: When the subject changes state, only the observers that are interested in the change are notified.
// Scalability: The pattern can handle an arbitrary number of observers.
// Disadvantages of the observer pattern:
// Performance overhead: The pattern can introduce performance overhead, especially if there are a large number of observers.
// Complexity: The pattern can be complex to implement, especially for complex relationships between subjects and observers.
// The observer pattern is a powerful tool for building decoupled and scalable systems. It is commonly used in various scenarios, such as event-driven programming, user interfaces, and data synchronization.
// THE PUBLISH SUBSCRIBE PATTERN

// github.com/CabBuddies/Node-REST-Objects
// The publish-subscribe pattern is a messaging pattern that allows for asynchronous communication between loosely coupled components. It provides a mechanism for one component (the publisher) to broadcast a message to multiple interested components (subscribers) without knowing who they are.
// Key components of the publish-subscribe pattern:
// Publisher: The component that sends messages.
// Subscriber: The component that receives messages.
// Broker: A central entity that manages the communication between publishers and subscribers. It maintains a list of subscribers for each topic and delivers messages to the appropriate subscribers.
// How the publish-subscribe pattern works:
// A publisher publishes a message on a specific topic.
// The broker receives the message and delivers it to all subscribers that have subscribed to that topic.
// Subscribers can subscribe to multiple topics and receive messages from different publishers.

// REACTIVE PROGRAMMING AND STREAMS 
// Reactive programming is a paradigm that focuses on building applications that are responsive, non-blocking, and resilient to change. It's particularly well-suited for handling asynchronous events and data streams.
// Streams are a fundamental concept in reactive programming. They represent a sequence of data elements that can be processed asynchronously. This means that data can be emitted, transformed, and consumed over time without blocking the main thread of execution.
// Key Characteristics of Reactive Programming:
// Asynchronous: Operations are non-blocking, allowing the application to handle multiple tasks concurrently.
// Event-driven: Applications respond to events, such as user interactions, data updates, or network messages.
// Declarative: Developers describe the desired outcomes, and the framework handles the underlying implementation details.
// Resilient: Applications can recover from failures and continue to operate.
// Common Use Cases:
// Real-time applications: Chat applications, online games, and financial data systems.
// Data processing pipelines: ETL (Extract, Transform, Load) processes, data analysis, and machine learning.
// I/O-bound tasks: Network operations, file processing, and database interactions.
// Popular Reactive Programming Frameworks:
// RxJava: For Java applications
// RxJS: For JavaScript applications
// Akka Streams: For Scala and Java applications
// A simple example: Imagine a stream of temperature readings from a sensor. Using reactive programming, you could:
// Subscribe to the stream to receive temperature updates.
// Transform the temperature readings (e.g., convert Celsius to Fahrenheit).
// Filter the readings to only include values above a certain threshold.
// Map the filtered readings to a different data format (e.g., JSON).
// 30. Transforming Programming  

// If you can’t describe what you’re doing as a process, you don’t know what you’re doing. 

// When we think about design, we rarely think about creating transformations. Instead, we worry about classes and modules, data structures and algorithms, languages/frameworks, etc. We need to go back to thinking of programs as being something that transforms inputs into outputs. When we do, many of the details we previously worried about just evaporate. The structure becomes clearer. The error handling is more consistent, and the coupling drops way down. 


// Find Transformations 

// Sometimes the easiest way to find a transformation is to start with a requirement and try to determine its inputs/outputs. Now you’ve defined the functions representing the overall program, you can then find steps that lead you from input to output -> this is a top-down approach. 

// Instead of thinking of data as little pools all over the application, think of data as a river, a flow. Data becomes a pier to functionality. A pipeline is a sequence of code data. The data is no longer tied to a particular group of functions as it is in a class definition. Instead it is free to represent the unfolding progress of our application as it transforms inputs into it’s outputs.  

// We could greatly reduce coupling.

// A function could be used and reused anywhere it’s parameter matches the output of some other function. 

// What about error handling?

// We never pass raw values between transformations. Instead we wrap them in a data structure or type which also tell us if the contained value is valid. 

// In haskell, this is called maybe 

// Thinking of programming as nested transformations can be liberating. It takes a while to get used to but once you’ve developed the habit, you find that your code gets cleaner, your functions shorter and your designs flatter. Give it a try. 

// CHALLENGE - REVIEW QUESTION WHEN REVIEWING THESE NOTES AGAIN:

// Can you express the following requirements as a top level transformation? 
// Identify the following input/output 
// Shipping and Sales tax are added to an order 
// Your application loads configuration information from a names file
// Someone logs into a web application 

// 31. Inheritance Tax  

// If you use inheritance, please stop, it probably isn’t what you want to do. 

// Inheritance is coupling. 

// Problems of using Inheritance to build types. 

// Interfaces and Protocols
// What makes I&P so powerful is that we could use them as types and any class that implements the appropriate interface, will be compatible with that type. If car and phone both implement locateable, we could store both in a list of locatable items. We could then process that lists. 

// I&P give us polymorphism. 

// Delegation
// Mix-Ins and Traits  


// Delegation 

// We should have class Account which contains nothing but account stuff and class account record, which wraps an account with the ability to be fetched and stored. Now we’re really decoupled. 

// But it comes at a cost. And typically, some of it will be boiler plate. It’s likely that all of our record classes will need a find method for example. 

// Fortunately that’s what mix-in and traits do for us. 

// Mix-ins / Traits / Category / Protocol Extensions 

// Mix-ins: We want to able to extend classes and objects with new functionality without using inheritance, so we create a set of these functions, give that set a name and then somehow extend the class/object with them. At that point, you’ve created a new class/object that combines the capabilities of the originals and all of their mix-ins. In most cases, you’ll be able to make this extension even if you don’t have the source code of the class you’re extending. 

// The implementation of this feature varies between languages. 

// They merge functionality between existing things and new things. 

// A common less ideal approach is to bundle all of the validations into a single class. The business object persists and then adds flags to control which object in which circumstances. 

// We think a better way is to use mix-ins to create specialized classes for appropriate situations. 

// TIP 54 - Use Mix-Ins to share functionality

// 3 alternatives to traditional class inheritance - 1st - Interfaces + Protocol || 2nd - Delegation || 3rd Mix-Ins & Traits

// Tip 54.5 - Next time you find yourself subclassing, take a moment to examine the options. Can you achieve what you want with interfaces, delegations, mix ins etc? Can you reduce coupling to do so. 

// 32. Configuration  

// When code relies on value that may change after the application gone live, keep those values external to the app. When your application runs in different environments and potentially for different customers, keep the environment and customer outside the app. In this way, your parameterizing your application.  The code adapts to the places it runs.

// Common things you want to put in your configuration data includes credentials for external services, logging levels, destinations, ports, IP address, machine/cluster name that your app uses, Environment Specific Validation Parameters.
// External set parameters such as tax rates, site specific formatting details, license keys, etc. Basically look for anything that you know will have to change that you can express outside of your main body of code and slap it onto some config bucket. 

// Static Configuration 

// Many frameworks and quite a few custom applications keep configuration either on flat files or in database tables. If the information is in flat files, the trend is to use some text format, currently YAML and JSON are popular for this. 

// Sometimes applications written in scripting languages use special purpose source code files, dedicated to containing just configuration. If the information and is likely to be changed by the customer, sales tax rates for example, it might be better to store it in a database table, and of course, you could use both, splitting the configuration according to use. Whatever form you us, the configuration is read to your application as data structure. Normally when the application starts. 

// Commonly this data structure is made global. The thinking being that it makes it easier for any part of the code to get to the value it holds. We prefer that you don’t do that. Instead wrap the configuration information behind a thin API. This decouples your code from the details of the representation of configuration.

// Configuration As A Service

// While static configuration is common, we figure a different approach. 
// We still want config data external to the application, but rather than a flat file/data base, we’d like it stored behind a service API. 

// This has a number of benefits. Multiple applications share configuration information with authentication and access control limiting what each can see. Config changes can be made globally, and the configuration data becomes dynamic. 

// Dynamic is critical once we move towards highly available applications. The idea to restart an application to change a single parameter is hopelessly out of touch with modern realities. Using a config service, components could register for notifications about the parameters they use and the service could send messages containing new values if and when they are changed. Whatever form it takes, configuration data drives the runtime behavior of an application. When config values change, there’s no need to rebuild the code. 

// Don't write do-do code. 
// Without external configuration, your code is not as adaptable or flexible as it could be. Is this a bad thing? Adapt or die. 

// Chapter 6. Concurrency 

// Concurrency is when the execution of two or more pieces of code act as if they run at the same time. To have concurrency, you need to run code in an environment that could switch execution to different parts of your code when it is running. This is often implemented using fibers, threads and processes. To have parallelism, you need hardware that could do two things at once. This might be multiple cores in a CPU, multiple CPU’s in a computer, or multiple computers connected together. 

// Everything is concurrent. It’s almost impossible to write code in a decent sized system that doesn’t have concurrent aspects to it. They may be explicit or they may be buried inside a library. Concurrency is a requirement if you want your application to be able to deal with the real world where things are asynchronous, users are interacting, data is being fetched, external services are being called all at the same time. 

// If you force this process to be serial, with one thing happening, then the next and so on, your system feels sluggish and you’re probably not taking advantage of the hardware on which it runs. 

// Parallelism is when they do run at the same time. 

// Temporal Coupling - happens when you perform a sequence on things that do not require to solve the problem at hand. Do you depend on the tick coming before the talk? Not if you want to stay flexible. Does your code access multiple backend services sequentially one after the other? Not if you want to keep your customers? 

// 33. Breaking Temporal Coupling  

// Concurrency - Things happening at the same time 
// Ordering - The relative positions in time

// Planning a project in a linear fashion (first do this, then that). Thinking this way, will lead to temporal coupling. Coupling in time. Ex. Method A must always be called before method B. Only one thing can run at a time. You must wait for the screen to redraw before the button click is received. Tick must happen before Talk. - This approach is not very flexible and not very realistic. We need to allow for concurrency and to think about decoupling at any time or dependencies. In doing so, we could gain flexibility and reduce anytime based dependencies in many areas of development - workflow analysis, architecture design and deployment. 

// The result will be systems that will be easy to reason about but potentially respond faster and more reliably. 

// Looking For Concurrency

// On many projects we need to model and analyze the application workflow as part of the design. We’d like to find out what can happen at the same time and what must happen in a strict order. - One way to do this is to capture the workflow using a notation such as the activity diagram. An activity diagram consists of a set of actions drawn as rounded boxes. The arrow leaving an action leads to either another action, which could start once the first action completes, or to a thick line called a Synchronization Bar. Once all of the actions leads into a synchronization bar completes, you can then process any arrows leaving the bar. An action with no arrows leaving into it can start at any time. You could use ACTIVITY DIAGRAMS to maximize parallelism by identifying activities that could be performed in parallel but aren’t. 

// For instance, we could write software for a robotic pina colada mixer. 

// Opportunity For Concurrency

// When designing for concurrencies, we’re hoping to find activities that take time but not time in our code. - Querying a database, accessing an external service, waiting for user input, things that would normally stall our program until it completes. These are all opportunities to do something more productive.

// Opportunity For Concurrency

// Remember the distinction, concurrency is a software mechanism, and parallelism is a hardware concern.  

// A common pattern is to take a large piece of work, split it into independent chunks, process each in parallel, then combine the results.  

// 34. Shared State Is Incorrect State  

// Non Atomic Updates 

// Semaphore and other forms of mutual exclusion. 

// A semaphore is simply a thing that only one person can own at a time. You can create a semaphore and use it to control access to some other resource. 

// Other Kinds of Exclusive Access

// Concurrency in a shared environment is difficult and managing it yourself is filled with challenges. 

// 35. Actors and Processes  

// Actors and processes offer interesting ways of implementing concurrency without the burden of synchronizing access to shared memory. 

// An Actor is an independent virtual processor with its own local and private state. Each actor has a mailbox. When a message appears in the mailbox and the actor is idle, it kicks into live and processes the message. When it finishes processing, it processes another message in the mailbox or if the mailbox is empty, it goes back to sleep.  

// When processing a message, an actor can create other actors, send message to other actors that it knows about and create a new state that will become the current state when the next message is processed.

// A process is typically a more general purpose virtual processor, often implemented by the operating system to facilitate concurrency. Processes can be constrained by convention to behave like actors. And that’s the type of process that we mean here. 

// Actors can only be concurrent. There’s a few things that you won’t find in the definition of actors. There’s no single thing that’s in control. Nothing schedules what happens next or orchestrates the transfers the information from the raw data to the final output. The only state in the system held in the messages and in the local state of each actor. 

// Messages cannot be examined unless it’s being read by the recipient and local state is inaccessible outside the actor.

// All messages are one way. No concept of replying. If you want an actor to return a response, you include your own mailbox address in the message you send it and it will eventually send the response to just another message to that mailbox. An actor processes each message to completion and it will process one message at a time. 

// As a result, actors execute concurrently, asynchronously and share nothing. If you have enough physical processors, you could run an actor in each. If you have a single processor, then some runtime could handle switching the context between them. Either way, the code running in the actors is the same. 

// No Explicit Concurrency

// In the actor model, there’s no need for any code to handle concurrency as there is no shared state. There’s also no need to code explicitly end-to-end do this / do that logic as the actors work it out for themselves based on the messages they receive. 

// 36. Blackboards  

// A BlackBoard in Action 

// A blackboard in combination with the rules engine that encapsulates the legal requirements is an elegant solution. 

// Chapter 7. While You Are Coding 

// 37. Listen to Your Lizard Brain  

// Instincts have no words. They make you feel not thinking. 

// FEAR OF THE BLANK 
// Starting a new project or even a new module in an existing project can be an unnerving experience. 

// The first problem is that your brain is trying to tell you something. There’s some version of doubt beneath the perception. Give it time and your doubts will crystalize into something more solid. Let your instincts contribute to your performance. 

// The second problem is the fear of making a mistake which is a reasonable fear as we as developers put ourselves a lot in our code. Ex. taking errors on our code as a reflection of our incompetence aka imposter syndrome. 

// Fighting Yourself 
// As a soldier, we take step after muddy step, YOU HAVE A JOB TO DO. Unfortunately that’s the opposite of what you should do. Your code is telling you something - this is harder than it should be. Maybe the structure of design is wrong, maybe you’re solving the wrong problem or maybe you’re creating an ant-farm worth of bugs. 

// Solution 
// First stop what you’re doing. Give yourself a little time and space to let your brain organize itself. Stop thinking about the code, and do something that’s mindless for a while, away from the keyboard. 

// Second would be to externalize the issue or explain it to a coworker, maybe someone who isn’t a programmer.

// Prototyping as a Mental Blockbuster
// The important thing is to get started. 
// Prototyping is a powerful tool that can help programmers overcome mental blocks in several ways:
// Visualization: A prototype provides a tangible representation of an idea, making it easier to visualize and understand. This can help break through mental blocks by providing a clearer picture of the desired outcome.
// Iteration: Prototyping encourages experimentation and iteration. By quickly creating and testing different approaches, programmers can identify what works and what doesn't, leading to breakthroughs and overcoming mental blocks.
// Feedback Loop: Prototypes can be shared with stakeholders or users for early feedback. This can provide valuable insights and help programmers identify blind spots or areas where their assumptions might be incorrect.
// Confidence Booster: Creating a working prototype, even if it's incomplete, can boost a programmer's confidence and motivation. Seeing progress can help overcome feelings of being stuck or overwhelmed.
// Problem Solving: The process of building a prototype often involves breaking down a problem into smaller, more manageable components. This can help programmers identify and address specific issues, leading to a clearer path forward.
// In essence, prototyping acts as a bridge between abstract ideas and concrete reality, helping programmers overcome mental blocks by providing a tangible way to explore, experiment, and refine their solutions.

// Step By Step Prototyping
// Write “I am prototyping” on a sticky note and stick it on the side of your screen. 
// Remind yourself that prototypes are meant to fail and thrown away, even if they don’t fail. There is no downside to this. 
// In your empty editor buffer, create a comment describing in one sentence, what you want to learn or do. 
// Start coding - if doubts arise, look at the sticky note. 

// When going through someone else’s confusing code, note it down, continue doing this and look for patterns, if you see what drive them to write code that way, you may find that the job of understanding it becomes a lot easier.

// 38. Programming by Coincidence 

// Close enough is NOT enough. 
// Time Tip - UCT is there - use it. 

// Phantom Patterns
// Accidents of Context

// Tip 62 - Don’t Program by Coincidence 
// At all levels, people operate with many assumptions in mind. But these assumptions are rarely documented and are often in conflict with developers. Assumptions that are not based on well-established facts are the bane of all projects. 

// How to Program Deliberately
// Always be aware of what you’re doing. Can you explain the code in detail to a more junior programmer? 

// Don’t Code In The Dark
// Build an application you don’t fully grasp or use a technology you don’t understand and you’ll likely be bitten by coincidences. If you’re not sure why it works, you won’t know why it fails. 

// Proceed from a Plan 

// Rely only on reliable things, don’t depend on assumptions. If you can’t tell if something is reliable, assume the worst. Document your assumptions.  Articulate your assumptions to yourself and to others. Don’t just test your code, but test your assumptions as well. Don’t guess, actually try it. Write an assertion to test your assumptions. If your assertion is right, you have proven documentation in your code. If you discover your assumption is wrong, then count yourself lucky

// Prioritize Your Effort 
// Spend time on the important aspects, more than often these are the hard parts. 

// Don’t be a slave to history. Don’t let existing code dictate future code. All code can be replaced if it’s no longer appropriate. Even in one program, don’t let one thing you’ve done constrain what you could do next. Be ready to refactor. This decision might impact the project’s schedule. 

// 39. Algorithm Speed  

// Estimating the resources that algorithms use  - time, processor, memory and so on. This kind of estimating is crucial. You know how your program runs with a thousand records but how will it scale to a million? WHat parts of the code need optimization? These questions can be answered using common sense. 

// The Big O Notation

// Estimating algorithms means that most trivial algorithms handle some kind of variable input - sorting, strings, converting an end-by-end matrix, or decrypting a message with a key. Normally the size of the input would affect the algorithm. The larger the input, the longer the running time or the more memory used. 

// If the relationship was always linear, so that the time increased to the value of N - this section wouldn’t be important. However most significant algorithms are not linear. The good news is that many are sub-linear. A binary search for example doesn't need to look at every candidate when finding a match. The bad news is that many of the algorithms are considerably worse than linear, run times or memory requirements increase far faster than N and an algorithm that instantly processes 10 items may take a lifetime to process 100. We find that when writing anything containing loops or recursive calls, we subconsciously check the runtime and memory requirements. This is rarely a formal process but rather a quick confirmation that what we’re doing is sensible under certain circumstances. However we often find ourselves performing more in detail analyses. That’s when Big O Notation comes in handy. 
// ___
// Big O notation is a mathematical notation used to describe the asymptotic upper bound on the running time or space complexity of an algorithm. It provides a way to analyze the efficiency of algorithms as the input size grows larger.
// In simpler terms, Big O notation expresses how the algorithm's performance (time or space) scales in relation to the input size. It focuses on the worst-case scenario, identifying the maximum amount of resources an algorithm might require for a given input size.
// The notation uses a letter, typically "O," followed by a function that represents the upper bound on the algorithm's resource usage. This function is usually expressed in terms of the input size, denoted by "n."
// Big O is never going to give you actual numbers for time or memory or whatever. It simply tell you how the value will change as the input changes.
// Common Big O notations and their meanings:
// O(1): Constant time. The algorithm's performance remains the same regardless of the input size.
// O(log n): Logarithmic time. The algorithm's performance grows slowly as the input size increases.
// O(n): Linear time. The algorithm's performance grows linearly with the input size.
// O(n log n): Linearithmic time. The algorithm's performance grows slightly faster than linear but slower than quadratic.
// O(n^2): Quadratic time. The algorithm's performance grows quadratically with the input size.
// O(2^n): Exponential time. The algorithm's performance grows exponentially with the input size.
// Example:
// Consider the following two algorithms for finding the maximum element in an array:
// Brute force: Iterate through the array, comparing each element with the current maximum.
// Divide and conquer: 
// The brute force algorithm has a Big O notation of O(n), as it needs to examine each element in the array once. The divide and conquer algorithm has a Big O notation of O(log n), as it can reduce the problem size by half in each iteration.
// In conclusion, Big O notation is a valuable tool for analyzing the efficiency of algorithms and making informed decisions about which algorithms to use for different problem sizes.
// Common Sense Estimation 
// You can estimate the order of many basic algorithms using common sense. 
// Simple Loops  - If a simple loop runs from 1 to n then the algorithm is likely to be O(n) - Examples include exhausted searches, finding the maximum value in an array and generating checksums. 
// Nested Loops - If you nest a loop inside another, then your algorithm becomes O(n * n) or O(n^2)-  Ex. Bubble Sort where the outer loop scans each element in the array in turn, and the inner loop works out where to place that element in the sorted result. Such sorting algorithms tend to be O(n^2). 
// Binary Chop - If your algorithm halfs the set of things it considers each time around the loop, then it is likely to be logarithmic. O(log n). A binary search of a sorted list, reversing a binary tree, and biding the first set bit in a machine word could all be O(log n)
// Divide And Conquer - Divide the array in half, find the maximum in each half, and compare the two maximums. O(n log n) - Ex. Quicksort, which works by partitioning the data into two halves and recursively sorting each. Although technically O(n^2) - because it’s behavior degraded when it is fed sorted input, the average time of quicksort is O(n log n),
// Combinatorics  
// Combinatorics, in the context of programming, refers to the study of counting and arranging elements in a set. It involves solving problems related to combinations, permutations, and counting techniques. These concepts are often used in algorithms and data structures to solve various problems. 
// Key concepts in combinatorics:
// Combinations: The number of ways to choose a subset of elements from a set, without regard to the order of selection. For example, choosing 2 items from a set of 3 items (A, B, C) has 3 combinations: (A, B), (A, C), and (B, C).
// function combinations(arr, k) {
//   if (k === 0) {
//     return [[]];
//   }

//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const rest = combinations(arr.slice(i + 1), k - 1);
//     rest.forEach(combination => {
//       result.push([arr[i], ...combination]);
//     });
//   }
//   return result;
// }

// const elements = [1, 2, 3, 4];
// const combinationsOfTwo = combinations(elements, 2);
// console.log(combinationsOfTwo); // Output: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
// Permutations: The number of ways to arrange elements in a set, considering the order of selection. For example, arranging 3 items (A, B, C) in different orders has 6 permutations: (A, B, C), (A, C, B), (B, A, C), (B, C, A), (C, A, B), and (C, B, A).
// function permutations(arr) {
//   if (arr.length === 0) {
//     return [[]];
//   }

//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const rest = permutations(arr.slice(0, i).concat(arr.slice(i + 1)));
//     rest.forEach(permutation => {
//       result.push([arr[i], ...permutation]);
//     });
//   }
//   return result;
// }

// const elements = [1, 2, 3];
// const permutationsOfThree = permutations(elements);
// console.log(permutationsOfThree); // Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
// Counting techniques: Various techniques used to count the number of elements in a set, such as inclusion-exclusion principle, generating functions, and recurrence relations.
// Inclusion-exclusion principle:
// Used to count the size of the union of sets.
// Example: Counting the number of integers between 1 and 100 that are divisible by 2 or 3.
// Generating functions:
// Used to represent sequences of numbers as formal power series.
// Example: Counting the number of ways to make change using a given set of coins.
// Recurrence relations:
// Used to define a sequence of numbers in terms of previous terms.
// Example: Counting the Fibonacci numbers.

// Applications of combinatorics in programming:
// Graph algorithms: Combinatorics is used in algorithms like depth-first search, breadth-first search, and Dijkstra's algorithm to explore and analyze graphs.
// Dynamic programming: Combinatorial problems can often be solved using dynamic programming techniques, where subproblems are solved and stored to avoid redundant calculations.
// Game theory: Combinatorics is used to analyze game strategies and outcomes.
// Machine learning: Combinatorial optimization techniques are used in machine learning algorithms like genetic algorithms and simulated annealing.
// Data structures: Combinatorial concepts are used in data structures like combinations and permutations generators.
// Algorithm Speed In Practice 
// The basic algorithms from above pop up time and time again. Whenever you find yourself writing a simple loop, you know O(n) algo. If that loops contains an inner loop, then you’re looking at O(n * n). You should be asking yourself, how large these values can get? If the numbers are bounded then you’ll know how long the code will take to run. If the number depends on external factors, such as number of names in a list of people, then you might want to stop and consider the effect large values may have on your running time / memory consumption. 
// There are some approaches you could take to address potential problems. If you have an algorithm that is O(n^2), try to find a divide and conquer approach that would take you down to O(n log n). If you’re not sure how long your code will take or how much memory it will use, try running it. Varying the input record count or w.e is likely to impact the runtime. Then plot the result. You should then soon get a good idea of the shape of the curve. Is it curving upward, a straight line or flattening off as the input size increases? 3 or 4 points should give you an idea. Also consider what you’re doing just in the code itself.  
// In all this theory, don’t forget there’s more practical solutions as well. After all the estimating, the only time that counts is the speed of your code, running in the next production environment with real data - 
// If it’s tricky getting accurate timings, use code profilers to count the number of times of different steps your algo gets executed and plot these figures against the size of your input. 
// Best isn’t always best. 
// You also need to be pragmatic about choosing appropriate algos. The fastest one is not always the best for the job. Given a small input set, a straightforward insertion point, will sort just as well as a quicksort and will take you less time to write and debug. 
// You also need to be careful if the algo you choose has a high setup cost. For small input sets, this setup may dwarf the running time and make the algo inappropriate. Also be wary of premature optimization.  It’s always a good idea to make sure an algo really is a bottle neck before investing your precious time trying to improve it. 
// Every developer should have a feel for how algorithms are designed and analyzed. 
// 40. Refactoring  

// As the program evolves, it will become necessary to re-think earlier decisions and re-work the code. This process is perfectly natural. Code needs to evolve. It’s not a static thing. 

// Software is more like gardening. More organic than concrete. You plant many things in a garden according to the planned conditions. 

// Refactoring - Refactoring is defined as a discipline technique for restructuring an existing body of code, altering its internal structure without changing its external behavior. - It’s not supposed to be an occasional thing. Low-risk small steps. 

// You need good automated testing that validates the behavior of the code. 

// When should you refactor? 
// You refactor when you have relearned something. When you understand something better than you did last year, yesterday, or even just 10 minutes ago. 


// Collateral damage in code could be just as deadly over time. Refactoring is easier to do when the pieces are small. If the time it takes to refactor takes a considerable amount of time, put it on the schedule and let the team know, especially on how it might affect them. 

// How Do You Refactor:

// Don’t try to refactor and add new functionality at the same time. 
// Make sure you have good tests before you begin refactoring. Run the test as often as possible 
// Take short deliberate steps. 

// 41. Test to Code  

// We believe the major benefits of testing happen when you think about and write the tests. Not when you run them. 

// Tests Drive Coding

// Testing is vital feedback that guides your coding. A function coupled into other code is harder to test because you have to set up all that environment before you could even run your method. 

// Making your stuff testable reduces your coupling. Before you test something, you have to understand it. - we assure ourselves that we’ll figure it out as we code along, but shine the light of testing on that code and things become clearer. 

// If you think about testing boundary conditions and how that would work before you start coding, you may as well find patterns in the logic that will simplify the function. If you think about the error conditions that you’ll need to test, you’ll structure you function accordingly. 

// TEST DRIVEN DEVELOPMENT - TDD or Test First Development

// The basic cycle of TDD is: 
// Decide on a small piece of functionality that you want to add;
// Write a test that will pass once that functionality is implemented;
// Run all tests - verify that the only failure is the one you wrote 
// Write the smallest piece of code needed in order to get the test to pass and verify that the tests run cleanly;
// Refactor your code; - see if there’s a way to improve. Make sure the test still pass when you’re done;

// The idea is that this cycle should be very short. A matter of minutes, so that you’re constantly writing tests and getting them to work. 

// We see a major benefit in TDD for people who are just starting out in testing. If you follow the TDD workflow, it guarantees that you will always have tests for code and that means you will always be thinking about your tests. 

// People sometimes overdo it with tests ensuring that they will always have 100% coverage. They have lots of redundant tests. For example, before writing a class for the first time, many TDD people will first write a failing test then simply reference the class's name. It fails, then they write an empty class definition then it passes. Then you have a test that does nothing. 

// Practice TDD but when you do, don’t forget to stop and look at the big picture, it’s easy to become seduced by the green “test passes message” / writing a lot of code that doesn’t get you closer to a solution. 

// TDD - You need to know where you’re going. 

// When you can’t comprehend a problem, take small steps. One test at a time. - This approach could mislead you. Encouraging you to polish the easy problems while ignoring the real reason for your coding. 

// Bottom-Up vs Top-Down vs The Way You Should Do It

// The Top-Down folks said you should start with the overall problem you’re trying to solve and break it into a small number of pieces, then break each of these into smaller pieces and so on until you end up with pieces small enough to express in code. 

// The Bottom-Up people build code like you build a house. They start at the bottom, producing a layer of code that gives them some abstractions that gets them closer to the problem they are trying to solve. Then they add another layer with higher layer abstractions, and keep on until the final layer of abstraction solves the problem. - Make it so 

// Both aspects ignore one of the most important aspects of software development - we DON’T know what we’re doing when we start. The Top-Down think they can express all of the requirements up front, they can’t. The Bottom-up folks assume they can build a list of abstractions that they could eventually take to a top level solution but how can they decide on the layers of functionality when they don’t know where they are heading. 

// Tip 68 - Build End to End

// We strongly believe that the only way to build software is incrementally. Build small pieces of end-to-end functionality, learning about the problem as you go. Apply this learning as you continue to flesh out the code, involve the customer in each step and have them guide the process. 

// Unit Testing 

// Testing done in each module, in isolation to verify its behavior. We can get a feeling on how a module would react in the real world once we have tested it thoroughly, under control and even contrived conditions. 

// A software unit test is code that exercises a module. Typically the unit test will establish some kind of artificial environment then invoke routines in the module being tested. It then check the results that are being returned, either against its known values or against the results from previous runs of the same tests. - Regression Testing. Later, we’ll have confidence that the individual parts work as expected. And then we could use the same unit test facilities to test the system as a whole. 

// We need to decide what to test at the unit level. History, programmers threw a few random bits of data at the code, looked at the print statements and called it tested. - We could do much better. 

// Testing Against Contract 

// We like unit testing against its contracts. 
// We want to write test cases that ensure that a given unit honors its contract. This will tell us two things: 

// Whether the code meets the contract 
// Whether the contract means what we think it means.

// We want to test that the module delivers the functionality it promises over a wide range of test cases and boundary conditions. What does this mean in practice?

// By emphasizing testing against contracts, we can try to avoid as many of those downstream disasters as possible. 

// Ad Hoc Testing

// Not to be confused with “Odd Hack”?? -> not sure, ad hoc testing is when we poke at our code manually, this may be as simple as a console.log() or a piece of code interactively in a debugger, IDE environment, or REPL. 

// At the end of the debugging session, you need to formalize this Ad Hoc test. If the code broke once, it is likely to break again. Don’t just throw away the code you created, add it to the existing unit test arsenal. 

// Build a Test Window

// Even the best sets of tests are unlikely to find all of the bugs. There’s something about being in the production that brings them out. This means you need to test software once it’s been deployed with real world data flowing through its veins. 

// Log Files containing trace messages should be a regular consistent format. You may want to parse them automatically to induce time or logic paths to where the program took. 

// A Culture of Testing

// All software you write WILL BE TESTED. If not by you and your team, then by the eventual users. So you might as well plan on testing it thoroughly. A little forethought can go a long way in minimizing maintenance costs and help desk call. 

// You only have a few choices. 
// Test First // Test During // Test Later/Never /

// Treat Test Code in any way that you treat production code. Keep it decoupled, clean and robust. Don’t rely on unreliable things. 

// Make no mistake, testing is part of programming. It’s not something left to other departments / staff. Testing, design, coding is all programming. 

// 42. Property-Based Testing  

// We recommend writing unit tests for your functions. You do that about thinking about things that could be a potential problem based on the knowledge on the thing that you’re testing. However, if you write the original code then you write the tests, is it possible that an incorrect assumption could be expressed in both? The code passes the test because it does what it is supposed to.

// Contracts in Variants and Properties

// Property-Based Tests Often Surprise You 

// Our suggestion is that when a property based test fails, find out what parameters it was passing to the test function and then use those values to create a separate regular unit test. That unit test does two things for you. First, it lets you focus on the problem without all the additional calls made into your code by the property-based framework. Second, that unit test acts like a regression test. Because property based tests generate random values that get passed to your test, there’s no guarantee that the same values will be used the next time your tests run. Having a unit test that forces those values to be used, ensures that this bug won’t slip through. 

// Property-Based Tests also help with your design.  

// A unit test is the first client of your API. The same is true of property-based tests but in a slightly different way. They make you think about your code in terms of variants and contracts. You think about what must not change and what must be true. This insight has a magical edge on your code removing edge cases and highlighting functions that leave data in an inconsistent state. We believe that property based testing is complementary to unit testing. They address different concerns and each brings it’s own benefits. If you’re not currently using them, give them a go. 

// What does it mean to property based test in the context of a MERN project? 
// Property-based testing in a MERN project involves writing tests that verify the properties or invariants of your code, rather than focusing on specific input-output pairs. This approach helps ensure that your code behaves correctly across a wide range of inputs and scenarios.
// Key characteristics of property-based testing:
// Generative testing: Instead of providing fixed test cases, property-based testing generates random or structured inputs to test your code against a variety of scenarios.
// Invariant verification: You define properties or invariants that your code should always satisfy, regardless of the input. These properties can be expressed as logical statements or functions.
// Shrinking: If a test fails, property-based testing tools can try to find a simpler input that still causes the failure, making it easier to debug.
// Benefits of property-based testing:
// Improved code coverage: Property-based testing can uncover edge cases that might be missed by traditional unit testing.
// Increased confidence: By verifying that your code adheres to specific properties, you can gain more confidence in its correctness.
// Reduced maintenance: Property-based tests can be more maintainable than traditional unit tests, as they are often less brittle to changes in your code.

// 43. Stay Safe Out There  

// 90% of coding is building the actual code. After it works, the other 90% will analyze the code for ways it could go wrong and add those to your test suite. 
// You’ll consider things such as:
// Passing in bad parameters
// Leaking or Unavailable Resources, etc 

// Security Basic Principles

// Minimize Attack Surface Area

// The attack surface area is the sum of all access points where an attacker can enter/extract data or invoke an execution of a service. 

// Examples 

// Code complexity makes the attack surface area larger with opportunities with unanticipated side-effects. Think of complex code making the surface area more open to infection.  Simpler smaller code is better - also brings fewer bugs, opportunities for a crippling security hole. Simple, tighter, less complex code is easy to reason about. Easier to spot potential weaknesses.

// Input data is an attack vector. Never trust data from an external entity. Always sanitize it before passing it onto a database, view rendering or other processing. Some languages can help with this.  

// Unauthenticated Services are an attack vector. By their very nature, any user anywhere in the world can call on unauthenticated services. So burrowing any other handling or limiting, you’ve immediately created an opportunity for a denial of service attack at the very least. Quite a few data breaches recently, were caused by developers by accidentally putting data in unauthenticated, publicly readable data stores in the cloud.

// Authenticated Services are an Attack Vector. Keep the number of authorized users at an absolute minimum. Call, unused, old or outdated users and services. If an account with employment credentials was compromised, your entire product is compromised. 

// Output Data is an Attack Vector. 
// Don’t give away information. - Make sure that the data you record is appropriate for the authorization for that user. 

// Debugging Info is an Attack Vector. 
// Information designed to make debugging easier can make breaking in easier as well. Make sure any test window and runtime exception reporting is protected from prying eyes. This technique has been proven to be successful at the CPU chip level. 

// Design With The Principle Of Least Privilege 

// Another Key Principle is to use the least amount of privilege for the shortest time you can get away with. In other words, don’t automatically grab the high permission level such as root or administer. If that high level is needed, take it, do the minimum amount work and relinquish your permissions quickly to reduce the risk. This principle dates back to the early 1970’s. 

// Use Secure Defaults 

// The default settings for your app or for your users on your site, should be the most secure values. These might be the most user friendly or convenient values, but it’s better to let each individual decide between the trade-offs between security and convenience. 

// For example the default for password entry might be to hide the password entered, replacing each character with an asterisk.

// Encrypt Sensitive Data 

// Don’t leave personal identifiable information, financial data, passwords or other credentials in plain text. Weather in a DB or some external data file. iF the data gets exposed, encryption offers an additional level of safety. In version control, we strongly recommend putting everything needed for the project under version control - well almost everything - here’s the exception to that rule. Don’t check in:
// Secrets;
// API Keys;
// SSH Keys;
// Encryption passwords or other credentials 

// alongside your source code in version control. Keys and secrets need to be managed separately. General configuration files or environment variables as part of build and deployment.  

// Maintain Security Updates 

// Updating computer systems can be a huge pain. - You need that security patch but as a side effect it breaks some portion of your application. You could decide to wait and defer the update until later - that’s a terrible idea because now your system is vulnerable to a no - exploit. 

// This tip affects every net connected device, including phones, cars, appliances, personal laptops, developer machines, build machines, production servers and cloud images - everything. The biggest data breaches in history were caused when their systems were behind on updates. DON’T LET IT HAPPEN TO YOU. 

// Strict Password policies will lower your security + recommendation from the National Institute of Standards and Technology - Def ask AI/LLM about  
// Do not restrict password length to less than 64 characters - NIST recommends 256 as a good maximum length.
// Do not truncate the user’s chosen password. 
// Do not restrict special characters. If special characters compromise your system, you have bigger problems. NIST says to accept all ASCII characters, space and uni code? - ????
// Do not provide password hints for unauthenticated users or prompts for specific information like “name of your first pet?” 
// Do not disable the paste function in the browser. 
// Do not impose other composition rules. --?? 
// Do not arbitrarily require users to change their passwords after some length of time. Only do this for a valid reason. - Ex. If there’s been a breach. You want to encourage long random passwords with a high degree of entropy. Putting artificial constraints limits entropy and encourage bad passwords habits leaving your users accounts vulnerable to take over. 

// Common Sense vs Crypto 

// Important Rules: 
// Never Do It Yourself - Rely on reliable things. Well vetted, thoroughly examined, well maintained, frequently updated, preferably open source libraries and frameworks. Beyond simple encryption tasks, take a hard look at other security features of your site / application. - USE 3RD PARTY 

// 44. Naming Things  

// Things should be name to the role they play in your code. Anytime you create something, you need to pause and think “what’s my motivation to create this” 

// Encourage a lot of communication. If everyone pair programs and switches pairs frequently, then jargon will spread automatically. 

// Another way is to have a project glossary. Listing the terms that have special meaning to the team. This is an informal document, possibly maintained on the wiki or index on the wall somewhere. This is to address a lot of meaning accurately and concisely. - btw this is what a pattern language is. 

// Renaming is very hard. - When you see a name that no longer corresponds to the intent and/or misleading or confusing fix it 

// Chapter 8. Before The Project 

// 45. The Requirements Pit  


// When given a problem, annoy people by looking for edge cases and asking about them. - ASK EDGE CASE QUESTIONS TO FLUSH OUT AS MUCH INFO AS POSSIBLE. Be diplomatic. 

// Requirements are a process. 

// Generate feedback to the client to refine the requirements. Go over mockups and prototypes. 

// Walk In Your Clients Shoes
// Become the client.

// Be involved in the environment of what problem is being solved. 

// Requirements vs Policy 

// Policy Is MetaData 

// Requirements Vs Reality 

// The Client never reads the requirements documents as it’s meant for developers. Requirements documents are meant for planning. Requirements need to be written down because developers need to know what they’re doing. 

// How?

// Something that could fit in a real or virtual index card - user stories. They describe what a small portion of an application should do from the perspective of that user’s personality. When written this way, the requirements can be placed on a board and moved around to show both status and priority. 

// By keeping the statement of the requirements short, you’re ensuring the developer to ask clarifying questions. You’re engaging the feedback process between clients and coders before and during the creation of each piece of code. 

// Over-Specification 

// Any danger is being too specific. Good requirements are abstract. Where requirements are concerned, the simplest statement that accurately reflects the business needs is best. This doesn’t mean you can be vague. Requirements are not architecture, design nor user interface.  

// Many project failures are blamed on an increase of scope, AKA feature bloat, creeping featurism, requirements creep. To prevent requirements creeping up on us is to get feedback. The client will experience first hand just one more feature. 

// Maintain A Glossary 

// Create and maintain a project glossary that you could find all the defined specific terms and vocabulary used in a project. All participants on the project from the end-users to support staff should use the glossary to ensure consistency which implies that the glossary needs to be widely accessible. 

// 46. Solving Impossible Puzzles  

// The secret of solving a puzzle is to identify the real not imagined constraints and find the solution they’re in.  Some constraints are absolute. Some are pre contrived notions. 

// The key to solving puzzles is to both recognize the constraints placed on you AND to recognize the degrees of freedom you do have - for in those, you’ll find your solution. 

// When faced with an intractable problem, enumerate all of the possible avenues you have before you. Don’t dismiss anything, regardless of how unusable or stupid it sounds. Go through the list and explain why a certain path cannot be taken. Are you sure, can you prove it? 

// Categorize and Prioritize Your Constraints

// Get Out Of Your Own Way

// Rubber Ducking

// A great way to feed your brain is to get feedback on what works and what does not work as you do your daily job and we suggest you do this by using an engineering day book.

// 47. Working Together  

// Pair/Mob Programming: A Collaborative Approach to Software Development
// Pair programming and mob programming are collaborative software development practices that involve two or more developers working together on the same code at the same time. While they share similarities, there are distinct nuances between them.
// Pair Programming
// Two developers: Typically involves two developers working together on a single computer.
// Driver and navigator: One developer (the driver) writes the code while the other (the navigator) reviews it and provides feedback.
// Roles switch frequently: The roles of driver and navigator switch periodically to ensure both developers are actively engaged and contributing.
// Benefits to Pair Programming: Being able to do it with different people with different backgrounds and experience, different problem solving techniques and approaches and different levels of focus and attention to any given problem. The typist can focus on syntax and coding style while the other developer is free to consider higher level issues and scope. 
// Mob Programming
// Multiple developers: Involves a group of developers (often three or more) working together on a single computer.
// Shared workspace: All developers can see the code and contribute ideas and feedback.
// Rotating driver: The driver role rotates frequently among the group members.
// Benefits of Pair/Mob Programming
// Improved code quality: Multiple perspectives and continuous code review lead to higher-quality code with fewer bugs.
// Increased knowledge sharing: Developers learn from each other, leading to a more skilled and knowledgeable team.
// Enhanced problem-solving: Collaborative problem-solving can lead to more innovative and effective solutions.
// Boosted morale: Working together can foster a sense of camaraderie and improve team morale.
// Reduced context switching: By working together, developers can avoid the time-consuming process of context switching between tasks.
// Tips for Making Pair/Mob Programming More Efficient
// Establish clear communication guidelines: Ensure everyone understands the expectations for communication, feedback, and decision-making.
// Set ground rules: Agree on rules for behavior, such as avoiding multitasking or interrupting the driver.
// Rotate roles frequently: Ensure that everyone has an opportunity to contribute and learn.
// Use a shared workspace: Make sure all developers can see the code and contribute ideas.
// Take breaks: Schedule regular breaks to avoid burnout and maintain focus.
// Experiment with different techniques: Try different approaches, such as ping-pong pairing or mob programming variations, to find what works best for your team.
// Provide feedback and continuous improvement: Regularly evaluate the effectiveness of pair/mob programming and make adjustments as needed.
// Conway's Law is a famous adage in software engineering that states:
// "Organizations which design systems are constrained to produce designs which are copies of the organization's communication structures."
// In simpler terms, the way a company is structured and how its teams communicate often dictates the architecture of the software they build. For example, if a company is highly siloed, with teams working independently, the resulting software may be similarly fragmented and difficult to integrate. On the other hand, a company with strong cross-functional collaboration can produce more cohesive and efficient systems.
// Conway's Law is often used to explain why certain software systems have specific architectural patterns or limitations. It can also be used as a tool for predicting the likely outcomes of software development projects based on the organizational structure.
// Here are some key implications of Conway's Law:
// Organizational structure influences software architecture: The way a company is organized can have a significant impact on the design and development of its software.
// Communication patterns shape system design: The way teams communicate and collaborate can also affect the architecture of the software they build.
// Conway's Law can be used to predict outcomes: By understanding Conway's Law, it is possible to anticipate the likely outcomes of software development projects based on the organizational structure.
// Conway's Law can be used to guide organizational design: Conway's Law can also be used to help organizations design their structures in a way that promotes the development of effective software systems
// 48. The Essence of Agility  

// Agility is your style - not you. 

// Individuals and Interactions >>> Processes and Tools 
// Working Software >>> Comprehensive Documentation 
// Customer Collaboration >>> Contract Negotiation
// Responding To Change >>> Following A Plan 

// While there’s value in the items on the right, we value the items on the left more. 

// Agility is all about responding to change, something that is inevitable and contextual. Gathering and acting on feedback: 
// Workout where you are 
// Make the smallest most meaningful steps to where you want to be
// Evaluate where you are, and fix anything that you broke. 

// Chapter 9. Pragmatic Project

// As soon as you have more than one person on a project, you need to establish some ground rules and delegate parts of the project accordingly. 

// 49. Pragmatic Teams

// Programmers are a bit like cats, intelligent, strong willed, opinionated, independent and often worshiped by the net

// No Broken Windows 

// Teams as a whole should tolerate broken windows aka those small imperfections that no one fixes. The team must take responsibility for the quality of the product. 

// Some team methodologies have a quality officer. Someone in the team to whom the team delegates the quality of the deliverable. - Quality should come from all team members - built in, not bolted on. 

// Boiled Frogs 

// Encourage everyone to actively monitor the environment for changes. Stay awake aware of increased scope, decreased time scales, additional features, new environments, anything that wasn’t in the original understanding.  Keep metrics on new requirements. You need to be aware that changes are happening otherwise it’ll be you that’s in the hot water. 

// SCHEDULE YOUR KNOWLEDGE PORTFOLIO!!!

// Teams that want to succeed need to consider their knowledge and skill investments as well. 
// If your team is serious about improvement and innovation, you need to schedule it. Trying to get things done whenever there’s a `free moment`, means it will never happen. 

// Old Systems Maintenance

// Process Reflection and Refinement 
// Continuous improvement can only happen when you take the time to look around, figure out what's working or not and then make change.s 
// SCHEDULE IT, FIX IT 

// New Tech Experiments 

// Don’t adopt new tech because everyone is doing it or because you saw at a conference or it’s something you read online.

// Deliberately vet new tech with prototypes.
 
// Put a task on the schedule to try new things and analyze results. 

// Learning And Skills Improvements

// Many skills are more effective when spread-team wide. Plan to do it. Whether its the formal brown bag lunch or the formal training sessions. 

// Communicate team presence. The team has a presence in the organization and the team needs to communicate clearly with the rest of the world.  

// Great teams have a distinct personality. People look forward to meeting with them because they know they’ll see a well performance that makes everyone feel good. 

// The documents they create are crisp, accurate and consistent. The team speaks with one voice, and may have a sense of humor. 

// Marketing 

// Generate A Brand

//  When you start a project, come up with a name for it. Ideally something off the wall. Use your team name liberally when talking to people. It sounds silly but it gives your team an identity to build on and the world something memorable to associate with your work. 

// Don’t repeat yourselves. DRY - Good communication is key to avoid these problems - instant and frictionless. You should ask questions to team members and get more or less a reply. 

// If you have to wait a week to ask the team a question or share your status - that’s an awful lot of friction. Frictionless means its easy and and low ceremony to ask questions, share your progress, your problems, insights and learnings and to stay aware of what your teammates are doing  

// Maintenance awareness to stay DRY. 

// Team Tracer Bullets 

// With tracer bullets, we recommend developing individual features, however small initially, that go end-to-end throughout the entire system. That means you need all the skills to do that within the team. 
// The tracer bullet approach in programming is a development methodology that involves rapidly building a minimal, working version of a software application to validate assumptions and gather feedback early in the development process. It's inspired by the military concept of tracer bullets, which are fired to adjust the aim of other rounds.
// Key principles of the tracer bullet approach:
// Rapid prototyping: Build a basic, functional version of the application as quickly as possible to test core concepts and assumptions.
// Iterative development: Continuously refine and improve the application based on feedback and user testing.
// Early validation: Validate assumptions about user needs, technical feasibility, and market demand early in the development cycle.
// Minimal viable product (MVP): Focus on creating a product with just enough features to satisfy early adopters and gather feedback.
// Benefits of the tracer bullet approach:
// Reduced risk: By identifying and addressing potential issues early, the tracer bullet approach can help mitigate risks and avoid costly mistakes.
// Faster time to market: By focusing on core features and iterating rapidly, the tracer bullet approach can help bring products to market more quickly.
// Increased customer satisfaction: By involving users early in the development process, the tracer bullet approach can help ensure that the final product meets their needs and expectations.
// Improved decision-making: The feedback gathered through the tracer bullet approach can help inform important decisions about product development and direction.
// Build Teams so that you could build code end-to-end incrementally and iteratively

// Consistency and Accuracy == automate everything that the team does.  

// Why struggle with code formatting standards when your editor/IDE can do it for you automatically? 
// Why do manual testing when your continuous build can run tests automatically? 
// Why deploy by hand when automation can do it the same way every time repeatedly and reliably? 

// AUtomation is an essential component of every project team. Make sure that the team has skills and tool building to build and construct the tools to automate the project development and production deployment. 

// Know When To Stop Adding Paint. 

// Give each team member a chance to shine in their own way. Give them enough structure to support them and to ensure that the project delivers value. 


// 50. Coconuts Don’t Cut It 

// Tip 87 - Do What Works - Not What's Fashionable 

// How do you know something works? - Try it. Keep the good bits that seem to work well and discard anything else that’s waste or overhead. No one will downgrade your organization because it operates differently from spotify or netflix because they couldn’t even follow their own processes while they were growing. 

// One Size fits no one well. 

// The real goal isn’t to do Scrum, Agile, Lean or w.e., the goal is to be in a position to provide working software that gives the user some new capability at a moment’s notice. Not months, years from now but now. 

// Tip 88 - Deliver When Users Need It 

// In order to move into this style of continuous development, you need a rock solid infrastructure.  - You do development in the main trunk of your version control system, not in branches and use techniques such as feature switches to roll out test features to users selectively. Once your infrastructure is in order, you need to decide how to organize the work. 

// Beginners might want to start with scrum for project management, plus the technical practices from extreme programming.

// More disciplined and experienced teams may lean into doing Kanban and Lean techniques. 

// Investigate and try these approaches for yourself. 

// Over investing in any methodology can lead you to be blind from alternatives. 

// 51. Pragmatic Starter Kit 

// Whether it’s the build and release procedure, testings, project paperwork or any other recurring task on the project, it has to be automatic and repeatable on any capable machine. Ensure consistency and repeatability on the project. Manual procedures leave consistency up to chance and repeatability isn’t guaranteed. Especially if a task or procedure is open to interpretation by different people. 


// The three legs that support every project are: 

// Version Control
// You need everything you need to build your project under version control. Build, test and deployment are triggered via commits or pushes to version control and built on a container on the cloud. 

// Regression Testing 

// Ruthless and Continuous Test

// Many developers test gently. Subconsciously knowing where their code will break and avoiding the weak spots. Pragmatic programmers are different. We are driven to find our bugs now so we don’t have to endure the shame of others finding our bugs later. 

// We want to start testing as soon as we have code by writing a lot of unit tests. A project can have more testing code than production code. It’s worth the effort as it ends up being much cheaper in the long run and producing the product with close to zero defects. 

// The automatic build runs all available tests. The test environment should match the production environment closely. Any gaps are where bugs breed. 

// Unit Testing 
// A unit test is code that exercises a module. Unit testing is the foundation of all other forms of testing. If the parts don’t work by themselves, they probably won’t work well together. All of the modules that you’re using must pass their own unit test before you can proceed. Once all of the modules have passed their individual tests, you’re ready for the next stage. You need to test how all of the modules use and interact with each other throughout the system. 

// Integration Testing
// Integration testing shows that the major subsystems that make up the project work and play with each other. With good contracts in place and well tested, any integrating issues can be detected easily. Otherwise, integration becomes a fertile breeding ground for bugs. - Often it’s the single largest source for bugs in the system. Integration testing is really an extension of unit testing.

// Validation and Verification 
// As soon as you have an executable user interface or prototype, you need to answer an all important question. - The users told you what you wanted but, is it what they need? Does it meet the functional requirements of the system? A bug free system that answers the wrong question isn’t very useful. 

// Be conscious of end user patterns and how they differ from developer test data.

// Performance Testing 

// Ask yourself - if the software meets the performance requirements under real world conditions with the expected number of users, or connections or transactions per second. Is it scalable? 

// For some applications, you may need specialized testing hardware or software to simulate the load realistically. 

// V.	Testing The Tests

// After you’ve written a test to detect a particular bug, cause the bug deliberately, and make sure the test complains. This ensures that the test will catch the bug if it happens for real. 

// In the context of programming, a "saboteur" is typically a malicious code snippet or program that is designed to intentionally disrupt or damage a computer system or software application. It can take many forms.

// If you’re really serious about testing, take a separate branch of the source tree, introduce bugs on purpose and verify that the tests will catch them. 

// When writing tests make sure that the alarms rise when the should. 

// VI. 	Testing Thoroughly 

// Once you’re confident that your tests are correct and are finding bugs that you create, how do you know that you’ve tested a code base thoroughly enough? - The short answer is you don’t, and you never will. 

// You might want to try coverage analysis tools that watch your code during testing and keep track of which lines have been executed and which haven’t. These tools help you give you a general feel for how comprehensive your testing is but don’t expect to see 100% coverage. Even if you were to hit every line of code, that’s not the whole picture. What is important is the number of states the program has. States are not equivalent to lines of code. 

// Property-Based Testing 

// A great way to explore how your code handles unexpected states is to have a computer generate those states. Use property based testing techniques to generate test data according to the contacts and variants of the code under test. 

// Tightening The Net 


// Once a human tester finds a bug, it should be the last time a tester finds that bug. The automated tests should be modified to check for that particular bug from then on every time with no exception, no matter how trivial and no matter how much the developer complains. 

// 3. Full Automation

// 52. Delight Your Users 

// “When you enchant people, your goal is not to make money from them or to get them to do what you want, but to fill them with great delight” - Guy Kawasaki

// Your users are not motivated by code but rather in the business problem that they need help solving in the context of their objectives and budget. Their goal is that by working with your team, they’ll be able to do this. Their expectations are not software related. 

// How would you know that we’ve been successful a month/year/w.e. after this project is done?

// A project to improve product recommendations might actually be judged by customer retention. 
// A project to consolidate databases might be judged in terms of data quality or it might be about cost savings.  

// Its these expectations of business value that really count, not just the software project itself. The software is only a means to these ends.

// Now that you have surfaced some of the underlying expectations of value behind the project, you can start thinking about how you could deliver against them. 

// Make sure everyone on the team is totally clear about these expectations. When making decisions, think about which path forward moves closer to those expectations. 

// Don't be afraid to make suggestions that change the requirements if you can demonstrate that it would move the project closer to the objective. 

// Continue to think about these expectations as you progress throughout the project. We found that as our knowledge of the domain increases, we’re better able to make suggestions on other things that could be done to address the underlying business issues. 

// We strongly believe that developers who are exposed to many different aspects of an organization can often see ways of weaving different parts of the business together that aren’t always obvious to individual departments. 


// If you want to truly delight your client, forge a relationship with them where you can actively help them solve their problems. - Your title should be - problem solver. 

// 53. Pride and Prejudice

// Pragmatic Programmers don’t shrink from responsibility. Instead we rejoice and accept challenges in making our expertise well-known. If we are responsible for a design or a piece of code, we do a job that we are proud of.


// Anonymity, especially on large projects can provide a breeding ground for sloppiness, mistakes, sloth and bad code. It becomes too easy to just see yourself as just a cog in the wheel producing lame excuses and endless state reports instead of good code. While code must be owned, it doesn’t have to be owned by an individual. 

// Communal Ownership Of Code
// Pair Programming. 

// People should see your name in a piece of code and expect it to be solid, well written, tested and documented. 

// Chapter 10. Postface 

// “In the long run, we shape our lives and we shape ourselves. The process never ends until we die and the choices we make are ultimately our own responsibility. ”


// We need to ask ourselves two fundamental questions about every code we deliver: 

// Are we doing everything we can to protect the user? 
// Would we be happy using this software ourselves? Or having it used on us? Would we be okay with it? 

// Imagine the future you want. It’s up to you, it's your imagination, your hopes, your concerns that provide the pure thought stuff that builds the next 20 years and beyond. You’re building the future, for yourself and your descendants. Your duty is to make it a future that we all want to inhabit. Recognize when you’re doing something against this ideal and have the courage to say no. Envision the future we could have, and have the courage to create it. Build castles in the air every day. 

