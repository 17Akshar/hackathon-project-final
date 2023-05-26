const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    console.log('SERVER IS RUNNING.......')
})
app.listen(3000)