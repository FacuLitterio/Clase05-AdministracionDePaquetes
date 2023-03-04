const fs = require("fs");
const bcrypt = require("bcrypt");

class UserManager {
  constructor(filename) {
    this.filename = filename;
  }

  createUser = async (newUser) => {
    try {
      const filenameExists = fs.existsSync(this.filename);

      // File doesn't exists
      if (!filenameExists) {
        await fs.promises.writeFile(this.filename, "[]");
      }

      // File exists
      const userEncrypted = {
        userId: Date.now(),
        ...newUser,
        password: await this.encryptPassword(newUser.password),
      };

      const fileContent = await fs.promises.readFile(this.filename, "utf-8");
      // All Users
      const fileContentParsed = JSON.parse(fileContent);

      fileContentParsed.push(userEncrypted);
      // Another way
      //const allUsers = [...fileContentParsed, userEncrypted]

      await fs.promises.writeFile(
        this.filename,
        JSON.stringify(fileContentParsed, null, 2)
      );
    } catch (error) {
      throw error;
    }
  };

  validateUser = async (username, password) => {
    try {
      const fileContent = await fs.promises.readFile(this.filename, "utf-8");
      const fileContentParsed = JSON.parse(fileContent);

      const userFinded = fileContentParsed.find(
        (user) => user.username === username
      );

      if (!userFinded) throw new Error(`User ${username} Not Found!`);

      const isCorrectPassword = await bcrypt.compare(
        password,
        userFinded.password
      );

      if (!isCorrectPassword)
        throw new Error(`Password for User ${username} is Wrong!`);

      console.log("Logged In!");
    } catch (error) {
      throw error;
    }
  };

  encryptPassword = async (password) => {
    const encryptedPassword = await bcrypt.hash(password, 10);
    return encryptedPassword;
  };
}

module.exports = UserManager;
