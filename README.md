# 📋 Sistema de Gestão de Clientes

Uma aplicação Angular moderna e completa para gestão de clientes, desenvolvida com as melhores práticas do framework e arquitetura robusta.

## ✨ Funcionalidades

- **📝 Listagem de Clientes** - Visualização em tabela com paginação e avatares personalizados
- **➕ Cadastro de Novos Clientes** - Formulário reativo com validações em tempo real
- **✏️ Edição de Clientes** - Atualização de dados existentes com preservação de estado
- **🗑️ Exclusão de Clientes** - Remoção com diálogo de confirmação
- **📱 Interface Responsiva** - Design moderno com Angular Material
- **🔍 Validações Inteligentes** - CPF/CNPJ, telefone, e-mail com máscaras automáticas
- **💾 Gerenciamento de Estado** - NgRx para estado centralizado e previsível
- **🚀 Lazy Loading** - Carregamento sob demanda de componentes
- **🎨 UI/UX Moderna** - Componentes do Angular Material com tema consistente

## 🛠️ Stack Tecnológica

### Core Framework
- **Angular 21.2.0** - Framework principal
- **TypeScript 5.9.2** - Tipagem estática e desenvolvimento seguro
- **RxJS 7.8.0** - Programação reativa

### UI & UX
- **Angular Material 21.2.9** - Biblioteca de componentes UI
- **Angular CDK 21.2.9** - Componentes de desenvolvimento
- **SCSS** - Pré-processador CSS com variáveis e mixins

### Estado & Arquitetura
- **@ngrx/store 21.1.0** - Gerenciamento de estado
- **@ngrx/effects 21.1.0** - Efeitos colaterais
- **@ngrx/store-devtools 21.1.0** - Ferramentas de depuração

### Utilitários
- **ngx-mask 21.0.1** - Máscaras para formulários
- **Vitest 4.0.8** - Framework de testes

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── components/           # Componentes de UI
│   │   ├── list-users/      # Listagem de usuários
│   │   ├── form-user/       # Formulário de cadastro/edição
│   │   └── confirm-delete-dialog/ # Diálogo de confirmação
│   ├── core/                # Módulo principal
│   │   ├── models/          # Interfaces e enums
│   │   ├── services/        # Serviços de dados
│   │   ├── store/           # Estado NgRx
│   │   ├── validators/      # Validadores customizados
│   │   └── utils/           # Utilitários diversos
│   ├── app.config.ts        # Configuração da aplicação
│   ├── app.routes.ts        # Rotas com lazy loading
│   └── app.ts              # Componente raiz
├── styles.scss              # Estilos globais
└── main.ts                  # Bootstrap da aplicação
```

## 🚀 Como Executar

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **Yarn** (gerenciador de pacotes)

### Instalação

```bash
# Clonar o repositório
git clone <repository-url>
cd listagem-usuarios-bolt

# Instalar dependências
yarn install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
yarn start
# ou
ng serve

# A aplicação estará disponível em http://localhost:4200
```

### Build de Produção

```bash
# Gerar build otimizado
yarn build
# ou
ng build

# Os arquivos serão gerados na pasta dist/
```

### Testes

```bash
# Executar testes unitários
yarn test
# ou
ng test

# Executar testes em modo watch
ng test --watch
```

## 📱 Funcionalidades Detalhadas

### Modelo de Dados

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  document?: string;
  docType?: DocumentType; // CPF | CNPJ
  createdAt: string;
  updatedAt: string;
}
```

### Validações Implementadas

- **Nome**: Mínimo 3 caracteres, obrigatório
- **E-mail**: Formato válido, obrigatório
- **Telefone**: 10 ou 11 dígitos, máscara automática
- **CPF/CNPJ**: Validação específica por tipo, máscara dinâmica
- **Campos**: Todos os campos obrigatórios validados em tempo real

### Estado Global (NgRx)

- **UsersState**: Gerencia lista de usuários, loading, saving e erros
- **Actions**: Operações CRUD com estados de loading/success/error
- **Selectors**: Acesso otimizado aos dados do estado
- **Effects**: Tratamento de efeitos colaterais e navegação

### Componentes Standalone

- **ListUsers**: Tabela com paginação, avatares coloridos e ações
- **UserForm**: Formulário reativo com validações dinâmicas
- **ConfirmDeleteDialog**: Modal de confirmação com Material Dialog

### Roteamento com Lazy Loading

```typescript
const routes = [
  { path: '', loadComponent: () => import('./components/list-users/list-users') },
  { path: 'new', loadComponent: () => import('./components/form-user/form-user') },
  { path: ':id', loadComponent: () => import('./components/form-user/form-user') }
];
```

## 🎨 Design & UX

### Interface com Angular Material
- **Tema**: Cores consistentes e tipografia padronizada
- **Responsividade**: Layout adaptável para diferentes dispositivos
- **Feedback Visual**: Loading states, snack bars e tooltips
- **Acessibilidade**: Componentes acessíveis com navegação por teclado

### Avatares Personalizados
- **Cores Dinâmicas**: 8 cores baseadas no hash do nome
- **Iniciais**: Geração automática de iniciais dos usuários
- **Visual Consistente**: Círculos coloridos com contraste adequado

### Formatação de Dados
- **Telefone**: `(XX) XXXXX-XXXX` ou `(XX) XXXX-XXXX`
- **CPF**: `XXX.XXX.XXX-XX`
- **CNPJ**: `XX.XXX.XXX/XXXX-XX`
- **Datas**: Formato brasileiro com `DatePipe`

## 🔧 Configurações Adicionais

### Variáveis de Ambiente
O projeto utiliza configurações padrão do Angular para diferentes ambientes:
- `development`: Build para desenvolvimento com source maps
- `production`: Build otimizado com minificação e hashing

### Prettier
Configuração automática de formatação de código:
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

### Git Hooks
O projeto está configurado com hooks para garantir qualidade:
- Pre-commit: Validação de lint e formatação
- Pre-push: Execução de testes automatizados

## 📊 Arquitetura e Boas Práticas

### Componentes Standalone
- **Benefícios**: Menos boilerplate, melhor performance
- **Imports**: Explícitos e controlados
- **Lazy Loading**: Carregamento sob demanda

### Gerenciamento de Estado
- **Imutabilidade**: Estado nunca modificado diretamente
- **Previsibilidade**: Actions e reducers puros
- **Debugging**: Redux DevTools integration

### Formulários Reativos
- **Validações**: Síncronas e assíncronas
- **Máscaras**: ngx-mask para formatação automática
- **Feedback**: Erros em tempo real

### Tratamento de Erros
- **Centralizado**: Estado de erro global
- **Feedback**: Snack bars informativas
- **Recovery**: Botões de retry onde aplicável

## 🚀 Deploy

### GitHub Pages
```bash
# Build para GitHub Pages
ng build --base-href /repository-name/

# Deploy na pasta docs
ng build --output-path docs
```

### Vercel
```bash
# Build para Vercel
ng build --configuration production
```

## 🤝 Contribuição

1. Fork do projeto
2. Feature branch (`git checkout -b feature/amazing-feature`)
3. Commit com mensagem clara (`git commit -m 'Add amazing feature'`)
4. Push para branch (`git push origin feature/amazing-feature`)
5. Pull Request

## 📝 Licença

Este projeto foi desenvolvido como parte do desafio BOLT e segue as diretrizes de boas práticas Angular.

---

## 🔗 Links Úteis

- [Angular Documentation](https://angular.dev/)
- [Angular Material](https://material.angular.io/)
- [NgRx Documentation](https://ngrx.io/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Desenvolvido com ❤️ utilizando Angular e as melhores práticas de desenvolvimento!**
