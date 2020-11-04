<!-- devDependencies -->
npm install -D babel/core babel/preset-env babel/preset-react babel-loader webpack webpack-cli

    "@babel/core": "^7.11.1",
    "@babel/preset-env": "^7.11.0",
    "@babel/preset-react": "^7.10.4",
    "babel-loader": "^8.1.0",
    "webpack": "^4.44.1",
    "webpack-cli": "^3.3.12"

<!-- dependencies -->
npm install axios express mysql react react-dom
npm i styled-components styled-react-modal

    "axios": "^0.19.2",
    "express": "^4.15.0",
    "mysql": "^2.16.0",
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "sqlite3": "^4.0.6"

<!-- scripts -->
  "scripts": {
    "react-dev": "webpack -d --watch",
    "start": "nodemon server/index.js",
    "seed": "mysql -u root< schema.sql"
  },

<!-- terminal   -->
start server: npm start;
start bundle: npm run react-dev;
run db: npm urn seed;
start mysql: mysql -u root;


