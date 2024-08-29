# Instructions  

 ## Overview

We will be developing our final video games here in repl.it. Code.org is limited in terms of some of the functionality it offers us for our games. It is also very difficult to collaborate on code in code.org. Repl offers a way for you to be working on the same code at the same time (much like a google doc!). It also offers better version control (it keeps track of your changes, so if you mess up, you can return to an older version).

  ## Steps

  ### Copying over Code and Images
  1. I have already added the "frog" "mushroom" and "fly" sprite for this project but if you have other images you want to include, follow these steps:
    - In code.org, go to your animations tab. For each image, click "export" on the right to zip.
    - Open the zip in your downloads.
    - Drag the png into this project, under "assets".
  2. In code.org, go to "text mode" in your project and copy all of the code _**inside the draw loop**_. Paste it in script.js in the **draw** function in between the "{" "}" brackets.
  3. In code.org text mode, copy all of the code **that sets up sprites, animations, and variables (above the draw loop)**. Paste it in script.js in the **setup** function in between the "{" "}" brackets.
  4. In code.org text mode, copy all of **your function definitions**. Paste it in script.js in the **setup** function in between the "{" "}" brackets.

### Getting it to Work
1. Repl uses mostly the same programming language and syntax as code.org. However, there are a few pieces of code we must change in order to get it to work.
2. Firstly, all variables must be declared at the top of the file. Therefore, move any variable declarations (anything with ```var```) to the top of the file. For example if your code looks like this:

```js
function setup() {
  var health = 100;
}
```
It should instead look like this:
```js
var health;
function setup() {
  health = 100;
  //other code
}
```

3. The function ```randomNumber()``` needs to be renamed to ```random``` in repl. Therefore command-F all instances of ```randomNumber``` and replace with ```random```

4. The code repl uses to add animations to sprites is also a little different. We still need to _createSprites_ in the setup function but also now instead of "setAnimation", we are going to use a "addImg" function. Furthermore, you also need to load the image from the assets file so your code should look like this:

So... your old code that looked like:
```js
function setup() {
  var health = 100;
  var mushroom = createSprite(200,200);  
  mushroom.setAnimation("mushroom");
}
```

Should instead look like this:
```js
var mushroom;
var health = 100;

function setup() {
  mushroom = createSprite(200,200);
  mushroom.addImage(loadImage("assets/mushroom.png"))
}
```

5. Once you have copied all the code over, and editted it according to above, click "Run". Chances are that you will need to scale your sprite images and/or move their x,y coordinates to get it to work exactly like code.org but you should have a functional game in repl!
