// 导入组件
import main from './Main/index'
// import pop from './Popup/index'
// Vue.prototype.$pop = pop //挂载到全局Vue上，模仿el的this.$message

// 组件列表
const components = [
  main
]

// 定义 install 方法，接收 Vue 作为参数
// 如果使用 use 注册插件，那么所有的组件都会被注册
const install = (Vue) => {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { main as Main }

export default {
  // For Vue.use() to install
  install,
  // 以下是具体的组件列表
  main
  // pop
}
