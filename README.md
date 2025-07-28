<p align="center"><a href="https://laravel.com" target="_blank">Shomvob</a></p>

<p align="center">
# 🧰 Mini Job Board — Full Stack Project (React + Laravel)
<br>
A simple full-stack job board application where companies can post jobs (admin-only) and users can view and apply.
</p>

## 🔗 Live Links

- 🌐 Frontend (React): [https://frontend.com]
- 🔧 Backend (Laravel): [https://your-backend-url.com]

## 🧑‍💼 Features

### 👥 Public Users
- View all jobs
- View single job details
- Apply to a job (Name, Email, CV link or text)

### 👨‍💼 Admin
- Can post new jobs via authenticated API (role-based)

---
## 🛠️ Tech Stack


### I have installed React in my Laravel app so i need one hoisting 
Hosted on [BalancedServer](http://jobs.adlyticsolutions.com/)

### Frontend
- React.js
- Axios
- Tailwind CSS
- 

### Backend
- Laravel 11 (API only)
- Sanctum Authentication + Role Middleware
- MySQL (or SQLite for local testing)
- 

---

## 🔐 Authentication

- Admin routes are protected using Laravel middleware (`role = admin`).
- Only authenticated admins can post jobs.


---

## 📦 API Endpoints

| Method | Endpoint             | Description                | Auth      |
|--------|----------------------|----------------------------|-----------|
| GET    | /api/jobs            | List all jobs              | Public    |
| GET    | /api/job/{id}       | Get job by ID              | Public    |
| POST   | /api/job            | Create a new job           | Admin only|
| POST   | /api/applications    | Submit a job application   | Public    |

---

## 🧪 Running Locally

### 🔹 Backend (Laravel)

```bash
git clone https://github.com/Gazi-Nasim/jobsite.git
cd job-board-backend
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate --seed
php artisan serve
