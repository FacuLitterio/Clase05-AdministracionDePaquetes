const moment = require("moment");

const today = moment();
const myBirthday = moment("1996-10-20", "YYYY-MM-DD");

if (myBirthday.isValid()) {
  console.log(
    `Desde mi nacimiento han pasado ${today.diff(myBirthday, "days")} dias`
  );
} else {
  console.error("La fecha es invalida");
}
