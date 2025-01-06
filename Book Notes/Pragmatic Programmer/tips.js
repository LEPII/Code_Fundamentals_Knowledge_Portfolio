// TIPS Table of Content
// - General 
// - Project Planning
// - Testing 
// - Learning
// - Team Related / Communication

////

//// GENERAL ////

////
// Tip 1 - Care About Your Craft
// Why spend your life developing software unless you care about doing it well?

// Tip 2 - Think! About Your Work
// Turn off the autopilot and take control. Constantly critique and appraise your work.

// Tip 3 - You Have Agency 
// It’s your life. Grab hold of it and make it what you want.

// Tip 5 - Don’t Live with Broken Windows
// Bad designs, wrong decisions or code unrepaired. Fix each one as soon as it’s discovered. If there’s time to fix it properly, then board it up. Neglect will rot the project the quickest. 

// Tip 6 - Be a Catalyst of Change
// This tip encourages developers to embrace change and actively participate in shaping the direction of projects. It suggests that instead of resisting change or adopting a passive role, developers should:
// * Identify opportunities for improvement: Continuously look for ways to enhance the project's efficiency, quality, or value.
// * Suggest and implement changes: Propose and advocate for changes that align with the project's goals.
// * Collaborate with others: Work with team members, stakeholders, and management to drive positive change.
// * Be open to new ideas: Embrace innovative approaches and be willing to experiment.
// * Take ownership of your work: Be accountable for the outcomes of your contributions.

// Tip 10 - Critically Analyze What You Read and Hear 
// Emphasizes the importance of evaluating information and thinking critically about the claims made by others. It suggests that developers should:
// * Question everything: Don't blindly accept information without considering its source, evidence, and potential biases.
// * Validate claims: Verify information through multiple sources and use your own judgment to assess its credibility.
// * Be aware of biases: Recognize your own biases and the biases of others, and try to avoid making assumptions based on preconceived notions.
// * Consider the context: Evaluate information within the broader context of the topic or situation.
// * Be skeptical of hype: Avoid getting caught up in the latest trends or fads without carefully considering their real-world applications.
// * Think critically: Use your own reasoning and analysis to form your own opinions and conclusions.

// Tip 17 - Eliminate Effects Between Unrelated Things
// Design components that are self-contained, independent, and have a single, well-defined purpose.

// Tip 18 - There Are No Final Decisions
// No decision is cast in stone. Instead, consider each as being written in the sand at the beach, and plan for change

// Tip 19 - Forgo Following Fads
// Neal Ford says, “Yesterday’s Best Practice Becomes Tomorrow’s Antipattern.” Choose architectures based on fundamentals, not fashion.

// Tip #28 Always Use Version Control
// Version control is a time machine for your work; you can go back.

// Tip #34
// Don’t Assume It—Prove It
// Prove your assumptions in the actual environment—with real data and boundary conditions.

// Tip #36 - You Can’t Write Perfect Software
// Software can’t be perfect. Protect your code and users from the inevitable errors.

// Tip #41 - Act Locally
// Keep the scope of mutable variables and open resources short and easily visible.

// Tip 42 - Take Small Steps—Always
// Small steps always; check the feedback; and adjust before proceeding.

// Tip 43 - Avoid Fortune-Telling
// Only look ahead as far as you can see.

// Tip 44 - Decoupled Code Is Easier to Change
// Coupling ties things together, so that it’s harder to change just one thing.

// Tip 45 - Tell, Don’t Ask
// Don’t get values from an object, transform them, and then stick them back. Make the object do the work. Focus on Behavior, Not Data: Instead of retrieving data from an object and then manipulating it externally, you should design your objects to encapsulate the logic for performing operations on their own data.

// Tip 46 - Don’t Chain Method Calls
// Try not to have more than one dot when you access something.Why Avoid Long Chains?
// * Reduced Readability: Long chains can become difficult to read and understand, especially if the methods have cryptic names or complex logic.
// * Debugging Challenges: If an error occurs within a long chain, it can be challenging to pinpoint the exact method that caused the issue.
// * Tight Coupling: Long chains can indicate tight coupling between objects, making the code less flexible and more difficult to maintain.
// * Reduced Testability: Testing individual methods within a long chain can be more difficult, as you might need to set up complex scenarios to isolate the method under test.

// Tip 47 - Avoid Global Data 

// Tip 48 - If it’s important enough to be global, wrap it in an API. 

// Tip 50 - Don’t Hoard State; Pass It Around
// Don’t hang on to data within a function or module. Take one down and pass it around.

// Tip #51 - Don't Pay Inheritance Tax
// Consider alternatives that better fit your needs, such as interfaces, delegation, or mixi

// Tip #52 - Prefer Interfaces to Express Polymorphism
// Interfaces make polymorphism explicit without the coupling introduced by inheritance.

// Tip #53 - Delegate to Services: Has-A Trumps Is-A
// Don’t inherit from services: contain them.

// Tip #54 -  Use Mixins to Share Functionality
// Mixins add functionality to classes without the inheritance tax. Combine with interfaces for painless polymorphism.

// Tip #55 - Parameterize Your App Using External Configuration
// When code relies on values that may change after the application has gone live, keep those values external to the app. When you application will run in different environments, and potentially for different customers, keep the environment and customer specific values outside the app.

// Flexibility and Adaptability:
// * Easy Changes: You can easily modify application behavior without needing to recompile or redeploy the entire application. This is crucial for:
//     * Different Environments: Adapting to different environments (development, testing, production) with varying configurations (database credentials, API keys, server addresses).
//     * Customer Customization: Tailoring the application's behavior for specific customers (e.g., different tax rates, currency settings).
//     * A/B Testing: Experimenting with different configurations to optimize performance or user experience.
// * Hot Reloading: In some cases, you can even update configuration values without restarting the application, allowing for dynamic adjustments.

// Tip 56 - Analyze Workflow to Improve Concurrency
// Exploit concurrency in your user’s workflow.

// Tip #57 - Shared State Is Incorrect State
// Shared state opens a large can of worms that can often only be fixed by rebooting.

// Tip #58 - Random Failures Are Often Concurrency Issues
// Variations in timing and context can expose concurrency bugs, but in inconsistent and irreproducible ways.

// Tip #59 -  Use Actors For Concurrency Without Shared State
// Use Actors to manage concurrent state without explicit synchronization.

// Tip #60 - Use Blackboards to Coordinate Workflow
// Use blackboards to coordinate disparate facts and agents, while maintaining independence and isolation among participants.
// What are Blackboards?
// * A Shared Memory Space: A blackboard is a shared memory space where different components of a system can read and write data. This data can represent various aspects of the problem being solved.
// * Decoupling: Components that interact with the blackboard are loosely coupled. They don't need to know about or directly interact with each other. They simply read and write data to the blackboard, reacting to changes as needed.

// Tip #61 - Listen to Your Inner Lizard
// When it feels like your code is pushing back, it’s really your subconscious trying to tell you something’s wrong.

// Tip #62 - Don’t Program by Coincidence
// Rely only on reliable things. Beware of accidental complexity, and don’t confuse a happy coincidence with a purposeful plan.

// Tip 65 - Refactor Early, Refactor Often
// Just as you might weed and rearrange a garden, rewrite, rework, and re-architect code when it needs it. Fix the root of the problem.

// Tip #72 - Keep It Simple and Minimize Attack Surfaces
// Complex code creates a breeding ground for bugs and opportunities for attackers to exploit.

// Tip 73 - Apply Security Patches Quickly
// Attackers deploy exploits as quick as they can, you have to be quicker. The biggest data breaches in history were caused when their systems were behind on updates. DON’T LET IT HAPPEN TO YOU.

// Tip #74 - Name Well; Rename When Needed
// Name to express your intent to readers, and rename as soon as that intent shifts.

// Tip #75 - No One Knows Exactly What They Want
// They might know a general direction, but they won’t know the twists and turns. ASK EDGE CASE QUESTIONS TO FLUSH OUT AS MUCH INFO AS POSSIBLE.

// Tip 77 - Programmers Help People Understand What They Want
// Software development is an act of co-creation between users and programmers.

// Tip #78 - Work with a User to Think Like a User
// It’s the best way to gain insight into how the system will really be used

// Tip #79 - Policy Is Metadata - Don’t hardcode policy into a system; instead express it as metadata used by the system.

// Tip #81 - Don’t Think Outside the Box—Find the Box
// When faced with an impossible problem, identify the real constraints. Ask yourself: “Does it have to be done this way? Does it have to be done at all?”

// Tip #82 - Don't Go into the Code Alone
// Programming can be difficult and demanding. Take a friend with you.

// Tip #83 Agile Is Not a Noun; Agile Is How You Do Things
// Agile is an adjective: it’s how you do something.

// Tip #88 - Deliver When Users Need It
// Don’t wait weeks or months to deliver just because your process demands it.

// Tip #89 - Use Version Control to Drive Builds, Tests, and Releases
// Use commits or pushes to trigger builds, tests, releases. Use a version control tag to deploy to production.

////

//// PROJECT PLANNING ////

////

// Tip 7 - Remember The Big Picture
// This tip reminds developers to consider the broader context and goals of a project, rather than focusing solely on their immediate tasks. It emphasizes the importance of understanding:
// * The project's objectives: Clearly define the desired outcomes and how your work contributes to them.
// * The business value: Consider how the project will benefit the organization and its customers.
// * The technical constraints: Be aware of limitations such as budget, time, and technology.
// * The potential risks: Identify and mitigate risks that could impact the project's success.
// * The long-term implications: Think about how your decisions will affect the project's future.

// Tip 8 - Make Quality a Requirements Issue
// Involve your users in determining the project’s real quality requirements.

// Tip 22 - Program Close to the Problem Domain
// Design and code in the language of the problem domain.

// Tip 23 - Estimate to Avoid Surprises
// Estimate before you start. You’ll spot potential problems up front.

// * Identify Potential Problems Early: By making an initial estimate (even a rough one), you can proactively identify potential challenges, risks, and roadblocks that might arise during the project.
// * Realistic Planning: Accurate estimates help you create a realistic project plan, including timelines, resource allocation, and milestones. This prevents unrealistic expectations and sets a more achievable course.
// * Improved Communication: Estimates facilitate better communication with stakeholders (clients, managers, team members). They provide a shared understanding of the project scope, effort, and potential timelines.
// * Risk Mitigation: By identifying potential risks early on, you can develop mitigation strategies to minimize their impact on the project's success. This could involve contingency planning, acquiring additional resources, or adjusting the project scope.

// Tip 24 - Iterate the Schedule with the Code
// Use experience you gain as you implement to refine the project time scales.

// Tip 37 - Design with contracts 
// Use contracts to document and verify that code does no more and no less than it claims to do.
// Core Concepts
// * Contracts: These are formal agreements between the caller and the callee of a function (or method). They define:
//     * Preconditions: Conditions that must be true before the function is called. These are the caller's responsibility to ensure.
//     * Post conditions: Conditions that must be true after the function completes successfully. These are the callee's responsibility to guarantee.
//     * Invariants: Properties that must always hold true within the context of an object or module.

// Tip #49 - Programming Is About Code, But Programs Are About Data
// All programs transform data, converting an input into an output. Start designing using transformations

// Tip #68 - Build End-To-End, Not Top-Down or Bottom Up
// Build small pieces of end-to-end functionality, learning about the problem as you go.

// Traditional Approaches:
// * Top-Down: Start with a high-level design and gradually break it down into smaller components. This can lead to over-engineering and a lack of focus on user needs.
// * Bottom-Up: Start by building low-level components and then gradually integrate them into a complete system. This can result in components that are not well-suited to the actual needs of the application.
// End-to-End Approach:
// * Focus on User Stories: Start with a small, concrete piece of end-to-end functionality that delivers value to the user.
// * Iterative Development: Build, test, and refine this functionality incrementally, learning about the problem domain and making adjustments as you go.
// * Embrace Flexibility: Be prepared to adapt and change direction as you learn more about the problem and user needs.

// Tip 77 - Requirements Are Learned in a Feedback Loop
// Understanding requirements requires exploration and feedback, so the consequences of decisions can be used to refine the initial ideas.

// Tip #80 - Use a Project Glossary
// Create and maintain a single source of all the specific terms and vocabulary for a project.

// Tip #95 - Don't Use Manual Procedures
// A computer will execute the same instructions, in the same order, time after time.

// Tip #96 - Delight Users, Don’t Just Deliver Code
// Develop solutions that produce business value for your users and delight them every day.

// Tip #97 - Sign Your Work
// Artisans of an earlier age were proud to sign their work. You should be, too.

// Tip #98 - First, Do No Harm
// Failure is inevitable. Make sure no one will suffer because of it.

// Tip #99
// Don’t Enable Scumbags
// Because you risk becoming one, too.

// Tip #100 - It’s Your Life. Share it. Celebrate it. Build it. AND HAVE FUN!
// Enjoy this amazing life we have, and do great things.

////

//// TESTING ////

////

// Tip #63 - Estimate the Order of Your Algorithms
// Get a feel for how long things are likely to take before you write code.

// Tip #64 - Test Your Estimates
// Mathematical analysis of algorithms doesn’t tell you everything. Try timing your code in its target environment.

// Tip #66 - Testing Is Not About Finding Bugs
// A test is a perspective into your code, and gives you feedback about its design, api, and coupling.

// Tip #67 - A Test Is the First User of Your Code
// Use its feedback to guide what you do. - We believe the major benefits of testing happen when you think about and write the tests. Not when you run them. 

// Tip #69 - Design to Test
// Start thinking about testing before you write a line of code.

// Tip #70 - Test Your Software, or Your Users Will
// Test ruthlessly. Don’t make your users find bugs for you.

// Tip #71 Use Property-Based Tests to Validate Your Assumptions
// Property-based tests will try things you never thought to try, and exercise your code in ways is wasn’t meant to be used.

// Tip #90 - Test Early, Test Often, Test Automatically
// Tests that run with every build are much more effective than test plans that sit on a shelf.

// Tip #91 - Coding Ain’t Done ’Til All the Tests Run
// ’Nuff said.

// Tip #92 - Use Saboteurs to Test Your Testing
// Introduce bugs on purpose in a separate copy of the source to verify that testing will catch them.

// Tip #93 - Test State Coverage, Not Code Coverage
// Identify and test significant program states. Testing just lines of code isn’t enough.

// Tip #94 - Find Bugs Once - Once a human tester finds a bug, it should be the last time a human tester finds that bug. Automatic tests should check for it from then on.

 ////

//// LEARNING ////

////

// Tip 9 -  Invest Regularly in Your Knowledge Portfolio

// YOUR KNOWLEDGE PORTFOLIO 
// 1. All the facts programmers know about computing, the applications domains the work in and all of their experience as their knowledge portfolios. Meaning it is similar to managing your financial portfolio. 
// 2. Serious investors invest regularly as a habit. 
// 3. Diversification is the key to long term success. 
// 4. Smart investors balance their portfolio between conservative and high/risk high reward.
// 5. Investors try to buy low and sell high for maximum return. 
// 6. Portfolios should be reviewed and rebalanced periodically.

// You must invest in your knowledge portfolio using these 6 guidelines. The good news is that managing this is a skill - which can be learned and improved over time. The trick is to make yourself do it initially and form a habit / until your brain internalizes it. That way, you can suck up new knowledge automatically.

// Building Your Portfolio 

// * Invest In Your Knowledge Portfolio Regularly. Even If It’s Just A Small Amount. Plan It.
// * The More You Know (Diversification), The More Valuable You Are. As A Baseline, You Need To Know The In’s And Out’s Of What You Are Working With Currently But Don’t Stop There.  
// * Manage Your Risk. Buy Low And Sell High, - Learning A New Tech Before It Becomes Popular Can Be Just As Hard As Finding An Undervalued Stock But The Payoff Should Just Be As Rewarding. 
// * Always Review And Rebalance. 
// * Learn A New Language Every Year. 
// * Read A Technical Book Each Month.
// * Experiment With Different Tech Environments.
// * Stay Current - Read News And Posts Online About Tech That's Different Of That Of Your Current Project.

// Once You're Comfortable With A Piece Of Tech, Move On And Learn Another One. Regardless If You're Not Going To Use It On A Project.  

// Tip 21 - Prototype to Learn
// Prototyping is a learning experience. Its value lies not in the code you produce, but in the lessons you learn.

// Tip 27 - Achieve Editor Fluency
// An editor is your most important tool. Know how to make it do what you need, quickly and accurately.

// Tip 31 - Failing tests before fixing code.
// Sometimes by forcing yourself to isolate the circumstances that display a bug, you’ll even gain some insight on how to fix it. The act of writing the test informs the solution.

// Tip #85 - Schedule It to Make It Happen 
// If you don’t schedule it, it’s not going to happen. Schedule reflection, experimentation, learning and skills improvement.

////

//// TEAM RELATED / COMMUNICATION ////

////

// Tip 4 - Provide Options, Don’t Make Lame Excuses
// Instead of excuses, provide options. Don’t say it can’t be done; explain what can be done.

// TEAM TRUST - Your team must be able to trust and rely on you, and you need to be comfortable relying on them as well. It’s essential for creativity and collaboration. In an environment filled with trust, you can safely speak your mind, your ideas and rely on your team members who can then in turn rely on you. 

// TAKE RESPONSIBILITY - You must analyze the risks that are beyond my control. Expect to be accountable for it. 

// - Admit it honestly and offer options. Don’t blame someone/something else or make up an excuse. Provide solutions, not excuses.  

// - Any time you say “idk” also say “but I’ll find out.”

// Tip 11 - English is Just Another Programming Language

// Clear and concise communication: We stress the importance of writing clear, concise, and well-structured code. This principle can be extended to communication in general, as clear and concise language is essential for effective understanding and collaboration.

// The trick is to get feedback, don’t wait for questions, ask them. The meaning of your communication is the response you get. Know what you want to say. 

// * Plan / Write an Outline on what you want to say - Ask yourself: Does this communicate what I want to say that works for them?
// * Be An Active Listener
// * Get back to people. Always respond, even if it’s with “I’ll get back with you later” 

// Tip 12 - It’s Both What You Say and the Way You Say It
// There’s no point in having great ideas if you don’t communicate them effectively.

// Tip 13- Build documentation in, don’t bolt it on. 

// Problem-solving and logic: Both programming and effective communication involve problem-solving, logical thinking, and the ability to break down complex ideas into smaller, more manageable components.

// Understanding requirements: Developers must be able to understand and interpret requirements, which often involve written specifications or verbal discussions. This is similar to how a programmer must understand the "requirements" of a programming task.

// Tip 84 - Maintain Small Stable Teams
// Teams should be small and stable, where everyone trusts each other and depends on each other.

// Tip #86 - Organize Fully Functional Teams
// Organize Around Functionality, Not Job Functions. Don’t separate UI/UX designers from coders, frontend from backend, testers from data modelers, design from deployment. Build teams so you can build code end-to-end, incrementally and iteratively.

// Tip #87 - Do What Works, Not What’s Fashionable
// Don’t adopt a development method or technique just because other companies are doing it. Adopt what works for your team, in your context.
