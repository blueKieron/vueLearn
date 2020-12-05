<template>
  <div>
    <h2>首页</h2>
    <p>首页内容</p>
    <router-link to="/home/news">new</router-link>
    <router-link to="/home/message">message</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default{
  name:'Home',
  data(){
    return {
      message:'hello',
      path:'/home/news'
    }
  },
  // created () {
  //   document.title='首页'
  // }
  
  //这两个函数只有在该组件被保持状态使用了keep-alive时，才是有效的
  activated () {
    console.log(this.path)
    this.$router.push(this.path)
  },
  deactivated () {},

  beforeRouteLeave(to, from, next){
    this.path=this.$route.path
    next()
  }
}
</script>



<style scoped>
</style>