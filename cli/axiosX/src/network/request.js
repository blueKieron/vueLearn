import axios from 'axios'

export function request(config) {
  //1.创建axios实例
      const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
      })

      //2.拦截器
      instance.interceptors.request.use(config=>{
        console.log(config);
        //1.比如config中的一些信息不符合服务器的要求

        //2.比如在每次发送网络请求时，都希望在界面中显示一个请求的图表
        
        //3.某些网络请求（比如登录），必须携带一些特殊的信息（token）

        return config
      },err=>{
        console.log(err)
      })

      instance.interceptors.response.use(res=>{
        console.log(res);
        return res.data
      },err=>{
        console.log(err)
      })

      //3.发送真正的网络请求
      return instance(config)
  }

// export function request(config) {
//   return new Promise((resolve, reject) => {
//       const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//       })

//       //发送真正的网络请求
//       instance(config)
//         .then(res => {
//           resolve(res)
//         })
//         .catch(err => {
//           reject(err)
//         })
//     })
//   }


  // export function request(config) {
  //   const instance = axios.create({
  //     baseURL: 'http://123.207.32.32:8000',
  //     timeout: 5000
  //   })

  //   //发送真正的网络请求
  //   instance(config.baseConfig)
  //     .then(res => {
  //       // console.log(res)
  //       config.success(res)
  //     })
  //     .catch(err => {
  //       // console.log(err)
  //       consfig.failure(err)
  //     })
  // }

  // export function request(config, success, failure) {
  //   const instance = axios.create({
  //     baseURL: 'http://123.207.32.32:8000',
  //     timeout: 5000
  //   })

  //   //发送真正的网络请求
  //   instance(config)
  //     .then(res => {
  //       // console.log(res)
  //       success(res)
  //     })
  //     .catch(err => {
  //       // console.log(err)
  //       failure(err)
  //     })
  // }
