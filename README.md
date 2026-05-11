# Node.js Template API

Backend template desenvolvido com foco em:

- Segurança
- Observabilidade
- Escalabilidade
- Performance
- Padronização de APIs

O objetivo deste projeto é servir como base para aplicações Node.js modernas utilizando Express, middlewares de segurança, logging estruturado e arquitetura organizada para ambientes de produção.

---

# Features

## Segurança

- Helmet para hardening de headers HTTP
- Rate limiting contra abuso e brute force
- Configuração de CORS
- Request tracing com request_id
- Tratamento centralizado de erros
- Logs estruturados para auditoria

---

## Observabilidade

- Logger com Pino
- Logs estruturados em JSON
- Correlação de requests com request_id
- Logs de erro padronizados
- Logs de requisição HTTP
- Preparando para integração com:
  - Grafana
  - Loki
  - ELK Stack
  - OpenTelemetry

---

## Arquitetura

Estrutura desacoplada e organizada:

```txt
src/
 ├── config/
 ├── controllers/
 ├── middlewares/
 ├── routes/
 ├── logs/
 └── app.js
```

---

# Stack

- Node.js
- Express
- Pino
- Helmet
- express-rate-limit
- UUID
- dotenv

---

# Segurança

O projeto utiliza múltiplas camadas de proteção para APIs modernas.

| Recurso | Objetivo |
|---|---|
| Helmet | Proteção contra vulnerabilidades HTTP |
| Rate Limit | Mitigação de brute force e abuso |
| CORS | Controle de acesso entre origens |
| Request ID | Rastreabilidade de requisições |
| Structured Logging | Auditoria e debugging |
| Error Handler | Padronização de falhas |

---

# Logging

O projeto utiliza o Pino para logging estruturado de alta performance.

Exemplo de log:

```json
{
  "level": 30,
  "timestamp": "2026-05-11T21:00:00.000Z",
  "request_id": "6bb46ea7-9bc7-43cd-8d72-40c81ee61688",
  "method": "POST",
  "path": "/users",
  "status_code": 201,
  "duration_ms": 12
}
```

---

# Instalação

Clone o repositório:

```bash
git clone https://github.com/mateus123soares/node-js-template.git
```

Acesse a pasta:

```bash
cd node-js-template
```

Instale as dependências:

```bash
npm install
```

---

# Variáveis de Ambiente

Crie um arquivo `.env`:

```env
LOG_LEVEL=info
NODE_ENV=develop
PORT=3000
CORS_ORIGINS=['http://localhost:3000']

SERVICE_NAME='js-template'
```

---

# Executando o Projeto

## Desenvolvimento

```bash
npm run dev
```

## Produção

```bash
npm start
```

---

# Estrutura de Logs

Os logs são estruturados em JSON para facilitar integração com ferramentas de monitoramento.

Tipos de logs:
- Request logs
- Error logs
- Application logs
- Security logs

---

# Middlewares

## Segurança

- Helmet
- Rate Limit
- CORS

## Aplicação

- Request ID
- Error Handler
- Logger Middleware

---

# Objetivos do Template

Este template foi criado para fornecer:

- Base sólida para APIs REST
- Estrutura pronta para produção
- Padronização de projetos Node.js
- Facilidade de manutenção
- Observabilidade moderna
- Segurança por padrão

---

# Melhorias Futuras

- TypeScript
- Swagger/OpenAPI
- Testes automatizados
- Docker
- CI/CD
- OpenTelemetry
- Validação com Zod
- Camada de Services
- Repository Pattern

---

# Performance

O projeto utiliza:

- Pino Logger
- Logs assíncronos
- Estrutura middleware-first
- Organização desacoplada

Com foco em baixa latência e alta observabilidade.

---

# Licença

MIT

---

# Autor

Mateus Soares

GitHub:
https://github.com/mateus123soares/node-js-template
