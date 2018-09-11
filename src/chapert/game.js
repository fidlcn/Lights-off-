const GAME_RULER = {
    "0":[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "1":[1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "2":[1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
}

export default GAME_RULER;



//生成矩阵的函数，参数填写矩阵位置
// var origArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// function createChapter(){
// 	var length = arguments.length;
// 	var newArr = origArr;
// 	for(var i= 0; i < length; i++){
// 		newArr[arguments[i]] = 1;
//     }
// 	return newArr;
// }