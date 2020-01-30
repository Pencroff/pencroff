---
title: "MEAN Buildup"
weight: 97
resources:
    - src: MEAN.png
      params:
          weight: -100
---

I mentored Angular BuildUp in Dublin. Attendees did some training
with AngularJs. I did an implementation of back-end for MEAN stack.
More details about implementation you could find in my repo.
Implementation base on Express with token authorization for private
API and no authorization for public API. I developed api which
recognizes name of the model as an url parameter and then picks
available repository from Unit of work. This was done for simplicity of
declaration any CRUD actions for any new model. For data tier was
used js-data library, as a universal ORM / ODM.

[Github repo](https://github.com/Pencroff/mean-buildup)
