# Gerenciador de Tarefas Full-Stack

Meu projeto final do roadmap: aplicação completa com front-end (HTML/CSS/JS) e back-end (Node.js + Express + SQLite).

## Stack

- **Front-end:** HTML5, CSS3, JavaScript (fetch API, DOM)
- **Back-end:** Node.js, Express.js
- **Banco de dados:** SQLite (better-sqlite3)
- **API:** REST (GET, POST, PUT, PATCH, DELETE)

## Funcionalidades

- ✅ Criar tarefa
- ✅ Listar tarefas
- ✅ Marcar/desmarcar como concluída
- ✅ Editar texto da tarefa
- ✅ Excluir tarefa
- ✅ Estatísticas em tempo real
- ✅ Persistência em SQLite

## Como rodar

```bash
cd 06-projeto-final
npm install
npm start
```

Acesse: http://localhost:3000

## Estrutura

```
06-projeto-final/
├── server.js          # Back-end (API + serve static)
├── package.json
├── public/
│   ├── index.html     # Front-end
│   ├── style.css
│   └── script.js
└── tarefas.db         # Criado automaticamente
```

## Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/tarefas` | Lista todas |
| POST | `/api/tarefas` | Cria nova |
| PUT | `/api/tarefas/:id` | Atualiza completa |
| PATCH | `/api/tarefas/:id/toggle` | Alterna concluída |
| DELETE | `/api/tarefas/:id` | Exclui |

## O que aprendi

- Criar API REST com Express
- Conectar e operar SQLite com better-sqlite3
- Servir arquivos estáticos no Express
- Comunicação front ↔ back via fetch
- Deploy local completo