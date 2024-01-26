---
title: "CCID: Chrono Chaos ID"
description: "Time-based ID generator family with size verity and fingerprint option"
categories:
- "ccid"
weight: 230
resources:
  - src: chrono_chaos_id.min.png
    params:
      weight: -100  
aliases:
  - /projects/ccid/
---

This time-based ID generator offers lexicographically sortable epoch-based identifiers with a 32-bit growing time part
providing 1-second precision. To mitigate the Birthday Problem, it has been maximized the random aspect.
Monotonicity is achieved through random incremental increments (up to 50% of the random bit size),
and overflows are resolved by increasing time and regenerating new random parts without errors or exceptions.
It offers ID sizes ranging from 64 to 160 bits, making it a variable-sized fingerprint. It supports multiple
serialization and parsing formats such as binary, hex, base32, and base62 (15% smaller than base32) for
seamless usage in any solution.

* [Tech details on GitHub](https://github.com/Pencroff/ccid/)
* [Go implementation repo](https://github.com/Pencroff/ccid_go/)
