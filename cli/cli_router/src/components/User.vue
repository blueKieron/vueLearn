<template>
  <div>
    <h2>info</h2>
    <p>hhhhhhhhhhhhhhhhh</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.userId}}</h2>
  </div>
</template>

<script>
export default{
  name:'User',
  computed: {
    userId(){
      return this.$route.params.userId
    }
  },
  // created () {
  //   document.title='user'
  // }
}
</script>
<style scoped>
</style>