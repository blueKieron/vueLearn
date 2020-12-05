const path=require('path')

module.exports={
  entry:path.join(__dirname,'.src/main.js'),
  output:{
    //动态获取路径
    path:path.join(__dirname,'./dist'),
    filename:'bundle.js'
  }
}