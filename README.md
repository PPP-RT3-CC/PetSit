# PetSit

<div align="center">
  <img src="./petsit.png" alt="PetSit Logo" width="120">
</div>

PetSit is a pet-sitting management application composed of a backend API (NestJS) and a frontend client (Angular).

## Overview

- Backend: REST API built with NestJS and TypeScript.
- Frontend: Single-page application built with Angular.
- Purpose: allow pet owners to create and manage pet-sitting requests, and allow sitters to view and accept assignments. The system includes role-based access for Admin, Owner, and Sitter.

## Repository Structure

- `Backend/petsit-back/` — server source code (NestJS).
- `Frontend/petsit-front/` — client source code (Angular).

## Features

- Role-based access control: `Admin`, `Owner`, `Sitter` with guards and decorators.
- Authentication: JWT-based authentication with login/register and optional token blacklist support.
- Requests management: Owners can create requests; sitters can browse and accept requests.
- User management: Admins can list and manage users and assign roles.
- Validation: DTOs and class-based validation for request payloads.

## Technologies

This project uses the following main technologies:

- Backend: NestJS (v11), TypeScript
- ORM: TypeORM with PostgreSQL (`pg`) — configurable to other DBs supported by TypeORM
- Authentication: `@nestjs/jwt`, `passport-jwt`, `bcrypt` for password hashing
- Validation/Transformation: `class-validator`, `class-transformer`
- Frontend: Angular (client app in `Frontend/petsit-front`)
- Tooling: ESLint, Prettier, TypeScript

## Prerequisites

- Node.js (>=16 recommended)
- npm or yarn
- A database instance (PostgreSQL recommended for production)

## Backend — Install & Run

1. Move to the backend folder:

```bash
cd Backend/petsit-back
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables (example `.env` shown below).

4. Run in development mode:

```bash
npm run start:dev
```

5. Useful scripts (from `package.json`):

- `npm run start` — start server in production mode
- `npm run start:dev` — start server with hot reload
- `npm run build` — build TypeScript sources

## Frontend — Install & Run

1. Move to the frontend folder:

```bash
cd Frontend/petsit-front
```

2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
ng serve --open
```

4. Build for production:

```bash
npm run build
```

## Environment Variables (example)

Create a `.env` in `Backend/petsit-back/` for local development. The backend reads individual DB fields (not a single `DATABASE_URL`). Minimum required variables:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_db_password
DB_NAME=petsit
PORT=3000
```

Add other variables as needed (SMTP credentials, third-party API keys, etc.).


## API Summary — Key Endpoints & Auth Flow

Authentication is JWT-based. Typical flow:

- `POST /auth/register` — Register a new user. Required fields: `name`, `email`, `password`, `role` (owner|sitter).
- `POST /auth/login` — Authenticate and receive a JWT access token.
- `POST /auth/logout` — (if implemented) invalidate a token (blacklist).

Core resource endpoints (examples):

- `GET /users` — (admin) list users
- `GET /users/:id` — get user details
- `GET /requests` — list requests (results may be filtered by role)
- `GET /requests/:id` — get request details
- `POST /requests` — create a new request (owner)
- `PATCH /requests/:id` — update request (e.g., change status / accept by sitter)

For precise request/response shapes, see controller and DTO files in `Backend/petsit-back/src` under `auth`, `users`, `requests`, and `admin`.

## Authentication & Authorization

- JWT tokens issued at login; token validation occurs via Passport/JWT strategy.
- Roles are enforced with custom decorators and guards (`roles.decorator.ts`, `roles.guard.ts`).
- Passwords are hashed using `bcrypt`.

## Possible improvements & future features

- Notifications (push/in-app) and real-time updates (WebSockets)
- Payments (Stripe/PayPal), messaging, and media uploads
- Calendar sync, scheduling, and availability management
- CI/CD pipelines, Swagger/OpenAPI docs
- Mobile app / PWA with offline support
- Security: helmet, rate limiting, GDPR compliance

