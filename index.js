var cookie = require("cookie");

var yaps_cookies = function(options){
    this.on("setup", this.on_setup);
};

yaps_cookies.prototype.on_setup = function(request, server, done){
    request.setCookie = function(name, value, options){
        request.addHeader("Set-Cookie", cookie.serialize(name, value, options));
    };
    request.cookies = cookie.parse(request.headers.cookie || "");
    done();
};

module.exports = yaps_cookies;
