import axios from 'axios';
import express, {json} from "express";

const URL = 'http://localhost:3000'

// / Set up server
const app = express();

app.use(express.static('public'));
app.listen(3000, () =>
{
    console.log(URL);
})

app.get('/', (request, response) =>
{
   displayJoke();
});

// / Set up axios instance
const api = axios.create({
    baseURL: URL,
    timeout: 1000
});

function displayJoke()
{
    api.request
    ({
        url: 'https://official-joke-api.appspot.com/random_joke',
        method: 'get',
        responseType: 'json'
    })
    .then(function (response)
    {
        let setup = response.data.setup;
        let punchline = response.data.punchline;

        console.log(response.data);
        response.data.post(`<h4>${setup}</h4>`);
        response.data.post(`<h4>${punchline}</h4>`);
    });
}

