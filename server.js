const express = require('express');
const mongoose = require('mongoose');

//routes
const users  = require('./routes/api/v1/users');
const profile = require('./routes/api/v1/profile');
const posts = require('./routes/api/v1/posts');

//db config
const db = require('./config/keys').mongoURI;

//connect to mongodb
mongoose.connect(db, { useNewUrlParser: true })
.then(()=>console.log('database connected sucessfully'))
.catch(err => console.log(err));

const app = express();
const port = process.env.PORT || 3000

app.get('/', (req, res)=> res.send('<h3>what are you doing here? run for your life!!</h3>'));

//use route
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.listen(port, ()=> console.log(`server is up and runing on ${port}`));