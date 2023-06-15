My Bus Journey MVP

### Basic Requirments (to do everytime you open this project)

- Run project directory from terminal input `cd client` then `npm run dev` to view the front end (local host browser view)
- - Run `npm start` in project directory from terminal to start the Express server on port 4000

### 1. Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).

###

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called savedfavourites: `create database journey_planner`. To check this has been done in mysql type command `show databases`;

- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=journey_planner
  DB_PASS=root
```

Ensure you created the env in the project folder and not a sub folder or the file will not work.

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create a table called 'favourites' in your database.

- Make sure you understand how the `favourites` table is constructed. In your MySQL console, you can run `use journey_planner;` and then `describe favourites;` to see the structure of the products table.

- favourites will include a table with the following fields: name, start, end, mode, fare and image
  //////ADD SCREEN SHOT FROM MY SQL
- Everytime you make a change to the init_db_sql file you need to run `npm run migrate`

### Development

- Run `npm start` in project directory to start the Express server on port 4000
- In another terminal, in the project directory do `cd client` and run `npm run dev` to start the client in development mode with hot reloading in port 5173 (front end)

// if the server is not working - check the package.json has the scaffodling e.g. this was just nodemon however updated to this: "start": "nodemon ./bin/www",

// ctrl c to kill a server
