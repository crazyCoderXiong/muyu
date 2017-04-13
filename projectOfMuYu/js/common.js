/**
 * Created by Sun59 on 2016/10/30.
 */
/**
 * 测试是否能用innertext并返回元素文本内容
 * @param element
 * @returns {*}
 */
function getInnerText(element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
/**
 * 测试能否使用innertext并设置元素文本内容
 * @param element
 * @param content
 */
function setInnerText(element, content) {
    if (typeof element.innerText === "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}
/**
 * 替换元素对象的类的内容使用replace
 * 20161106
 * @param element
 * @param oldstr
 * @param newstr
 */
function replaceClassName(element, oldstr, newstr) {
    //element.className = element.className.replace(oldstr, newstr);
    //解决了之前有包含重名时的bug
    var arr = element.className.trim().split(" ");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === oldstr) {
            arr[i] = newstr;
        }
    }
    return arr.join(" ");
};
/**
 * nextElementSibling存在兼容性问题，再IE678中无法调用，编写兼容性函数来兼容不能调用的浏览器，实现nextElementSibling的效果
 * @param element
 * @returns {*}
 */
function getNextElement(element) {//参数是调用nextElementSibling的元素
    if (element.nextElementSibling) {//若支持调用则返回真，不支持则返回null（false）判断则跳到else中处理
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;//定义临时变量接收nextSibling对象
        while (next && next.nodeType !== 1) {//当不满足条件时则next重新赋值向下寻找
            next = next.nextSibling;
        }
        return next;
    }
}
/**
 * 获取上一个元素节点的兼容函数
 * @param element
 * @returns {*}
 */
function getPrevElement(element) {//参数是调用previousElementSibling的元素
    if (element.previousElementSibling) {//若支持调用则返回真，不支持则返回null（false）判断则跳到else中处理
        return element.previousElementSibling;
    } else {
        var prev = element.previousSibling;//定义临时变量接收previousSibling对象
        while (prev && prev.nodeType !== 1) {//当不满足条件时则prev重新赋值向下寻找
            prev = prev.previousSibling;
        }
        return prev;
    }
}
/**
 * firstElementChild的兼容函数
 * 20161103
 * @param element
 * @returns {*}
 */
function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var node = element.firstChild;
        while (node && 1 !== node.nodeType) {
            node = node.nextSibling;
        }
        return node;
        //element.children[0]更方便
    }
}
/**
 * lastElementChild兼容函数
 * 20161103
 * @param element
 * @returns {*|Node}
 */
function getLastElement(element) {
    if (element.lastElementChild) {
        element.lastElementChild;
    } else {
        var node = node.lastChild;
        if (node && 1 !== node.nodeType) {
            node = node.previousSibling;
        }
        return node;
        //element.children[children.length-1]更方便
    }
}
/**
 * 获取id对象
 * 20161103
 * @param id
 * @returns {Element}
 */
function $(id) {
    return document.getElementById(id);
}
/**
 * 封装好的选好友模型将一侧的内容移到另一侧
 * 20161103
 * @param sour
 * @param dest
 * @param isMoveAll：是否全部移过来boolean值
 */
function move(sour, dest, isMoveAll) {
    var options = sour.children;
    for (var i = 0; i < options.length; i++) {
        var option = options[i];
        if (isMoveAll || option.selected === true) {
            dest.appendChild(option);
            i--;
        }
    }
}
/**
 * //封装 通过类名获取元素的兼容函数
 * 20161106
 * @param element
 * @param className
 * @returns {*}
 */
function getElementsByClassName(element, className) {
    if (element.getElementsByClassName) {
        return element.getElementsByClassName(className);//支持就获取 然后返回
    } else {
        //不支持getElementsByClassName
        //通过标签名把当前元素中所有的标签都找到 看类名是否符合要求 如果符合就放到一个数组中
        var filterArr = [];
        var elements = element.getElementsByTagName("*");//通配符 表示所有标签
        for (var i = 0; i < elements.length; i++) {
            //看类名是否符合要求
            /*if (elements[i].className.indexOf(className) !== -1) {//有我要的类名
             filterArr.push(elements[i]);
             }*/
            //对之前使用indexof的bug进行修复
            var arr = elements[i].className.split(" ");
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] === className) {
                    filterArr.push(element[i]);
                    break;//若找到则终止
                }
            }
        }
        return filterArr;
    }
}
/**
 *  封装动画函数(匀速)
 *  20161108
 * @param obj
 * @param target
 * @param step
 */
function animate(obj, target) {
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 30;
        step = leader < target ? step : -step;
        leader = leader + step;
        if (Math.abs(leader - target) >= Math.abs(step)) {
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";
            clearInterval(obj.timerId);
        }
    }, 15)
}
/**
 * 封装获取卷去顶部和左部的坐标
 * 20161109
 * @returns {{}}
 */
function scroll(){
    return {
        top: window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
    }
}

/**
 * 封装获取计算后的样式属性
 * 20161109
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr];
    }else{
        return obj.currentStyle[attr];
    }
}
/**
 * 封装缓动动画函数框架（完整版）
 * 20161109
 * @param obj
 * @param json
 */
function animateSlow(obj, json,fn) {
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function () {
        var flag = true;//设置标志位来确认多个对象属性同时动作时能否全部到达target值
        for (var k in json) {
            if(k === "opacity"){//判断是否是opacity，单独进行处理
                var leader = getStyle(obj, k)*100;
                var target = json[k]*100;
                var step = (target - leader) / 50;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader/100;
            }else if(k === "zIndex"){//层级的设置，无须渐变，直接赋值
                obj.style.zIndex = json[k];
            }else if(k === "backgroundColor"){
                obj.style.backgroundColor = json[k];
            }
            else{//通用样式属性变化设置
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {
                flag = false;//对应上面如果还有位置没有到达target就不能停
            }
        }
        if(flag){
            clearInterval(obj.timerId);
            if(fn){//参数传了函数了，fn是函数体是true，进执行fn，否则跳过不执行
                fn();
            }
        }
    }, 15);
}
/**
 * 封装client的宽度和高度
 * 20161111
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client(){
    return{
        width:window.innerWidth||document.documentElement.clientHeight||document.body.clientHeight||0,
        height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0
    }
}
