# The Kubernetes Book

## By: Nigel Poulton and Pushkar Joglekar

## Chapter 1: Kubernetes Primer

### Kubernetes Background

Kubernetes is an orchestrator. For the most part it orchestrates organized cloud native apps. However, there are projects that enable it to orchestrate things like virtual machines, functions, or serverless workloads. An orchestrator is a back-end system that deploys and manages applications. This means it helps you deploy your application, scale it up and down, perform updates and rollbacks, and more. If it’s a good orchestrator, it does all of this without supervision.

A cloud native application is a business application that’s made from a set of small independent services that communicate and form into a useful application. As the name suggests, the design allows it to cope with cloud-like designs and run natively on cloud platforms.

As an example, cloud native applications are designed and written so that they can easily be scaled up and down as demand rises and falls. It’s also simple to update them, perform rollbacks, and they also self-heal.

### Where did Kubernetes Come From?

Kubernetes came out of Google. It’s written in Go / GoLang. It lives in [https://github.com/kubernetes/kubernetes](https://github.com/kubernetes/kubernetes).

### Kubernetes And Docker

Kubernetes and Docker are actually complementary technologies. For example, it’s common to develop your application with Docker then use Kubernetes to deploy and orchestrate them. In this model, you write your code in your favorite languages, and then you use Docker to package, test, and ship it. The final step in running it, in test or production, is usually handled by Kubernetes.

At a high level, you might have a Kubernetes cluster with 10 nodes to run your production’s application. Behind the scenes, though, each Node has its container runtime. This means that Docker is the low-level technology that starts and stops containers, and Kubernetes is the high-level technology that looks at the bigger picture—deciding which nodes to run the containers on, when to scale up or down, and executing updates.

However, Docker is not the only container runtime that Kubernetes supports. In fact, Kubernetes has a couple of features that abstract the container runtime.

- **The Container Runtime Interface (CRI)** – This is an abstraction layer that standardizes the way that 3rd party container runtimes interface with Kubernetes. It allows the container runtime code to exist separately outside of Kubernetes but then interface with it in a supported and standardized way.
- **Runtime Classes** – These are a new feature that came with Kubernetes 1.12. They allow for different classes at runtime. For example, the gVisor and Kata Containers runtimes might provide better isolation than Docker and containerd. *containerd* is just a stripped-down version of Docker with only the components that Kubernetes needs.

### What about Kubernetes vs Docker Swarm?

Kubernetes and Docker Swarm are both container orchestration platforms used to manage and scale containerized applications, but they differ significantly in their complexity, features, and use cases.

Docker Swarm is generally simpler to set up and manage, especially for those already familiar with Docker. It integrates directly with the Docker API and command line. Kubernetes, on the other hand, has a steeper learning curve and a more complex architecture with many components to configure.

### Kubernetes vs Borg

Google's Borg is the highly influential, proprietary internal cluster management system that Google developed and uses to run most of its services. Kubernetes is an open-source container orchestration system that was heavily inspired by Borg and developed by many of the same engineers.

### Kubernetes - What’s In The Name

**Helmsman** – A person who steers a ship.

---

As a general rule, if your legacy code has hundreds of VMs, there’s a good chance that your containerized cloud native app will have thousands of containers. With this in mind, we desperately need to manage them.

### Chapter Summary

Kubernetes is the leading orchestrator for cloud native apps. At the highest level, it’s all about providing an industry-standard API in front of a data center. It pools data center resources and fronts them with an extensive API. Then give Kubernetes the application with a description of how it should run, and Kubernetes will make it happen.
