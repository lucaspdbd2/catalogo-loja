# Catálogo de Loja

Catálogo de produtos desenvolvido com React e TypeScript, consumindo a Fake Store API.

## Tecnologias

- React 19
- TypeScript
- React Router DOM 7
- Vite 6
- Fake Store API

## Funcionalidades

- Listagem de produtos com grid responsivo
- Filtro por categoria via sidebar
- Página de detalhes do produto com chamada individual à API
- Carrinho: adicionar, incrementar, decrementar, remover e limpar
- Total do carrinho calculado em tempo real
- Carrinho salvo no localStorage
- Estado de carregamento e tratamento de erros da API
- Autenticação de usuário via Fake Store API

## Como rodar

```bash
npm install
npm run dev
```

Acesse em: [http://localhost:5173](http://localhost:5173)

## Credenciais de teste

- Usuário: `mor_2314`
- Senha: `83r5^_`

## Estrutura do projeto

```
src/
  components/   componentes reutilizáveis
  context/      Context API para carrinho e autenticação
  hooks/        hooks personalizados para busca de dados
  pages/        páginas da aplicação
  services/     chamadas à Fake Store API
  styles/       pasta de estilos CSS
  types/        interfaces TypeScript
  utils/        funções utilitárias
```
