# 🚗 Comic-Con Parking System - ER Diagram

## 📌 About the Assignment

This project is a database design for a multi-zone parking system used during a large-scale event like Comic-Con.

The goal was to design a system that can efficiently manage:

- vehicle entry and exit
- parking spot allocation
- multi-zone and multi-level parking
- reserved parking categories (VIP, staff, exhibitors, etc.)
- parking sessions and tickets
- payment tracking

This is not a simple entry-exit system, but a scalable event-based parking system.

## 🧠 Key Design Thinking

### 🔹 Vehicle & Access Separation

**Vehicles are linked to:**

- a vehicle type (bike, car, SUV, EV)
- an access category (general, VIP, staff, etc.)

This helps in assigning appropriate parking spots based on rules.

### 🔹 Multi-Zone Parking Structure

**Parking is divided into:**

- zones / levels
- each zone contains multiple parking spots

This allows structured tracking of availability across the venue.

### 🔹 Flexible Spot Allocation

**Instead of hardcoding:**

- supported vehicle types
- reserved categories

**I used junction tables:**

- spot_vehicle_types
- spot_access_categories

**This allows:**

- one spot to support multiple vehicle types
- one spot to be reserved for multiple categories

### 🔹 Parking Sessions (Core Logic)

**Each vehicle entry creates a parking session:**

- stores entry and exit time
- tracks whether the vehicle is currently inside
- allows multiple visits by the same vehicle

### 🔹 Tickets & Sessions Separation
- Parking ticket is issued per session
- stored separately for better tracking and extensibility
### 🔹 Payments Linked to Sessions
- Payments are connected to parking sessions
- includes:
    - total hours
    - calculated amount
    - payment status

## 🔗 Relationships
- One vehicle → many parking sessions
- One parking spot → many sessions (reused over time)
- One zone → many parking spots
- One session → one ticket
- One session → one or more payments
- Many-to-many:
- spots ↔ vehicle types
- spots ↔ access categories   

## 🚀 Learnings

This assignment helped me understand:

- how to design multi-zone scalable systems
- handling many-to-many relationships properly
- separating sessions, tickets, and payments
- designing flexible systems instead of rigid structures
- thinking in terms of real-world constraints and flow

## 📊 ER Diagram Preview

![ER Diagram](./ERD.png)

## 🧾 Schema

👉 **[View Full Schema](./schema.md)**