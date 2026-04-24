# 🏋️ Fitness Influencer Coaching Platform - ER Diagram

> Designed as part of Web Dev Cohort 2026 - Database Assignment

## 📌 Overview

This project presents an ER Diagram for an online fitness coaching platform where trainers manage clients, offer programs, schedule sessions, and track client progress.

The system is designed to reflect real-world coaching workflows, moving beyond simple user management to a structured ecosystem involving subscriptions, consultations, and progress tracking.

---

## 🧠 Key Features Modeled

* 👤 User system with role-based distinction (Trainer / Client)
* 📋 Fitness programs created by trainers
* 🔄 Subscription system for clients enrolling in programs
* 📅 Consultation session scheduling
* 📊 Weekly check-ins for tracking progress
* 🖼️ Progress photos linked to check-ins
* 💳 Payment tracking for subscriptions
* 🥗 Workout & diet resources linked to programs

---

## 🏗️ Entity Design

### 👥 Users

Stores all platform users with role-based differentiation:

* Trainers manage programs and sessions
* Clients enroll in programs and submit check-ins

### 🧾 Client Profiles

Separates health-related data such as:

* weight, height, fitness goals, medical conditions
  Ensures clean and normalized user data

### 📦 Programs

Represents coaching plans:

* Created by trainers
* Includes pricing, duration, and type

### 🔗 Subscriptions

Acts as a junction between clients and programs:

* Tracks enrollment
* Stores start/end dates and status

### 🎥 Consultation Sessions

Handles scheduled calls between trainers and clients:

* Includes meeting links, duration, and notes

### 📊 Weekly Check-ins

Tracks client progress over time:

* weight updates
* energy levels
* sleep quality
* trainer feedback

### 🖼️ Progress Photos

Linked to check-ins:

* Allows visual tracking of transformation

### 🥗 Program Resources

Stores workout and diet content:

* Linked to programs
* Supports versioning

### 💳 Payments

Tracks subscription payments:

* Includes amount, status, and transaction details

---

## 🔗 Relationships

* One trainer can create multiple programs
* One client can subscribe to multiple programs
* One program can have multiple subscribers
* One subscription can have multiple check-ins
* One check-in can have multiple progress photos
* One order (subscription) can have multiple payments
* Trainers and clients can have multiple consultation sessions

---

## 📊 ER Diagram Preview

![ER Diagram](./erd.png)

---

## 🧾 Schema

👉 **[View Full Schema](./schema.md)**

---

## 🛠️ Tools Used

* ER Diagram Tool: Eraser / Draw.io
* Concepts: DBMS, ER Modeling, Normalization

---

## 🎯 Design Approach

The design focuses on:

* Clean separation of concerns
* Proper handling of many-to-many relationships
* Real-world practicality
* Avoiding unnecessary complexity

Special attention was given to:

* Differentiating sessions and check-ins
* Keeping progress tracking separate from user data
* Supporting scalability for growing coaching platforms

---

## 🚀 Conclusion

This ER diagram represents a scalable and practical database design for a modern fitness coaching platform. It captures the complexity of real-world interactions while maintaining clarity and structure.

---

## 📎 Diagram

![ER Diagram](ERD.png)

---
