import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//使用全局配置
// axios.defaults.baseURL='http://123.207.32.32:8000'
// axios.defaults.timeout=5

//1、基本使用
// axios({
//   //url:'http://httpbin.org'
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then(res=>{
//   console.log(res);
// })

// axios({
//   // url:'http://123.207.32.32:8000/home/data?type=sell&page=3'
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'sell',
//     page:3
//   }
// }).then(res=>{
//   console.log(res)
// })

//2、并发请求
// axios.all([axios(
//   {
//     url:'http://123.207.32.32:8000/home/multidata'
//   }
// ),axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'sell',
//     page:3
//   }
// })])
//      .then(results=>{
//         console.log(results);
          //  console.log(results[0]);
          //  console.log(results[1]);
//       })



// axios.all([axios(
//   {
//     url:'http://123.207.32.32:8000/home/multidata'
//   }
// ),axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'sell',
//     page:3
//   }
// })])
//      .then(axios.spread((res1,res2)=>{
//        console.log(res1);
//        console.log(res2)
//      }))

     //4.创建对应的axios的实例
    //  const instance1=axios.create({
    //    baseURL:'http://123.207.32.32:8000',
    //    timeout:5000
    //  })
    //  instance1({
    //    url:'/home/multidata'
    //  }).then(res=>{
    //    console.log(res);
    //  })
    //  instance1({
    //    url:'/home/data',
    //    params:{
    //      type:'pop',
    //      page:1
    //    }
    //  }).then(res=>{
    //    console.log(res)
    //  })

    //  const instance2=axios.create({
    //    baseURL:'http://222.111.33.33:8000',
    //    timeout:4000
    //  })

     //5.封装request模块
     import {request} from "./network/request"

    //最终方案
    request({
      url:'/home/multidata'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })

    //  request({
    //    baseConfig:{

    //    },
    //    success:function(res){

    //    },
    //    failure:function(err){

    //    }
    //  })

    //  request({
    //    url:'/home/mutidata'
    //  },res=>{
    //     console.log(res)
    //  },err=>{
    //     console.log(err)
    //  })