---
title: 迷你React手写系列-React基本概念
author: Sinclair
date: 2026-03-22
hero_image: https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600
---

# 迷你React手写系列-React基本概念

在我学习React的过程中，我们经常会碰到一些核心的概念，例如`JSX`、`ReactElement`等，这些概念围绕着React学习的整个周期，尽管我们平时是针对一些业务开发，理解源码底层原理也能帮助我们更清晰地认识到React的设计思路，因此本迷你React手写系列对React基础底层原理进行拆解，用原生`JavaScript`实现一个迷你React，帮助大家理解。

## JSX 与 React.createElement

下面的三行代码可能是我们接触React过程的第一步：

```javascript
const element = <div className="foo">Hello World</div>
const container = document.getElementById('root')
ReactDOM.render(element, container)
```

其中第一行定义了一个React元素，第二行从DOM中获取id为root的容器，第三行通过`ReactDOM`的`render`方法将React元素渲染到容器内。这里的第一行我们在JavaScript代码中使用了HTML代码结构，这就是JSX（JavaScript XML）语法结构，由于JSX作为语法糖，不是原生JavaScript，因此我们需要通过`Babel`编译器将JSX语法代码编译为JavaScript代码，如下所示，转换为`React.createElement()`形式，用于生成描述DOM的虚拟对象`ReactElement`。

```javascript
const element = React.createElement('div', {className: 'foo'}, 'Hello World')
```

## ReactElement 对象结构

然后`React.createElement()`返回一个对象。

```javascript
const element = {
    type: 'div',
    props: {
        className: 'foo',
        children: 'Hello World'
    }
}
```

通过`element.type`我们可以创建一个DOM元素：`document.createElement(element.type)`，这里是作为我们要创建的DOM元素的类型，但是在后面介绍中（函数组件），其可以作为函数组件的函数。props则我们的HTML元素的所有属性键值（除了`children`作为其子节点）。`children`属性下的子节点和父节点嵌套的形式则构成了树。

## Render 函数实现

`render`函数用于react改变DOM,将我们的`ReactElement`对象映射为真实DOM，其初步实现是创建DOM节点，然后给DOM节点属性赋值，如下所示：

```javascript
const node = document.createElement(element.type)
node.className= element.props.class
```

然后我们再创建子节点的DOM元素。由于其内部为文本，因此我们创建文本节点。

```javascript
const text = document.createTextNode("")
text["nodeValue"] = element.props.children
```

最后将文本节点添加到父节点中，父节点添加到容器中。

```javascript
node.appendChild(text)
container.appendChild(node)
```

通过使用原生JavaScript方式实现，现在我们就有了一个类似的迷你React代码结构了。

## 总结

这篇文章介绍了React的基本概念：JSX语法、ReactElement对象结构和render函数的基本实现原理。理解这些基础概念对于深入学习React源码和编写高效的React应用至关重要。在后续的系列文章中，我们将继续深入探讨React的更多核心特性。
