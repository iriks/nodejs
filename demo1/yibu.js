//传统异步
// function getDate(callback) {
//     setTimeout(() => {
//         var name = "haha";
//         callback(name);
//     }, 1000)

// }
// getDate((aa) => {
//     console.log(aa);
// })

//es6异步

//resolve成功的回调 reject 失败的回调
// var p = new Promise(function (resolve, reject) {
//     try {
//         setTimeout(() => {
//             var name = "ha1ha";
//             resolve(name);
//         }, 1000)
//         //console.log(name)  这里会进catch执行reject
//     } catch (e) {
//         reject(e.message);
//     }
// });
// p.then((d) => {
//     console.log(d)
// }, (e) => {
//     console.log('错误信息：' + e)
// })


/*  //普通方法
function test(){

    return  'hahha';
 } 
 console.log(test());
*/


//异步方法
/*  例1
function test() {
   
    return 'hahha';
}
//console.log(test());

async function main() {
 // await 必须用在async方法里
    var d = await test(); //获取数据
    console.log(d);
}
main();

*/


/*
function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var name = "asdasd";
             resolve(name);
        }, 1000)
    });
}
async function main() {
    var d = await test(); //等待timeout完之后 获取数据 
    console.log(d);
}

main();
*/


//定义一个方法 判断一个资源到底是目录 还是文件
const fs = require("fs");
const path = './upload';

function IsDir(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }

            resolve(stats.isDirectory());

        })
    })
}

function main() {

    var dirArr = [];
    fs.readdir(path, async (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        for (var i = 0; i < data.length; i++) {
            //console.log(path + '/' + data[i])
            if (await IsDir(path + '/' + data[i]))

                // IsDir(path + '/' + data[i]).then((d) => {
                //     console.log(d); 
                //     if(d) dirArr.push(data[i])
                // }))
                dirArr.push(data[i])
        }
        console.log(dirArr);
    })


}
//main();


// IsDir(path).then((d) => {
//     if (d) console.log(path)
//     else console.log(d)
// });


function timeout(ms) {
    return new Promise((res)=>{
        console.log('settimeout')
        setTimeout(res,ms)
    })
}
/* await 只能在async定义的函数内部使用 */
async function asyncpriint(value,ms) {
   await timeout(ms);
    console.log(value);
}
asyncpriint('hello world',2000);