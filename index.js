const http=require('node:http')

const server=http.createServer((req,res)=>{
    
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('Welcome to Node.JS ')
    })

const PORT=process.env.PORT || 3000

server.listen(PORT,()=>{
    console.log(`Successfully running on port ${PORT}`)
})
