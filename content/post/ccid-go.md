---
date: "2024-01-25"
title: "Unveiling the Power of CCID in Go: A Comprehensive Guide"
thumbnail: "img/blog/ccid-go/exploring_CCID.min.jpg"
categories:
- "ccid"
tags:
  - "ID"
  - "RNG"
  - "CCID"
---

Have you ever struggled with generating unique and meaningful IDs in your Go applications?
Look no further! In this blog post, we'll explore the Go implementation of [CCID concept](https://github.com/Pencroff/ccid),
bringing you a feature-rich, efficient, and easy-to-use ID generator.

<!--more-->

## CCID Overview

CCID, short for Chrono Chaos ID, is a concept that has been expertly implemented in Go. Let's dive into its key features:

- **Lexicographically Sortable**: IDs generated by CCID are naturally sortable, making them ideal for use in databases and other systems where sorting is crucial.
- **Epoch-Based, Continuously Growing**: With a 32-bit timestamp precision of one second, CCID IDs grow continuously, ensuring uniqueness and chronological order.
- **Random and Monotonic Generation**: CCID supports both random and monotonic ID generation. Monotonic IDs can follow specific strategies, such as incrementing the payload by a fixed value or a percentage of random bytes.
- **Variety of Sizes**: CCID allows you to choose the size of your IDs, ranging from 64 bits to 160 bits, providing flexibility for different use cases.
- **Serialization Options**: You can use raw bytes or serialize CCIDs to hex, Crockford's Base32, and Base62, allowing compatibility with various encoding schemes.
- **Optional Fingerprint**: CCID even supports an optional fingerprint, adding an extra layer of uniqueness to your generated IDs.


## Getting Started

To integrate CCID into your Go project, follow these simple steps:

1. Install the CCID Go package:
```bash   
go get -u github.com/Pencroff/ccid_go`
```

2. Import the required parts in your Go code:

```go    
package main
import (
    "fmt"
    c "github.com/Pencroff/ccid_go"
    e "github.com/Pencroff/ccid_go/extras"
    p "github.com/Pencroff/ccid_go/pkg"
)
```

3. Utilize the CCID generator based on your requirements. For example, to generate a new CCID with a 96-bit payload using a 50% monotonic strategy:

```go
r, err := e.NewHybridRandReaderWithSize(e.SIZE_32k) // handle error
s := p.NewFiftyPercentMonotonicStrategy(r)
ccidGen, err := c.NewMonotonicCcIdGen(p.ByteSliceSize96, r, s) // handle error
ccid, err := ccidGen.Next() // handle error 
fmt.Printf("%#v\n", ccid)
// CcId{size: 12, timestamp: 315252750 (2024-01-01T01:02:03Z), payload: 0x9461896a128ac957}
```

## Customizing Random Byte Generation

CCID provides options for generating random bytes. You can use a secure reader for cryptographic applications or a hybrid reader for a balance between speed and security:
```go
secureR := e.NewSecureReader()
rngReader := e.NewHybridRandReader() // Default: Xoshiro256++
```
`HybridRandReader` initialize non-secure random number generator (RNG) by seed from secure RNG, then lazy generates batch of random bytes (the batch size configured as a parameter) by non-secure and then repeat cycle again.

## Monotonic Strategies

For monotonic ID generation, CCID offers various strategies in the `pkg` package. Two notable ones are:

- **IncreaseMonotonicStrategy**: Adds +1 to the random payload, creating a quick serial sequence within one time tick.
- **FiftyPercentMonotonicStrategy**: Increases the random payload by 50% of random bytes, making IDs less predictable and more secure.

In the realm of unique identifier generation, the choice between `IncreaseMonotonicStrategy` and `FiftyPercentMonotonicStrategy` introduces a trade-off between speed and unpredictability. The former rapidly generates serial sequences within a single time tick, providing swift results but at the cost of predictability over the course of a second. On the contrary, the latter, `FiftyPercentMonotonicStrategy`, add a random value of 50% random bits (min 12 bits, as 64 bit CCID with fingerprint has 24 bits of random payload) into the payload, making the generated IDs less guessable. This approach makes IDs not guessable (or guessable with known probability), mitigates predictability but comes at the expense of a reduced quantity of generated IDs per time tick (important to remember just for 64-bit and 96-bits, since larger IDs have over 2.7 × 10⁰⁸ ids per second, check [concept details](https://github.com/Pencroff/ccid)).

If sum of random payload with any monotonic strategy generate overload curry bit, CCID would increase time tick and re-generate random payload, to keep monotonic growth.

## Safeguarding Your Concurrency: Thread-Safe CCID Generation

As you delve into the world of CCID in Go, it's crucial to ensure the thread safety of your ID generation, especially in concurrent applications. Fear not, as CCID provides an out-of-the-box solution: `CcIdGenImplementationLocked`.
If your Go application involves concurrent routines, you can easily make your CCID generation thread-safe by wrapping it with a mutex. This ensures that multiple goroutines can safely generate unique IDs without the risk of data races or conflicts.

Here's a simple example of how to use `CcIdGenImplementationLocked`:

```go
// Create a new monotonic CCID generator
gen, _ := NewMonotonicCcIdGen(size, r, s)
// Wrap the generator with a mutex for thread safety
threadSafeGen := NewCcIdGenLocked(gen)
```

By incorporating `CcIdGenLocked`, you can confidently use the `threadSafeGen` instance in your Go routines, ensuring that ID generation remains seamless and thread-safe.

```go
// Example of generating a CCID in a goroutine
go func() {
	ccid, err := threadSafeGen.Next()
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Printf("%#v\n", ccid) 
}()
```

Now, with this added layer of protection, your CCID generation can gracefully handle concurrency without compromising on the uniqueness and integrity of your generated IDs.

## Explore and Contribute

Feel free to explore the CCID Go implementation and contribute to its development. You can provide feedback, submit pull requests, or report issues on the [project repository](https://github.com/Pencroff/ccid_go).

In conclusion, the Go implementation of CCID brings a robust and versatile ID generation solution to your fingertips. Whether you need lexicographically sortable IDs, epoch-based uniqueness, or a balance between speed and security, CCID in Go has you covered. Happy coding!