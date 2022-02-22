---
title: React setState e Console Log
date: 29 Jan 2022
stack: React
featured: /img/react.png
description: Last character is missing during a console.log in setState? Here's why.
---

Recentemente um amigo pediu minha ajuda para entender o motivo pelo qual os seus logs não exibiam a última tecla digitada. Imediatamente um alarme soou na minha cabeça. *Eu já passei por isso*, pensei.

Consideremos o código a seguir:

```jsx
const [loginInfo, setLoginInfo] = useState({});

  function handleFormChange(e) {
    e.preventDefault();
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
    console.log(loginInfo);
  }
```

Toda vez que ele digitava uma tecla em seu formulário, havia uma espécie de atraso. Ao digitar a primeira tecla, o estado era exibido no console como vazio. Na segunda tecla, o estado exibido era o anterior.

O motivo para o erro é que setState tem uma natureza assíncrona, no sentido que ela não bloqueia o fluxo de execução.

Uma solução simples, é usar o useEffect e executar uma função anônima para chamar o log:

```jsx
const [loginInfo, setLoginInfo] = useState({});

function handleFormChange(e) {
  e.preventDefault();
  setLoginInfo({
    ...loginInfo,
    [e.target.name]: e.target.value,
  });
}

useEffect(()=>{
	console.log(loginInfo)
},[loginInfo])
```

Agora, toda vez que o estado for atualizado pelo formulário, useEffect irá exibir corretamente o estado nos logs.