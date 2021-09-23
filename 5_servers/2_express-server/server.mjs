import express from 'express';
import morgan from 'morgan';

const db = [];
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.post('/todo', (req, res) => {
    const newTodo = {
        id: Date.now(),
        text: req.body.text
    }
    db.push(newTodo);

    res.status(201);
    return res.json(newTodo);
});

app.get('/todo', (req, res) => {
    return res.json(db);
});

app.listen(3000, () => {
    console.log(`server running on localhost:3000`);
});