//Importing npm modules
const express = require('express')
const chalk = require('chalk')
const hbs = require('hbs')

const app = express()
const PORT = 3000 //Assigning the port to a variable = good pratice



//View engine setup (middleware)
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')



//Routes
const user = {
    name: 'Federico',
    lastName: 'Gómez',
    admin: true,
    age: 24,
    numbers: [4, 9, 5, 4]
}



app.get('/', (req, res) => { //This will render index.hbs (you can only send 1 res)
    // res.send('<h1>Welcome to my server</h1>') 
    res.render('index') 
})

app.get('/contact', (req, res) => {
    res.render('contact', {user, firstNumber: user.numbers[0]})
})

app.get('/about', (req, res) => {
    res.render('about')
})



//Listener
app.listen(PORT, ()=>{
    console.log(chalk.bgBlue(`Server active in ${PORT}`))
})

