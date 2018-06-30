# node-styl
simple bash console syling

Add colors and styles to your logs :
```javascript

var styl = require('node-styl');
...
console.log("i can be "+styl("red").red.bold);
console.log("or "+styl(" black ").black.whiteBG);
 ```

Use preformated style :
```javascript
...
var title = styl().green.bold.blueBG.text;
console.log("this is "+title(" A TITLE "));
console.log("this is "+title(" AN OTHER TITLE "));
```
NB: Remember styl is an object, it must be at least merged with an empty string.

available style properties are :
* **styles :**
	* bold
	* italic
	* underline
	* inverse
	* strikethrough
* **text colors :**
	* white
	* grey
	* black
	* blue
	* cyan
	* green
	* magenta
	* red
	* yellow
* **background colors :**
	* whiteBG
	* greyBG
	* blackBG
	* blueBG
	* cyanBG
	* greenBG
	* magentaBG
	* redBG
	* yellowBG
