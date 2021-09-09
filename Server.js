const express = require('express')//import all that i will need
const app = express()
const helmet = require("helmet");
const fetch = require('isomorphic-fetch');
const cors = require('cors');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(helmet());
app.use(cors()); //use everything i imported

app.get('/search/:term/:media', async(req, res) => {
    try{
        const {term, media} = req.params;
        const response = await fetch(`https://itunes.apple.com/search?term=${term}&media=${media}&limit=25`) //fetch the data the user has chose
        const data = await response.json(); // wait for the data to be fetched and save it to the variable data
        res.json(data.results);
    }catch (e){
        console.log(e);
    }
    });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {//listens to port given or will listen to port 8080
    console.log(`Server is listening on port ${PORT}`);
    });