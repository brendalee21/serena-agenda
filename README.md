# Serena Agenda

Serena Agenda é uma aplicação web desenvolvida para auxiliar profissionais da área terapêutica na organização de clientes e sessões de atendimento.

O sistema foi projetado com foco em simplicidade, clareza visual e facilidade de uso, permitindo o gerenciamento básico de informações de clientes e agendamentos em um único ambiente.

Este projeto foi desenvolvido como atividade acadêmica no curso de **Análise e Desenvolvimento de Sistemas**, da aculdade Descomplica com o objetivo de aplicar conceitos práticos de desenvolvimento web na construção de uma solução funcional voltada para um cenário real de uso.

---

# Objetivo do Projeto

O objetivo do Serena Agenda é demonstrar a implementação de um sistema web simples capaz de organizar informações relacionadas a atendimentos terapêuticos.

A proposta do sistema busca atender necessidades comuns de profissionais autônomos que necessitam registrar clientes, controlar sessões e acompanhar indicadores básicos de atendimento.

Além disso, o projeto serve como exercício prático de desenvolvimento utilizando tecnologias fundamentais da web.

---

# Funcionalidades

O sistema possui os seguintes módulos principais.

## Login de acesso

Tela inicial de autenticação para acesso ao sistema.  
No contexto atual do projeto, o login possui função demonstrativa.

## Dashboard

O painel principal apresenta informações resumidas sobre os atendimentos registrados.

Indicadores disponíveis:

- total de sessões na semana
- total de sessões no mês

Esses dados permitem ao profissional acompanhar a frequência de atendimentos.

## Cadastro de clientes

Permite registrar informações básicas de cada cliente.

Campos disponíveis:

- nome
- telefone
- e-mail
- observações

O sistema também possui funcionalidade de busca para localizar clientes cadastrados.

## Agenda de sessões

Permite registrar e organizar sessões de atendimento contendo:

- cliente
- data
- horário

As sessões ficam listadas no sistema e podem ser removidas quando necessário.

## Arte Prontuário

Módulo destinado ao registro de informações mais sensíveis relacionadas ao acompanhamento terapêutico.

Essa área possui proteção por senha simples para demonstrar o conceito de controle de acesso a dados sensíveis.

---

# Tecnologias Utilizadas

O projeto foi desenvolvido utilizando tecnologias fundamentais da web.

## Front-end

- HTML5
- CSS3
- JavaScript (Vanilla JavaScript)

## Persistência de dados

- LocalStorage do navegador

## Ferramentas de desenvolvimento

- Visual Studio Code
- Live Server

---

# Estrutura do Projeto

```
serena-agenda
│
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

Descrição dos arquivos principais.

**index.html**

Contém a estrutura da interface da aplicação.

**style.css**

Responsável pela definição do layout, cores e responsividade da interface.

**script.js**

Contém a lógica da aplicação, manipulação de dados e interação com o LocalStorage.

---

# Como Executar o Projeto

## 1. Clonar o repositório

```
git clone https://github.com/brendalee21
```

## 2. Acessar a pasta do projeto

```
cd serena-agenda
```

## 3. Abrir no editor de código

Abra a pasta no **Visual Studio Code** ou outro editor de sua preferência.

## 4. Executar o sistema

O projeto pode ser executado de duas formas.

Abrindo diretamente o arquivo:

```
index.html
```

Ou utilizando Live Server:

```
npx live-server
```

Após executar o comando, o sistema será aberto automaticamente no navegador.

---

# Armazenamento de Dados

O Serena Agenda utiliza o **LocalStorage do navegador** para armazenar as informações cadastradas.

Isso significa que:

- os dados permanecem salvos localmente
- não existe comunicação com servidores externos
- o sistema pode funcionar sem conexão com a internet

Essa abordagem foi adotada para simplificar a implementação do projeto acadêmico.

---

# Possíveis Integrações

Embora o sistema utilize armazenamento local, sua estrutura permite a integração com serviços externos.

## Integração com Google Agenda

Existe a possibilidade de integrar os agendamentos ao **Google Calendar**, permitindo:

- criação automática de eventos de sessão
- sincronização com dispositivos móveis
- envio de lembretes
- visualização em calendário profissional

---

# Evolução Futura do Sistema

O Serena Agenda pode evoluir para um sistema mais robusto com a implementação das seguintes melhorias.

- autenticação real de usuários
- integração com banco de dados
- armazenamento em nuvem
- integração com APIs externas
- sistema de notificações
- exportação de relatórios
- painel analítico avançado
- cadastro completo de prontuários terapêuticos
- melhoria da responsividade para dispositivos móveis
- integração com serviços de agenda e automação de lembretes

Essas evoluções podem transformar o sistema em uma ferramenta em excelência de gestão de atendimentos terapêuticos.

---

# Contexto Acadêmico

Este projeto foi desenvolvido como atividade de **extensão acadêmica** no curso de **Análise e Desenvolvimento de Sistemas**, com o objetivo de aplicar conceitos de desenvolvimento web na construção de uma solução prática voltada paraum SaaS de organização de atendimentos no campo de saúde e bem estar, com um sistema centrado em arteterapia, 

---

# Autor

Brenda Caroline Soares Leite
Estudante de Análise e Desenvolvimento de Sistemas