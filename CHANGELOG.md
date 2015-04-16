### develop

 * Fix Danish currency symbol [#15](https://github.com/foretagsplatsen/numbro/pull/15)
    * Originally pull-requested to [numeral-js #201](https://github.com/adamwdraper/Numeral-js/pull/201)

 * Add Farsi (fa-IR) [#17](https://github.com/foretagsplatsen/numbro/pull/17)
    * Originally pull-requested to [numeral-js #240](https://github.com/adamwdraper/Numeral-js/pull/240)


### 1.0.4

 * Fork `numeraljs` v1.5.3, renaming everything to `numbro`
    * [72e0aae](https://github.com/foretagsplatsen/numbro/commit/72e0aaefd867bf14f495658c07a5c8af506d9552) [102df3f](https://github.com/foretagsplatsen/numbro/commit/102df3f9b11df76e5cc9c931e77254590f9afed2)
    * **Breaking**

 * Add a new format `fullWithNoDecimals`
    * [a1184c9](https://github.com/foretagsplatsen/numbro/commit/a1184c922539bfa6471037b255212b3fcef1aa4b)
    * _is there an associated issue from numeral-js to reference?_

 * "Minor fix" _(was it present in nueral-js?)_
    * [b5f87d1](https://github.com/foretagsplatsen/numbro/commit/b5f87d1d248d8956d31a64c6290727d46997f2f8)
    * _breaking?_

 * Rename "en" to "en-US"
    * [fe64d7e](https://github.com/foretagsplatsen/numbro/commit/fe64d7eb2888a5e12ad80b7c42d9ded8530b08fb) [06ba9ca](https://github.com/foretagsplatsen/numbro/commit/06ba9cad49cb0df3a3aee9c7d8e9bef8510a289e)
    * _is there an associated issue from numeral-js to reference?_
    * _breaking?_

 * "Fix issue" _(which? was it present in numeral-js?)_
    * [d7fe7af](https://github.com/foretagsplatsen/numbro/commit/d7fe7af545f6af9197ff8c6a7b53e7bef1f1962f)
    * _is there an associated issue from numeral-js to reference?_
    * _breaking?_

 * Extend english language
    * [e879b7f](https://github.com/foretagsplatsen/numbro/commit/e879b7f62b55e88c061e780db3b7bcfe97737af6)
    * _is there an associated issue from numeral-js to reference?_
    * _breaking?_

 * Add a `setLanguage` method
    * [537edb1](https://github.com/foretagsplatsen/numbro/commit/537edb179904cebefeecbebd4b43199d568b0708) [fd81132](https://github.com/foretagsplatsen/numbro/commit/fd8113264519475185e0ee7df444598c6ff0ffd2)
    * _is there an associated issue from numeral-js to reference?_

 * Add Norwegian
    * [b091ec9](https://github.com/foretagsplatsen/numbro/commit/b091ec98631077e001bec64c7f60030e1941b860)
    * _is there an associated issue from numeral-js to reference?_

 * Workaround case-insensitive filesystems
    * [4d0836f](https://github.com/foretagsplatsen/numbro/commit/4d0836f8d0781c5a5b7fa459aa0549e39f7146e2) [a44d305](https://github.com/foretagsplatsen/numbro/commit/a44d305cc7a2d700fb22127bdb98bef11eeb843c)
    * _is there an associated issue from numeral-js to reference?_
    * _breaking?_

 * Include minified builds in the repo
    * [8bdf043](https://github.com/foretagsplatsen/numbro/commit/8bdf0434a3a33f39d0a41c30feb6f0689f0a22da)
    * _is there an associated issue from numeral-js to reference?_

 * Follow Microsoft standards for culture names
    * [1e2edc4](https://github.com/foretagsplatsen/numbro/commit/1e2edc45b0558595853b2582e2c8fad46a1fb0a6)
    * _is there an associated issue from numeral-js to reference?_
    * _breaking?_

 * "Updates the languages" _(how?)_
    * [770ba5f](https://github.com/foretagsplatsen/numbro/commit/770ba5f0ff2acf75ecf078ac2159c48b4d90ab64)
    * _is there an associated issue from numeral-js to reference?_
    * _breaking?_

 * "Fix small bugs (leading to a whole rewrite of the algorithm ^^)"
    * [3d3793f](https://github.com/foretagsplatsen/numbro/commit/3d3793f94da6c5834b1699c22abe5c5aa3560ee2)
    * _is there an associated issue from numeral-js to reference?_
    * _breaking?_

 * Fix for negative values (eg. -1450 / `0000 a`)
    * [e508d1a](https://github.com/foretagsplatsen/numbro/commit/e508d1afe441982f43726c675bcae07f9ec6258b)
    * _is there an associated issue from numeral-js to reference?_
    * _breaking?_

 * "More consistent output" _(how?)_
    * [7e6fc38](https://github.com/foretagsplatsen/numbro/commit/7e6fc380e8c1d3a58ca2db50ea40759d26e2d08e)
    * _is there an associated issue from numeral-js to reference?_
    * _breaking?_

 * _should there be a log entry for #1?_

 * Resolve ambiguity when precision could be 3 or 0
    * [be86192](https://github.com/foretagsplatsen/numbro/commit/be86192f8d3b3ea8067af476806e55a6e536c270)
    * _is there an associated issue from numeral-js to reference?_
    * _breaking?_

 * Fix issue when the value length is not a multiple of 3
    * [737d681](https://github.com/foretagsplatsen/numbro/commit/737d68130d8f390af046111ba6073803a2c3b680)
    * _is there an associated issue from numeral-js to reference?_
    * _breaking?_

 * Add precision when averaged
    * [3211ec4](https://github.com/foretagsplatsen/numbro/commit/3211ec4e5ab74072964821a6e6525ccc761a1fa0)
    * _is there an associated issue from numeral-js to reference?_
    * _breaking?_

 * Fix currency position when prefix + negative parenthesis + force negative sign
    * [a4d3103](https://github.com/foretagsplatsen/numbro/commit/a4d3103eb6a1b40bafe7b8ecfd2e663d229e9a27)
    * _is there an associated issue from numeral-js to reference?_
    * _breaking?_

----

_For changes before `numbro` forked [`numeral-js`](https://github.com/adamwdraper/Numeral-js), see [CHANGELOG-Numeraljs.md](CHANGELOG-Numeraljs.md)._
