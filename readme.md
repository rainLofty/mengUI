# 说明
1.一个vue插件简单demo
2.直接把文件夹放到node_module文件夹里面就可以了
3.使用：在项目的main.js中像使用普通ui插件一样引用安装

```js
import mengUI from "meng_node";
Vue.use(mengUI);
```

## main.js 代码
```js
import Vue from "vue";
//引入自定义css
import './assets/zzcommon.less'

//引入自定义js，并且挂在到vue上，以便于在vue组件中使用this.mengFunc.方法名 来调用
import mengFunc from './utils/mengFunc';
Vue.prototype.mengFunc = mengFunc;

//element-ui 如果组件没有使用element-ui 可以不用安装
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

//引入自己开发的组件   
import mengInput from './components/mengInput'
import mengNav from './components/mengNav'
const components =[
    mengInput,
    mengNav,
];
//循环安装组件，以便于在vue页面中可以直接使用这些组件
components.install = function (Vue, opts = {}) {
  components.forEach((element) => {
    Vue.component(element.name, element);
  });
};
if (typeof window !== "undefined" && Vue) {
  Vue.use(components);
}
export default components;

```


