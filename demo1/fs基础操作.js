const fs = require('fs');

//1.fs.stat检测是文件还是目录
// fs.stat('fs.js', (err, data) => {
//     if (err) {
//         console.log(err);

//         return;
//     }
//     console.log(`是文件：${data.isFile()}`)
//     console.log(`是目录：${data.isDirectory()}`)

// })

//2.fs.mkdir创建文件 
// fs.mkdir('./html', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log('创建成功')
// });

//3.fs.writeFile 创建写入  以前的文件存在 会覆盖内容
// fs.writeFile('./html/index.html', 'hello ncff22', (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('successed') 
// })

//4.fs.appendFile 追加内容 ，不存在则创建
// fs.appendFile('./html/index.html',"\n i am appendFile",err => {

//      if (err) {console.log(err)}
//      console.log('successed ')
// })

//5.fs.readFile读取
// fs.readFile('./html/index.html', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     //读取到的是16进制数据
//     console.log(data)
//     console.log(data.toString()) //转换成string
// })

//6.fs.readdir 读取目录
// fs.readdir('./html',(err,data) => {    
//    if(err){console.log(err);}  
// console.log(data)
// });

//7.fs.rename重命名/移动文件 
// fs.rename('./html/tt.js', './html/tt11.js', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('重命名 successed ')

// })
// fs.rename('./html/tt11.js', './html2/txx.js', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('移动文件 successed ')

// })




//8.fs.unlink 删除文件
fs.unlink("./html2/asd.js", (err) => {

    if (err) {
        console.log(err);
    }
    console.log('delete  successed ')
});

//9.fs.rmdir删除目录  目录下有文件时， 目录不可以被删除
fs.rmdir("./html2", (err) => {


    if (err) {
        console.log(err)
    }

    console.log('delete dir  successed ')
})