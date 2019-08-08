
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "auth_status" boolean default false
);

CREATE table gallery_items(
	"id" SERIAL PRIMARY KEY,
	"photo_url" varchar (250) NOT NULL,
	"name" varchar (20) NOT NULL,
	"price" varchar (10) NOT NULL,
	"description" varchar (50) NOT NULL
	);
	
	
CREATE table home_page_content(
	"id" SERIAL PRIMARY KEY,
	"photo_url" varchar (256),
	"name" varchar (32),
	"description" varchar (32)
	);
	
INSERT into "gallery_items" ("photo_url", "name", "price", "description")
VALUES ('images/stock1.jpg', 'Stock One', '$40000', 'This is the first stock image'), 
		('images/stock2.jpg', 'Stock Two', '$40000', 'This is the second stock image'),
		('images/stock3.jpg', 'Stock Three', '$40000', 'This is the third stock image');
		
INSERT into "home_page_content" ("photo_url", "name", "description")
VALUES ('images/stock4.jpg', 'Stock Four', 'Art Party'), 
		('images/stock5.jpg', 'Stock Five', 'Free Show'),
		('images/stock6.jpg', 'Stock Six', 'St. Paul Crawl');