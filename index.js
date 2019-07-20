/**
 * Created by VULCAN on 2019/7/19.
 */

/*@flow*/

// 普通类型
function add(x: number, y: number): number {
  return x + y
}

add(12, 11);


// 数组

var arr: Array<number> = [1, 2, 3]

// arr.push('Hello'); //error
arr.push(10);

// 数组类型注释的格式是 Array<T>，T 表示数组中每项的数据类型。
// 在上述代码中，arr 是每项均为数字的数组。如果我们给这个数组添加了一个字符串，Flow 能检查出错误。

// 对象

class Bar {
  x: string;           // x 是字符串
  y: string | number;  // y 可以是字符串或者数字
  z: boolean;

  constructor(x: string, y: string | number) {
    this.x = x
    this.y = y
    this.z = false
  }
}

var bar: Bar = new Bar('hello', 4)

var obj: { a: string, b: number, c: Array<string>, d: Bar } = {
  a: 'hello',
  b: 11,
  c: ['hello', 'world'],
  d: new Bar('hello', 3)
}

// 类的类型注释格式如上，可以对类自身的属性做类型检查，也可以对构造函数的参数做类型检查。
// 这里需要注意的是，属性 y 的类型中间用 | 做间隔，表示 y 的类型即可以是字符串也可以是数字。

// 对象的注释类型类似于类，需要指定对象属性的类型。

// Null

// 若想任意类型 T 可以为 null 或者 undefined，只需类似如下写成 ?T 的格式即可。

// var foo: ?string = null;

// 此时，foo 可以为字符串，也可以为 null。
// 目前我们只列举了 Flow 的一些常见的类型注释。  官网 https://flow.org/en/docs/types/








