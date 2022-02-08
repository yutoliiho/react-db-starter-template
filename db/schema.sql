-- DROP DATABASE IF EXISTS calendar;

-- CREATE DATABASE calendar;

-- USE calendar;

-- CREATE TABLE listings (
--   id INT NOT NULL AUTO_INCREMENT,
--   nightly_fee SMALLINT NOT NULL,
--   rating DECIMAL(3,2),
--   reviews INT
--   -- minimum_stay TINYINT NOT NULL,
--   -- maximum_guest TINYINT NOT NULL,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE reservations (
--   id INT NOT NULL AUTO_INCREMENT,
--   listing_id INT NOT NULL,
--   booked_date DATE NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (listing_id) REFERENCES listings(id)
-- );

-- INSERT INTO listings(nightly_fee, rating, reviews) value (100, 3.2, 10);
-- INSERT INTO reservations (listing_id, booked_date) value (1, '2020-08-11')

-- 交易时间,交易类型,交易对方,商品,收/支,金额(元),支付方式,当前状态,交易单号,商户单号,备注

-- DROP DATABASE IF EXISTS wechat_bill;
-- CREATE DATABASE wechat_bill;
-- USE wechat_bill;

-- CREATE TABLE all_expenses (
--   tran_time TIMESTAMP NOT NULL,
--   tran_type VARCHAR(255) NOT NULL,
--   store VARCHAR(255) NULL,
--   item VARCHAR(255) NULL,
--   in_out VARCHAR(255) NULL,
--   amount VARCHAR(255) NULL,
--   method VARCHAR(255) NULL,
--   status VARCHAR(255) NULL,
--   id VARCHAR(255) NULL,
--   bus_id VARCHAR(255) NULL,
--   misc VARCHAR(255) NULL
-- );
DROP DATABASE IF EXISTS shopping_list;
CREATE DATABASE shopping_list;
USE shopping_list;

CREATE TABLE dinner (
  itemName VARCHAR(255) NOT NULL,
  quantity INT NOT NULL DEFAULT 1
);
INSERT INTO dinner (itemName, quantity) VALUES ("Milk", 1);
INSERT INTO dinner (itemName, quantity) VALUES ("Egg", 1);
INSERT INTO dinner (itemName, quantity) VALUES ("Bread", 1);

-- CREATE TABLE test (
--   name VARCHAR(255) NOT NULL,
--   age INT NOT NULL,
--   color VARCHAR(255) NOT NULL
--   );

-- INSERT INTO test (name,age,color) VALUES ('pepper', 6, 'gray');
-- INSERT INTO listings (nightly_fee) VALUES (100), (200);
-- INSERT INTO Reservation (listing_id, check_in, check_out) VALUES(1, '2020-08-11');
