const API = '/api/tarefas';
let currentFilter = 'all';

async function fetchTodos() {
    const res = await fetch(API);
    return res.json();
}

async function addTodo(text) {
    const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ texto: text })
    });
    return res.json();
}

async function updateTodo(id, data) {
    const res = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
}

async function toggleTodo(id) {
    const res = await fetch(`${API}/${id}/toggle`, { method: 'PATCH' });
    return res.json();
}

async function deleteTodo(id) {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
}

function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function render(todos) {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';

    let filtered = todos;
    if (currentFilter === 'pending') filtered = todos.filter(t => !t.concluida);
    if (currentFilter === 'done') filtered = todos.filter(t => t.concluida);

    filtered.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'todo-item' + (todo.concluida ? ' done' : '');
        li.innerHTML = `
            <input class="todo-checkbox" type="checkbox" ${todo.concluida ? 'checked' : ''}>
            <span class="todo-text">${escapeHTML(todo.texto)}</span>
            <button class="delete-btn">Excluir</button>
        `;

        li.querySelector('.todo-checkbox').addEventListener('change', async () => {
            await toggleTodo(todo.id);
            loadAndRender();
        });

        li.querySelector('.delete-btn').addEventListener('click', async () => {
            await deleteTodo(todo.id);
            loadAndRender();
        });

        list.appendChild(li);
    });

    updateStats(todos);
}

function updateStats(todos) {
    const total = todos.length;
    const pending = todos.filter(t => !t.concluida).length;
    document.getElementById('stats').textContent =
        total === 0 ? 'Nenhuma tarefa ainda!' : `${pending} de ${total} pendentes`;
}

async function loadAndRender() {
    const todos = await fetchTodos();
    render(todos);
}

document.getElementById('todo-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (!text) return;
    await addTodo(text);
    input.value = '';
    loadAndRender();
});

document.querySelector('.filters').addEventListener('click', (e) => {
    if (!e.target.classList.contains('filter-btn')) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.dataset.filter;
    loadAndRender();
});

loadAndRender();