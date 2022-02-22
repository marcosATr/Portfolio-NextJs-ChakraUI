---
title: Extensão VSCode - Rest Client
date: 28 Jan 2022
stack: React, Redux, Styled Components
featured: /img/extensao-vs-code.png
description: From Thunderclient to REST Client, a VSCode extension to easily manage and store http requests.
---


# Extensão VS Code: Rest Client

Sempre que precisava testar as rotas de uma API, eu utilizava o *ThunderClient*, que é uma extensão para o VS Code no estilo *Insomnia* e *Postman*. Mas gerenciar e salvar os *endpoints* estava se tornando uma missão impossível.

![REST Client - extensão para o VSCode](/img/extensao-vs-code.png)

REST Client - extensão para o VSCode

Em busca de uma alternativa mais prática, encontrei a extensão [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

User a extensão é bem simples. Criamos um arquivo chamado *requests.rest* na raiz do nosso projeto. Em seguida, é só escrever os as requisições:

```jsx
POST https://example.com/comments HTTP/1.1
content-type: application/json

{
    "name": "sample",
    "time": "Wed, 21 Oct 2015 18:27:50 GMT"
}
```

Primeiro, especificamos o verbo ou método, que no exemplo acima, retirado da documentação, é POST. Em seguida especificamos a rota e o protocolo.

Na linha seguinte, se necessário, pode-se colocar parâmetros do *header*.

**Importante: os parâmetros do corpo da requisição precisam estar separados por uma linha extra.**

Ao finalizar de escrever, a opção para executar o *request* vai estar disponível bem acima do código que você escreveu.

Para fazer novos *requests* em um único arquivo, basta separá-los por três # (###).

```jsx
GET https://example.com/comments/1 HTTP/1.1

###

GET https://example.com/topics/1 HTTP/1.1

###

POST https://example.com/comments HTTP/1.1
content-type: application/json

{
    "name": "sample",
    "time": "Wed, 21 Oct 2015 18:27:50 GMT"
}
```

Há muitas outras possibilidades, então é sempre bom [olhar a documentação em caso de dúvida](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)!

Sempre que precisava testar as rotas de uma API, eu utilizava o *ThunderClient*, que é uma extensão para o VS Code no estilo *Insomnia* e *Postman*. Mas gerenciar e salvar os *endpoints* estava se tornando uma missão impossível.

![REST Client - extensão para o VSCode](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cb3d99a5-34d2-4530-99ea-ff20aada92b1/Untitled.png)

REST Client - extensão para o VSCode

Em busca de uma alternativa mais prática, encontrei a extensão [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

User a extensão é bem simples. Criamos um arquivo chamado *requests.rest* na raiz do nosso projeto. Em seguida, é só escrever os as requisições:

```jsx
POST https://example.com/comments HTTP/1.1
content-type: application/json

{
    "name": "sample",
    "time": "Wed, 21 Oct 2015 18:27:50 GMT"
}
```

Primeiro, especificamos o verbo ou método, que no exemplo acima, retirado da documentação, é POST. Em seguida especificamos a rota e o protocolo.

Na linha seguinte, se necessário, pode-se colocar parâmetros do *header*.

**Importante: os parâmetros do corpo da requisição precisam estar separados por uma linha extra.**

Ao finalizar de escrever, a opção para executar o *request* vai estar disponível bem acima do código que você escreveu.

Para fazer novos *requests* em um único arquivo, basta separá-los por três # (###).

```jsx
GET https://example.com/comments/1 HTTP/1.1

###

GET https://example.com/topics/1 HTTP/1.1

###

POST https://example.com/comments HTTP/1.1
content-type: application/json

{
    "name": "sample",
    "time": "Wed, 21 Oct 2015 18:27:50 GMT"
}
```