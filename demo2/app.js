const http = require('http');
const path = require('path');
const fs = require('fs');
const common = require('./module/common.js')

http.createServer(function (red, res) {

    //1.获取网站地址
    let pathname = red.url;
    pathname = pathname == '/' ? '/index.html' : pathname;
    //获取后缀名 分别处理


    //2.通过fs读取 过滤 favicon.ico
    if (pathname != '/favicon.ico') {
        fs.readFile('./static' + pathname, async (err, data) => {

            let head = await common.getFileMime(path.extname(pathname));
            //common.getMime(path.extname(pathname)); 

            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'text/html;charset="utf-8"'
                })
                res.end('页面不存在');
            }
            res.writeHead(200, {
                'Content-Type': `${head};charset="utf-8"`
            });


            res.end(data);
        });
    }

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');