const sql = require("mssql");
const config = require("../settingsTemplate/dbConfig");
const dbPool = new sql.ConnectionPool(config, (err) => {
  if (err) {
    console.log("dbPool Error: " + err);
  }
});

class DBCourseRepository {
  getAllCustomers() {
    return dbPool
      .request()
      .execute("spCustomers_GetAll")
      .then((res) => {
        return res.recordset;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addPatient(patient) {
    console.log(patient);
    let request = dbPool.request();
    request.input("gender", sql.NVarChar(50), patient.gender);
    request.input("birth", sql.Date, patient.birth);
    request.input("age", sql.Int, patient.age);
    request.input(
      "HealthInsuranceCompany",
      sql.NVarChar(50),
      patient.HealthInsuranceCompany
    );
    request.input("PolicyNumber", sql.Int, patient.PolicyNumber);
    request.input("validUntil", sql.Date, patient.validUntil);
    request.input("MobileNum", sql.NVarChar(50), patient.MobileNum);
    request.input("FaxNum", sql.NVarChar(50), patient.FaxNum);
    request.input("EmailAddress", sql.NVarChar(50), patient.EmailAddress);
    request.input("Country", sql.NVarChar(50), patient.Country);
    request.input("city", sql.NVarChar(50), patient.city);
    request.input("Address", sql.NVarChar(50), patient.Address);
    request.input("zipCode", sql.Int, patient.zipCode);
    request.input("ID", sql.Int, patient.ID);

    return request
      .execute("spPatient_Insert")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }
}

module.exports = new DBCourseRepository();
