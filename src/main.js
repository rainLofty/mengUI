import Vue from "vue";
//css
import './assets/zzcommon.less'

//js
import mengFunc from './utils/mengFunc';
Vue.prototype.mengFunc = mengFunc;

//element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

//引入组件
import mengInput from './components/mengInput'
import mengNav from './components/mengNav'
const components =[
    mengInput,
    mengNav,
];

components.install = function (Vue, opts = {}) {
  components.forEach((element) => {
    Vue.component(element.name, element);
  });
};
if (typeof window !== "undefined" && Vue) {
  Vue.use(components);
}
export default components;
