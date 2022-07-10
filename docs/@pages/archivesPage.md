---
archivesPage: true
title: 博客文章
permalink: /blog/
article: false
---


```javascript
$.post("/xx/xx/xx.action", { 
    para: $.trim(code)
}, function (jsondata) {  // 回调函数
    if(jsondata.success){

    }else{

    }
}, "json")
```


Ext.Panel主要配置参数表

| 配置参数 | 参数类型 | 说明 |
| :--- | :--- | :--- |
| animCollapse | Boolean | 设置面板折叠或展开时是否显示动画效果，如果 Ext.Fx 类可用则默认为true，否则为fasle。 |
| applyTo | Mixed | 一个页面上已经存在的元素或元素id，组件将会追加到该元素的后面，而不是将其作为新组件的容器。 |
| autoDestroy | Boolean | 设置是否自动销毁从容器中移除的组件，默认为true，否则要手工销毁 |
| autoHeight | Boolean | 是否使用自动高度，true则使用自动高度，false则使用固定高度，默认为false |
| autoLoad | Object/String/Function | 设置面板自动加载的url地址。如果不为null则面板会尝试加载该url 并立刻在面板中进行渲染。这个连接将变成面板的body元素，所以可以根据需要在任何时候刷新面板内容 |
| autoScroll | Boolean | 设置是否自动显示滚动条，true则设置面板的body元素样式为overflow:'auto'，内容溢出时会自动显示滚动条，false则不显示滚动条对溢出的内容进行截断。默认为false |
| autoShow | Boolean | 设置是否移除组件的隐藏样式（例如'x-hidden' or 'x-hide-display'），如果为true则在渲染时移除它们，默认为false |
| autoWidth | Boolean | 是否使用自动宽度，true为自动宽度，false为固定宽度，默认为false |
| baseCls | String | 应用于面板元素的基本样式类，默认为'x-panel' |
| bbar | Object/Array | 设置面板的底端工具栏，可以是Ext.Toolbar对象、工具栏配置对象或button配置对象的数组。 |
| bodyBorder | Boolean | 设置是否显示面板体（body）的内部边框，true则显示，false则隐藏，默认为true。并且该项只在border = true时生效 |
| bodyStyle | String/Object/Function | 应用于面板体（body）的自定义样式。默认为null |
| border | Boolean | 这是是否显示面板体（body）的边框，true则显示，false则隐藏，默认为true。默认边框宽度为2px |
| buttonAlign | String | 设置面板底部（footer）中按钮的对齐方式，有效值包括：'right', 'left' 和'center'，默认为'right' |
| buttons | Array | 加入到面板底部（footer）中按钮配置对象的数组 |
| collapseFirst | Boolean | 设置渲染展开或收缩按钮的顺序。true则在其它按钮渲染前先渲染展开或收缩按钮，false则最后渲染，默认为true。该配置项决定了展开或收缩按钮的位置。 |
| collapsed | Boolean | 设置面板在第一次渲染时是否处于收缩状态，true则收缩，false则展开，默认为false |
| collapsible | Boolean | 设置是否允许面板进行展开和收缩，true则允许进行展开和收缩，并在面板头部显示伸缩按钮。默认为false |
| contentEl | String | 设置面板的内容元素，可以是页面元素的id或已存在的HTML节点 |
| defaultType | String | 面板中元素的默认类型，默认为'panel' |
| defaults | Object | 应用到面板容器中所有元素的配置对象， 例如： defaults: {bodyStyle:'padding:15px'} |
| floating | Boolean | 设置面板是否可以浮动，true则允许，默认为false。注意，设置floating为true会导致面板显示在负偏移的位置，从而面板不可见，因为浮动状态下面板是采用绝对定位的，位置必须在渲染之后进行明确的设置（例如myPanel.setPosition(100,100);）.，浮动面板也需要有固定的宽度 |
| footer | Boolean | 设置是否创建面板底部（footer）元素，true则创建，false则跳过footer元素的创建，如果一个或多个按钮被加入到footer中，则footer的设置会被忽略，而直接创建footer元素 |
| frame | Boolean | 设置是否渲染面板，true则渲染面板为自定义的圆角边框，false则渲染为1px的直角边框 |
| header | Boolean | 设置是否创建面板头部（header）元素，true则创建，false则跳过header元素的创建，如果提供了title但没有设置header则header会被自动创建。如果提供了title但明确设置header为false则header不会被创建 |
| headerAsText | Boolean | 设置是否在面板的header中显示title，true则显示，默认为true |
| height | Number | 面板高度，默认为auto |
| hideBorders | Boolean | true则隐藏面板容器中所有组件的边框，false则根据组件的具体配置进行显示 |
| hideCollapseTool | Boolean | 设置当collapsible为true时，是否显示展开或收缩按钮 |
| html | String/Object | 设置面板（body）元素的内容为HTML片段或DomHelper生成的内容。 |
| items | Mixed | 单独一个子组件或子组件的数组 |
| layout | String | 面板的布局类型，默认Ext.layout.ContainerLayout布局，被选布局的配置项通过layoutConfig进行设置 |
| layoutConfig | Object | 这个配置对象包含被选布局的配置项，针对每种布局的配置项需要查看相应的布局类说明 |
| maskDisabled | Boolean | 设置当面板不能使用时是否遮罩面板，true则遮罩，默认为true |
| shadow | Boolean/String | 设置是否在面板后面显示阴影，true则显示，或通过字符串指定阴影的显示模式，有效值包括：sides、frame、drop，默认为'sides'。该项只在floating为 true时生效 |
| shadowOffset | Number | 设置面板阴影的偏移量，以像素为单位，默认为4。该项只在floating为true时生效 |
| tbar | Object/Array | 设置面板的顶端工具栏，可以是Ext.Toolbar对象、工具栏配置对象或button配置对象的数组。注意，面板渲染后只能通过getTopToolbar方法访问该工具栏 |
| title | String | 显示在面板头部的标题信息' |
| titleCollapse | Boolean | 设置是否允许通过点击面板头部进行展开和收缩操作，true则允许，默认为false |
| tools | Array | 工具按钮配置对象的数组，这些按钮会被添加到面板头部功能区 |
| width | Number | 面板宽度，默认为auto |

