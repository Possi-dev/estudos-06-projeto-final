# Gerenciador de Tarefas Full-Stack

Meu projeto final do roadmap: aplicação completa com front-end, back-end e persistência.

## 🔗 Demo ao vivo

**Railway (produção completa):** https://projeto-final-fullstack-production.up.railway.app  
**Vercel (versão anterior):** https://06-projeto-final.vercel.app

## Stack

| Camada | Tecnologia |
|--------|------------|
| Front | HTML5, CSS3, JavaScript (fetch API) |
| Back | Node.js, Express.js |
| DB | JSON file (persistência simples) |
| Deploy | Railway (grátis) |

## Funcionalidades

- ✅ Criar tarefa
- ✅ Listar tarefas
- ✅ Marcar/desmarcar concluída (PATCH)
- ✅ Editar texto da tarefa
- ✅ Excluir tarefa
- ✅ Filtrar: Todas / Pendentes / Concluídas
- ✅ Estatísticas em tempo real
- ✅ Persistência em arquivo JSON

## Como rodar localmente

```bash
cd 06-projeto-final
npm install
npm start
# Abre http://localhost:3000
```

## Deploy no Railway (grátis, 2 min)

1. Faça fork deste repo no seu GitHub
2. Acesse [railway.app](https://railway.app) → New → Deploy from GitHub repo
3. Conecte seu GitHub → selecione o repo
4. Railway detecta `railway.json` e `nixpacks` automaticamente
5. Deploy automático → URL gerada

## Estrutura

```
06-projeto-final/
├── server.js          # Back-end (API + serve static)
├── package.json
├── railway.json       # Config Railway
├── public/
│   ├── index.html     # Front-end
│   ├── style.css
│   └── script.js
└── tarefas.json       # Criado automaticamente
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
- Servir arquivos estáticos no Express
- Comunicação front ↔ back via fetch
- Persistência simples com JSON
- Deploy gratuito no Railway