"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let data = require('./data.json');
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.json({ data });
});
app.delete('/', (req, res) => {
    let det = data.pop();
    console.log(data);
    res.json({ det });
});
app.post('/', (req, res) => {
    let add = data.push({ name: req.body.name, age: req.body.age });
    console.log(data);
    res.json({ add });
});
app.put('/:id/:name/:age', (req, res) => {
    data[req.params.id].name = data[req.params.id].name = req.params.name;
    data[req.params.id].age = data[req.params.id].age = req.params.age;
    console.log(data);
    res.send(data);
});
app.listen(3000, () => console.log('Express started'));
