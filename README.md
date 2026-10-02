<h1 align="center">
  🇧🇷
  <br>
  Análise UX — Alistamento Militar
  <br>
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</p>

<p align="center">
  <strong>Proposta de redesign e melhoria da experiência do usuário em um sistema de alistamento militar.</strong>
</p>

<p align="center">
  Projeto acadêmico desenvolvido com foco em <strong>UX/UI, arquitetura da informação,
  prototipagem e desenvolvimento web</strong>.
</p>

---

# 📌 Sobre o projeto

O **Análise UX — Alistamento Militar** é um projeto acadêmico desenvolvido com o objetivo de analisar a experiência do usuário em um sistema relacionado ao **alistamento militar** e propor uma nova abordagem para a organização e apresentação das informações.

O projeto parte da identificação de possíveis dificuldades de navegação e compreensão das informações para desenvolver uma interface com uma estrutura mais organizada, visual e intuitiva.

A proposta combina conceitos de **User Experience (UX), User Interface (UI), arquitetura da informação e desenvolvimento Front-end**.

O projeto foi desenvolvido durante a formação na **Proz**, colocando em prática conhecimentos relacionados à análise de problemas, prototipagem e desenvolvimento de interfaces web.

---

# 🎯 Objetivos

O projeto foi desenvolvido com os seguintes objetivos:

* Analisar a experiência do usuário em um sistema de alistamento;
* Identificar possíveis problemas de navegação e organização;
* Melhorar a hierarquia das informações;
* Facilitar o acesso aos principais serviços;
* Desenvolver uma interface mais intuitiva;
* Aplicar conceitos de UX/UI;
* Criar um protótipo funcional utilizando tecnologias web;
* Praticar HTML, CSS e JavaScript;
* Organizar o projeto utilizando Git e GitHub;
* Documentar o processo de desenvolvimento.

---

# 💡 Problema

Sistemas que disponibilizam diversos serviços e informações para o usuário precisam apresentar seus conteúdos de maneira clara e organizada.

No contexto do alistamento militar, o usuário pode precisar acessar diferentes informações e serviços durante sua jornada.

Uma interface com excesso de informações, pouca hierarquia visual ou navegação pouco intuitiva pode dificultar a localização desses recursos.

A proposta deste projeto é explorar uma alternativa de organização da interface, buscando proporcionar uma experiência de navegação mais simples e facilitar o acesso aos serviços disponíveis.

---

# 🧠 Processo de UX

O desenvolvimento do projeto foi dividido em diferentes etapas para compreender o problema e construir uma possível solução.

```text
┌──────────────────────┐
│       Análise        │
│      do sistema      │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Identificação dos    │
│      problemas       │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Organização das      │
│     informações      │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│     Prototipagem     │
│       da solução     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│     Desenvolvimento  │
│       Front-end      │
└──────────────────────┘
```

### 1. Análise

Foram observados elementos relacionados à interface, navegação e apresentação das informações.

### 2. Identificação dos problemas

Foram considerados aspectos como:

* Organização das informações;
* Hierarquia visual;
* Facilidade de navegação;
* Clareza dos conteúdos;
* Localização dos serviços;
* Quantidade de informações apresentadas.

### 3. Prototipagem

Após a análise, foi elaborada uma proposta de organização da interface buscando melhorar a experiência de navegação por meio do aplicativo uizard, chegando no seguinte resultado:
<img width="1052" height="657" alt="image" src="https://github.com/user-attachments/assets/61a0194f-5085-469a-9856-aadac90004a8" />
<img width="1052" height="662" alt="image" src="https://github.com/user-attachments/assets/032f625b-5b4e-42e9-b099-27d0216a5d81" />
<img width="1038" height="657" alt="image" src="https://github.com/user-attachments/assets/01665f08-8b67-4f75-9ad9-f7d912e3e47d" />



### 4. Desenvolvimento

A proposta foi transformada em uma interface web utilizando HTML, CSS e JavaScript.

---

# 🧭 Fluxo de navegação

A proposta busca organizar a jornada do usuário de maneira simples:

```text
                     ┌─────────────────┐
                     │  Página Inicial │
                     └────────┬────────┘
                              │
                              ▼
                     ┌─────────────────┐
                     │      Força      │
                     │  Selecionada    │
                     └────────┬────────┘
             ┌────────────────┼────────────────┐
             │                │                │
             ▼                ▼                ▼
      ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
      │   Serviços  │  │ Informações │  │   Perfil    │
      └──────┬──────┘  └─────────────┘  └─────────────┘
             │
             ▼
      ┌─────────────┐
      │  Seleção do │
      │   serviço   │
      └──────┬──────┘
             │
             ▼
      ┌─────────────┐
      │ Informações │
      │ / Ação      │
      └──────┬──────┘
             │
             ▼
      ┌─────────────┐
      │ Acompanhar  │
      │  processo   │
      └─────────────┘
```

### Fluxo simplificado

**Página Inicial → Tiop de Força Armada → Serviços → Seleção do serviço → Informações/Ação → Acompanhamento**

---

# 🖥️ Estrutura da interface

A interface foi pensada para organizar os principais conteúdos relacionados ao sistema de alistamento.

Entre os elementos trabalhados estão:

* Página inicial;
* Serviços disponíveis;
* Informações sobre o alistamento;
* Áreas específicas para diferentes serviços;
* Elementos visuais para facilitar a identificação das opções;
* Navegação entre diferentes páginas;
* Informações institucionais.

---

# 🏗️ Arquitetura

A aplicação foi estruturada utilizando tecnologias Front-end responsáveis por diferentes partes da interface.

```text
┌─────────────────────────────────────────┐
│       ANÁLISE UX — ALISTAMENTO          │
├─────────────────────────────────────────┤
│                                         │
│              FRONT-END                  │
│                                         │
│        HTML + CSS + JavaScript          │
│                   │                     │
│                   ▼                     │
│          Interface do usuário           │
│                   │                     │
│          ┌────────┴────────┐            │
│          │                 │            │
│          ▼                 ▼            │
│        HTML               CSS           │
│     Estrutura          Estilização      │
│          │                 │            │
│          └────────┬────────┘            │
│                   ▼                     │
│              JavaScript                │
│             Interações                 │
│                                         │
└─────────────────────────────────────────┘
```

### Responsabilidades

| Tecnologia | Responsabilidade           |
| ---------- | -------------------------- |
| HTML5      | Estrutura das páginas      |
| CSS3       | Estilização e layout       |
| JavaScript | Interações e comportamento |
| Git        | Versionamento              |
| GitHub     | Hospedagem e colaboração   |

---

# 📂 Estrutura do projeto

```text
An-lise-UX-Alistamento_Militar/
│
├── src/
│   │
│   ├── assets/
│   │   ├── imagens/
│   │   └── outros recursos
│   │
│   ├── pages/
│   │   └── páginas HTML
│   │
│   └── styles/
│       └── arquivos CSS
│
├── .gitattributes
├── README.md
└── ...
```

> A estrutura pode variar de acordo com a versão atual do projeto.

---

# 🎨 Princípios de UX aplicados

## Clareza

As informações são apresentadas de maneira objetiva, buscando facilitar a compreensão do usuário.

## Hierarquia visual

Os elementos mais importantes recebem maior destaque para facilitar sua identificação.

## Consistência

A utilização de padrões semelhantes entre as páginas ajuda o usuário a compreender a estrutura da aplicação.

## Facilidade de navegação

Os serviços são organizados de maneira que o usuário possa encontrar as informações necessárias com poucos passos.

## Acessibilidade

A proposta considera a necessidade de apresentar as informações de maneira clara e compreensível para diferentes usuários.

---

# 📸 Demonstração

## Página inicial

<img width="1860" height="927" alt="image" src="https://github.com/user-attachments/assets/bfbcfbf7-31bb-4cdc-acbe-653c652b1f80" />

---

## Serviços disponíveis

<img width="1840" height="925" alt="image" src="https://github.com/user-attachments/assets/9fd4c437-1c08-4686-9949-63657990ac5d" />


---

## Página de serviço

<img width="1856" height="926" alt="image" src="https://github.com/user-attachments/assets/24e14bf9-d696-47ec-9046-c793a4f377c9" />


---
# 🛠️ Tecnologias

## Front-end

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black">
</p>

## Ferramentas

<p>
  <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white">
</p>

---

# Como executar

## 1. Clone o repositório

```bash
git clone https://github.com/EduardoLopesR/An-lise-UX-Alistamento_Militar.git
```

## 2. Acesse o projeto

```bash
cd An-lise-UX-Alistamento_Militar
```

## 3. Abra o projeto

Como o projeto utiliza tecnologias Front-end, pode ser executado diretamente no navegador.

Uma opção é abrir o arquivo HTML principal ou utilizar a extensão **Live Server** no Visual Studio Code.

https://eduardolopesr.github.io/An-lise-UX-Alistamento_Militar/src/pages/index.html
---

# 📚 Aprendizados

Este projeto proporcionou a aplicação prática de conhecimentos relacionados a:

* User Experience (UX);
* User Interface (UI);
* Arquitetura da informação;
* Prototipagem;
* Desenvolvimento Front-end;
* HTML5;
* CSS3;
* JavaScript;
* Organização de projetos;
* Git e GitHub;
* Análise e resolução de problemas.

---

#  Melhorias futuras

Algumas funcionalidades que podem ser implementadas futuramente:

* [ ] Melhorar a responsividade;
* [ ] Implementar recursos de acessibilidade;
* [ ] Adicionar novas interações com JavaScript;
* [ ] Implementar validação de formulários;
* [ ] Criar fluxo completo de alistamento;
* [ ] Criar área de acompanhamento do processo;
* [ ] Realizar testes de usabilidade;
* [ ] Implementar um Back-end;
* [ ] Integrar banco de dados;
* [ ] Implementar autenticação de usuários.

---

#  Contexto acadêmico

Projeto desenvolvido durante a formação na **Proz**, com objetivo acadêmico e foco na aplicação prática de conceitos de **UX/UI, prototipagem e desenvolvimento web**.

---

# 🔗 Links

<p align="center">

<a href="https://github.com/EduardoLopesR">
  <img src="https://img.shields.io/badge/GitHub-EduardoLopesR-181717?style=for-the-badge&logo=github">
</a>

</p>

---

> **Este projeto representa minha experiência prática na análise de problemas de UX e na transformação de uma proposta de melhoria em uma interface web funcional.**

Durante o desenvolvimento, tive contato com diferentes etapas do processo, desde a **identificação de problemas de usabilidade e organização das informações até a prototipagem e implementação da interface**.

O projeto contribuiu para meu desenvolvimento em **Front-end, UX/UI, organização de projetos e resolução de problemas**, conhecimentos que pretendo continuar aprofundando ao longo da minha formação em Sistemas de Informação.

---

<p align="center">
  Desenvolvido por <strong>Eduardo Lopes, Vitor Gabriel e Marcelo Junio</strong>
</p>
