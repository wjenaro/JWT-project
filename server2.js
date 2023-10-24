const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
