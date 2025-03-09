
# **🚀 Secure Auth & Role-Based Access API (Node.js + TypeScript + PostgreSQL)**  

## **📌 Overview**  
This project is a **production-ready, scalable, and secure API** built with **Node.js, TypeScript, Express, PostgreSQL, Prisma, and Auth0 (JWT Authentication)**. It supports **authentication, role-based access control (RBAC), and full CRUD operations for users and products**.  

Designed with **modular architecture and industry best practices**, this API ensures **security, maintainability, and performance**.  

---  

## **🔑 Key Features**  
✔ **Auth0 + JWT Authentication** – Secure login and token-based authentication  
✔ **Role-Based Access Control (RBAC)** – Admins & Users have different privileges  
✔ **User Management** – Profile management & role updates  
✔ **Product Management** – Full CRUD operations for products  
✔ **Secure API** – Rate limiting, Helmet.js, Input validation  
✔ **PostgreSQL + Prisma** – Scalable database with ORM  
✔ **Modular Architecture** – Services, Controllers, and Middleware separation  
✔ **Production-Ready** – Robust error handling and logging  

---  

## **📂 Folder Structure**  
```
src/
│── config/               # Database & Auth configuration
│── controllers/          # Handles request logic
│── middleware/           # Authentication & Authorization middleware
│── models/               # Database models (Prisma)
│── services/             # Business logic layer
│── routes/               # API Routes (Auth, User, Product)
│── server.ts             # Main server entry point
│── .env                  # Environment variables
│── prisma/schema.prisma  # Prisma ORM schema (PostgreSQL)
```  

---

## **🛠️ Setup & Installation**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/yaggit/auth0-node-postgres.git
cd auth0-node-postgres
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Configure Environment Variables**  
Create a **`.env`** file in the root directory and add:  
```env
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
JWT_SECRET=supersecretkey
AUTH0_DOMAIN=your-auth0-domain
AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_CLIENT_SECRET=your-auth0-client-secret
```

### **4️⃣ Setup Database (Prisma & PostgreSQL)**  
```sh
npx prisma migrate dev --name init
npx prisma generate
```

### **5️⃣ Start the Server**  
```sh
npx ts-node src/server.ts
```
Server will run at: **http://localhost:5000**  

---

## **📢 API Endpoints & Access Control**  

### **🔐 Authentication**  
| Method | Route | Description | Auth | Role |
|--------|-------|-------------|------|------|
| **POST** | `/api/auth/login` | Login & Get JWT Token | ❌ | ❌ |

### **👤 User Management**  
| Method | Route | Description | Auth | Role |
|--------|-------|-------------|------|------|
| **GET** | `/api/users/profile` | Get User Profile | ✅ | Any |
| **PUT** | `/api/users/role` | Update User Role | ✅ | Admin |

### **🛒 Product Management**  
| Method | Route | Description | Auth | Role |
|--------|-------|-------------|------|------|
| **POST** | `/api/products` | Create Product | ✅ | Admin |
| **GET** | `/api/products` | Get All Products | ✅ | Any |
| **GET** | `/api/products/:id` | Get Product by ID | ✅ | Any |
| **PUT** | `/api/products/:id` | Update Product | ✅ | Admin |
| **DELETE** | `/api/products/:id` | Delete Product | ✅ | Admin |

---

## **🔐 Authentication & Role-Based Access**  
1. **Users must be logged in** to access any protected routes  
2. **Admins have additional privileges** (creating, updating, deleting products)  
3. **JWT Tokens** are used for authentication  
4. **Middleware ensures security** (`checkJwt`, `checkRole`)  

---

## **🛠️ Tech Stack**
- **Backend**: Node.js, Express, TypeScript  
- **Database**: PostgreSQL (via Prisma ORM)  
- **Auth**: Auth0 + JWT (JSON Web Tokens)  
- **Security**: Helmet.js, Rate Limiting, Role-Based Access  
- **Validation**: Input validation for security  
