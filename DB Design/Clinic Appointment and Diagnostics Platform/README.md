# 🏥 Clinic Appointment & Diagnostics Platform - ER Diagram

> Designed as part of Web Dev Cohort 2026 - Database Assignment

## 📌 Overview

This project presents an ER Diagram for a clinic management system that handles appointments, consultations, diagnostic tests, reports, and payments.

The goal was to model a real-world clinic workflow where patients can book appointments, consult doctors, undergo prescribed tests, and receive reports all in a structured and scalable database design.

---

## 🧠 Key Features Modeled

* 👤 Patient management system
* 🧑‍⚕️ Doctor management with specialties
* 📅 Appointment booking system
* 🩺 Consultation (actual visit) tracking
* 🧪 Diagnostic test prescription and execution
* 📄 Report generation and tracking
* 💳 Payment handling linked to consultations

---

## 🏗️ Entity Design

### 👤 Patients

Stores basic patient information such as:

* name, contact details, date of birth, gender, and address

---

### 🧑‍⚕️ Doctors

Represents clinic doctors:

* linked to specialties
* includes license and consultation fee

---

### ⭐ Specialties

Defines doctor domains such as:

* Cardiology, Dermatology, etc.

Helps in categorizing doctors cleanly.

---

### 📅 Appointments (Intent)

Represents booking made by patients:

* includes date, status, and reason for visit

👉 Important: An appointment is not always a visit.

---

### 🩺 Consultations (Actual Visit)

Represents real doctor-patient interaction:

* linked 1:1 with completed appointments
* includes diagnosis, symptoms, prescription, and advice

👉 Separating consultation from appointment ensures accurate real-world modeling.

---

### 🧪 Test Catalog

Stores available diagnostic tests:

* test name, cost, and description

---

### 🧫 Diagnostic Requests

Represents tests prescribed during a consultation:

* one consultation can have multiple tests
* tracks test status and completion time

---

### 📄 Diagnostic Reports

Stores generated reports:

* linked 1:1 with diagnostic requests
* includes report data, file link, and result summary

---

### 💳 Payments

Handles billing for consultations:

* linked to patient and consultation
* tracks payment method, status, and transaction details

---

## 🔗 Relationships

* One patient can book multiple appointments
* One doctor can attend multiple appointments
* One appointment may result in one consultation
* One consultation can have multiple diagnostic tests
* One diagnostic request generates one report
* One patient can make multiple payments
* Payments are linked to consultations

---

## 📊 ER Diagram Preview

![ER Diagram](./ERD.png)

---

## 🧾 Schema

👉 **[View Full Schema](./schema.md)**

---

## 🎯 Design Approach

The design focuses on:

* Clear separation between appointment and consultation
* Proper handling of diagnostic workflow (test → report)
* Normalized structure to avoid redundancy
* Real-world practicality for clinic operations

Special attention was given to:

* Ensuring tests are linked to consultations (not appointments)
* Maintaining 1:1 mapping where necessary (consultation, report)
* Keeping entities modular and scalable

---

## 🚀 Conclusion

This ER diagram models a clean and scalable clinic management system that captures the complete flow from appointment booking to diagnosis and reporting.

The design ensures clarity, flexibility, and real-world usability without unnecessary complexity.

---