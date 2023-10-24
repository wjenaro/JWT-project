const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();
app.use(express.json());

const PORT = 3000;

const posts = [
    {
        username: 'jenaro',
        title: "Post 1",
    },
    {
        username: 'test',
        title: "Post 2",
    },
    {
        username: 'wachira',
        title: "Post 3",
    },
];

app.get('/posts', authenticationToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name)); // Fix the comparison here
});

app.post('/login', async (req, res) => {


    const { username, password } = req.body;
    
    const user = { name: username };

    const accessToken = await jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken });
});

function authenticationToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user; 
        next();
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
