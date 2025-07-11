# Modern Software Engineering
## By: David Farley

## Part I: What Is Software Engineering?

### Chapter 1: Introduction

Software engineering is the process of discovery and exploration. To succeed at it, software engineers need to become experts at learning. Humanity's best approach to learning is science so we need to adopt the techniques and strategies of science and apply them to our problems.

The scientific method is described as:
* Characterize: Make an observation on the current state
* Hypothesise: Create a theory / description that may explain your observation
* Predict: Make a prediction based on your hypothesis
* Experiment: Test your prediction

If we start to think in terms of controlling the variables in our experiments so that we can achieve more consistency and reliability in our results, this leads us into the direction of more deterministic systems and code.

If we start to think in terms of being skeptical about our ideas and explore how we can falsify them, we can identify and eliminate bad ideas more quickly and make progress much faster.

Software engineering is the application of an empirical, scientific approach to finding efficient, economic solutions to practical problems in software.

The adoption of an engineering approach to software development is important for two main reasons:
* Software development is always an exercise in discovery and learning
* If our aim is to be efficient and economic, then our ability to learn must be sustainable.
* We must manage the complexity of the systems that we create that maintains our ability to learn new things and adapt to them.

We must become experts at learning and managing complexity. There are 5 techniques that form its roots on learning:
* Iteration
* Feedback
* Incrementalism
* Experimentation
* Empiricism

Whenever the nature of the problems we solve or the tech we use to solve them, addressing the complexity of those problems and the solutions is an essential differentiator between bad systems and good.

To become experts at managing complexity, we need the following:
* Modularity
* Cohesion
* Separation of concerns
* Abstraction
* Loose Coupling

Practical tools that act as an effective strategy for any software development which includes:
* Testability
* Deployability
* Speed
* Controlling The Variables
* Continuous Delivery

When we apply this thought, the results are profound. We create software of higher quality. Produce work more quickly, and the people working on the teams that adopt these principles, report that they enjoy their work more, feel less stressed and have a better work / life balance.

### Reclaiming Software Engineering

If our software engineering practices don’t allow us to build better software faster then they are not really engineering and we should change them.

### Chapter 2: What Is Engineering?

For us, production consists of triggering the build. It is automatic, a push button, immensely scalable and so cheap that it is best considered free. We can still make mistakes and get it wrong, but these are problems that are understood and well addressed by tools and technology.

Design Engineering, not production engineering.

Part of the mistake is to assume that idealistic precision is impossible in any field, let alone software development. We have made the mistake of seeking mathematical precision.

Software engineering is the application of an empirical, scientific approach to finding efficient, economic solutions to practical problems.

### Chapter 3: Fundamentals of an Engineering Approach

The effectiveness of software development teams are based on two key attributes:
* **Stability**: refers to several interconnected aspects that contribute to a team's effectiveness and long-term success.
* **Throughput**: essentially refers to the measure of how much work a team can complete within a specific period. It's a key indicator of a team's efficiency and productivity.

Teams with these two are classified as high performers.

Some activities can predict performance on this scale.

If your team employs test automation, trunk based development, deployment automation and about 10 other practices, their model predicts that you will be practicing continuous delivery (CD). If you practice CD.

Stability is tracked by the following:
* Change Failure Rate: The rate of which a change introduces a defect at a particular point in the process.
* Recovery Failure Time: How long to recover from a failure at a particular point in the process.

Measuring stability means measuring the quality of the work being done.

Throughput is tracked by the following:
* Lead Time: The measure of the efficiency of the development process. How long for a single line change to go from idea to working software?
* Frequency: A measure of speed. How long are changes deployed into production?

Throughput is the measure of a team’s efficiency through delivery of ideas in the form of working software. How long does it take to get a change into the hands of users? And how often is that achieved? This is an indication of an opportunity to learn.

They answer the questions:
* What is the quality of our work?
* How efficiently can we produce work of that quality?

It leaves some gap like if we’re building the right thing, only if we’re building them right.

Teams based on this model make more money than the ones that don’t.

Approval by an external body such as a manager simply doesn't work to increase the stability of a production system.

### The Foundations Of A Software Engineering Discipline

* Process / Philosophical Approach
* Technique and Design

We should become experts at learning. We should recognize and accept that our discipline is a creative design discipline and has no meaningful relationship to production engineering and instead focus on the mastery of the skills, exploration, discipline, discovery and learning.

We need to focus our skills on managing complexity. Both at the technical level and at the organizational level. We build systems that don’t fit into our heads.

### Experts at Learning

If we need to become experts at learning, we need to adopt and become skilled at the kind of practical, science based approach problem solving that is at the essence of other engineering disciplines. It must be tailored to our problems.

## Part II: Optimize for Learning

### Chapter 4: Working Iteratively

Iteration is defined as a procedure in which repetition of a sequence of operations yields results successively closer to a desired result.

Fundamentally, iteration is a procedure that drives learning. Iteration allows us to learn, react and adapt to what we’ve learned.

Without iteration and collecting feedback, there is no opportunity to learn on an ongoing basis. It allows us to make mistakes and correct them or make advances and enhance them.

It allows us to progressively reach our goal without really knowing how to approach our goals. As long as we have some way of telling if we are further or closer to our goal, we can still iterate randomly and still achieve our goal. We can discard the steps that take us further away and take the steps that take us nearer towards the goal.

Because they make the assumptions that they will make mistakes, agile teams work in a way, quite intentionally, to mitigate the costs of mistakes.

Working iteratively is different in some fundamental ways than working in a sequential approach.

### Practical Advantages of Working Iteratively

We have a choice. We could iterate on the product that we create and steer them based on good feedback from our customers and users toward higher outcomes.

This encouraged us as an industry to reduce the size and complexity of the features that we would work on.

Agile planning depends on decomposing work into small enough pieces that we could complete our work in a single sprint or iteration.

Working iteratively allows us to take a defensive approach to design.

We can’t afford to spend a lot of time in analysis and design without creating anything because that means more time not learning what really works. So we need to compress things and work iteratively. We need to do just enough analysis, design, coding, testing and releasing to get our ideas out in the hands of our customers and users so that we can see what really works. We need to reflect on that and adapt our learning to take advantage of it.

This is one of the main ideas at the heart of continuous delivery.

In addition to recognizing the problem with waterfall planning, it would be lovely if they could:
* Correctly identify its users' needs;
* Accurately assess the value to the organization if those needs are met
* Accurately estimate how much it would cost to fulfill those needs.
* Make a rational decision if the benefits outweighed the cost
* Make an accurate plan
* Execute the plan without deviation
* Count the money at the end

The real world just doesn’t work like this. We are terrible at guessing at what our users want, even when we ask our users, they don’t know what they want either.

The most effective approach is to iterate. Accepting that some, even many of our ideas may be wrong and working in a way that tries them out as quickly, cheaply and efficiently as possible.

Once we have an idea that we can work on, we need to decide when to stop. We need to spot the bad ideas as soon as we can. If we can eliminate the bad ideas, just by thinking about it, great. Many ideas are not obviously bad. An idea might be a good idea but might be let down by poor timing/execution. We need to find ways to try our ideas with low cost.

If we work in small steps, get real reactions to the progress or otherwise and constantly validate and review our ideas, we can see soonest, with lowest investment when things start to work differently to our hopes and plans. The cost of any plans/ideas going wrong when working iteratively is lower, therefore the level of this risk is reduced.

An agile approach to software development actively encourages us to start working problems in smaller pieces, it encourages us to begin work before we know the answer to everything. This approach allows us to make progress. Maybe in sometimes sub-optimal directions but nevertheless, we learn something new.

This allows us to refine our thinking, identify the next small step and then take that step. Agile development is an unbounded infinite approach because we work on smaller pieces of the problem before moving forward from a known and understood position. This is a more evolutionary unbounded approach to problem solving.

Embrace change. You must learn to have the confidence to begin work precisely when we don’t yet know the answers and we don’t know how much work will be involved.

### Practicalities of Working Iteratively

Work in smaller batches. Reduce the scope of each change and make each change in smaller steps. The smaller the better.

TDD (Test Driven Development) is often described by the practices that contribute to it.
* **RED** - Write a test, run it and see it fail.
* **GREEN** - Write just enough code to make the test pass, run it, and see it pass.
* **REFACTOR** - Modify the code to make it clear, expressive, elegant and more general. Run the tests every time it changes and see if it passes.

For example, in the authors' own coding, they always introduce new classes, variables, functions and parameters via a multi-stage of tiny refactoring steps. Frequently checking to see if the code works by running their tests as they go.

### Chapter 5: Feedback

Feedback is defined as the transmission of evaluative or corrective information about an action, event or process to the original or controlling source. Without feedback, there is no opportunity to learn.

Unless we know and understand the results of our choices and actions, we cannot tell if we are making progress.

Feedback allows us to establish a source of evidence towards our decisions. Once we have such a source, the quality of our decisions is inevitably improved. It allows us to separate myth from reality.

### Feedback in Coding

If we want to take feedback seriously, we want lots of it. Writing code and having the testing team give feedback on it 6 weeks later is not going to suffice.

The author would get feedback in phases (TDD styled).

If you want a new behavior in your code:
* Write a Test ⇒ Get Feedback

### Feedback In Integration

Continuous integration is evaluating every change in the system along with every other change to the system as frequently as possible. As close to continuously as we can get.

CI - The practice of merging all the developers working copies to a shared mainline several times a day. Most CI experts will relax several times to at least once per day as an acceptable though not desirable compromise. - Exposing small incremental changes to evaluation at least once per day.

Branching of any kind is about isolating change.

CI and Branching are really not compatible with each other. One aims to expose changes as early as possible, the other works to defer that exposure.

CI means that we get regular, frequent drifts of feedback, it gives us powerful feedback to the state of our code and the behavior of our system throughout our day but it comes at a cost. This means our process to design our code is like a guided evolution, for each small step giving us feedback but not necessarily adding up to a whole feature. It’s a challenge for most, but liberating once embraced and it has a quality impact on the quality of our designs.

### Feedback In Design

The ability to create a simple test and the effectiveness of your design is related to the attributes of the quality we consider important in “good code”.

The attributes of “good code” and/or Testable Code are:
* Modularity
* Separation of concerns
* High Cohesion
* Abstraction // Information Hiding
* Appropriate Coupling

We need to take the testability and deployability of our systems seriously. The author advises the company they work with to have releasable software ready for deployment at least once per hour.

There are two effective roots:
* You could either build monolithic systems and optimize them for deployability and testability or
* You could modularize them into separate individually deployable units. - This approach is behind the idea of microservices.

The microservice architecture approach allows teams to develop, test and deploy their services independently of one another. It decouples them organizationally, enabling firms to grow effectively and efficiently.

Valuing and prioritizing feedback in our development approach promotes more sensible, more effective architectural decision making - this is a profound and important idea.

### Preferred Early Feedback

It is preferred to get feedback as early as possible. Through the code editor, unit, acceptance, performance, security tests and anything else that helps us understand the validity of our changes, gives us confidence in our ability and applicability of our work but at the cost of taking longer to return the results.

### Feedback In Product Design

Closing the feedback loop around the creation of product ideas and delivering value into production is the real value of continuous delivery. It is the real reason why it has become so popular in organizations around the world.

Applying the principles of employing and optimizing for fast high quality feedback, enables the organization to learn faster, to discover what ideas work or don't for their customers and to adapt their products to better meet customer needs.

### Feedback In Organization And Culture

How can we establish useful feedback? There are two approaches to this problem.

The first has been established for some time in agile development circles. It’s tied with the individuals involved. It is individuals and interactions over processes and tools.

### Chapter 6: Incrementalism

Incrementalism: Incremental design is directly related to any modular design application in which components can be freely substituted if improved to ensure better performance.

Working incrementally is about building value progressively. This is about taking advantage of the modularity or “componentization” of our systems. If working iteratively is about refining and improving something over a series of iterations, then working incrementally is about building a system and ideally releasing it piece by piece.

To create complex systems, we need both.

An incremental approach allows us to decompose work and delivery value step by step, incrementally, getting to value sooner and delivering value in smaller simpler steps.

### The Importance of Modularity

A modular approach frees teams to work more independently. They can each make small incremental steps forward without needing to coordinate or at least with minimal coordination between teams.

One of the defining characteristics of high performing teams in software development, is their ability to make progress and to change their minds without asking for permission from any person or group outside of their small team.

To carry out organizational change, the most effective strategy is to create many small independent teams and allow them the freedom to make their own changes. This progress can and still should be structured to allow independent teams to head towards a similar direction targeted at fulfilling a larger scale organizational vision but still a more distributed approach to organizational structure that has been traditional for most big firms.

Modular organizations are flexible, scalable and more efficient than most traditional organizational structures for software development.

### Tools of Incrementalism

The most profound tools are feedback and experimentation but still focusing on modularity and separations of concerns.

If we want to make a change incrementally, we must be able to make that change while limiting its impact in other areas.
* Architect your system to limit the scope of the change
* By designing that are modular and have a good separation of concerns, I can limit the impact of my changes beyond the area of the code that is my immediate focus.

Adopt practices and techniques that allow me to make changes to the code with a lower risk. - Refactoring Such tiny changes when refactoring can be easy to back away from by working iteratively as well as incrementally. If I can fine grain my incrementalism with strong version control, I'm only a small few steps away from a safe place.

Testing (automated) gives us direction to move forward incrementally with significantly more confidence. Testing has an impact on modularity and separation of concerns in our designs. A Test driven approach to automated testing demands that we create mini computable specifications.

### Limiting The Impact of Change

#### The Ports And Adaptors Pattern

The Ports and Adapters pattern promotes a clean separation of concerns, leading to more robust, maintainable, and adaptable software systems.

Any interface point between two components of the system that we want to decouple a **port**, we define a separate piece of code that translates inputs and outputs **the adapter**. This allows us to have more freedom to change the code behind the adaptors without forcing changes on other components that interact with it through this port. This code is the core of our logic. So being able to change this without coordination with other teams / people is a BIG WIN.

As a result, we can safely make incremental progress in this part of the code and then deal with the significantly trickier and costly changes in the agreed upon protocols in the information exchange between components. These changes should ideally happen a lot less often so teams will break each other's code less often too.

We should treat these integration points, these **ports** with a little more care than other parts of our systems because they cause more pain when things change here. This pattern gives us an opportunity to embody that “more care” in our code.

The other important and often overlooked tool in managing the impact of our change is speed of feedback. CI/CD can solve the problem of finding broken code sooner rather than later.

We could use either or both of these strategies to limit the impact of change. We could design our system to enhance our ability to make changes without forcing the need to change on others and we can optimize our working practices to make changes in small incremental steps. Committing those small changes to a shared evaluation system and then optimizing that evaluation system, gives us feedback quickly enough to allow us to react to it, and to manage any problems that our changes may cause.

### Incremental Design

First we need to accept that change, missteps and the impact of the unexpected as our knowledge deepens are all simply inevitable, whether you acknowledge them or not. It is simply the reality of all complex creations of any kind.

### Chapter 7: Empiricism

Empiricism in software development is the philosophy that knowledge and decisions should be based on experience, observation, and experimentation rather than relying solely on predefined plans or theoretical assumptions. It's a cornerstone of agile methodologies like Scrum. You build in small increments, get feedback, and adjust your course based on what you learn.

Empiricism, making decisions based on the evidence and observations of reality, is vital to making sensible progress. Without that analysis and reflection, organizations will continue to proceed on the basis of only guesswork and will continue to invest in ideas that lose the money or reputation.

### Separating empirical and experimental

We can also be empirical, observing the outcome of our ideas less formally.

### Avoid Self-Deception

Being empirical requires us to be more organized in how we assemble the signals we gather from reality and assemble them into theories that we could test through experimentation.

“The first principle is that we must not fool ourselves”

### Chapter 8: Being Experimental

Experimentation is defined as a procedure carried out to support, refute or validate a hypothesis. Experiments provide insight into a cause and effect by demonstrating what outcomes occur when a particular factor is manipulated.

We as software developers can use guesses where they are appropriate but then we could design experiments to design the guesses. This sounds slow, expensive and complex but it is not.

4 Characteristics that define being experimental as an approach:

#### Feedback
We need to take feedback seriously. We need to understand how we would collect results that would provide us with a clear signal and deliver them back to the point at which we are thinking. We need to close the loop.

It is important from an engineering perspective to recognize the effect that speeding and efficiency and quality of feedback can give.

#### Hypothesis
We need to have an idea in mind that we are aiming to evaluate. We are not wandering around willy nilly collecting data.

We need to be able to test our hypotheses.

Organizing our thinking and our work to proceed as a series of experiments to validate our hypothesis is an important improvement in the quality of our work.

#### Measurement
We need a clear idea of how we would evaluate the predictions that we are testing in our hypothesis. What does success or failure mean in this context?

We need to make a prediction out of our hypothesis, then figure out how to measure the results of our hypothesis.

#### Control The Variables
We need to eliminate as many variables as we can so that we can understand the signals that our experiment is sending to us.

The authors take on CD (Continuous Delivery) is that it allows us to proceed with much more certainty. It eliminates to a large extent the variables around the quality of our work so that we can concentrate on whether or not our product ideas are good.

We can get a much clearer picture of “are we building the right things” because we have taken control of “are we building the things right”.

The most flexible form of experiment in the context of software is an automated test.

TDD - organizing our development around a series of iterative experiments that make tiny predictions about the expected behavior of our code which will allow us to incrementally increase the function of our software.

The clearest form of this is TDD. We use tests as executable specifications for the behavior of our systems. Precisely defining the change of behavior that we are aiming to achieve through our hypothesis.

We can operate this TDD approach at different levels of granularity.

We can begin by creating user centered specifications. Using the techniques of Acceptance Test Driven Development (ATDD) - sometimes also referred to as Behavioral Driven Development (BDD).

We use these high level specifications to guide a more fine grain, more technical unit testing. Software Development using these techniques has significantly and measurably fewer bugs than software developed more conventionally. This is a welcomed improvement in quality.

High performing teams that employ techniques like TDD, CI/CD spend 44% more time on useful work. These teams are much more productive than the norm and at the same time, producing a higher quality outcome.

## Part III: Optimize for Managing Complexity

### Chapter 9: Modularity

Modularity is defined to a degree to which a system components may be separated and combined, often with the benefit of the flexibility and variety in use.

### Hallmarks of Modularity

The code is modular and should be short enough to be readily understood as a stand-alone thing outside the context of other parts of the system. There is control over the scope of the variables and functions that limit access to them so that there’s a notion to them that there’s some sense of there being an outside and an inside to the module.

There is an interface of some kind that controls access, manages communication with other code, and deals with other modules.

### Undervaluing The Importance of Good Design

As an industry, we undervalue the importance of software design. We obsess over languages and frameworks, have arguments over IDE’s vs Text Editors / OOP vs Functional Programming. None of these are as important as modularity / separation of concerns to the quality of our output.

If you have code with good modularity and good separation of concerns, whatever the coding paradigm / tools, it will be better, easier to work on, easier to test and easier to modify as you learn more about the problem you are trying to solve. It will be more flexible in use than code that does not have these properties.

How can we create code and systems that will go and evolve over time but are appropriately compartmentalized to limit damage if we make a mistake? How do we create systems that are appropriately abstracted so that we can treat the boundaries between our modules as opportunities to enhance our systems rather than liabilities that prevent us from changing them?

### The Importance of Testability

What drives our designs from our tests, it encourages us to create testable code and systems and so given the limits of our experience and talent, enhances the outcome. We don’t have any other techniques that do that to a similar extent.

### Designing for Testability Improves Modularity

Determinism is more difficult to achieve as the complexity and scope of the system grow. The real root cause of a lack of determinism in computer systems is concurrency. This can take various forms. The clock ticking away incrementing the system time is one form of concurrency. The OS reorganizing your disk when it thinks it has some spare time is another.

In the absence of concurrency, digital systems are deterministic. For the same sequence of bits and instructions, we get the same result every time.

One useful driver of modularity is to isolate the concurrency, so that each module is deterministic and reliably testable. Architect systems so that entry to a module is sequenced and its outcomes are more predictable. Systems written this way are very nice to work on.

Modules with clearly defined interfaces for inputs and outputs allows us to measure the system at those interfaces.

### Services and Modularity

Identifying the designs of our systems where the rest of the system doesn’t need to know and shouldn’t care about the details of what is happening on the other side of those seams is a very good idea. This is really the essence of design.

Services then provide us with an organizing idea of little compartments in our systems that hide details.

Services can be thought of as a modular system of our system.

The thing that provides any meaning at all to the concept of a service in software terms is that it represents a boundary. There is a difference between what is known and what is exposed on either side of these boundaries - a common problem in code bases is ignoring these differences.

#### Rest API

This encourages having a translation point at the edges of your service/API. You translate the incoming message into a more tractable form of consumption by your service and you translate the outputs of your service to some horrible big slow text based message for output.

The boundary should be treated with more care. They should be translation and validation points for information. The entry point to a service should be a little defensive barrier that limits the worst of the limits of consumers for that service. - PORTS AND ADAPTERS KINDS OF MODEL.

The base idea here is one of modularity. A system is not modular if the internal working of a JSON module is exposed. Communication between modules and services should be a little more guarded than communication within them.

### Deployability and Modularity

We advise that you work so that your software is always in a releasable state. This ensures that it is easily deployable.

A deployment pipeline is a mechanism that takes commits in one end and produces a releasable outcome at the other. If the output is releasable, it must also be independently deployable.

If the output of the deployment pipeline is deployable, it means that the pipeline constitutes a definitive evaluation of our software. If definitive, at least to the degree that we care and consider it safe and sensible.

There are only two strategies that make sense.
* We could build, test and deploy everything that constitutes our system together
* or we could build, test and deploy parts of that system separately.

If we don’t trust the output of our deployment pipeline sufficiently and feel it necessary to test the results that generate from the outputs of other deployment pipelines, then that presents problems.

The most scalable approach to software development is to distribute it. Reduce the coupling and dependency between and their products to the degree that each team can independently create, test and deploy their work with no reference to another team. - Microservices

If you’re testing microservices together, then they aren’t microservices. We must design for modularity and be skilled for the techniques of protocol design so that the interactions between modules, the protocols of information exchange between them is stable and is not allowed to change in a way that forces changes on other modules. - Like runtime management for APIs and so on.

### Modularity at Different Scales

Modularity is important at every scale. Each class, method or function should be simple and readable, and when appropriate composed of smaller independently understandable sub-modules. - TDD encourages this. Dependency injection influences the modularity of our designs.

The dependencies are the calibers, the points of measurement that we could inject into our system to achieve a more thoroughly testable outcome, ensuring that our code is testable, encouraging designs that are genuinely modular and as a result, code that is easier to read.

### Modularity In Human Systems

How do we scale? In bigger organizations, what they really mean is “How can we add more people so that we could produce software faster?”

### Chapter 10: Cohesion

Cohesion in computer science is defined as the degree to which the elements inside a module come together.

### Modularity and Cohesion - Fundamentals of Design

“Pull the things that are unrelated further apart and put the things that are closer related closer together.”

Good design in software is really about the way in which we organize the code in the systems that we create.

### Compartmentalizing our Systems

We need to be able to build our systems out of smaller, more easily understandable, testable discrete pieces. To achieve this, we certainly need techniques that would allow us to pull the unrelated things further apart but we need to also put the related things closer together.

Cohesion is contextual.

### Domain Driven Design

Domain-Driven Design (DDD) is a software development approach that places the core business domain and its logic at the center of the software design. Instead of focusing primarily on technical concerns (like database schemas or UI layouts) at the outset, DDD emphasizes a deep understanding of the problem space, the business rules, and the language used by domain experts.

Key Principles and Concepts in DDD:
* Ubiquitous Language
* Bounded Contexts - For example, a "Customer" in a "Sales" context might have different attributes and behaviors than a "Customer" in a "Support" context.
* Entities: Domain objects that have a unique identity and a lifecycle that persists over time, regardless of changes to their attributes.

Benefits of DDD:
* Better Alignment with Business Needs: Software directly reflects business processes and logic.
* Improved Communication: The Ubiquitous Language fosters clarity between technical and business teams.
* Manages Complexity: Bounded Contexts help break down large problems.
* More Maintainable and Flexible Code: Well-defined models are easier to understand, change, and extend as business requirements evolve.
* Higher Quality Design: Forces a deeper understanding of the problem domain, leading to more robust solutions.
* High Performance Code

High performance systems require simple well designed code.

To achieve high performance, we need to do the maximum amount of work for the smallest number of instructions. The more complex our code, the more likely that the paths through our code are not optimal because the simplest possible root through our code is obscured by the complexity of our code itself. The root of fast code is to write simple, easy to understand code.

### Linked To Coupling

If we want to have the freedom to explore and sometimes make mistakes, we need to worry about the costs of coupling.

Coupling: Given two lines of code A and B, they are coupled when B must change behavior only because A changed.

Cohesion: They are cohesive when a change to A allows B to change so that both add new value.

The cost of inappropriate levels of coupling is extremely high so it is important to take its influence into account in our designs. Coupling is in some ways the cost of cohesion.

### Driving High Cohesion with TDD

Yet again, using automated tests, specifically TDD to drive our design gives us a lot of benefits. Trying to achieve a testable design and nicely abstract behaviorally focused test for our system will apply a pressure on our design to make our code cohesive. We create a test case before we write the code that describes the behavior that we aim to observe in the system. This allows us to focus on the design of the external API interface to our code, whatever that might be. Now we work to write an implementation that will fulfill the small executable specification that we have created. If we write too much code, more than what’s needed to meet the specification, we are cheating our development process and reducing the cohesion of the implementation. If we write too little, then the behavior intent won’t be met.

The discipline of TDD encourages us to hit the sweet spot for cohesion. As ever, there are no guarantees. This is not a mechanical process and it still relies upon the experience and skill of the programmer.

### How to Achieve Cohesive Software

The key measure of cohesion is the extent or costs of change. If you have to wander around your code base changing it in many places in order to make a change, that is not a very cohesive system.

### Cost of Low Cohesion

The problem is when our cohesion is poor, our systems are less flexible, more difficult to test and more difficult to work on.

### Chapter 11: Separation of Concerns

Separation of Concerns is defined as a design principle for separating a computer program into a distinct section such that each section addresses a separate concern.

Separation of Concerns operate at all levels of granularity. It is a useful principle at the scale of whole systems as well at the level of individual functions for the system.

SOC is not really the same idea as cohesion and modularity. These two are properties of code and while we can speak of code as having a good SOC, what we’re really saying is that the stuff that is unrelated is far apart and the stuff that is related is closer together. It’s really a specific take on modularity and cohesion.

SOC is a technique that reduces coupling and improves the cohesion and modularity of our code and systems.

SOC allows us to keep the code and architecture of our systems that we create, clean, focused, composable, flexible, efficient, scalable and open to change.

### Dependency Injection

Dependency injection is when dependencies of a piece of code are supplied to it as parameters rather than created by it.

With DI, you can easily swap out real dependencies for mock or stub dependencies during testing which makes unit testing significantly easier, faster, and more reliable. DI reduces tight coupling between components. DI allows for easy configuration of your application.

### Separating Essential and Accidental Complexity

An effective route to improving the quality of our design is to aim separation of concerns in a specific way, that is, to separate the essential complexity of our systems from the accidental.

The essential complexity of a system is the complexity that is inherited in the problem that you are trying to solve. Addressing this complexity is the real value that our system offers.

The accidental (does not mean not important) complexity is everything else. The problems that we are solving as a side effect. (persistence of data, displaying things on a screen, clustering, some aspects of security - anything that is not directly related to solving the problem at hand.)

### Importance of DDD

We can look to guide our designs from the perspective of the problem domain. If we take an evolutionary and incremental approach to design, we can work in ways that allow us to keep a sharp lookout for those moments where we may identify new concerns that otherwise may be inappropriately conflated in our designs.

Try to maintain a very low tolerance for complexity. Code should be simple and readable. As soon as it starts to feel like hard work, pause and start looking for ways to simplify and clarify the part in front of you.

### Testability

Striving to control the variables so that we can test, encourages us to create systems that demonstrate the properties of high quality in software that we value (modularity, cohesion, separation of concerns, information hiding and loose coupling).

### Ports and Adaptors

Where one concern interacts with other places in our systems where we should always take more care.

### When to Adopt Ports and Adaptors

When people discuss the ports and adaptors approach, they’re usually discussing it in the context of a translation layer at the boundaries of services/modules.

In the book Domain Driven Design, the author always translates information that crosses between bounded contexts.

In other words, always communicate between services using ports and adaptors. From a design perspective, each service and module should have its own view of the world and should defend that perspective. If information is sent that breaks that view, that is a serious problem for the code.

We could protect our code two ways, and we could use an adaptor that translates things into our world view as they arrive at the edges of our system allowing us to validate our inputs to the degree in which we care about them or we would wrap up things we don’t trust and ignore it so that we can protect our systems from dubious external changes.

If we’re writing a messaging system for example, there are things that we should definitely know and there should be things that we should definitely not know. We probably need to know who sent the message and where it is going, how big the message is and whether we should retry if there is a problem. We should definitely not know what the message is saying. That would immediately couple the technicalities of the messaging to the semantics of the conversation that the message is being used for and would be very poor design. This may or may not be obvious but I also see a lot of code that makes this kind of mistake.

If the author makes a messaging system, they would wrap up the content of the message in a package of some kind and insulate the messaging system from the content of the packets. - the messages themselves.

### What is an API?

An application programming interface is all of the information being exposed to consumers of a service or library that exposes that API.

REST API / HTTP is a form of API but only one. There are many more. Strictly any communication between any bits of code meant to support programming of some kind is an API. This is where it is important to think about the information on what the code interacts with.

Imagine for a moment a function that takes a binary stream of data as an argument. What is the API? Is it only the signature of the function? Maybe if the function treats the stream as a black box and never looks inside the stream, then yes the signature of the function defines its coupling along with its callers.

However, if the function interacts with the content with its binary stream in any way, that is part of its contract. The level of interaction defines its degree to which it’s coupled, with the information on the stream. If the first 8-bits of the stream are used to decode its length, and that is all the function knows or cares about the stream, then the function’s signature + the meaning of the first 8-bits and how the length is encoded are the API. The more that the function knows of its content of the stream of bits, the more coupled to it, and the greater the surface area of the API.

There are many teams that ignore the fact that the data structure and its inputs that their code understands and processes are part of that code’s public API. Our adaptors need to deal with the whole API. If that means translating or at least validating the content of the binary stream of inputs, then so be it. The alternative is that our code may break when someone sends the wrong stream of bits. This is a variable that we could control.

Designing with the assumption that we would always add ports and adaptors at these points of communication between modules and services is a much stronger default stance than not. Even if the adaptor is a placeholder for the future, having that placeholder in place gives us the opportunity should the nature of the API change in any way to cope with those changes without having to rewrite all of our code. This is the classic model with ports and adaptors. Think about this at finer grain levels too. Don’t always write explicit translations, but the idea of trying to maintain a consistent level of abstraction within any piece of code no matter how small is a good one. As a default stance or guideline, I recommend that you always add ports and adaptors where the code you talk to that is in a different scope of evaluation, such as a different repo / deployment pipeline. Taking a more defensive stance in these situations will make your code more testable, yet again and more robust in the face of change.

### Using TDD to Drive Separations of Concerns.

If we design our code using the ideas of separations of concerns as a guiding principle, including the ideas of maintaining consistent levels of abstraction in any given small context, then we leave the door open to incremental change. Even if we don’t know the details of how something will be communicated, stored or interacted with in general, we can write code and make progress. Later as we learn more, we can use the code we wrote in ways that we haven’t thought of when we wrote it. This allows us to take a more evolutionary approach to design, growing our systems step by step as our understanding deepens.

TDD is the most powerful tool that we can wield to achieve that testability by driving all of our development from the perspective of testing, we dramatically change the focus of our designs.

In the context of SOC (separations of concerns) our tests become more difficult to write, the more the concerns are conflated within the scope of the test. If we organize our development around testing and drive our development through testing, then we are confronted much earlier in the process by the costs and benefits of our design decisions. This faster feedback is naturally a good thing, allowing us to spot flaws in our designs much sooner than other techniques.

### Chapter 12: Information Hiding and Abstraction

Information Hiding and Abstraction is defined as the process of removing physical, spatial or temporal details or attributes in a study of objects or systems to focus the attention on details of greater importance.

### Abstraction or Information Hiding

What we’re talking about is drawing lines in our code so that when we look at those lines from the outside, we don’t care about what’s behind them. As a consumer of a function, class, library or module, I should not need or care about anything about how it works, only how I use it. Some people take a much narrower view of information hiding.

The information we are hiding is the behavior of the code. It includes implementation details as well as any data that it may or may not use. The abstraction I present to the outside world should achieve this trick of keeping secrets from other parts of the code. It should be obvious that our aim is to manage complexity so that we could build more complex systems that we can comfortably hold inside of our heads, then we need to hide information.

We’d like to be able to focus on the work or code in front of us without worrying what’s going on elsewhere and how stuff we don’t care about works. - This seems fundamental, but there’s a lot of code out there that does not look like this.

My advice if you work somewhere where management doesn’t look for you to improve the code, is to seek better employers. In the vast majority, this is simply not true.

It is our duty of care to do a good job in the best interest of our users, employers and ourselves.

There is no trade off between speed and quality. You don't create software faster if you do a poor job on quality. So when a manager asks for an estimate, it’s in nobody's interests to cut corners on quality. It will make you go slower overall.

The most efficient software development teams are not fast because they discard quality but because they embrace it. It is the professional duty of a software developer to recognize this truth and to always offer advice, estimates and design thoughts based on a high quality outcome. PARSE ESTIMATE AND PREDICTIONS ASSUMING THAT YOUR MANAGER, EMPLOYERS ETC WANT YOU TO DO A GOOD JOB AND DO IT.

The cost in software development is to:
* refactor
* test
* take the time to create good designs
* fix bugs when they are found
* collaborate
* communicate
* learn

We need our code to be revisited months or even years later down the road. We need to be able to make changes in one part of the code and not affect others. We need to quickly and effectively validate that our changes were safe. Ideally, we would also like to change some of our architectural assumptions as our understanding or maybe the popularity of our system changes.

By all means keep up to date with new ideas.

If you ever think to yourself that “I won't need this now but maybe one day in the future” then you are future proofing. - Design immaturity. Only write code that you need right now.

### Improving Abstraction through Testing.

Regression Testing - which really means a whole automated strategy for regression testing -> make a change and run the tests so that you can see where you broke things.

We work so that our software is always in a releasable state and we determine that releasability through effect, effective automated testing.

In the context of abstraction, if we approach our tests as mini specifications for the desirable behavior of our code, then we are describing that desirable behavior from the outside in. You don’t write specifications after you have completed the work, you need them before you start. So we would write our specifications/tests before we write the code. Since we don’t have the code, our focus is more clearly fixed on making our life easier. Our aim at this point is to make it as simple as possible to express our specification/test as clearly and simply as we can. Inevitably then, we are or at least should be expressing our desires to the behavior that we want from our code, from the perspective of the consumer of it as clearly and simply as we can.

We should be thinking about the implementation details that will be required to fulfill that specification at this point. If we follow this approach then, by definition we are abstracting our design.

### Leaky Abstraction

Leaky abstractions are defined as an abstraction that leaks details that we’re supposed to abstract away. There’s different types of leaks. There are leaks that are impossible to avoid for which the most effective course is to think about them carefully and work to minimize their impact.

### Picking Appropriate Abstractions

The nature of our abstractions matters. There is no universal truth here, these are models. A good example are human maps. All maps are abstractions of the real world.

Abstraction and modeling at its heart is a fundamental of design. The more targeted the abstractions are to the problem that you are trying to solve the better the design.

The subtlety and enormous value that TDD delivers, if I’ve written my abstract specification focusing on what the code should do and not how it achieves that outcome, then what my test is expressing is my abstraction. So if my test is fragile in the face of change, then my abstraction is fragile in the face of change, so I’ll need to think hard about better abstractions.

In general, as a preference and advice is to always insulate your code from 3rd party code from your own abstractions.

Always prefer to hide information.

### Chapter 13: Managing Coupling

Coupling is defined as the degree of interdependence between software modules. A measure of how closely connected two routines or modules are. The strength of the relationships between modules.

It is an essential part of any system.

### Cost of Coupling

Managing the coupling in our systems and in the organizations that create them is front and center in our ability to create software of any kind of scale or complexity. Concepts like abstractions and separations of concerns help us reduce coupling in our systems.

Coupling is a big deal.

### Scaling Up

Perhaps the biggest commercial impact of coupling is in our ability to scale up development.

### Microservices

Microservices are the most scalable way to build software. It is considerably more complex than it looks and it requires a fair degree of design specification to achieve.

Microservices are as follows:
* Small
* Focused on one task
* Align with a bounded context
* Autonomous
* Independently Deployable
* Loosely Coupled

The real value in microservices is that we can build, test and deploy them independently of other services that they run alongside and even of other services that they interact with. - If we could build a service and deploy it independently of other services, that means we don’t care what version those other services are at. It means that we don’t get to test our service with those other services prior to its release. This ability wins us the freedom to focus on the now simple module in front of us, our service. Our service will need to be cohesive so that it’s not too dependent on other services or other code. It needs to be very loosely coupled with respect to other services so that it or they can change without one breaking the other. If not, we won’t be able to deploy our service without testing it with those other services before we release so it won't be independently deployable.

This independence and its implications are commonly missed by teams that think they are implementing a microservice approach but have not decoupled sufficiently to trust that their service will need to be deployed without testing it first with the other services that collaborate with it.

Microservices are an organizational scaling pattern. That is its advantage. If you don’t need to scale up in your organizations then you don’t need microservices. Although services might be a great idea.

Microservices allows us to scale our development function by decoupling the services from one another and vitally decoupling the teams that produce those services from one another. Now your team can make progress at its own pace, irrespective of how fast or slow the other teams are moving.

There’s a cost. The service itself needs to be designed to be more flexible in the face of change with its collaborators. We need to adopt design strategies that insulate our services from changes in other places. We need to break developmental coupling so that we could work independently of one another. This cost is the reason why microservices might be the wrong choice if you don’t need to scale up your team.

Independently deployability comes at a cost like everything else. The cost is that we need to design our service to be better abstracted, better insulated, and more loosely coupled than its interactions with other services. There are a variety of techniques that we can use to achieve this, but all of them add to the complexity of our service and to the scale of the design challenge that we undertake. Decoupling may mean more code. Let's try to pick some of these costs apart so that we can better understand them. As ever, there is a cost to pay for the decisions that we make. That is the nature of engineering. It is always a game of tradeoffs. If we choose to decouple our code, we are almost certainly going to write more code, at least to start with. This is one of the common design mistakes that many programmers make. There is an assumption that less code is good, and more code is bad. But that is not always the case, and here is a key point at which that is decidedly not the case.

Types of Coupling
* Operational - A consumer can’t run without a provider
* Developmental - Changes in producers and consumers must be coordinated
* Semantic - Change together because of shared concepts
* Functional - Change together because of shared responsibility
* Incidental - Change together for no good reason (e.g., breaking API changes)

The design of our systems has an impact on all of these types of coupling.

If you can’t release your changes into production unless I am finished with mine, then we are developmentally coupled. We can address that coupling with the choices we make in our design.

If my service can’t start unless yours is already running, then our services are operationally coupled - again, we can choose to address that in the design of our system.

Recognizing these different types of coupling is a good step forward. Thinking about them and deciding which to address and how to address them is another.

### Prefer Loose Coupling

Loose coupling comes at a cost - more lines of code could cost performance.

It is a common mistake to assume that high performance code is messy and can’t afford too many functions in our method calls. - this is old school thinking and should be dismissed. The root to high performance is simple efficient code. Performance is not an excuse for a big pool of mud.

The trick is to draw the seams of abstractions so that high performance parts of the system fall inside of that line or another so that they are cohesive, accepting that the transition from one service or one module to another would incur additional costs.

These interfaces between services prefer looser coupling so the extent that each service hides details from another. These interfaces are more significant points in the design of your system and should be treated with more care and allow a little higher cost in terms of runtime overhead as well as line code. This is an acceptable trade off and should be a valuable step in terms of more modular, more flexible systems.

How does this differ from separation of concerns? It may seem that loose coupling and separation of concerns are similar ideas and they are certainly related, however, it is perfectly reasonable to have two pieces of code that are tightly coupled but with a very good separation of concern or loosely coupled with poor separation of concerns. The first of these is easy to imagine.

### DRY Is Too Simplistic

DRY is good advice but it is not always good advice. It is more complex than that.

The problem is the cost of having one canonical representation of any given idea across an entire system increases coupling and the cost of coupling proceeds the cost of duplication. - this is a balancing act.

Dependency management is an insidious form of developmental coupling. If your service and my service shares a use of a library of some kind and you’re forced to update your service when I update mine, then our service and our teams are developmentally coupled which has an impact on our ability to work autonomously and to make progress on the things that matter to us.

The advantage or DRY is that when we need to make a change, we only need to change it in one place, the disadvantage is that every place that uses that code is coupled in some way. There are some tools that can help us.

The most important one is the deployment pipeline. In CD, a deployment pipeline is meant to give us clear, definitive feedback on the releasability of our systems. If the pipeline says “everything looks good”, then we are safe to release with no further work. That implicitly says something important about the scope of the deployment pipeline. It should be an independent deployable unit of software. So if our pipeline says all is good, we can release it. That gives us a sensible scope to use for DRY.

DRY should be the guiding principle within the scope of the deployment pipeline but it should be actively avoided between pipelines.

So if you are creating a microservice based system, with each service being independently deployable and each service having its own deployment pipeline, you should not apply DRY between microservices. Don’t share code between microservices.

By working so that our software is always in a releasable state, the core tenant of CD, we are forced to consider deployability and the scope of our deployment pipeline. By optimizing our approach so that we can learn quickly and fail fast if we make a mistake, which is the goal of the first section of this book, then we are forced to address the testability of our systems. This guides us to create code that is more modular, more cohesive, has more separation of concerns, and has better lines of abstractions that keeps change isolated and loosely coupled. ALL OF THESE IDEAS ARE LINKED.

### Async as a Tool for Loose Coupling

Networks are really asynchronous communication devices. Communication in the real world is asynchronous.

Treat process boundaries as asynchronous and communicating between distributed services and modules via only asynchronous events. For complex distributed systems, this approach significantly reduces the impact of abstraction leaks and reduces the coupling to the underlying accidental complexity that sits beneath our systems.

### Designing for Loose Coupling

If our code is hard to test, it is commonly a result of some unfortunate degree of coupling. So we can react to the feedback of our design and change it to reduce the coupling, make testing easier and end up with a higher quality design.

### Loose Coupling in Human Systems

Developmental coupling is a common expensive problem in large organizations.

If you want consistency across a large complex piece of software, you should adopt a coordinated approach. You build, test and deploy everything together. This gives you the clearest pictures but comes at a cost at being able to do all of these things efficiently. Strive to achieve this kind of feedback multiple times a day. This means a significant investment of time, effort and technology to get feedback quick enough.

The distributed approach is more in favor. This is the microservices approach. Decision making is intentionally distributed. Microservice teams work independently upon one another. Each service is independently deployable. There are no coordination costs between teams. There is an indirect cost. That cost comes in terms of design.

To reduce organizational coupling it is important to avoid the need to test services together later in the process. If services are independently deployable, that means they are tested independently too.

Microservice approach is the most scalable strategy for software development. You can have as many teams as you want.

Organizations that take microservices seriously consciously loosen control.

## Part IV: Tools to Support Engineering in Software

### Chapter 14: The Tools of an Engineering Discipline

How can we organize our work in a way that minimizes the amount of work that we need to do and maximize the insight that we could gain so that we could proceed?

There are 4 categories of learning relevant at the point at which we are about to write some code.
* Are we solving the right problem?
* Does our solution work as we think?
* What is the quality of our work?
* Are we working efficiently?

Fundamentally, that is all we are interested in when we develop software.

### How To Improve Testability

We want to compartmentalize our system so that we can clearly see what that feedback means. We will work incrementally on small pieces of code, limiting the scope of our evaluations so that it is clear what is happening as we proceed.

We can structure each test case as a small experiment that predicts and verifies the behavior that we want of our code. We write a test that captures that hypothesis of how the software should behave. We predict how it will fail before we run it so that we can verify that our test is in fact testing what we expect to. Then we create code that makes the test pass and use the stable passing combination of code and test as a platform to view our design and make small behavioral changes to optimize the quality of our code and our tests.

If we pay attention, the testability guides us in a direction of a higher quality outcome.

The most important aspect of testability to focus on is the measurement points.

### Deployment

There is a distinction between releasable and deployable. In CD, we want the freedom to create features in a series of deployments. I'm going to switch from talking about releasability which implies about some feature completeness and some utility to users to deployability which means that the software is safe to release into production, even if some features are still not ready for use and are hidden in some way.

The deployability of our system consists of some attributes.

The unit of software must be capable of deployment and must fulfill all of the property of releasability that makes sense in the context of that system. (fast, secure, resilient, work etc.)

### Speed

If you take an iterative, experimental approach to only improving the speed of feedback in the development process, it acts as a kind of fitness function for all of agile, lean theory, CD and Dev Ops.

### Chapter 15: The Modern Software Engineer

A successful outcome for software development is a complex idea. There are some obvious things that we can measure that we can begin with:
* We can measure commercial outcomes for some businesses in software.
* We can measure usage numbers
* The number of downloads
* We apply the door of measure on productivity and quality, stability and throughput which tells us successful teams produce very high quality software very efficiently.
* We can also measure customer satisfaction with our products through a variety of metrics.

I generally advise my clients to aim for a result in 5 minutes from the commit state and in less than 1 hour for the whole pipeline. Aim to create something releasable every hour.

The principles of CD still hold:
* Work so that your software is always releasable
* You can still test your software thoroughly, rejecting any change immediately if a single test fails.
* Optimize for fast feedback.
* Automate everything
* Automate Tests to do the vast majority of testing in simulation so that feedback is always fast and effective.

Characterize, make an observation of the current state. Hypothesize. Create a description. A theory that may explain your observation. Predict. Make a prediction on your hypothesis. And experiment. Test your prediction.