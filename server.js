const express = require('express');
const app = express();

app.use(express.static('dist'));

const port = 3030;

app.listen(port, function() {
    console.log(`Server listening port ${port}`);
});
