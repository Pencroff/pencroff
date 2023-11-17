
---
date: "2023-11-17"
title: "The Art of Generating IDs"
thumbnail: "img/blog/the-art-of-generating-ids/id_gen_problems.jpeg"
categories:
- "ccid"
tags:
- "ID"
- "RNG"
- "CCID"
---

Unique identifiers (IDs) are critical elements in many applications and systems.
They provide a way to distinguish between different entities and ensure data accuracy and consistency.
However, generating unique IDs can be challenging due to several factors such as data complexity, scalability,
and security concerns. In this article, we will explore the specific challenges that arise during the process
of generating unique IDs and how they can be addressed.

<!--more-->

## Integer IDs: A Simple and Quick Solution

Historically, applications have employed integer-based ID generation on the database level for various tasks. 
The ease of their creation and the speed with which they can be inserted or used for joins make them an attractive
choice for many solutions.

But there are some downsides to this approach. The Achilles' heel of serial IDs lies in their predictability. 
As they follow a sequential pattern, they become susceptible to exploitation, posing a security risk for 
applications that require a level of unpredictability in ID generation.

Another drawback surfaces in the form of a centralized ID generation process. The reliance on a single generator, 
whether it be the server or database itself, becomes a bottleneck in scenarios where distributed 
generation is a necessity.

## Random IDs: A More Secure Option

Random IDs are generated using a random number generator and are difficult to guess or reverse-engineer. 
This makes them much more secure than integer IDs, making it harder for hackers to compromise your system.
Random IDs can also be generated on both the server and client side, allowing for even greater
flexibility and scalability.

Despite their security benefits, random IDs have some downsides as well.
One of them is the requirement of a large set of random bits due to the Birthday Problem. 
The Birthday Problem illustrates that in a group of 23 people, there's more than a 50% chance 
that at least two individuals will share the same birthday. When dealing with identifiers, 
if your pool of random numbers is too small or not adequately distributed, collisions can occur, 
which can lead to issues when working with these IDs.

Another disadvantage associated with using randomly generated unique identifiers is its impact on 
database insert performance (due to lack of ID's locality). Each insert operation requires the primary 
key index to be rebuilt significantly, which negatively impacts the speed of insertions.

## Size Consistency: A Common Challenge for ID Generator

Most ID Generators have a disadvantage in that all IDs are treated as identical and have the same size
regardless of the entity. For example, UUIDs use 16 bytes in binary format while KSUIDs require 20 bytes.
When using foreign keys related to these IDs, it becomes necessary to repeat them, leading to unnecessary data
bloating and poor database performance. This issue is particularly problematic for larger databases.
Consider cases of one-to-many or many-to-many relationships. If some entity types (goods and categories,
blog posts and tags) are created less often than others. In such cases, the same ID is repeated multiple times
which impacts storage and join's efficiency. In other words, less frequent IDs can be smaller.

## IDs Diversity: Different Sizes with Similar Characteristics

In order to address the challenges described above, a solution involves implementing an ID generator
family that incorporates varying sizes for different entity types.
This can significantly improve efficiency and storage.

For the family of ID generators, they must have the following properties:

1. Lexicographically sortable: This ensures that the IDs can be sorted efficiently and quickly based on their values.
2. Not guessable: To prevent data theft or manipulation.
3. Size variety: Different sizes are required to cater to varying entity types in the database system.
4. Random Monotonic: Any ID generated in a single time tick growing in a random part.
5. Quick for generation: The ID generator should be fast enough to keep up with the demands of real-time applications.
6. A few extra properties:
  * Allow resolving the timestamp of the ID creation. ( Considering the possibility that the ID producer may have an incorrect clock)
  * Optional constant fingerprint: This is a set of constant bits generated per process, server, client, agent, shard, etc., allowing for further customization of the IDs.
7. Compatible with popular existing ID formats: This may help with a smooth transition.

In conclusion, integer identifiers in software systems have proven to be simple, but with limitations such as 
predictability issues and centralized limitations. Randomly generated unique identifiers provide enhanced
security but may face performance and storage concerns.

An innovative solution involves implementing an ID generator family that tailors different sizes
for various entity types. By leveraging these technologies, we can enhance both the efficiency and storage
capabilities of our software systems, for large-scale distributed solutions and mobile applications at the
same time. As well as maintain optimal levels of security and performance.

Check [tech details on GitHub](https://github.com/Pencroff/ccid/)
