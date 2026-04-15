n

# Rollex Multimedia Agency: The Fashion Gateway

## 📌 Overview

**Rollex Multimedia Agency** is a specialized onboarding and simple management system designed to streamline the recruitment process for a modelling school. The primary objective of this platform is to  **digitize the registration and application review process** , transitioning away from inefficient manual systems—such as paper forms and messaging apps—to a centralized, digital solution.

The platform serves as a "Fashion Gateway," providing a professional interface for aspiring talent to apply and a robust management tool for agency administrators to review and track applications.

## ✨ Key Features

### 👤 Talent/Student Features

* **Secure Registration:** User-friendly sign-up and login portal.
* **Application Submission:** A structured digital application form for talent to submit their details.
* **Media Uploads:** Specialized functionality for **uploading modelling photos** directly to the platform.
* **Status Tracking:** Real-time visibility into application status (e.g., Pending, Accepted, or Rejected).

### 🛠️ Admin Features

* **Secure Dashboard:** Restricted access for agency staff to manage the database.
* **Application Management:** Tools to review talent profiles, assess uploaded media, and update application statuses.
* **Internal Communication:** Ability to add internal comments to specific talent profiles for collaborative decision-making.

## 🏗️ System Architecture

The project is built with a focus on scalability and responsiveness to ensure it is accessible across all devices.

### **Backend Architecture**

* **Authentication:** Secure, role-based authentication (Talent vs. Admin).
* **Database:** Structured architecture to manage user data, application records, and internal admin notes.
* **Storage:** Integration with cloud-based services for secure **image storage** of modelling portfolios.

### **Frontend Architecture**

* **Responsive Web Design:** A fashion-forward, intuitive interface optimized for both desktop and mobile users.
* **State Management:** Efficient handling of application status updates and real-time feedback.

## 📅 Implementation Roadmap

The development of this platform follows a structured  **3-week execution strategy** :

* **Week 1: Foundation & Backend**
  * Initial backend setup and database schema design.
  * Implementation of secure authentication protocols.
* **Week 2: Core Functionality**
  * Development of the application submission system.
  * Building the administrative review and management tools.
* **Week 3: Frontend & Deployment**
  * Final integration of the frontend interface.
  * Rigorous system testing and bug fixing prior to launch.

## 🚀 Success Criteria

The project is measured against two primary goals:

1. **Talent Ease of Use:** Prospective students can successfully register and submit applications without technical friction.
2. **Administrative Efficiency:** Agency admins can manage the full lifecycle of an application—from review to final status—within the digital environment.

## ⚠️ Known Risks & Considerations

* **Timeline Constraints:** Maintaining the 3-week schedule to ensure all MVP features are fully functional.
* **Media Handling:** Addressing potential technical challenges regarding high-resolution image uploads and cloud storage service limits.

---

## 🏃‍♀️ Quick Start

1. **MongoDB**: Local (`mongod`) or Atlas URI in `backend/.env`
2. **Backend**: `cd backend && npm run dev` → http://localhost:5000
3. **Frontend**: `cd frontend && npm run dev` → http://localhost:3000

## API Docs
| Endpoint | Desc |
|----------|------|
| POST /api/auth/register | Create user |
| POST /api/auth/login | JWT login |
| POST /api/applications | Submit app + JPEG/PNG images |
| GET/PATCH /api/applications | List/update status (RBAC) |
| POST/GET /api/comments/:id | Admin comments

## Git Clean (for push)
```
git rm -r --cached frontend/node_modules backend/node_modules
git add .gitignore
git commit -m "Remove node_modules"
git push
```

**MVP Live!** Test register → login → submit portfolio.

### 📝 License

MIT License (c) 2026 AnniMensah

---

# Rollex Multimedia Agency: The Fashion Gateway

## 📌 Overview

**Rollex Multimedia Agency** is a specialized onboarding and simple management system designed to streamline the recruitment process for a modelling school. The primary objective of this platform is to  **digitize the registration and application review process** , transitioning away from inefficient manual systems—such as paper forms and messaging apps—to a centralized, digital solution.

The platform serves as a "Fashion Gateway," providing a professional interface for aspiring talent to apply and a robust management tool for agency administrators to review and track applications.

## ✨ Key Features

### 👤 Talent/Student Features

* **Secure Registration:** User-friendly sign-up and login portal.
* **Application Submission:** A structured digital application form for talent to submit their details.
* **Media Uploads:** Specialized functionality for **uploading modelling photos** directly to the platform.
* **Status Tracking:** Real-time visibility into application status (e.g., Pending, Accepted, or Rejected).

### 🛠️ Admin Features

* **Secure Dashboard:** Restricted access for agency staff to manage the database.
* **Application Management:** Tools to review talent profiles, assess uploaded media, and update application statuses.
* **Internal Communication:** Ability to add internal comments to specific talent profiles for collaborative decision-making.

## 🏗️ System Architecture

The project is built with a focus on scalability and responsiveness to ensure it is accessible across all devices.

### **Backend Architecture**

* **Authentication:** Secure, role-based authentication (Talent vs. Admin).
* **Database:** Structured architecture to manage user data, application records, and internal admin notes.
* **Storage:** Integration with cloud-based services for secure **image storage** of modelling portfolios.

### **Frontend Architecture**

* **Responsive Web Design:** A fashion-forward, intuitive interface optimized for both desktop and mobile users.
* **State Management:** Efficient handling of application status updates and real-time feedback.

## 📅 Implementation Roadmap

The development of this platform follows a structured  **3-week execution strategy** :

* **Week 1: Foundation & Backend**
  * Initial backend setup and database schema design.
  * Implementation of secure authentication protocols.
* **Week 2: Core Functionality**
  * Development of the application submission system.
  * Building the administrative review and management tools.
* **Week 3: Frontend & Deployment**
  * Final integration of the frontend interface.
  * Rigorous system testing and bug fixing prior to launch.

## 🚀 Success Criteria

The project is measured against two primary goals:

1. **Talent Ease of Use:** Prospective students can successfully register and submit applications without technical friction.
2. **Administrative Efficiency:** Agency admins can manage the full lifecycle of an application—from review to final status—within the digital environment.

## ⚠️ Known Risks & Considerations

* **Timeline Constraints:** Maintaining the 3-week schedule to ensure all MVP features are fully functional.
* **Media Handling:** Addressing potential technical challenges regarding high-resolution image uploads and cloud storage service limits.

---

### 📝 License

This project is proprietary and intended for the use of Rollex Multimedia Agency.
