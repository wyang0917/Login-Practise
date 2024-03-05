const express = require('express')
const cors = require('cors')
const app = express()
//一定要在路由之前配置cors中间键，解决跨域问题
app.use(cors())
//middleware 全局中间键解析json数据
app.use(express.json())

//数据
const user = {name:'Ben',ps:'123456'}
//api
app.post('/login',(req,res)=>{
  const {name, ps} = req.body
  // console.log('body',req.body); body { name: 'Ben', ps: '123456' }
  if(name===user.name && ps===user.ps){
    res.status(200).json({
      msg:`${name} login succeed`
    })
  }else{
    res.status(400).json({
      msg:'username or password is not correct'
    })
  }
})

const PORT = 8080
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})