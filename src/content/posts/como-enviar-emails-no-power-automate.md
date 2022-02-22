---
title: Como Enviar Emails no Power Automate
date: 01 Fev 2022
stack: Power Automate
featured: /img/powerautomate.png
description: An alternative to use when Send Notification V3 is not enough (or is disabled for your tenant).
---

Uma limitação da Microsoft tem dificultado o envio de e-mails utilizando a integração *Send mail notificiation v3*, presente no Power Automate. O erro descrito é o seguinte: *“The mail connector is currently restricted for new tenants”*.

![Untitled](/img/powerautomate1.png)

A restrição foi colocada em prática para evitar que novos usuários utilizassem o conector para enviar spam. Infelizmente, a Microsoft fez alguma atualização e mexeu no tempo dos Tenants, fazendo com que o cálculo para alguns ficasse equivocado.

A solução que encontrei para isso foi utilizar a API do SharePoint para enviar e-mail para os membros do Tenant.

Para fazer isso, no Power Automate, adicione ao seu fluxo a seguinte etapa: Enviar uma solicitação HTTP para o SharePoint.

![Untitled](/img/powerautomate2.png)

Selecione o método *POST*. No endpoint, coloque:

```jsx
_api/SP.Utilities.Utility.SendEmail
```

Preencha o Headers com uma key Accept, recebendo o valor:

```jsx
application/json; odata=nometadata
```

Agora no JSON, basta preencher com as *properties* **TO**, **SUBJECT** e **BODY**. 

```json
{
	'properties': {
		'To':['usuario@seusharepoint.com'],
		'Subject':"NewMail",
		'Body':"NewBody"
	}
}
```

Dica: Você pode usar as funções do Automate e enviar tags HTML dentro do body do seu e-mail, criando uma experiência totalmente personalizada para o usuário.