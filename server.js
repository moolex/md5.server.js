/**
 * MD5 Calc Server
 * @ moyo <moyo@uuland.org>
 * @ 2012/06/08
 * @ http://demo.uuland.org/~md5/
 */

var port = 33921;
require('http').createServer(function (request, response){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        var urls = require('url').parse(request.url, true);
        if (urls.pathname != '/query')
        {
                urls.query = {};
        }
        var string = '';
        if (urls.query.string)
        {
                string = urls.query.string;
        }
        else if (urls.query.hex)
        {
                var hex = urls.query.hex;
                try {
                        var arr = [];
                        for (var i = 0; i < hex.length; i=i+2)
                        {
                                arr.push("\\x" + hex.substr(i, 2));
                        }
                        arr = arr.join("");
                        eval("var string = '"+arr+"'");
                } catch (e) {
                        response.end('Hex Input Error');
                }
        }
        else
        {
                response.end('MD5 HASH Server');
        }
        var hash = require('crypto').createHash('md5');
        var md5 = hash.update(string).digest('hex');
        if (urls.query.case == 'upper')
        {
                md5 = md5.toUpperCase();
        }
        if (urls.query.mark)
        {
                md5 = '^'+md5+'$';
        }
        if (urls.query.jsonp)
        {
                md5 = urls.query.jsonp + '("'+md5+'");';
        }
        response.end(md5);
}).listen(port, '127.0.0.1');
console.log('[MD5 HASH Server] running at :'+port);