require("dotenv").config();
const app = require("./api/index.js");
const { initializeDatabase } = require("./db/db.connection");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await initializeDatabase();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Connected to database`);
  });
};

startServer();