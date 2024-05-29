CREATE TABLE delivery_orders (
        id SERIAL PRIMARY KEY,
        snack VARCHAR(50) NOT NULL,
        full_name VARCHAR(100) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        address TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE delivery_table (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(100) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        email VARCHAR(20) NOT NULL,
        num_of_people INT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
);