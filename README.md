# Node.js First Steps API

A RESTful API built with Node.js, Express, TypeScript, and TSOA for automatic route generation and OpenAPI documentation.

## Features

- 🚀 **TypeScript** - Type-safe development
- 🔄 **TSOA** - Automatic route generation and OpenAPI documentation
- 📚 **Swagger UI** - Interactive API documentation at `/api-docs`
- 🗄️ **Prisma** - Database ORM with PostgreSQL
- 📝 **Express** - Web framework
- 🔄 **Hot Reload** - Development with nodemon

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn

## Installation

1. Clone the repository
```bash
git clone git@github.com:mfmaite/node-training.git
cd node-first-steps
```

2. Install dependencies
```bash
npm install
```

3. Set up the database
```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push
```

## Running the Project

### Development Mode
```bash
npm run dev
```
This will start the server with hot reload on `http://localhost:3000`

### Production Mode
```bash
npm run build
npm start
```

## API Documentation

This project uses **TSOA** to automatically generate OpenAPI (Swagger) documentation.

### 🎯 Swagger UI
Access the interactive API documentation with a beautiful UI at:
```
http://localhost:3000/api-docs
```

This interface allows you to:
- 📖 Browse all available endpoints
- 🧪 Test API calls directly from the browser
- 📋 View request/response schemas
- 🔍 Explore data models and validation rules

## Project Structure

```
├── controllers/          # API controllers
│   ├── message.ts       # Message endpoints
│   └── posts.ts         # Post endpoints
├── services/            # Business logic
│   └── post.ts          # Post service
├── types/               # TypeScript type definitions
│   └── post.ts          # Post types
├── prisma/              # Database schema
│   └── schema.prisma    # Prisma schema
├── build/               # Generated files
│   ├── routes.ts        # Auto-generated routes
│   └── swagger.json     # OpenAPI documentation
├── index.ts             # Application entry point
├── server.ts            # Server configuration
└── tsoa.json            # TSOA configuration
```

## Development Notes

- When adding new controllers or modifying existing ones, run `npm run build` to regenerate routes
- The API uses automatic validation based on TypeScript types
- All endpoints return JSON responses
- Error handling is built into TSOA framework

## Technologies Used

- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Programming language
- **TSOA** - TypeScript OpenAPI framework
- **Swagger UI Express** - Interactive API documentation
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **Nodemon** - Development hot reload
