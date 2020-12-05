import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from './mutation-types.js'

//1.安装插件
Vue.use(Vuex)

const moduleA={
  state:{
    name:'zhangsan'
  },
  mutations:{
    updateName(state,payload){
      state.name=payload
    }
  },
  actions:{
    aUpdateName(context){
      setTimeout(()=>{
        context.commit('updateName','wangwu')
      },1000)
    }
  },
  getters:{
    fullname(state){
      return state.name+'1111'
    },
    fullname2(state,getters,rootState){
      return getters.fullname+'222'+rootState.count
    }
  }

}
//2.创建对象
const store = new Vuex.Store({
  state: {
    // Dep-->[Watcher]  观察数据变化
    //store数据都会被加入到响应式系统中，而响应式系统会监听属性的变化，当属性发生变化时，会通知所有界面中用到该属性的地方，让界面发生刷新
    count: 1000,
    stu: [{
      id: 1,
      name: 'kobe',
      age: 24
    }, {
      id: 2,
      name: 'james',
      age: 23
    }, {
      id: 3,
      name: 'crruy',
      age: 18
    }],
    info:{
      name:'kobe',
      age:40
    }
  },
  mutations: {
    //方法
    [INCREMENT](state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    incrementCount(state,payload){
      state.count+=payload.count
    },
    addStudent(state,st){
      state.stu.push(st)
    },
    updateInfo(state){
      state.info.name='durant'

      //异步操作不行
      // setTimeout(()=>{
      //   state.info.name='durant'
      // },1000)

      //非响应式
      //state.info['address']='luoshanji'
      //响应式
      //Vue.set(state.info,'adress','luoshanji')
      //非响应式
      //delete state.info.age
      //响应式
      //Vue.delete(state.info,'age')

     
    }
  },
  actions: {
    //context 上下文
    // aUpdateInfo(context,payload){
    //   setTimeout(()=>{
    //       context.commit('updateInfo')
    //       console.log(payload)
    //     },1000)
    // }
    // aUpdateInfo(context,payload){
    //   setTimeout(()=>{
    //       context.commit('updateInfo')
    //       console.log(payload.message)
    //       payload.success()
    //     },1000)
    // }
    aUpdateInfo(context,payload){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit('updataInfo');
          console.log(payload)

          resolve('1111')
        },1000)
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.count * state.count
    },
    more20stu(state) {
      return state.stu.filter(s => s.age > 20)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      // return function(age){
      //   return state.stu.filter(s=>s.age>age)
      // }
      return age => {
        return state.stu.filter(s => s.age > age)
      }
    }
  },
  modules: {
    a:moduleA
  }
})

//3.导出store对象
export default store
