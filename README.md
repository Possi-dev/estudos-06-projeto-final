# 06 — O Estado Completo

> **Capitulo 6 da linha do tempo.** Eu tinha um front-end que nao falava com ninguem e um back-end que nao era visto por ninguem. Juntei os dois. Pela primeira vez, cliquei num botao e vi dados viajarem do navegador ate o servidor e voltarem.

**Anterior:** [05 — A Maquina sem Rosto](https://github.com/Possi-dev/estudos-05-api-de-tarefas) | **Proximo:** [07 — O Gran Finale: FitPro Dashboard](https://github.com/Possi-dev/estudos-07-fitpro-dashboard)

---

## A historia

Cinco projetos. Cinco capítulos. E em nenhum deles o front-end e o back-end se cumprimentaram.

O Projeto 03 guardava tarefas no `localStorage` do navegador — esquecia tudo se limpasse o cache. O Projeto 05 guardava tarefas num arquivo JSON no servidor — mas nao tinha interface para acessar. Eram duas metades de um cerebro que nunca se conectaram.

A IA disse: *"É hora de juntar."*

Construi uma aplicacao full-stack onde:

- O **front-end** (HTML/CSS/JS na pasta `public/`) e servido pelo proprio Express como arquivos estaticos
- O **back-end** (Node.js/Express em `server.js`) expoe uma API REST completa
- O **front chama o back** via `fetch()` — o navegador manda um POST, o servidor responde com JSON, o front atualiza a tela
- Os dados sao persistidos num arquivo `tarefas.json` no servidor — nao mais no navegador

E entao aconteceu o momento que mudou tudo.

Cliquei em "Adicionar". Digitei "Estudar Express". Apertei Enter. A tarefa apareceu na tela. Abri outra aba, acessei a API diretamente: a tarefa estava la. Recarreguei a pagina: la estava. Abri em outro navegador: la estava.

*> Os dados nao estavam mais presos no meu Chrome. Estavam no servidor. O servidor que eu construi.*

Foi o momento em que deixei de fazer "paginas web" e comecei a fazer "aplicacoes".

---

## Demo ao vivo

**Aplicacao completa (Railway):** https://projeto-final-fullstack-production.up.railway.app

> E so clicar e usar. Adicione tarefas, marque como concluidas, filtre, delete. Tudo funciona online.

---

## Como este projeto foi feito

**Transparencia:** Este codigo foi gerado pela IA **opencode**. Meu papel foi:

- Entender como front-end e back-end se comunicam via `fetch()` (API do navegador)
- Estudar como o Express serve tanto a API (`/api/tarefas`) quanto os arquivos estaticos (`express.static`)
- Entender persistencia simples com arquivo JSON (`tarefas.json`)
- Aprender o metodo PATCH (nao vi antes — serve para atualizacoes parciais)
- Entender o deploy full-stack: um unico servidor serve front + back

Nao escrevi o codigo do zero — ele foi gerado pela IA e eu estudei o resultado.

---

## O que este projeto ensina

| Conceito | Onde esta no codigo |
|----------|---------------------|
| Front-end + Back-end juntos | `server.js` serve API e arquivos estaticos |
| Fetch API | `script.js` usa `fetch()` para chamar a API |
| Metodos HTTP completos | GET, POST, PUT, PATCH, DELETE |
| Servir arquivos estaticos | `app.use(express.static('public'))` |
| Persistencia com JSON | `fs.readFileSync` / `fs.writeFileSync` no `tarefas.json` |
| Deploy full-stack | Um unico servico no Railway serve tudo |

---

## Stack

| Camada | Tecnologia | Por que? |
|--------|------------|----------|
| Front-end | HTML5, CSS3, JavaScript | Sem framework — pra entender o basico primeiro |
| Back-end | Node.js + Express | O server JavaScript mais popular |
| Persistencia | Arquivo JSON | Mais simples que banco de dados — pra aprender |
| Deploy | Railway | Gratis, detecta Node.js automaticamente |

---

## Funcionalidades

- Criar tarefa (digita + Enter ou botao)
- Listar todas as tarefas
- Marcar/desmarcar como concluida (checkbox)
- Editar texto da tarefa (PUT)
- Excluir tarefa
- Filtrar: Todas / Pendentes / Concluidas
- Estatisticas em tempo real ("X de Y pendentes")
- Dados persistem mesmo se o servidor reiniciar (arquivo JSON)

---

## Como rodar localmente

```bash
cd 06-gerenciador-tarefas-fullstack
npm install
npm start
# Abra http://localhost:3000 no navegador
```

---

## Como testar a API diretamente

```powershell
# Listar tarefas
Invoke-RestMethod -Uri "http://localhost:3000/api/tarefas"

# Criar tarefa
Invoke-RestMethod -Uri "http://localhost:3000/api/tarefas" -Method Post -Body '{"texto":"Estudar"}' -ContentType "application/json"

# Alternar concluida (PATCH)
Invoke-RestMethod -Uri "http://localhost:3000/api/tarefas/1/toggle" -Method Patch

# Deletar
Invoke-RestMethod -Uri "http://localhost:3000/api/tarefas/1" -Method Delete
```

---

## Estrutura dos arquivos

```
06-gerenciador-tarefas-fullstack/
├── server.js              # Back-end: API + serve arquivos estaticos
├── package.json           # Dependencias e scripts
├── railway.json           # Config Railway
├── render.yaml            # Config Render (alternativa)
├── vercel.json            # Config Vercel (alternativa)
├── .github/workflows/     # GitHub Actions (deploy automatico)
├── public/                # Front-end (servido como estatico)
│   ├── index.html         # Estrutura da pagina
│   ├── style.css          # Estilos visuais
│   └── script.js          # Logica: fetch API, render, eventos
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

## O que aprendi neste capítulo

Aprendi que `fetch()` e a ponte entre os dois mundos. Que um servidor pode servir paginas E dados — sao so arquivos e rotas. Aprendi que PATCH e o "meio-termo" entre GET (so ler) e PUT (substituir tudo) — atualiza só o que mudou. Que deploy full-stack e possivel num unico servico. Que quando o front chama o back e o back responde ao front, voce tem uma **aplicacao real**.

Mas tinha algo me incomodando. Tudo que constru ate aqui era HTML/CSS/JS puro. Sem framework. Sem TypeScript. Sem biblioteca de graficos. Sem design system. Eu tinha aprendido os fundamentos — e era incrivel — mas sabia que la fora, o mundo usava ferramentas mais poderosas.

*> O que acontece quando eu levo isso para o proximo nivel? O que acontece quando eu uso Next.js, React, TypeScript, Tailwind, Recharts — todo o arsenal moderno?*

Eu estava prestes a descobrir. Isso me levou ao [Projeto 07](https://github.com/Possi-dev/estudos-07-fitpro-dashboard) — o gran finale.

---

## O que eu faria diferente com mais experiencia

- [ ] Trocar arquivo JSON por um banco real (SQLite ou PostgreSQL)
- [ ] Adicionar autenticacao (login de usuario)
- [ ] Separar front e back em servicos independentes
- [ ] Adicionar testes automatizados
- [ ] Usar um framework front-end (React, Vue)

---

## Licença

MIT — veja [LICENSE](LICENSE).
