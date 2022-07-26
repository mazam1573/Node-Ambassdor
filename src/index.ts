import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:4300', 'http://localhost:4200']
}));

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(8000, () => {
    console.log('Lisitng to 8000');

})