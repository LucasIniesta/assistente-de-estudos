# Study Assistant API

API de assistente de estudos com tecnologia de IA para fornecer respostas e insights sobre diversos tópicos.

## Descrição

Este projeto é uma API construída com NestJS que utiliza modelos de linguagem de IA para criar um assistente de estudos. Ele foi projetado para ser flexível, permitindo a integração com diferentes provedores de IA, como Ollama e OpenAI.

## Tecnologias

- [NestJS](https://nestjs.com/) - Um framework Node.js para construir aplicações eficientes e escaláveis do lado do servidor.
- [TypeScript](https://www.typescriptlang.org/) - Um superconjunto de JavaScript que adiciona tipagem estática.
- [Ollama](https://ollama.ai/) - Uma plataforma para executar modelos de linguagem de IA localmente.
- [OpenAI](https://openai.com/) - Uma empresa de pesquisa e implantação de IA.

## Primeiros Passos

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn
- Git

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd seu-repositorio
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

### Executando a Aplicação

1. Inicie a aplicação em modo de desenvolvimento:
   ```bash
   npm run start:dev
   ```
2. A API estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

```
src/
├── ai/
│   ├── enums/
│   ├── factories/
│   ├── providers/
│   ├── services/
│   ├── ai.module.ts
├── app/
│   ├── app.module.ts
├── study/
│   ├── dto/
│   ├── study.controller.ts
│   ├── study.module.ts
│   ├── study.service.ts
├── main.ts
```

- **`src/ai`**: Módulo responsável pela integração com os provedores de IA.
- **`src/app`**: Módulo principal da aplicação.
- **`src/study`**: Módulo que contém a lógica de negócios para o assistente de estudos.
- **`src/main.ts`**: O arquivo de entrada da aplicação.

## Uso da API

### Criar um Assistente de Estudos

- **URL**: `/study`
- **Método**: `POST`
- **Corpo da Requisição**:
  ```json
  {
    "userContent": "Qual é a capital da França?"
  }
  ```
- **Resposta de Sucesso**:
  - **Código**: `200 OK`
  - **Conteúdo**:
    ```json
    {
      "response": "A capital da França é Paris."
    }
    ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT.
