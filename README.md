# Delegate

![IE-9+](https://img.shields.io/badge/IE-9%2B-green.svg)
![Firefox-34+](https://img.shields.io/badge/Firefox-34%2B-green.svg)
![chrome-34+](https://img.shields.io/badge/Chrome-34%2B-green.svg)
![Safari-8+](https://img.shields.io/badge/Safari-8%2B-green.svg)
![Opera-21+](https://img.shields.io/badge/Opera-21%2B-green.svg)

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-green.svg)](https://standardjs.com)

Simple and fast **vanilla js** event delegation. Uses [`Element.closest`](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest) and falls back on [@readable/closest](https://www.npmjs.com/package/@readable/closest) fast polyfill. In case better browser support is needed, use slower and more primitive `Element.closest` polyfill.

`Element.closest` polyfill is required **only** for **IE**, other reasonably up to date browsers are fine without it.

## Install

``` sh
npm install --save @readable/delegate
```

``` html
<script src="node_modules/@readable/closest/closest.js"></script>
<script src="node_modules/@readable/delegate/delegate.js"></script>
```
## Example

```js
Rd.delegateEvent(document, 'click', '#counter', function (event) {
  this.innerText += 1
})
```

``` html
<button id="counter">0</button>
```
