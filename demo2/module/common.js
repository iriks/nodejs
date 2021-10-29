exports.getMime = function (extname) {

    switch (extname) {
        case '.html':
            return 'text/html'
        case '.js':
            return 'text/javascript'
        case '.json':
            return 'application/json'
        case '.css':
            return 'text/css'
        default:
            return 'text/html'


    }
}
var fs = require('fs');

exports.getFileMime = function (extname) {
    //异步方法
    return new Promise(function (resolve, reject) {
        fs.readFile('./data/mime.json', (err, data) => {
            if (err) {
                console.error(err);
                reject(err);
                return;
            }
            //fs.readFile是异步 直接返回是返回不过去的  需要用promise来做
            let mineObj = JSON.parse(data.toString())
            resolve(mineObj[extname]);

        })
    })


    // //同步方法 
    // var data = fs.readFileSync('./data/mime.json'); 
    // let mineObj = JSON.parse(data.toString())
    // return (mineObj[extname]);



}