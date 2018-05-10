# numerize.js

Live Demo: http://ilankleiman.com/projects/numerize/index.html

Code heavily based off of David's Python implementation (https://github.com/davidsa03/numerize/)

Only changed a bit of syntax to make it work in Javascript.

Additionally, this Javascript implementation will numerize all numbers within HTML tags that have the "numerize" class attribute.

Example (HTML):
```html
<script src="js/numerize.js"></script>
...
<p>This number is numerized: <div class="numerize">21324314</div> !</p>

```

Output (Browser View):
```

This number is numerized: 21.32M

```
