# browser-nework-url-rewriter

Utility for intercepting network requests to rewrite urls before they are sent. 

## Usage

This script is meant to be injected into a script alongside a function parameter which takes in and returns a string

```
// util.ts
const fs = require('fs')
const bnurl = fs.readFileSync('node_modules/browser-network-url-rewriter').toString()

export function get

```