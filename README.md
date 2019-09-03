# renderView.JS - Dead simple static page generator

# About
**renderView.JS** is a simple and easy to use static page generator built with [Node.JS](https://nodejs.org).

# Philosophy
The philosopy of renderView.JS is simple: You write your content in Markdown and add a ```<div>``` inside your html. Divs must have an id the filename(without the extension) of the the Markdown file. Lastly, build your page running ```app.js```.

# Demo
My [github](https://thiodordelis.github.io) page is using renderView.JS. Check out the [repository](https://github.com/thiodordelis/thiodordelis.github.io).

# Requirements
You need [Node.JS](https://nodejs.org) and [npm](https://npmjs.com)

# Setup
* Install dependencies with npm: ```npm install showdown jsdom js-beautify```

# Usage
* Write your content and save it, e.g. ```intro.md```
* Inside your html(index.html, add a div with an id "intro": ```<div id="intro"></div>```
* Run app.js with node: ```node app.js```

Done. Congratulations! Now check the ```_public``` directory
Please note that for each Markdown file you have inside the root directory, there must be a div with the corresponding id.

# Why
No doubt the king of static page generators is Jekyll, but it was just too much for me. Also, including a Markdown file inside html was not working, at least out of the box. So, I decided to make a simple static page generator so I can update my github page easily!

