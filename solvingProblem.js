const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})

        res.write('<p> Welcome to Full Stack Development </p>')
        res.end()
    }

    if(req.url === '/read'){
      fs.readFile('first.txt', (err, data) => {
        if(err){
            res.write('Failed to load the data')
            res.end()
        }
        else{
            res.write(data)
            res.end()
        }
      })
    }

    if(req.url === '/write'){
        const firstFileData = fs.readFileSync('./first.txt')
       fs.writeFile('second.txt', firstFileData, (err) => {
       if(err){ 
        res.write('file failed to create')
        res.end()
       }
       else{
        res.write('file created successfully')
        res.end()
       }
       })
    }


    if(req.url === '/append'){
      fs.appendFile('first.txt', ' No! It will be full not pull ! 😑 ', (err) => {
        if(err){
            res.write('text failed to append')
            res.end()
        }
        else{
            res.write('text append successfully')
            res.end()
        }
      })
    }

    if(req.url === '/delete'){
        fs.unlink('./second.txt',(err) => {
            if(err){
                res.write('file failed to delete')
                res.end()
            }
            else{
                res.write('file deleted successfully')
                res.end()
            }
        })
    }

})

const PORT = 5000;  
server.listen(PORT)
console.log(`Server is listening at ${PORT}`)