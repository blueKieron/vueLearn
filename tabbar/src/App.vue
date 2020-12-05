<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'
import MainTabBar from './components/MainTabBar'

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem,
    MainTabBar,
  }
}
</script>

<style>
  @import "./assets/css/base.css";

</style>
