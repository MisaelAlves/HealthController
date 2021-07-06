# HealthController

### O que será o nosso MVP - Minimum Viable Product?
    - 0.1- Alertas de medicamentos por clientes
- Usar as 7 dimensões do produto:

### Atores
- [ ] Clientes (sem restrição de idade)
- [ ] Público alvo: pessoas de de terceira idade

###   Interfaces
- [ ] Splash
- [ ]  Login
- [ ] Tela inicial
- [ ]  Alarmes cadastrados
- [ ]  Cadastro de novos alarmes/ edição

###  Ações
- [ ] Create - Cadastrar alarme do remédio
- [ ] Read - Ver alarmes cadastrados
- [ ] Update - Atualizar alarmes
- [ ] Delete - Desativar alarme

### Dados
- [ ] Banco de Dados (Firebase) 

### Regra de Negócio
- [ ] Só terá acesso o usuário cadastrado
- [ ] O login poderá ser feito via google
- [ ] Na tela inicial terão todos os alarmes existentes (independente do estado)
- [ ] O usuário poderá cadastar 1 ou mais alarmes de remédios
- [ ] Os alarmes obrigatoriamente terão nome, hora, estado (on / off)

### Ambiente
- [ ] Android
- [ ] IOS

### Qualidade
- [ ] O cadastro de clientes
- [ ] Poder fazer cadastro de alarmes de forma offline
- [ ] Ter a interface com acessibilidae para o público alvo, idosos.

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:
bash
Helth-Controller
├── src/
│   ├── config/
│   │   └── ReactotronConfig.js
│   ├── images/
│   │   ├── helthController_logo_roxa.png
│   │   └── helthController_logo.png
│   ├── pages/
│   │   └── Main/
│   │       └── index.js
│   ├── services/
│   │   └── api.js
│   ├── store/
│   │   ├── ducks/
│   │   │   └── index.js
│   │   ├── sagas/
│   │   │   └── index.js
│   │   └── index.js
│   ├── index.js
│   └── routes.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── jsconfig.js
├── LICENSE
├── package.json
└── README.md