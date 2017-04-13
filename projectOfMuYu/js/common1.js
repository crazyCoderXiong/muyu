/**
 * Created by jf on 2016/10/30.
 */

/**
 * 获取第一个子元素的兼容函数
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
    }
}
/**
 * 获取最后一个子元素的兼容函数
 * @param element
 * @returns {*}
 */
function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var node = element.lastChild;
        while (node && 1 !== node.nodeType) {
            node = node.previousSibling;
        }
        return node;
    }
}
/**
 * 获取下一个兄弟元素的兼容函数
 * @param element
 * @returns {*}
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;
        while (next && 1 !== next.nodeType) {
            next = next.nextSibling;
        }
        return next;
    }
}

/**
 * 获取上一个兄弟元素的兼容函数
 * @param element
 * @returns {*}
 */
function getPrevElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var prev = element.previousSibling;
        while (prev && 1 !== prev.nodeType) {
            prev = prev.previousSibling;
        }
        return prev
    }
}

/**
 * 获取内部文本的兼容函数
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
 * 设置内部文本的兼容函数
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
 * 能够将任意元素对象的 旧的类名  替换成 新的类名
 * @param element
 * @param odlStr
 * @param newStr
 */
function replace(element, odlStr, newStr) {
    element.className = element.className.replace(odlStr, newStr);
}


/**
 * 封装函数框架 能将任何东西改成想要的值
 * @param element
 * @param json
 * @param fn
 */
function animate(element, json, fn) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                var leader = getStyle(element, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader += step;
                element.style[k] = leader / 100;
            } else if (k === "zIndex") {
                element.style[k] = json[k];
            } else {
                var leader = parseInt(getStyle(element, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader += step;
                element.style[k] = leader + "px";

            }
            if (target !== leader) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timer);
            if (fn) {
                fn();
            }
        }
    }, 15)
}


/**
 * 获取任意对象的任意位置
 * @param element
 * @param attr
 * @returns {*}
 */
function getStyle(element, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
    } else {
        return element.currentStyle[attr];
    }
}

//获取滚动
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

/**
 * 移动固定距离
 * @param obj
 * @param target
 */
function animate1(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 30;
        step = leader < target ? step : -step;//往左往右都行
        if (Math.abs(leader - target) >= Math.abs(step)) {//距离大于步长就可以走
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";//手动放到目标上
            clearInterval(obj.timer);
        }
    }, 15);
}

/**
 * 封装一个 能够获取网页可视区宽高的兼容函数
 * @returns {{width: (Number|number), height: (Number|number)}}
 */

function client() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    };
}