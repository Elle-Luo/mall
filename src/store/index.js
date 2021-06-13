import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {

  },
  actions: {

  },
  mutations: {

  },
  getters: {

  },
  modules: {

  }
})

// 3.导出store 对象
export default store

/* 
  1. State 单一状态树 相当于data： 所有需要管理的信息统一放到一个store
  2. getters 类似于单个组件里的计算属性  比如说想要每次获取一个数的平方 
  getter: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stuLength(state, getters) {

    }
  }
  3. mutations 必须是同步函数 Vuex的State状态的更新唯一的方式就是 提交mutation 
      mutation主要包括两部分： 字符串的事件类型  一个回调函数，该回调函数的第一参数就是state
      payload 就是携带的参数 也可以是一个对象
      提交风格： 1. 普通的提交风格：调用this.$store.commit(事件类型, payload)
                2. 特殊的提交风格：this.$store.commit({
                  type: 事件类型,
                  payload: 是整个的对象 paylad.count
                })
      响应式规则： 要先提前初始化才会响应式，后面增加一个属性就不是响应式的，
                  -但是确实是想要跟着界面一起刷新 要使用Vue.set('要修改的对象'， 索引值， 要修改的值)
                  删除对象里面的属性 delete state.info.age 该方法做不到响应式
                  -Vue.delete(state.info, 'age') 就可以做到响应式
  4. actions 异步操作 不能跳过Mutation
      actions: {
        // context: 上下文
        aUpdateInfo(context) {
          setTimeOut(() => {
            context.commit('updateInfo)
          },1000)
        }
      }
  5. modules 将state按模块进行划分
*/ 