import LoginPage from "../po/pages/LoginPage.page.js";
import { emptyCredentials, usernameOnly, validCredentials } from "./testData";
import logger from "@wdio/logger";

const log = logger("LoginTests");
const loginPage = new LoginPage();

describe("Login Form Test", () => {
  beforeEach(async () => {
    log.info("Opening login page");
    await loginPage.open();
  });

  describe("UC-1 Test Login form with empty credentials", () => {
    it('should show error message "Username is required" when credentials are empty', async () => {
      log.info("Testing login with empty credentials");
      try {
        await loginPage.form.input("usernameField").setValue("test");
        await loginPage.form.input("passwordField").setValue("test");
        await loginPage.form.input("usernameField").clearValue();
        await loginPage.form.input("passwordField").clearValue();
        
        await loginPage.form.input("loginButton").click();
        log.info("Clicked login button");

        await expect(loginPage.form.input("errorMessage")).toBeDisplayed();
        await expect(loginPage.form.input("errorMessage")).toHaveText(
          emptyCredentials.error
        );
      } catch (error) {
        log.error("Test failed: " + error);
        throw error;
      }
    });
  });

  describe("UC-2 Test Login form with credentials by passing Username", () => {
    it('should show error message "Password is required" when credentials have only valid Username', async () => {
      log.info("Testing login with username only");
      try {
        await loginPage.form.input("usernameField").setValue("test");
        await loginPage.form.input("passwordField").setValue("test");
        await loginPage.form.input("passwordField").clearValue();
        
        await loginPage.form.input("usernameField").setValue(usernameOnly.username);
        await loginPage.form.input("loginButton").click();
        log.info("Clicked login button");

        await expect(loginPage.form.input("errorMessage")).toBeDisplayed();
        await expect(loginPage.form.input("errorMessage")).toHaveText(
          usernameOnly.error
        );
      } catch (error) {
        log.error("Test failed: " + error);
        throw error;
      }
    });
  });

  describe("UC-3 Test Login form with valid credentials", () => {
    it("should pass to dashboard when credentials are valid", async () => {
      log.info("Testing login with valid credentials");
      try {
        await loginPage.form.input("usernameField").setValue(validCredentials.username);
        await loginPage.form.input("passwordField").setValue(validCredentials.password);
        await loginPage.form.input("loginButton").click();
        log.info("Clicked login button");

        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toEqual("https://www.saucedemo.com/inventory.html");
        log.info("Successfully navigated to dashboard");
      } catch (error) {
        log.error("Test failed: " + error);
        throw error;
      }
    });
  });
});
