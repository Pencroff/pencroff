
---
date: "2022-04-14"
title: "Fluky - random number generator library"
thumbnail: "img/blog/fluky-lib/fluky-color.min.png"
categories:
- "fluky"
tags:
- "Golang"
- "RNG"
---

I was always curious about Random Number Generator (RNG) implementation. The magic how from few numbers inside it generates long sequence "randomly" distributed numbers. I did few experiments on my ZX Spectrum with it limited performance. And this article I would like to share the [fluky][1] library.
<!--more-->

> All RNG implemented in fluky are pseudo random generators dependant just from internal state and initial seed, no external entropy. So "random" in text below mean pseudo random.

In fluky was implemented few RNG based on different principles of getting random number. 

* Linear congruential generator (LCG)
* Permuted Congruential Generator (PCG)
* Middle-square RNG

and many more ([ref][2]).

Currently, fluky provides few LCG (quick and simple in implementation), PCG and Square example.
The RNG could be compared statistically, by size of internal state and by performance of calculation next random number.

The simplest statistical visualization - just draw a million of generated numbers on canvas.

The worst as you can imagine appear ZX Spectrum LCG. It operates just 2<sup>16</sup>(65536 values) and visualization has not more than 128x128 pixels.

![ZX81 RNG](https://raw.githubusercontent.com/Pencroff/fluky/main/experiments/out/zx81_out.png)

The most performant and with perfect quality (by [dieharder][3] test and [benchmarks][4]) is [Small Prng][5].
The cycle length is expected to be about 2<sup>126</sup> results. On my laptop where single number generated in 2.327 ns/op it would take 1.158×10<sup>39</sup> years ([ref][6]). 

![Small Prng](https://raw.githubusercontent.com/Pencroff/fluky/main/experiments/out/small_prng_out.png)

A flagship RNG in current experiment I would consider [Pcg64][7]

![Pcg64](https://raw.githubusercontent.com/Pencroff/fluky/main/experiments/out/pcg64_out.png)

It has good performance and [statistical background][8]. Also mentioned as a good alternative of [Mersenne Twister RNG][9].

Also, it's important to mention the Small Prng and Pcg64 are passing [113 tests][3] and have just 1 weak test with no failings.  

### How to test Random Number Generator

For testing random number generators could be used different cli applications to check statistics of generated random numbers on relatively large data set. For example [dieharder][11] requires approximately 229 GB of data for 114 different tests ([more info][16]). Other projects like [NIST][12] used 15 different [statistical tests][13].

If you need more info about testing RNG please check related [StackOverflow][14] or [StackExchange][15] questions.


[1]: //github.com/Pencroff/fluky
[2]: //en.wikipedia.org/wiki/List_of_random_number_generators
[3]: //github.com/Pencroff/fluky#dieharder-summary
[4]: //github.com/Pencroff/fluky#benchmark
[5]: //burtleburtle.net/bob/rand/smallprng.html
[6]: //www.wolframalpha.com/input?i=2%5E126%2F2.327%C3%9710%5E-9+seconds
[7]: //www.pcg-random.org/
[8]: //www.pcg-random.org/paper.html
[9]: //en.wikipedia.org/wiki/Mersenne_Twister#Alternatives
[10]: //linux.die.net/man/1/dieharder
[11]: //webhome.phy.duke.edu/~rgb/General/dieharder.php
[12]: //csrc.nist.gov/projects/Random-Bit-Generation
[13]: //github.com/GINARTeam/NIST-statistical-test
[14]: //stackoverflow.com/questions/2130621/how-to-test-a-random-generator
[15]: //stats.stackexchange.com/questions/352076/nist-randomness-test-testu01-dieharder
[16]: //crypto.stackexchange.com/questions/90076/how-to-compute-the-dataset-size-required-by-dieharder-tests
