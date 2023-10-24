const express=require('express');
const app=express();
const jwt= require('jsonwebtoken');



app.use(express.json());

const PORT=3000;

const posts= [
    {
        username: 'jenaro',
        title: "Post 1",
    },
    {
        username: 'jenaro',
        title: "Post 2",
    },
    {
        username: 'jenaro',
        title: "Post 3",
    },
]

app.get('/posts', (req, res)=>{
res.json(posts);
});
app.post('/login', (req, res)=>{
    
});

app.listen(PORT, ()=>{
    console.log(PORT);
})