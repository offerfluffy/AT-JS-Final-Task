import LoginPage from "../po/pages/LoginPage.page.js";
import {
  emptyCredentials,
  usernameOnly,
  validCredentials,
  filedNames,
} from "./testData";
import logger from "@wdio/logger";

const log = logger("LoginTests");
const loginPage = new LoginPage();
const { username, password, login, error } = filedNames;

describe("Login Form Test", () => {
  beforeEach(async () => {
    log.info("Opening login page");
    await loginPage.open();
  });

  describe("UC-1 Test Login form with empty credentials", () => {
    it('should show error message "Username is required" when credentials are empty', async () => {
      log.info("Testing login with empty credentials");

      try {
        log.info("Setting empty username and password");
        await loginPage.form
          .input(username)
          .setValue(emptyCredentials.username);
        await loginPage.form
          .input(password)
          .setValue(emptyCredentials.password);

        log.info("Clearing username and password fields");
        await loginPage.form.input(username).doubleClick();
        await browser.keys(["Backspace"]);
        await loginPage.form.input(password).doubleClick();
        await browser.keys(["Backspace"]);

        await browser.pause(500);

        log.info("Clicking login button");
        await loginPage.form.input(login).click();

        log.info("Verifying error message for empty credentials");
        await expect(loginPage.form.input(error)).toBeDisplayed();
        await expect(loginPage.form.input(error)).toHaveText(
          emptyCredentials.error
        );
        log.info("Error message displayed as expected");
      } catch (e) {
        log.error("Test failed: " + e);
        throw e;
      }
    });
  });

  describe("UC-2 Test Login form with credentials by passing Username", () => {
    it('should show error message "Password is required" when credentials have only valid Username', async () => {
      log.info("Testing login with username only");

      try {
        log.info("Setting username and empty password");
        await loginPage.form.input(username).setValue(usernameOnly.username);
        await loginPage.form.input(password).setValue(usernameOnly.password);

        log.info("Clearing username and password fields");
        await loginPage.form.input(username).doubleClick();
        await loginPage.form.input(password).doubleClick();
        await browser.keys(["Backspace"]);

        await browser.pause(500);

        log.info("Clicking login button");
        await loginPage.form.input(login).click();

        log.info("Verifying error message for missing password");
        await expect(loginPage.form.input(error)).toBeDisplayed();
        await expect(loginPage.form.input(error)).toHaveText(
          usernameOnly.error
        );
        log.info("Error message displayed as expected");
      } catch (e) {
        log.error("Test failed: " + e);
        throw e;
      }
    });
  });

  describe("UC-3 Test Login form with valid credentials", () => {
    it("should pass to dashboard when credentials are valid", async () => {
      log.info("Testing login with valid credentials");
      
      try {
        log.info("Setting valid username and password");
        await loginPage.form
          .input(username)
          .setValue(validCredentials.username);
        await loginPage.form
          .input(password)
          .setValue(validCredentials.password);

        log.info("Clicking login button");
        await loginPage.form.input(login).click();

        log.info("Verifying navigation to dashboard");
        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toEqual(
          "https://www.saucedemo.com/inventory.html"
        );
        log.info("Successfully navigated to the dashboard");
      } catch (e) {
        log.error("Test failed: " + e);
        throw e;
      }
    });
  });
});
