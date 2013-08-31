YAPS Cookies
============

[![NPM version](https://badge.fury.io/js/yaps-cookies.png)](http://badge.fury.io/js/yaps-cookies)

This is a cookie plugin for [YAPS](https://github.com/brettlangdon/yaps.git).

It simply uses [node-cookie](https://github.com/shtylman/node-cookie) under the hood to parse and set cookie headers.

## Installation
### Via NPM
```bash
npm install [-g] yaps-cookies
```
### Via Git
```bash
git clone git://github.com/brettlangdon/yaps-cookies.git
cd ./yaps-cookies.git
npm install
```

## Usage
```javascript
var yaps = require("yaps");
var yaps_cookies = require("yaps-cookies");

var app = new yaps.server();
app.registerPlugin(yaps_cookies);

var my_plugin = function(options){
    this.GET("/", function(request, server, respond){
        // this is an object of the cookies sent with the request
        // {"name": "value"}
        console.dir(request.cookies);

        // add a response cookie
        request.setCookie("user-id", "some value");

        respond(200, "thanks");
    });
};
app.registerPlugin(my_plugin);

app.start();
```

## License
```
The MIT License (MIT)

Copyright (c) 2013 Brett Langdon <brett@blangdon.com> (http://www.brett.is)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
