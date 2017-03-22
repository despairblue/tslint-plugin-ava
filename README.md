# tslint-plugin-ava [![Build Status](https://travis-ci.org/despairblue/tslint-plugin-ava.svg?branch=master)](https://travis-ci.org/despairblue/tslint-plugin-ava)

TSLint rules for AVA

 [![NPM](https://nodei.co/npm/tslint-plugin-ava.png?compact=true)](https://npmjs.com/package/tslint-plugin-ava)


 ## Install

 ```
 $ yarn add tslint-plugin-ava
 ```


 ## Usage

 Configure it in `tslint.json`.

 ```json
{
  "extends": [ "tslint-plugin-ava" ],
  "rules": {
    "no-only": [ true ]
  }
}
```

## Rules

The rules will only activate in ~~test~~ **all** files. (PRs welcome).

I only implemented the rule I'm interested in for now. Again PRs or even issues welcome.

- no-only-test - Ensure no `test.only()` are present.

## References

* https://github.com/anmuel/tslint-noif (for the repo layout :heart:)
* https://github.com/palantir/tslint
* https://palantir.github.io/tslint/develop/custom-rules/
* https://palantir.github.io/tslint/develop/testing-rules/
