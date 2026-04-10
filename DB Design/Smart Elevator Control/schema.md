# 🧾 ER Diagram Schema (Conceptual)

This file contains the conceptual schema used to design the ER Diagram.

```sql

buildings [icon: building, color: blue] {
  id serial pk
  name varchar(100) not null
  address text
  city varchar(50)
  created_at timestamp [default: `now()`]
  updated_at timestamp [default: `now()`]
}

floors [icon: layers, color: purple] {
  id serial pk
  building_id int fk not null
  floor_number int not null
  floor_label varchar(10)
  is_active boolean [default: true]
  created_at timestamp [default: `now()`]
  updated_at timestamp [default: `now()`]
}

shafts [icon: grid, color: orange] {
  id serial pk
  building_id int fk not null
  shaft_code varchar(20) not null
  created_at timestamp [default: `now()`]
  updated_at timestamp [default: `now()`]
}

elevators [icon: arrow-up-down, color: green] {
  id serial pk
  building_id int fk not null
  shaft_id int fk not null
  model_type varchar(50)
  capacity_kg int
  created_at timestamp [default: `now()`]
  updated_at timestamp [default: `now()`]
}

elevator_service_floors [icon: settings, color: yellow] {
  elevator_id int fk not null
  floor_id int fk not null
  primary key (elevator_id, floor_id)
}

elevator_status_logs [icon: activity, color: red] {
  id serial pk
  elevator_id int fk not null
  current_floor_id int fk
  status enum('IDLE', 'MOVING_UP', 'MOVING_DOWN', 'MAINTENANCE', 'OUT_OF_SERVICE')
  recorded_at timestamp [default: `now()`]
}

floor_requests [icon: hand, color: Yellow] {
  id serial pk
  building_id int fk not null
  source_floor_id int fk not null
  destination_floor_id int fk
  direction enum('UP', 'DOWN') not null
  status enum('PENDING', 'ASSIGNED', 'COMPLETED', 'CANCELLED') [default: 'PENDING']
  created_at timestamp [default: `now()`]
  updated_at timestamp [default: `now()`]
}

ride_assignments [icon: check-circle, color: green] {
  id serial pk
  request_id int fk unique not null
  elevator_id int fk not null
  assigned_at timestamp [default: `now()`]
  completed_at timestamp
  created_at timestamp [default: `now()`]
  updated_at timestamp [default: `now()`]
} 

ride_logs [icon: file-text, color: Red] {
  id serial pk
  ride_assignment_id int fk not null
  start_floor_id int fk not null
  end_floor_id int fk not null
  duration_seconds int
  distance_traveled_floors int
  created_at timestamp [default: `now()`]
}

maintenance_logs [icon: tool, color: orange] {
  id serial pk
  elevator_id int fk not null
  technician_name varchar(100)
  issue_description text
  action_taken text
  priority enum('LOW', 'MEDIUM', 'HIGH', 'EMERGENCY')
  resolved_at timestamp
  created_at timestamp [default: `now()`]
  updated_at timestamp [default: `now()`]
}

buildings.id < floors.building_id: [color: blue]
buildings.id < shafts.building_id: [color: blue]
buildings.id < elevators.building_id: [color: blue]
buildings.id < floor_requests.building_id: [color: blue]

shafts.id < elevators.shaft_id: [color: orange]

floors.id < elevator_service_floors.floor_id: [color: purple]
floors.id < floor_requests.source_floor_id: [color: purple]
floors.id < floor_requests.destination_floor_id: [color: purple]
floors.id < elevator_status_logs.current_floor_id: [color: purple]
floors.id < ride_logs.start_floor_id: [color: purple]
floors.id < ride_logs.end_floor_id: [color: purple]

elevators.id < elevator_service_floors.elevator_id: [color: green]
elevators.id < elevator_status_logs.elevator_id: [color: green]
elevators.id < ride_assignments.elevator_id: [color: green]
elevators.id < maintenance_logs.elevator_id: [color: green]

floor_requests.id - ride_assignments.request_id: [color: yellow]

ride_assignments.id - ride_logs.ride_assignment_id: [color: green]

```

## 📎 ERD 

![ER Diagram](ERD.png)