/**
 * Created by Sun59 on 2016/10/30.
 */
/**
 * �����Ƿ�����innertext������Ԫ���ı�����
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
 * �����ܷ�ʹ��innertext������Ԫ���ı�����
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
 * �滻Ԫ�ض�����������ʹ��replace
 * 20161106
 * @param element
 * @param oldstr
 * @param newstr
 */
function replaceClassName(element, oldstr, newstr) {
    //element.className = element.className.replace(oldstr, newstr);
    //�����֮ǰ�а�������ʱ��bug
    var arr = element.className.trim().split(" ");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === oldstr) {
            arr[i] = newstr;
        }
    }
    return arr.join(" ");
};
/**
 * nextElementSibling���ڼ��������⣬��IE678���޷����ã���д�����Ժ��������ݲ��ܵ��õ��������ʵ��nextElementSibling��Ч��
 * @param element
 * @returns {*}
 */
function getNextElement(element) {//�����ǵ���nextElementSibling��Ԫ��
    if (element.nextElementSibling) {//��֧�ֵ����򷵻��棬��֧���򷵻�null��false���ж�������else�д���
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;//������ʱ��������nextSibling����
        while (next && next.nodeType !== 1) {//������������ʱ��next���¸�ֵ����Ѱ��
            next = next.nextSibling;
        }
        return next;
    }
}
/**
 * ��ȡ��һ��Ԫ�ؽڵ�ļ��ݺ���
 * @param element
 * @returns {*}
 */
function getPrevElement(element) {//�����ǵ���previousElementSibling��Ԫ��
    if (element.previousElementSibling) {//��֧�ֵ����򷵻��棬��֧���򷵻�null��false���ж�������else�д���
        return element.previousElementSibling;
    } else {
        var prev = element.previousSibling;//������ʱ��������previousSibling����
        while (prev && prev.nodeType !== 1) {//������������ʱ��prev���¸�ֵ����Ѱ��
            prev = prev.previousSibling;
        }
        return prev;
    }
}
/**
 * firstElementChild�ļ��ݺ���
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
        //element.children[0]������
    }
}
/**
 * lastElementChild���ݺ���
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
        //element.children[children.length-1]������
    }
}
/**
 * ��ȡid����
 * 20161103
 * @param id
 * @returns {Element}
 */
function $(id) {
    return document.getElementById(id);
}
/**
 * ��װ�õ�ѡ����ģ�ͽ�һ��������Ƶ���һ��
 * 20161103
 * @param sour
 * @param dest
 * @param isMoveAll���Ƿ�ȫ���ƹ���booleanֵ
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
 * //��װ ͨ��������ȡԪ�صļ��ݺ���
 * 20161106
 * @param element
 * @param className
 * @returns {*}
 */
function getElementsByClassName(element, className) {
    if (element.getElementsByClassName) {
        return element.getElementsByClassName(className);//֧�־ͻ�ȡ Ȼ�󷵻�
    } else {
        //��֧��getElementsByClassName
        //ͨ����ǩ���ѵ�ǰԪ�������еı�ǩ���ҵ� �������Ƿ����Ҫ�� ������Ͼͷŵ�һ��������
        var filterArr = [];
        var elements = element.getElementsByTagName("*");//ͨ��� ��ʾ���б�ǩ
        for (var i = 0; i < elements.length; i++) {
            //�������Ƿ����Ҫ��
            /*if (elements[i].className.indexOf(className) !== -1) {//����Ҫ������
             filterArr.push(elements[i]);
             }*/
            //��֮ǰʹ��indexof��bug�����޸�
            var arr = elements[i].className.split(" ");
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] === className) {
                    filterArr.push(element[i]);
                    break;//���ҵ�����ֹ
                }
            }
        }
        return filterArr;
    }
}
/**
 *  ��װ��������(����)
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
 * ��װ��ȡ��ȥ�������󲿵�����
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
 * ��װ��ȡ��������ʽ����
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
 * ��װ��������������ܣ������棩
 * 20161109
 * @param obj
 * @param json
 */
function animateSlow(obj, json,fn) {
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function () {
        var flag = true;//���ñ�־λ��ȷ�϶����������ͬʱ����ʱ�ܷ�ȫ������targetֵ
        for (var k in json) {
            if(k === "opacity"){//�ж��Ƿ���opacity���������д���
                var leader = getStyle(obj, k)*100;
                var target = json[k]*100;
                var step = (target - leader) / 50;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader/100;
            }else if(k === "zIndex"){//�㼶�����ã����뽥�䣬ֱ�Ӹ�ֵ
                obj.style.zIndex = json[k];
            }else if(k === "backgroundColor"){
                obj.style.backgroundColor = json[k];
            }
            else{//ͨ����ʽ���Ա仯����
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {
                flag = false;//��Ӧ�����������λ��û�е���target�Ͳ���ͣ
            }
        }
        if(flag){
            clearInterval(obj.timerId);
            if(fn){//�������˺����ˣ�fn�Ǻ�������true����ִ��fn������������ִ��
                fn();
            }
        }
    }, 15);
}
/**
 * ��װclient�Ŀ�Ⱥ͸߶�
 * 20161111
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client(){
    return{
        width:window.innerWidth||document.documentElement.clientHeight||document.body.clientHeight||0,
        height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0
    }
}
