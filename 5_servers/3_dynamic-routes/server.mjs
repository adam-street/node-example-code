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

app.get('/todo/:id', (req, res) => {
    const todo = db.find(td => td.id == req.params.id);
    console.log(req.params.id);
    console.log(todo);

    if (todo) {
        return res.json({data: todo});
    }

    res.status(404);
    return res.json({message: 'todo not found'});
});

app.listen(3000, () => {
    console.log(`server running on localhost:3000`);
});