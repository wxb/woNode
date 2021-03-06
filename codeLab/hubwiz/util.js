/**
 * util模块呢，是一个Node.js核心模块，提供常用函数的集合，用于弥补核心JavaScript的一些功能过于精简的不足。
 * 并且还提供了一系列常用工具，用来对数据的输出和验证。
 */

var util = require('util');

/** ------------------------------------------------------------------------------------------------
 * util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换为字符串的函数，
 * 通常用于调试和错误输出。它至少接受一个参数object，即要转换的对象,我们来学习它的简单用法。使用语法如下：
 */
var obj = {name:'wangxb', age: 26, address:['陕西省', '西安市', '雁塔区', '河大新城']}
var result = util.inspect(obj);
console.log(result);
// ------------------------------------------------------------------------------------------------

/** ------------------------------------------------------------------------------------------------
 * format函数根据第一个参数，返回一个格式化字符串，第一个参数是一个可包含零个或多个占位符的字符串。
 * 每一个占位符被替换为与其对应的转换后的值，支持的占位符有："%s(字符串)"、"%d(数字<整型和浮点型>)"、"%j(JSON)"、"%(单独一个百分号则不作为一个参数)"。
 * 1：如果占位符没有相对应的参数，占位符将不会被替换.如示例：
 */
var result = util.format('%s:%s', 'foo');
console.log(result);

// 2：如果有多个参数占位符，额外的参数将会调用util.inspect()转换为字符串。这些字符串被连接在一起，并且以空格分隔。如示例：
var result = util.format('%s: %j', 'foo', obj, 'end')
console.log(result);

// 3：如果第一个参数是一个非格式化字符串，则会把所有的参数转成字符串并以空格隔开拼接在一块，而且返回该字符串。如示例：
var result = util.format('1', 2, 3, 'end');
console.log(result);

// ------------------------------------------------------------------------------------------------

/** ------------------------------------------------------------------------------------------------
 * isArray函数可以判断对象是否为数组类型，是则返回ture,否则为false。语法如下：
 */
// var arr = Array(1, 2);
 var arr = [1,2,3];
var result = util.isArray(arr);
console.info(result);
// ------------------------------------------------------------------------------------------------

/** ------------------------------------------------------------------------------------------------
 * isDate函数可以判断对象是否为日期类型，是则返回ture,否则返回false。语法如下：
 */
var date = new Date();
var mydate = date.setDate(2015, 12, 23);
console.log(mydate);
 var result = util.isDate(mydate);
 console.log(result);
// ------------------------------------------------------------------------------------------------


/** ------------------------------------------------------------------------------------------------
 * isRegExp函数可以判断对象是否为正则类型，是则返回ture,否则返回false。语法如下：
 */
var date = new Date();
 var result = util.isRegExp(date);
 console.log(result);
// ------------------------------------------------------------------------------------------------
