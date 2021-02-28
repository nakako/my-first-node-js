'use strict';
// process : プログラムの実行時に作成されるオブジェクト。argvには引数などが入る
const number = process.argv[2] || 0;    //引数が無い(undefined:falsy)の場合、0を代入する
console.log(process.argv);
let sum = 0;
for(let i = 1 ; i <= number ; i++){
    sum = sum + i;
    console.log(i);
}
console.log(`sum: ${sum}`);
