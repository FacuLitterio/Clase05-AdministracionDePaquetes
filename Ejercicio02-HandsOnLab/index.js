const UserManager = require("./UserManager");

const FILENAME = "./Usuarios.json";

const userManager = new UserManager(FILENAME);

const executeApp = async () => {
  //   await userManager.createUser({
  //     firstname: "Gaston",
  //     lastname: "Litterio",
  //     username: "GastonLitte",
  //     password: "1234567890",
  //   });

  try {
    await userManager.validateUser("GastonLitte", "1234567890");
  } catch (error) {
    console.error(error);
  }
};

executeApp();

/**
 *
 * Funcion IIFE 
(async () => {
  await userManager.createUser();
})();
 * 
 */
