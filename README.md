# Stockroom API

A TypeScript-powered inventory management REST API built with **Bun, Express, Zod, and Supabase**.

Stockroom is a backend engineering project focused on building a secure, maintainable, and type-safe API for managing inventory. It is also a hands-on exercise in strengthening TypeScript fundamentals, backend architecture, authentication, and database design.

## 🎯 Project Goals

- Build a RESTful API using TypeScript and Express.
- Implement secure authentication using JWT and bcrypt.
- Validate request payloads and environment configuration with Zod.
- Integrate Supabase and PostgreSQL for persistent data storage.
- Implement inventory CRUD operations and stock movement tracking.
- Practise modular backend architecture, error handling, and automated testing.
- Explore database transactions, concurrency, and data integrity.

## 🛠️ Tech Stack

| Technology                                           | Purpose                                         |
| ---------------------------------------------------- | ----------------------------------------------- |
| [Bun](https://bun.sh/)                               | JavaScript runtime and package manager          |
| [TypeScript](https://www.typescriptlang.org/)        | Static typing and maintainable application code |
| [Express](https://expressjs.com/)                    | HTTP server and REST API routing                |
| [Zod](https://zod.dev/)                              | Runtime schema validation                       |
| [Supabase](https://supabase.com/)                    | PostgreSQL database platform                    |
| [JWT](https://jwt.io/)                               | Token-based authentication                      |
| [bcrypt](https://github.com/kelektiv/node.bcrypt.js) | Password hashing                                |

## 📋 Planned Features

### Authentication and Authorization

- User registration and login
- Secure password hashing
- JWT-based authentication
- Protected routes and authenticated user context

### Inventory Management

- Create, retrieve, update, and delete inventory items
- Track product names, SKUs, prices, and quantities
- Validate incoming requests with Zod
- Enforce inventory ownership

### Stock Movement Tracking

- Record stock additions and removals
- Maintain an audit trail of inventory changes
- Prevent invalid stock operations
- Explore atomic database updates and transaction safety

### API Improvements

- Search, filtering, and pagination
- Centralized error handling
- Environment configuration validation
- Automated tests and API documentation

## 📁 Project Structure

```text
stockroom-api/
├── src/
│   ├── index.ts
│   ├── app.ts
│   ├── server.ts
│   ├── config/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── schemas/
│   ├── services/
│   └── types/
├── controllers/
├── schemas/
├── types/
├── utils/
├── tests/
├── package.json
├── tsconfig.json
├── bun.lock
└── README.md
```

The structure will evolve as the application grows. The goal is to keep HTTP routing, request handling, validation, and business logic organized into clear responsibilities.

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed
- A Supabase project for database integration when that stage is implemented
- Git

### 1. Clone the repository

```bash
git clone <repository-url>
cd stockroom-api
```

### 2. Install dependencies

```bash
bun install
```

### 3. Configure environment variables

Create a `.env` file in the project root when environment configuration is introduced.

Example configuration:

```env
PORT=3000
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_server_only_key
JWT_SECRET=your_strong_random_secret
```

These variables are intended for later implementation. Only configure the values needed by the features currently in development.

**Security:** Never commit your `.env` file or expose your Supabase service role key or JWT secret in client-side code.

### 4. Start the development server

```bash
bun run dev
```

### 5. Type-check the project

```bash
bun run typecheck
```

### 6. Run tests

```bash
bun test
```

The development and test commands depend on the scripts configured in `package.json`. API endpoints will be documented here as they are implemented.

## 🧠 Learning Focus

Stockroom is being developed incrementally, with an emphasis on understanding backend concepts through implementation rather than simply assembling libraries.

Key areas of exploration include:

- Type inference, interfaces, unions, generics, and type narrowing
- Type-safe request handling and runtime validation
- Middleware composition and authentication flows
- Relational database design and ownership constraints
- Asynchronous programming and error propagation
- Transactions, race conditions, and data consistency
- Integration testing and maintainable application architecture

## 🗺️ Development Roadmap

- [ ] Initialize the Express application and server
- [ ] Implement a health-check endpoint
- [ ] Validate environment variables with Zod
- [ ] Configure Supabase and PostgreSQL
- [ ] Implement registration and login
- [ ] Add JWT authentication middleware
- [ ] Implement inventory CRUD operations
- [ ] Enforce inventory ownership
- [ ] Add search, filtering, and pagination
- [ ] Implement stock movement tracking
- [ ] Handle concurrent inventory updates safely
- [ ] Add automated tests and API documentation

## 🔐 Security Principles

- Hash passwords instead of storing plaintext passwords.
- Validate untrusted input at runtime.
- Keep secrets outside source control.
- Verify JWTs before granting access to protected routes.
- Enforce resource ownership on the server.
- Use database constraints and transactions where appropriate.

## 📌 Project Status

**Status:** Early development.

Stockroom is being built step by step. The roadmap describes intended functionality and does not imply that every feature is already implemented.

## 📄 License

No license has been specified yet. A license can be added once the project's distribution and usage terms are decided.
