# Gerenciador de Tarefas Full-Stack

Meu projeto final do roadmap: aplicação completa com front-end, back-end e persistência.

## 🔗 Demo ao vivo

**[https://projeto-final-tarefas.onrender.com](https://projeto-final-tarefas.onrender.com)**  
*(Primeiro acesso demora ~30s — o Render "acorda" o container grátis)*

## Stack

| Camada | Tecnologia |
|--------|------------|
| Front | HTML5, CSS3, JavaScript (fetch API) |
| Back | Node.js, Express.js |
| DB | JSON file (persistência simples) |
| Deploy | Render (grátis) |

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

## Deploy no Render (grátis, 2 min)

1. Faça fork deste repo no seu GitHub
2. Acesse [render.com](https://render.com) → New → Web Service
3. Conecte seu GitHub → selecione o repo
4. Config:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free
5. Create Web Service → aguarde build

## Estrutura

```
06-projeto-final/
├── server.js          # Back-end (API + serve static)
├── package.json
├── public/
│   ├── index.html     # Front-end
│   ├── style.css
│   └── script.js
└── tarefas.json       # Criado automaticamente
```

## O que aprendi

- API REST completa (GET, POST, PUT, PATCH, DELETE)
- Servir arquivos estáticos no Express
- Comunicação front ↔ back via fetch
- Persistência simples com JSON
- Deploy gratuito no Render