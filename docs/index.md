---
home: true
heroImage: img/gif/panda.jpg
heroText: 唐宋元明清
tagline: 用来记录遇到的点点滴滴，琐碎知识
actionText: 现在开始 →
actionLink: /pages/5d76a5/
bannerBg: none # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features: # 可选的
  - title: 知识管理
    details: 包含三种典型的知识管理形态：结构化、碎片化、体系化。轻松打造属于你自己的知识管理平台
  - title: 简洁高效
    details: 以 Markdown 为中心的项目结构，内置自动化工具，以更少的配置完成更多的事。配合多维索引快速定位每个知识点
  - title: 沉浸式阅读
    details: 专为阅读设计的UI，配合多种颜色模式、可关闭的侧边栏和导航栏，带给你一种沉浸式阅读体验

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
---
<p align="center">
  <a class="become-sponsor" href="#">balabalabala</a>
</p>

<style>
.become-sponsor{
  padding: 8px 20px;
  display: inline-block;
  color: #11a8cd;
  border-radius: 30px;
  box-sizing: border-box;
  border: 1px solid #11a8cd;
}
</style>

<br/>

## 目录视图

```html
<iframe :src="$withBase('/markmap/markmap.html')" width="100%" height="400" frameborder="0" scrolling="No" leftmargin="0" topmargin="0"></iframe>
```


<br/>


## 🎖卡片视图
::: cardList 2
```yaml
- name: Java
  desc: Java相关的知识点
  link: /pages/768c32/
  bgColor: '#f1f1f1'
  textColor: '#2A3344'
- name: 大数据
  desc: 🚀大数据相关组件的搭建（注意版本）及基本用法
  link: /pages/5d76a5/
  bgColor: '#f1f1f1'
  textColor: '#2A3344'
- name: 数据库
  desc: 数据库的相关知识点
  link: /pages/7e6951/
  bgColor: '#f1f1f1'
  textColor: '#2A3344'
- name: 其他
  desc: 其他编程语言及杂记
  link: /pages/f2a340/
  bgColor: '#f1f1f1'
  textColor: '#2A3344'
```
:::

<br/>

<!-- Happy new year -->
<!-- <br/><br/>
<div class="container-happy">
  <div>
    <span>Happy</span>
    <span>Wish</span>
  </div>
    <div>
    <span>New</span>
    <span>You</span>
  </div>
  <footer>
      <div>
    <span>Year</span>
    <span>Luck</span>
  </div>
  <div>
    <span>2022</span>
    <span>Tomorrow</span>
  </div>
  </footer>
</div>

<style>
.container-happy {
  font-size: 18px;
  font-family: Times New Roman;
  perspective: 35rem;
  width: 100%;
  margin: 0 auto;
  color: tomato;
  opacity: 0.8;
}

.container-happy footer {
  perspective: 35rem;
  transform: translateY(-1.4rem);
}

.container-happy div {
  font-size: 5rem;
  height: 6rem;
  overflow: hidden;
  text-transform: uppercase;

}

.container-happy div>span {
  display: block;
  height: 6rem;
  padding: 0 1rem;
  font-weight: bold;
  letter-spacing: .2rem;
  text-align: center;
  transition: .3s;
}

.container-happy:hover div>span {
  transform: translateY(-100%);
}

.container-happy div:nth-child(odd) {
  background-color: #EBFCFF;
  transform: rotateX(30deg);
}

.container-happy div:nth-child(even) {
  background-color: #E6F4F1;
  transform: translateY(-.6rem) rotateX(-30deg);
}
</style> -->

<!-- AD -->
<div class="wwads-cn wwads-horizontal pageB" data-id="136" style="width:100%;max-height:80px;min-height:auto;"></div>
<style>
  .pageB img{width:80px!important;}
  .pageT .wwads-content{display:flex;align-items: center;}
  .pageT .wwads-poweredby{display:none!important;}
  .pageT .wwads-hide{display:none!important;}
</style>
