Introduction
=============

Node js is Javascript on the server, without a browser.  The project is officially called node, but we add the js to eliminate confusion.

What
----
* Javascript without a browser
* Based on Chromes V8 engine
* The project is offically called node

How
---
* Open source project
* Hosted on Github
* Community developed modules
* Event Based IO

What it can do
--------------
* Act as a web server
* Build Command Line Tools
* Build Socket Applications
* Anything you can do in JS
* Ideal For "Web Stuff"
    * Dynamic Websites
    * Rest API's
    * Web socket Applications
    * Sharing Code

Source
------
* [Source on GitHub](https://github.com/joyent/node)
* Even versions are production, odd versions are development

Architecture
------------
![Node Architecture](https://github.com/hirakchatterjee/node-intro/blob/master/intro/node_architecture_diagram.png)

![Node Architecture 2](https://github.com/hirakchatterjee/node-intro/blob/master/intro/node_architecture_diagram2.jpg)

![Event Loop](https://github.com/hirakchatterjee/node-intro/blob/master/intro/eventloop.png)


Installing Node
---------------
The easiest way to install node is to [download and run the installer](http://nodejs.org) on the homepage.
Walk through the wizard and install. Make sure you run the installer as an Administrator or use
"Super User Do" or __sudo__.  You can also [download](nodejs.org/download/) individual installers on this page.
Finally you can [download](nodejs.org/dist/v4.2.4/node-v4.2.4.pkg) the node js source and install and run
it directly from the source.

__Node runs on___
* Windows
* OSX
* Linux

Installing Node using NVM (node version manager)
------------------------------------------------
You can checkout the step by step installation here:
(https://www.digitalocean.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps)

REPL
====
```
    $ node
    > var h = "Hello";
    undefined
    > var w = "World";
    undefined
    > function print(first, second) {
    > ... return first + " " + second + "!        From Node js  ;)"
    > ... }
    undefined
    > var r = print(h, w);
    undefined
    > console.log(r);
    Hello World!          From Node js  ;)
    undefined
    > .save hello-world.js
    Session saved to:hello-world.js
    >
    (^C again to quit)
    >

    $ node hello-world.js
    Hello World!          From Node js  ;)

    $

```


1. Pressing up and down arrow keys you can see command history and modify previous commands
2. Press "tab" key to see the list of current commands. If you type a single character followed by "tab" it will show the list of keywords, functions, and variables starting with that particular character
3. The REPL can handle multiline expression
4. The REPL provides a special variable _ (underscore) which is used to pull the result of the last expression.
5. Type ".save" and press "enter" / "return" key to save the current REPL session
6. Type ".help" and press "enter" / "return" while you are inside REPL to get a list of commands for saving the current session or loading a javascript library

Stopping Node js
----------------
1. Node REPL processes run continuously until stopped.
2. You can press "Ctrl + C" to terminate the current command
3. You can exit by typing "Ctrl + C" twice
4. To exit from the REPL press "Ctrl + D"

Commenting a Node js file
-------------------------
* // Can be used to comment out a line
* /* will continuously comment until */
* /** Is typically used to describe functions and objects for documentation parsers */