<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" active-class="active">首页</router-link>
    <router-link to="/about" tag="button" active-class="active">关于</router-link>-->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>-->
    <!-- <button @click="homeClick">主页</button>
    <button @click="aboutClick">关于</button>-->

    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <!-- 动态路由 -->
    <!-- <router-link :to="'/user/'+userId" tag="button">信息</router-link> -->

    <!-- <router-link to="/profile" tag="button">档案</router-link> -->
    <!-- <router-link :to="{path:'/profile',query:{name:'kobe',age:15,height:1.99}}" tag=button>档案</router-link> -->

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "lisi",
      imgURL: "http://www.baidu.com"
    };
  },
  methods: {
    //   homeClick(){
    //     //通过代码方式修改路由 vue-router
    //     //push -->pushState
    //     //this.$router.push('/home')
    //     this.$router.replace('/home')
    //   },
    //   aboutClick(){
    //     this.$router.push('/about')
    //   }
    // }
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "kobe",
          age: 18,
          height: 1.99
        }
      });
    }
  }
}
</script>


<style>
.active {
  color: #f00;
}
</style>
