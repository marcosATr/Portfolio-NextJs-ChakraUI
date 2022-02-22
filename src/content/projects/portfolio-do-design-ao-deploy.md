---
title: Portfolio - Do design ao deploy
date: 23 Jan 2022
stack: Next, Chakra UI, Fastify
featured: /img/portfolio1.png
description: A portfolio deeply integrated with the Notion API. Integration with notion makes it easy to manage and create new content.
---

![Portfolio - Do design ao deploy](/img/portfolio1.png)
Esse projeto nasceu da vontade de construir uma integração com o Notion. A api do Notion não é exatamente um banco de dados e a extração e manipulação de dados podem ser um obstáculo. Por outro lado, o Notion oferece a possibilidade de escrever com um editor poderoso, que oferece suporte à imagens, legendas, vídeos, snippets de códigos, etc...

Para facilitar a integração do [Notion](http://notion.so/) ao Next, criei uma api com [Fastify](https://www.fastify.io/) que processa todos os dados das páginas do Notion e devolve para o Front de maneira organizada. É nessa camada que ocorrem o processamento de tags HTML de texto, por exemplo: parágrafos contendo links.

O frontend foi construído utilizando Next.Js com base nesse layout disponibilizado na comunidade do [Figma](https://www.figma.com/community/file/882879599442878081). Aqui o potencial do Next foi explorado para melhorar a performance e SEO com a geração de páginas estáticas com *getStaticProps*.

ChakraUI (ao estilo de [Tachyons](https://tachyons.io/) e Tailwind) adicionou velocidade ao projeto, com classes declarativas e responsividade instantânea.

**Stack**: Next.Js, ChakraUI, Fastify, Notion API