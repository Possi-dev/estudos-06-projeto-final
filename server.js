const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;
const DB_FILE = path.join(__dirname, 'tarefas.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function readDB() {
    if (!fs.existsSync(DB_FILE)) return [];
    try { return JSON.parse(fs.readFileSync(DB_FILE, 'utf8')); }
    catch { return []; }
}

function writeDB(data) {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

let todos = readDB();

app.get('/api/tarefas', (req, res) => res.json(todos));

app.post('/api/tarefas', (req, res) => {
    const { texto } = req.body;
    if (!texto || !texto.trim()) return res.status(400).json({ erro: 'Texto obrigatório' });
    const novo = { id: Date.now(), texto: texto.trim(), concluida: false };
    todos.push(novo);
    writeDB(todos);
    res.status(201).json(novo);
});

app.put('/api/tarefas/:id', (req, res) => {
    const id = Number(req.params.id);
    const idx = todos.findIndex(t => t.id === id);
    if (idx === -1) return res.status(404).json({ erro: 'Não encontrada' });
    const { texto, concluida } = req.body;
    if (texto !== undefined) todos[idx].texto = texto.trim();
    if (concluida !== undefined) todos[idx].concluida = !!concluida;
    writeDB(todos);
    res.json(todos[idx]);
});

app.patch('/api/tarefas/:id/toggle', (req, res) => {
    const id = Number(req.params.id);
    const t = todos.find(t => t.id === id);
    if (!t) return res.status(404).json({ erro: 'Não encontrada' });
    t.concluida = !t.concluida;
    writeDB(todos);
    res.json(t);
});

app.delete('/api/tarefas/:id', (req, res) => {
    const id = Number(req.params.id);
    const len = todos.length;
    todos = todos.filter(t => t.id !== id);
    if (todos.length === len) return res.status(404).json({ erro: 'Não encontrada' });
    writeDB(todos);
    res.status(204).send();
});

if (require.main === module) {
    app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
}

module.exports = app;