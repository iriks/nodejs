//在 npmjs.com找到MD5模块
//2.npm install md5 下载到demo1
//npm install md5 -save使用这个会写入package.js  别人用的时候可以拉模块
//3.require引用 然后看文档使用

//dependencies：存储引用的包 以后使用，不用发文件，直接npm i根据该配置拉取全部
//^表示第一位版本号不变 后面取最新   ~前两位不变  *全部取最新 不更新就什么都不加
// "dependencies": { 
//     "md5": "^2.2.1", 
//     "silly-datetime": "^0.1.2"
//   }
var md5=require('md5');
console.log(md5("123456"))

//格式化日期
var sd=require('silly-datetime'); 
console.log(sd.format(new Date(),'YYYY-MM-DD HH:mm:ss'))