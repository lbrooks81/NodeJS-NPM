import axios from 'axios';
import express, {json} from "express";

const URL = 'http://localhost:3000'

// / Set up server
const app = express();

app.use(express.static('public'));
app.listen(3000, () =>
{
    console.log(`${URL}/jokey`);

})

app.get('/jokey', (request, res) =>
{
    axios.get('https://official-joke-api.appspot.com/random_joke')
        .then(function (response)
        {
            let setup = response.data.setup;
            let punchline = response.data.punchline;

            res.send(`<h4>${setup}</h4>
                    <h4>${punchline}</h4>`);
        });
});



