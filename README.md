# async-scripts-loader
`async-scripts-loader` package loads bunch of js files in async way and handles when all the given files are loaded with `onload` and `onerror` states for each given script.
Package is bundled as UMD and compatible with browser and npm.
It returns a `Promise` from [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).
`async-scripts-loader` is extra tiny (less then 1.5 KB) and does not have external dependencies!

## Examples

### Browser
```html
<script src="https://unpkg.com/async-scripts-loader"></script>
<script>
loadScriptAsync(['https://code.jquery.com/jquery-3.4.1.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js']).then(() => {
  console.log("Scripts are loaded");
});
</script>
```

### NPM
```js
const loadScriptAsync = require("async-scripts-loader");
```

### Source Code
[loadScriptAsync()](https://github.com/vbabak/async-scripts-loader/blob/master/src/index.js)

## Contribution Notes
Clone project on [github](https://github.com/vbabak/async-scripts-loader)
### Install libraries
```bash
npm i
```

### Build & Test
```bash
npm test
```

### Open Pull Request
