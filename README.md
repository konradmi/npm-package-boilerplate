# npm-package-boilerplate
This repository contains 3 modules:

- `npm-package` - it contains a TS side effects free code that gets compiled to a format that could be used as ESM and CommonJS modules. To build the package:
`yarn run build`

- `common-js-module` - it consumes `npm-package` as a CommonJS module. To build and execute the package:

    `yarn run build`

    `yarn run exec`

    Note that in the output bundle there're the `logFunctions` module and the `multiply` method even though they are not used in the code

- `ts-tree-shaking-esm-module` - it consumes `npm-package` as an ESM module. To build and execute the package:

  `yarn run build`

  `yarn run exec`

  Note that in the output bundle there's NO `logFunctions` module and the `multiply` method is marked as unused export thanks to tree shaking
