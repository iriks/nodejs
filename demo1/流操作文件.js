const fs = require('fs');
/*读取
var readStream = fs.ReadStream('./data.text');
var count = 0; //一共读取了几次
var str = "";
//on data：监听读取的数据
readStream.on('data', (data) => {
    str += data.toString();
    count++;
})
//end:监听到读取完了
readStream.on('end', (data) => {
    console.log(count);
    // console.log(str);
})
//error:监听到问题
readStream.on('error', (err) => {
    console.log(err);
})

*/


/*写入
var data = '我是数据哈哈哈哈哈司法所ad发放';
for (let index = 0; index < 500; index++)
    data += '我是数据哈哈哈哈哈司法所ad发放';
var writeStrem = fs.createWriteStream('./data_output.text');
writeStrem.write(data);

//标记写完  不加上无法被on监听到  因为writeStream是异步方法
writeStrem.end(); 
writeStrem.on('finish', function () {
    console.log('finished');
})
*/


//管道流 适合大文件 一边读取 一边写入
var readStream = fs.createReadStream('./img.bmp');
var writeStream = fs.createWriteStream('./img111.bmp');
readStream.pipe(writeStream);