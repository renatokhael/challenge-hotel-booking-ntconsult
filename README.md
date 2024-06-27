# Desafio Front-End Vue.js - Hotel Booking

Esta é uma aplicação desenvolvida usando Vue.js, para simular parte do sistema de reserva de hotéis. O foco é implementar uma interface funcional que permita pesquisar, comparar e reservar hotéis.

<img src=".github/screenshot.png">

## Conteúdo

- [Requisitos](#requisitos)
- [Funcionalidades](#funcionalidades)
- [Rodar localmente](#uso)
- [Testes](#testes)

## Requisitos

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (desabilite o Vetur).

Node: 20.14.0

## Funcionalidades

- [x] Deve pesquisar Hotéis com critérios como destino, data de check-in, checkout e números de quarto e hospedes.
- [x] Deve exibir os resultados lista ordenada por preço, avaliações e outros critérios relevantes
- [x] Deve permitir que o usuário selecione múltiplos hotéis dos resultados de busca para comparar suas características lado a lado.
- [x] Deve ter um formulário para reservar um quarto em um hotel selecionado, solicitando informações como nome do usuário, contato e detalhes de pagamento
- [ ] Deve ter um mecanismo de notificação que informe ao usuário sobre o status de sua reserva.

## Uso

### Baixe o repositório

```
git clone https://github.com/renatokhael/challenge-hotel-booking-ntconsult
```

### Instale as dependencias

```
npm install
```

### Inicie o servidor mock (json-server)

```
npm run server
```

Ao iniciar o servidor, o Endpoint deve rodar no endereço: `http://localhost:3000/`

### Inicie a aplicação

```
npm run dev
```

A aplicação deve rodar no endereço: `http://localhost:5173/`

### Compilar e fazer minificação para produção

```
npm run build
```

### Inicie os testes unitários usando [Vitest](https://vitest.dev/)

## Testes

```
npm run test:unit
```

### Rode o teste e2e usando [Cypress](https://www.cypress.io/)

```
npm run test:e2e:dev
```

## Contribuição

Contribuições são bem-vindas! Siga estas etapas para contribuir:

- Bifurque o projeto.
- Crie sua branch de recursos: `git checkout -b feature/my-new-feature`.
- Confirme suas alterações: `git commit -am 'Adicionar algum recurso`'.
- Envie para o branch: `git push origin feature/my-new-feature`.
- Envie uma solicitação pull.

## License

Esse é um projeto pessoal, e pode ser utilizado, copiado sem aviso prévio.

Made with 💚 by [Renato Khael](https://renatokhael.dev)
