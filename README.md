# Grace Down

Give a chance to cleanup to support graceful shutdown.

## Installation

```
npm i --save grace-down
```

## Usage

```
const gracedown = require('grace-down')

gracedown(async () => {
  // clean up ...
})

// when the systen sends SIGTERM, the clean up logic will be triggered before process exits.
```