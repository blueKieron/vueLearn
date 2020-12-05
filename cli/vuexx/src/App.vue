<template>
  <div id="app">
    <p>app modules------</p>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <button @click="asyncUpdateName">异步修改</button>

    <p>app:info对象的内容是否是响应式------</p>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>
    <br>

    <p>app---------------</p>
    <h2>{{$store.state.count}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <p>app getters-------</p>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(23)}}</h2>

    <p>Hello Vuex---------</p>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import {
  INCREMENT
} from './store/mutation-types'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  computed:{
    more20stu(){
      return this.$store.state.stu.filter(s=>s.age>20)
    }
  },
  methods: {
    add(){
      this.$store.commit(INCREMENT)
    },
    sub(){
      this.$store.commit('decrement')
    },
    addCount(count){
      //payload count
      //提交风格1
      //this.$store.commit('incrementCount',count)

      //提交风格2
      this.$store.commit({
        type:'incrementCount',
        //传递后是对象
        payload
      })
    },
    addStudent(){
      //st --payload
      const st={id:4,name:'durant',age:34}
      this.$store.commit('addStudent',st)
    },
    updateInfo(){
      // this.$store.commit('updateInfo')
      // this.$store.dispatch('aUpdateInfo','我是payload')
      // this.$store.dispatch('aUpdateInfo',{
      //   message:'我是携带的信息',
      //   success:()=>{
      //     console.log('里面已经完成了')
      //   }
      // })
      this.$store.dispatch('aUpdateInfo','我是携带的信息')
          .then(res=>{
            console.log('里面完成了提交')
            console.log(res)
          })
    },
    updateName(){
      this.$store.commit('updateName','lisi')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>

</style>
