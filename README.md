# dmi_corp_api

This simple API was built using Node/Express and uses a PostgreSQL database.
Steps to set up and use this API:

- First, clone this repository and install the required Node libraries:
  ```console
  $ npm install
  ```
- Then create a database called `dmi_test`. You will need to have PostgreSql installed.
- You can copy and paste the psql commands into your psql terminal to create the database and table.

-Create the database.

```sql
CREATE DATABASE dmi_test;
```

-Then connect to the database named 'dmi_test'

-Then create the table called 'strings'.

```sql
CREATE TABLE strings (id SERIAL PRIMARY KEY,text TEXT);
```

-Once your database is set up, you can run the command `nodemon` from the project folder and the server will start on PORT 5000.
