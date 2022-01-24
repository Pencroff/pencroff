# Plan

* Home (about me)
  * BIO
  * Contacts
* Blog
* Projects
* Talks

### Examples

* https://github.com/Vimux/Mainroad/ - layout
* https://github.com/gethugothemes/andromeda-light - good code
* https://gethugothemes.com/products/logbook-hugo/ - ideas about content
---
* https://themes.gohugo.io/themes/beautifulhugo/
* https://themes.gohugo.io/themes/hugo-tranquilpeak-theme/
* https://themes.gohugo.io/themes/blonde/
* https://themes.gohugo.io/themes/loveit/
* https://themes.gohugo.io/themes/hugo-papermod/
* https://themes.gohugo.io/themes/hugo-theme-learn/

### Web components
* Switch light / dark / system mode
* Typing slogans and law
* https://atomico.gitbook.io/doc/
* https://atomico.gitbook.io/doc/guides/atomico-with-typescript
* https://github.com/atomicojs/base
* https://github.com/atomicojs/formilk/blob/master/package.json#L9

Welcome! 👋  Yes, Atomico has a recipe to start based on Vite, you can go scaling according to your need to use it you must run on console  npm init atomico  or clone this template https://github.com/atomicojs/base.

Regarding the export to NPM, for this I have created @atomico/exports, it will take care of:

1. Code splitting to subdivide your code efficiently.
2. Preprocess .css files as js modules through postcss.
3. Import of assets separately as URLs relative to the module, this prevents the origin of your assets from being broken when consuming it from a CDN.
4. Component export using expressions, example src/*/.js.
5. Detect external dependencies(they are not part of the bundle)
6. Minify your code

You can see an example of use in Formilk https://github.com/atomicojs/formilk/blob/master/package.json#L9

It's really complex to generate a perfect package.json, but @atomico/exports will help you with that, the attached image will show you the input as package.json and the output when publishing to NPM.
Input: https://github.com/atomicojs/formilk/blob/master/package.json output: https://unpkg.com/formilk@0.10.1/package.json
I have updated the following guides

Atomico with Typescript, I have detailed more than:

1. Construct the props parameter of your functional component.
2. Check the correct declaration of your component.
3. Check the correct use of hooks.
4. Declare meta-types to the component.

https://atomico.gitbook.io/doc/guides/atomico-with-typescript

@atomico/exports Now with a new introduction.

https://atomico.gitbook.io/doc/atomico/atomico-exports

I hope you find it useful!

### Slogans
https://www.quora.com/What-are-some-best-T-shirt-slogans-for-coders
https://betterprogramming.pub/101-funny-programmer-quotes-76c7f335b92d#127e
https://www.netmeister.org/blog/software-engineering-laws.html

## ToDo

* [+] update `tailwindcss` to v3 - currently issue with jit
  * https://github.com/dirkolbrich/hugo-theme-tailwindcss-starter/issues/37
* [+] Check images
* Svg as partial (like in Mainroad)
* Blog
  * Publishing date
  * Fresh posts
  * Fresh comments
  * Tags
* Auto phrases re-type - web component + json? array of phrases
* Dark theme support
  * Switcher component - system, light, dark
* Comments
  * Remark
* Full text search for FE / static site - compare
  * quality
  * speed
  * downloadable indexes, etc
