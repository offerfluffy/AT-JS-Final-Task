import { filedNames, urls } from "../../data/testData.js";
import FormComponent from "../components/form.component";
import logger from "@wdio/logger";

const log = logger("LoginPage");

class LoginPage {
  constructor() {
    this.form = new FormComponent(); // Initialize form component for login interactions
  }

  async open() {
    await browser.url(urls.baseUrl); // Navigate to the login page
  }

  async fillLoginForm(username, password) {
    // Fill in the login form fields
    await this.form.input(filedNames.username).setValue(username);
    await this.form.input(filedNames.password).setValue(password);
  }

  async clearField(fieldName) {
    log.info(`Clearing field: ${fieldName}`);
    await this.form.input(fieldName).doubleClick();
    await browser.keys(["Backspace"]); // Simulate user actions
  }

  async clearLoginFormFields(UC) {
    // Clear fields based on the test case (UC)
    switch (UC) {
      case "UC1": // Clear both username and password for empty credentials case
        await this.clearField(filedNames.username);
        await this.clearField(filedNames.password);
        break;
      case "UC2": // Clear only the password field when username is provided
        await this.form.input(filedNames.username).doubleClick(); 
        await this.clearField(filedNames.password);
        break;
      default:
        throw new Error("Invalid UC"); // Handle incorrect test case identifier
    }
  }

  async submitLoginForm() {
    log.info("Clicking login button");
    await this.form.input(filedNames.login).click(); // Submit the login form
  }

  async checkErrorMessage(errorMessage, loggerMessage) {
    log.info(`Verifying error message for ${loggerMessage}`);
    await expect(this.form.input(filedNames.error)).toBeDisplayed(); // Ensure error message is shown
    await expect(this.form.input(filedNames.error)).toHaveText(errorMessage); // Validate error text
  }
}

export default LoginPage;
