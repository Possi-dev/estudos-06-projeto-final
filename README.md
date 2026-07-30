# Gerenciador de Tarefas Full-Stack

> Projeto 6 (final) do roadmap: aplicação completa com front-end (HTML/CSS/JS) + back-end (Node.js/Express) + persistência, deploy no Railway.

## Demo ao vivo

**Aplicação completa (Railway):** https://projeto-final-fullstack-production.up.railway.app

> É só clicar e usar. Adicione tarefas, marque como concluídas, filtre, delete. Tudo funciona online.

## Como este projeto foi feito

**Transparência:** Este código foi gerado pela IA **opencode**. Meu papel foi:

- Entender como front-end e back-end se comunicam via `fetch()` (API do navegador)
- Estudar como o Express serve tanto a API (`/api/tarefas`) quanto os arquivos estáticos (`express.static`)
- Entender persistência simples com arquivo JSON (`tarefas.json`)
- Aprender o método PATCH (não vi antes — serve para atualizações parciais)
- Entender o deploy full-stack: um único servidor serve front + back

Não escrevi o código do zero — ele foi gerado pela IA e eu estudei o resultado.

## O que este projeto ensina

| Conceito | Onde está no código |
|----------|---------------------|
| Front-end + Back-end juntos | `server.js` serve API e arquivos estáticos |
| Fetch API | `script.js` usa `fetch()` para chamar a API |
| Métodos HTTP completos | GET, POST, PUT, PATCH, DELETE |
| Servir arquivos estáticos | `app.use(express.static('public'))` |
| Persistência com JSON | `fs.readFileSync` / `fs.writeFileSync` no `tarefas.json` |
| Deploy full-stack | Um único serviço no Railway serve tudo |

## Stack

| Camada | Tecnologia | Por quê? |
|--------|------------|----------|
| Front-end | HTML5, CSS3, JavaScript | Sem framework — pra entender o básico primeiro |
| Back-end | Node.js + Express | O server JavaScript mais popular |
| Persistência | Arquivo JSON | Mais simples que banco de dados — pra aprender |
| Deploy | Railway | Grátis, detecta Node.js automaticamente |

## Funcionalidades

- Criar tarefa (digita + Enter ou botão)
- Listar todas as tarefas
- Marcar/desmarcar como concluída (checkbox)
- Editar texto da tarefa (PUT)
- Excluir tarefa
- Filtrar: Todas / Pendentes / Concluídas
- Estatísticas em tempo real ("X de Y pendentes")
- Dados persistem mesmo se o servidor reiniciar (arquivo JSON)

## Como rodar localmente

```bash
cd 06-projeto-final
npm install
npm start
# Abra http://localhost:3000 no navegador
```

## Como testar a API diretamente

```powershell
# Listar tarefas
Invoke-RestMethod -Uri "http://localhost:3000/api/tarefas"

# Criar tarefa
Invoke-RestMethod -Uri "http://localhost:3000/api/tarefas" -Method Post -Body '{"texto":"Estudar"}' -ContentType "application/json"

# Alternar concluída (PATCH)
Invoke-RestMethod -Uri "http://localhost:3000/api/tarefas/1/toggle" -Method Patch

# Deletar
Invoke-RestMethod -Uri "http://localhost:3000/api/tarefas/1" -Method Delete
```

## Estrutura dos arquivos

```
06-projeto-final/
├── server.js              # Back-end: API + serve arquivos estáticos
├── package.json           # Dependências e scripts
├── railway.json           # Config Railway
├── render.yaml            # Config Render (alternativa)
├── vercel.json            # Config Vercel (alternativa)
├── .github/workflows/     # GitHub Actions (deploy automático)
├── public/                # Front-end (servido como estático)
│   ├── index.html         # Estrutura da página
│   ├── style.css          # Estilos visuais
│   └── script.js          # Lógica: fetch API, render, eventos
├── tarefas.json           # Banco de dados (criado automaticamente)
├── .gitignore
├── LICENSE
└── README.md
```

## Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/tarefas` | Lista todas |
| POST | `/api/tarefas` | Cria nova |
| PUT | `/api/tarefas/:id` | Atualiza texto e/ou status |
| PATCH | `/api/tarefas/:id/toggle` | Alterna concluída |
| DELETE | `/api/tarefas/:id` | Exclui |

## O que eu faria diferente com mais experiência

- [ ] Trocar arquivo JSON por um banco real (SQLite ou PostgreSQL)
- [ ] Adicionar autenticação (login de usuário)
- [ ] Separar front e back em serviços independentes
- [ ] Adicionar testes automatizados
- [ ] Usar um framework front-end (React, Vue)

## Licença

MIT — veja [LICENSE](LICENSE).
