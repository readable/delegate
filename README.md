# delegate

Simple and readable vanilla js event delegation

```js
Rd.delegateEvent(document, 'click', '#counter', function (event) {
  this.innerText += 1
})
```

``` html
<button id="counter">0</button>
```
