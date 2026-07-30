# Gerenciador de Tarefas Full-Stack

> Projeto 6: integração do front-end (vanilla) com o back-end (Express) — mesma base do projeto 3, mas dados no servidor.

**Anterior:** [05 — API de Tarefas](https://github.com/Possi-dev/estudos-05-api-de-tarefas) | **Próximo:** [07 — FitPro Dashboard](https://github.com/Possi-dev/estudos-07-fitpro-dashboard)

---

## Demo

**[https://projeto-final-fullstack-production.up.railway.app](https://projeto-final-fullstack-production.up.railway.app)**

Funciona online: adicione, marque, edite, filtre, delete. Dados persistem no servidor.

---

## O que este projeto ensina

| Conceito | Onde está no código |
|----------|---------------------|
| Front + Back juntos | `server.js` serve API (`/api/tarefas`) e estáticos (`express.static`) |
| Fetch API | `script.js` usa `fetch()` para chamar a API |
| Métodos HTTP completos | GET, POST, PUT, PATCH, DELETE |
| Servir arquivos estáticos | `app.use(express.static('public'))` |
| Persistência com JSON | `fs.readFileSync` / `fs.writeFileSync` no `tarefas.json` |
| Deploy full-stack | Um serviço Railway serve front e back |

---

## Stack

| Camada | Tecnologia | Por quê? |
|--------|------------|----------|
| Front-end | HTML5, CSS3, JavaScript | Sem framework — entender o básico primeiro |
| Back-end | Node.js + Express | Server JS mais popular |
| Persistência | Arquivo JSON | Mais simples que banco — para aprender |
| Deploy | Railway | Grátis, detecta Node.js automaticamente |

---

## Funcionalidades

- Criar tarefa (Enter ou botão)
- Listar todas
- Marcar/desmarcar concluída (checkbox → PATCH)
- Editar texto da tarefa (PUT)
- Excluir tarefa
- Filtrar: Todas / Pendentes / Concluídas
- Estatísticas em tempo real ("X de Y pendentes")
- Dados persistem mesmo se servidor reiniciar (JSON)

---

## Como rodar localmente

```bash
cd 06-gerenciador-tarefas-fullstack
npm install
npm start
# Abra http://localhost:3000
```

---

## Testar a API diretamente

```powershell
# Listar
Invoke-RestMethod -Uri "http://localhost:3000/api/tarefas"

# Criar
Invoke-RestMethod -Uri "http://localhost:3000/api/tarefas" -Method Post -Body '{"texto":"Estudar"}' -ContentType "application/json"

# Alternar concluída (PATCH)
Invoke-RestMethod -Uri "http://localhost:3000/api/tarefas/1/toggle" -Method Patch

# Deletar
Invoke-RestMethod -Uri "http://localhost:3000/api/tarefas/1" -Method Delete
```

---

## Estrutura

```
06-gerenciador-tarefas-fullstack/
├── server.js              # Back-end: API + serve estáticos
├── package.json           # Dependências e scripts
├── railway.json           # Config Railway
├── render.yaml            # Config Render (alternativa)
├── vercel.json            # Config Vercel (alternativa)
├── .github/workflows/     # GitHub Actions (deploy automático)
├── public/                # Front-end (servido como estático)
│   ├── index.html         # Estrutura da página
│   ├── style.css          # Estilos
│   └── script.js          # Lógica: fetch API, render, eventos
├── tarefas.json           # Banco de dados (criado automaticamente)
├── .gitignore
├── LICENSE
└── README.md
```

---

## Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/tarefas` | Lista todas |
| POST | `/api/tarefas` | Cria nova |
| PUT | `/api/tarefas/:id` | Atualiza texto e/ou status |
| PATCH | `/api/tarefas/:id/toggle` | Alterna concluída |
| DELETE | `/api/tarefas/:id` | Exclui |

---

## O que aprendi aqui

`fetch()` é a ponte entre os dois mundos. Um servidor pode servir páginas **e** dados — são só arquivos e rotas. PATCH é o "meio-termo" entre GET (só ler) e PUT (substituir tudo): atualiza só o que mudou. Deploy full-stack em um serviço único simplifica muito no início.

---

## O que faria diferente com mais experiência

- [ ] Trocar JSON por banco real (SQLite ou PostgreSQL)
- [ ] Adicionar autenticação (login de usuário)
- [ ] Separar front e back em serviços independentes
- [ ] Testes automatizados
- [ ] Framework front-end (React, Vue)

---

## Licença

MIT — veja [LICENSE](LICENSE).