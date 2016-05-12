// var text = "mom and dad and baby";
// var pattern = /mom( and dad( and baby)?)?/gi;
//
// var matches = pattern.exec(text);
// console.log(matches.index);
// console.log(matches.input);
// console.log(matches[0]);
// console.log(matches[1]);
// console.log(matches[2]);

// var text = "cat, bat, sat, fat";
// var pattern = /.at/;
//
// var matches = pattern.exec(text);
// console.log(matches.index);
// console.log(matches[0]);
// console.log(pattern.lastIndex);
//
// var pattern2 = /.at/g;
// var matches = pattern2.exec(text);
// console.log(matches.index);
// console.log(matches[0]);
// console.log(pattern2.lastIndex);

// var text = "000-00-0000";
// var pattern = /\d{3}-\d{2}-\d{4}/;
//
// if (pattern.test(text)) {
//   console.log("The pattern was matched.");
// }


//
//
// var text = "this has been a short summer";
// var pattern = /(.)hort/g;
//
// if (pattern.test(text)) {
//   console.log(RegExp.$_);
//   console.log(RegExp["$`"]);
//   console.log(RegExp["$'"]);
//   console.log(RegExp["$&"]);
//   console.log(RegExp["$+"]);
//   console.log(RegExp["$*"]);
// }

// function sum(sum1, sum2) {
//   return sum1 + sum2;
// }
//
// console.log(sum(10, 10));
//
// var anotherSum = sum;
// console.log(anotherSum(10, 10));
//
// sum = null;
//
// console.log(anotherSum(10, 10));

// function createComparisionFunction(propertyName) {
//   return function(object1, object2) {
//     var value1 = object1[propertyName],
//         value2 = object2[propertyName];
//
//     if(value1 < value2) {
//       return -1;
//     } else if(value1 > value2) {
//       return 1;
//     } else {
//       return 0;
//     }
//   };
// }
//
// var data = [{name: "Zachary", age: 28}, {name: "Nicholas", age: 29}];
// console.log(data[0].name);
// console.log(data[0].age);
// data.sort(createComparisionFunction("name"));
// // data.sort(createComparisionFunction("age"));
// console.log(data[0].name);
// // console.log(data[0].age);

// function factorial(num) {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * arguments.callee(num -1);
//   }
// }
//
// console.log(factorial(10));

// function outer() {
//   inner();
// }
// function inner() {
//   console.log(inner.caller);
// }
//
// outer();

// function sayName(name) {
//   console.log(name);
// }
//
// function sum(num1, num2) {
//   return num1 + num2;
// }
//
// function sayHi() {
//   console.log('hi');
// }
//
// console.log(sayName.length);
// console.log(sum.length);
// console.log(sayHi.length);

// function sum(num1, num2) {
//   return num1 + num2;
// }
//
// function callSum1(num1, num2) {
//   return sum.apply(this, arguments);
// }
//
// function callSum2(num1, num2) {
//   return sum.apply(this, [num1, num2]);
// }
//
// console.log(callSum1(10, 10));
// console.log(callSum2(10, 10));

// function sum(num1, num2) {
//   return num1 + num2;
// }
//
// function callSum(num1, num2) {
//   return sum.call(this, num1, num2);
// }
//
// console.log(callSum(10, 10));

// window.color = 'red';
//
// function sayColor() {
//   console.log(this.color);
// }
//
// sayColor();

// var s1 = "some text";
// var s2 = s1.substr(1, 4);
//
// console.log(s2);

// var num = 10;
//
// console.log(num.toString(16));
//
// var stringValue = "hello world";
// console.log(stringValue.slice(3));
// console.log(stringValue.substring(3));
// console.log(stringValue.slice(3, 7));
// console.log(stringValue.substring(3, 7));
//
// console.log(stringValue.slice(-3));

// var stringValue = "Lorem ipsum dolor sit amet, consetcur adipisicing elit";
// var positions = new Array();
// var pos = stringValue.indexOf('e');
//
// while(pos > -1) {
//   positions.push(pos);
//   pos = stringValue.indexOf("e", pos + 1);
// }
//
// console.log(positions);

// var text = "cat, bat, sat, fat";
// var pattern = /.at/;
//
// var matches = text.match(pattern);
// console.log(matches.index);
// console.log(matches[0]);
// console.log(pattern.lastIndex);
//
// console.log(text.search(/at/));
//
// console.log(text.replace('at', 'ond'));
//
// console.log(text.replace(/at/g, 'ond'));
//
// var result = text.replace(/(.at)/g, 'word ($1)');
// console.log(result);


// function htmlEscape(text) {
//   return text.replace(/[<>"&]/g, function(match, pos, originalText) {
//     switch (match) {
//       case "<":
//         return "&lt;";
//       case ">":
//         return "&gt;";
//       case "\"":
//         return "&quot;"
//     }
//   });
// }
//
// console.log(htmlEscape("<p class=\"greeting\">Hello World!</p>"));


// var colorText = "red, blue, green, yellow";
// var colors1 = colorText.split(",");
// var colors2 = colorText.split(",", 2);
// var colors3 = colortext.split(/[^\,]+/)

// var stringValue = "yellow";
//
// function determineOrder(value) {
//   var result = stringValue.localeCompare(value);
//   if (result < 0) {
//     console.log("The string 'yellow' comes before the string '" + value + "'.");
//   } else if (result > 0) {
//     console.log("The string 'yellow' comes after the string '" + value + "'.");
//   } else {
//     console.log("The string 'yellow' is equal to  the string '" + value + "'.");
//   }
// }
//
// determineOrder("brike");

// console.log(String.fromCharCode(104,101,108,108,111));

// var uri = "http://www.wrox.com/illegal value.html#start";
//
// console.log(encodeURI(uri));
// console.log(encodeURIComponent(uri));

// console.log(Math.E);

// var max = Math.max(3,54,62,6);
// console.log(max);

// var values = [1,2,3,4,5,6,7,8];
// var max = Math.max.apply(Math, values);
//
// console.log(max);

// Math.ceil(25.9); //向上舍入  26
// Math.round(25.4); //标准四舍五入 25
// Math.floor(25.9); //想下舍入 25

// console.log(Math.random());

// 值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)
// 取 1 到 10之间的一个随机数
// console.log(Math.floor(Math.random() * 10 + 1));

// 取 5 到 10之间的一个随机数
// console.log(Math.floor(Math.random() * 6 + 5));

// function selectFrom(lowerValue, upperValue) {
//     var choises = upperValue - lowerValue + 1;
//     return Math.floor(Math.random() * choises + lowerValue);
// }
//
// console.log(selectFrom(9, 150));

// var person = new Object();
// person.name = "Nicholas";
// person.age = 29;
// person.job = "Software Engineer";
//
// person.sayName = function () {
//     console.log(this.name);
// };

// var person = {
//     name: "Nicholas",
//     age: 29,
//     job: "Softwar Engineer",
//     sayName: function () {
//         console.log(this.name);
//     }
// };

// var person = {};
// Object.defineProperty(person, "name", {
//    writable: false,
//     value: "Nicholas"
// });
//
// console.log(person.name);
// person.name = "Greg";
// console.log(person.name);


//工厂模式
// function createPerson(name, age, job) {
//     var o = new Object();
//     o.name = name;
//     o.age = age;
//     o.job = job;
//     o.sayName = function () {
//         console.log(this.name);
//     };
//     return o;
// }
//
// var person1 = createPerson("Nicholas", 29, "Software Engineer");
// var person2 = createPerson("Greg", 27, "Doctor");

//构造函数模式
// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = function () {
//         console.log(this.name);
//     };
// }
//
// var person3 = new Person("Nicholas", 29, "Software Engineer");
// var person4 = new Person("Greg", 27, "Doctor");
//
// var person5 = Person("john", 33, "Web Developer"); //添加到window
// window.sayName();

//原型模式
// function Person() {
//
// }
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.age = "Soft Engineer";
// Person.prototype.sayName = function () {
//     console.log(this.name);
// };
//
// var person1 = new Person();
// person1.sayName();
//
// var person2 = new Person();
// person2.sayName();
//
// console.log(person1.sayName == person2.sayName);

// function Person() {
//
// }
// Person.prototype = {
//     constructor: Person,
//     name: "Nicholas",
//     age: 29,
//     job: "Software Enineer",
//     sayName: function () {
//         console.log(this.name);
//     }
// };

//组合使用构造函数模式和原型模式
// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.friends = ["Shelby", "Court"]
// }
//
// Person.prototype = {
//     constructor: Person,
//     sayName: function () {
//         console.log(this.name);
//     }
// };
//
// var person1 = new Person("Nicholas", 29, "Software Engineer");
// var person2 = new Person("Greg", 30, "Doctor");
//
// person1.friends.push("Van");
// console.log(person1.friends);
// console.log(person2.friends);
// console.log(person1.friends === person2.friends);
// console.log(person1.sayName === person2.sayName);

//动态原型模式
// function Person(name, age, job) {
//     //属性
//     this.name = name;
//     this.age = age;
//     this.job = job;
//
//     //方法
//     if (typeof this.sayName != "function") {
//         Person.prototype.sayName = function () {
//             console.log(this.name);
//         }
//     }
// }
//
// var friend = new Person("Nicholas", 29, "Softwar Engineer");
// friend.sayName();

//寄生构造函数模式
// function Person(name, age, job) {
//     var o = new Object();
//     o.name = name;
//     o.age = age;
//     o.job = job;
//     o.sayName = function () {
//         console.log(this.name);
//     }
//     return o;
// }
//
// var friend = new Person("Nicholas", 29, "Software Engineer");
// friend.sayName();
//
// function SpecialArray() {
//     //创建数组
//     var values = new Array();
//
//     //添加值
//     values.push.apply(values, arguments);
//
//     //添加方法
//     values.toPipedString = function () {
//         return this.join("|");
//     };
//
//     //返回数组
//     return values;
// }
//
// var colors = new SpecialArray("red", "blue", "green");
// console.log(colors.toPipedString());

//稳妥构造函数模式
// function Person(name, age, job) {
//
//     //创建要返回的对象
//     var o = new Object();
//
//     //可以在这里定义私有变量和函数
//
//     //添加方法
//     o.sayName = function () {
//         console.log(this.name);
//     };
//
//     //返回对象
//     return o;
//
// }
//
// var friend = Person("Nicholas", 29, "Software Engineer");
// friend.sayName();

//继承

// function SuperType() {
//     this.property = true;
// }
//
// SuperType.prototype.getSuperValue = function () {
//     return this.property;
// };
//
// function SubType() {
//     this.subproperty = false;
// }
//
// SubType.prototype = new SuperType();
//
// SubType.prototype.getSubValue = function () {
//     return this.subproperty;
// };
//
// var instance = new SubType();
// console.log(instance.getSuperValue());
// console.log(instance instanceof Object);
// console.log(instance instanceof SuperType);
// console.log(instance instanceof SubType);

// function SuperType() {
//     this.prototype = true;
// }
//
// SuperType.prototype.getSuperValue = function () {
//     return this.property;
// };
//
// function SubType() {
//     this.subproperty = false;
// }
//
// //继承了 SuperType
// SubType.prototype = new SuperType();
//
// //添加新方法
// SubType.prototype.getSubValue = function () {
//     return this.subprototype;
// };
//
// //重写超类型中的方法
// SubType.prototype.getSuperValue = function () {
//     return false;
// };
//
// var instance = new SubType();
// console.log(instance.getSuperValue());

// var name = "The Window";
//
// var object = {
//     name: "My Object",
//     getNameFunc: function () {
//         return this.name;
//     }
// };
//
// console.log(object.getNameFunc());
// console.log((object.getNameFunc)());
// console.log((object.getNameFunc = object.getNameFunc)());

// function assignHandler() {
//     var element = document.getElementById("someElement");
//     element.onclick = function () {
//         console.log(element.id);
//     }
// }

// function assignHandler() {
//     var element = document.getElementById("someElement");
//     var id = element.id;
//
//     element.onclick = function () {
//         console.log(id);
//     };
//
//     element = null;
// }

// function outputNumbers(count) {
//     for (var i = 0; i < count; i++) {
//         console.log(i);
//     }
//     var i;
//     console.log(i);
// }
// outputNumbers(10);

// function outputNumbers(count) {
//     (function () {
//         for (var i = 0; i < count; i++) {
//             console.log(i);
//         }
//     })();
//
//     console.log(i);
// }
// outputNumbers(3);

// function MyObject() {
//     //私有变量和私有函数
//     var privateVariable = 10;
//
//     function privateFunction() {
//         return false;
//     }
//
//     //特权方法
//     this.publicMethod = function () {
//         privateVariable++;
//         return privateFunction();
//     }
// }

// function Person(name) {
//     this.getName = function () {
//         return name;
//     };
//     this.setName = function (value) {
//         name = value;
//     }
// }
//
// var person = new Person("Nicholas");
// console.log(person.getName());
// person.setName("Greg");
// console.log(person.getName());

//静态私有变量
// (function () {
//
//     //私有变量和私有函数
//     var privateVarible = 10;
//
//     function privateFunction() {
//         return false;
//     }
//
//     //构造函数
//     MyObject = function () {
//
//     };
//
//     //公有/特权方法
//     MyObject.prototype.publicMethod = function () {
//         privateVarible++;
//         return privateFunction();
//     }
//
// })();


// var singleton = {
//     name: "john",
//     method: function () {
//
//     }
// };

// var singleton = function () {
//     //私有变量和私有函数
//     var privateVariable = 10;
//
//     function privateFunction() {
//         return false;
//     }
//
//     //特权/公有方法和属性
//     return {
//         publicProperty: true,
//         publicMethod: function () {
//             privateVariable++;
//             return privateFunction();
//         }
//     };
// }();
//
// console.log(singleton);

var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getRelatedTarget: function (event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    },
    getButton: function (event) {
        if (document.implementation.hasFeature('MouseEvents', '2.0')) {
            return event.button;
        } else {
            switch(event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    getWheelDelta: function (event) {
        if (event.wheelDelta) {
            return (client.engine.opera && client.engine.operea < 9.5 ? -event.wheelDelta : event.wheelDelta)
        } else {
            reeturn -event.detail * 40;
        }
    },
    getCharCode: function (event) {
        if (typeof event.charCode == 'number') {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    }
};

//事件类型
// var isSupportedHTMLE2 = document.implementation.hasFeature('HTMLEvents', '2.0');
// var isSupportedUIE3 = document.implementation.hasFeature('UIEvent', '3.0');

EventUtil.addHandler(window, 'load', function () {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    EventUtil.addHandler(link, 'load', function (event) {
        console.log('css loaded');
    });
    link.href = 'example.css';
    document.getElementsByTagName('head')[0].appendChild(link);
});

var div = document.getElementById('mydiv');

EventUtil.addHandler(div, 'click', function (event) {
    event = EventUtil.getEvent(event);
    var pageX = event.pageX;
    var pageY = event.pageY;

    if (pageX === undefined) {
        pageX = event.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft);
    }
    if (pageY === undefined) {
        pageY = event.clientY + (document.body.scrollTop || document.documentElement.scrollTop);
    }

    console.log('Page coordinates: ' + pageX + ', ' + pageY);
});

//屏幕坐标位置
var div2 = document.getElementById('mydiv2');
EventUtil.addHandler(div2, 'click', function (event) {
    event = EventUtil.getEvent(event);
    console.log('Screen coordinates: ' + event.screenX + ', ' + event.screenY);
});

//获取鼠标按下了哪个键
var div3 = document.getElementById('mydiv3');
EventUtil.addHandler(div3, 'mousedown', function (event) {
   event = EventUtil.getEvent(event);
    console.log(EventUtil.getButton(event));
});

var textbox = document.getElementById('myText');
EventUtil.addHandler(textbox, 'textInput', function (event) {
    event = EventUtil.getEvent(event);
    console.log(event.data);
});

//鼠标右键菜单
EventUtil.addHandler(window, 'load', function (event) {
   var div = document.getElementById('myDiv');

    EventUtil.addHandler(div, 'contextmenu', function (event) {
        event = EventUtil.getEvent(event);
        EventUtil.preventDefault(event);

        var menu = document.getElementById('myMenu');
        menu.style.left = event.clientS + 'px';
        menu.style.top = event.clientY + 'px';
        meny.style.visibility = 'visible';
    });
});

// readystatechange
EventUtil.addHandler(window, 'load', function () {
    var script = document.createElement('script');
    EventUtil.addHandler(script, 'readystatechange', function (event) {
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);

        if(target.readyState == 'loaded' || target.readyState == 'complete') {
            EventUtil.removeHandler(target,  'readystatechange', arguments.callee);
            console.log('Script Loaded');
        }
    });
    script.src = 'example.js';
    document.body.appendChild(script);
});