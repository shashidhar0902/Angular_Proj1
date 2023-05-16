module.exports = {
  HOST: "localhost",
  PORT: "",
  USER: "",
  PASSWORD: "",
  DB: "deletedb",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
