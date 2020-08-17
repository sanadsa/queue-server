const DBConnection = {
  server: "sanadserver.database.windows.net",
  database: "queue",
  user: "sanadserver",
  password: "Sanazure1",
  options: {
    encrypt: true,
  },
  pool: {
    min: 2,
  },
};

module.exports = DBConnection;
