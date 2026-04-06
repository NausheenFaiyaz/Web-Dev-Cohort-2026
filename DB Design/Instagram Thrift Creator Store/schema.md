# 🧾 ER Diagram Schema (Conceptual)

This file contains the conceptual schema used to design the ER Diagram.

```sql
colorMode bold
customers [icon: user, color: Blue]{
  id serial pk
  full_name varchar(100) not null
  instagram_handle varchar(50) unique not null
  whatsapp_number varchar(20) not null
  email varchar(100) unique null
  default_shipping_address text
  created_at timestamp [default: `now()`]
}

categories [icon: tag, color: Green]{
  id serial pk
  name varchar(50) unique not null
  description text
}

products [icon: shopping-bag, color: Purple]{
  id serial pk
  category_id int fk not null
  name varchar(255) not null
  description text
  base_price decimal(10,2) not null

  product_type enum('THRIFTED', 'HANDMADE') not null
  condition_note varchar(100) null

  size varchar(20) null
  color varchar(30) null
  is_active boolean [default: true]
  created_at timestamp [default: `now()`]
}

inventory [icon: package, color: Red]{
  id serial pk
  product_id int fk unique not null
  stock_quantity int not null [default: 1]
  last_restocked_at timestamp
}

orders [icon: shopping-cart, color: Yellow]{
  id serial pk
  customer_id int fk not null
  order_total decimal(10,2) not null
  order_status enum('PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED', 'CANCELLED')
  order_date timestamp [default: `now()`]
}

order_items [icon: list, color: Green]{
  id serial pk
  order_id int fk not null
  product_id int fk not null
  quantity int not null [default: 1]
  price_at_purchase decimal(10,2) not null
}

payments [icon: credit-card, color: Blue]{
  id serial pk
  order_id int fk not null
  payment_method enum('UPI', 'BANK_TRANSFER', 'WHATSAPP_PAY', 'COD')
  payment_amount decimal(10,2) not null
  payment_status enum('PENDING', 'SUCCESS', 'FAILED', 'REFUNDED')
  transaction_reference varchar(100) unique
  paid_at timestamp
}

shipping_details [icon: truck, color: Red]{
  id serial pk
  order_id int fk unique not null
  shipping_address text not null
  courier_service varchar(100) null
  tracking_number varchar(100) null
  shipping_status enum('PREPARING', 'IN_TRANSIT', 'DELIVERED', 'RETURNED')
  shipped_at timestamp
}

customers.id < orders.customer_id: [color: blue]
categories.id < products.category_id: [color: green]
products.id - inventory.product_id: [color: purple]

orders.id < order_items.order_id: [color: yellow]
products.id < order_items.product_id: [color: purple]

orders.id < payments.order_id: [color: yellow]
orders.id - shipping_details.order_id: [color: yellow]
 
```

## 📎 ERD 

![ER Diagram](ERD.png)