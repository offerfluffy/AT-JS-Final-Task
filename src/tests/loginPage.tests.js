import LoginPage from "../po/pages/LoginPage.page.js";
import {
  emptyCredentials,
  usernameOnly,
  validCredentials,
  loggerMessages,
  urls,
} from "../data/testData.js";
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
        log.info("Setting empty username and password");
        await loginPage.fillLoginForm(
          emptyCredentials.username,
          emptyCredentials.password
        );

        await loginPage.clearLoginFormFields("UC1");

        await loginPage.submitLoginForm();

        await loginPage.checkErrorMessage(
          emptyCredentials.error,
          loggerMessages.UC1
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
        await loginPage.fillLoginForm(
          usernameOnly.username,
          usernameOnly.password
        );

        await loginPage.clearLoginFormFields("UC2");

        await loginPage.submitLoginForm();

        await loginPage.checkErrorMessage(
          usernameOnly.error,
          loggerMessages.UC2
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
        await loginPage.fillLoginForm(
          validCredentials.username,
          validCredentials.password
        );

        await loginPage.submitLoginForm();

        log.info("Verifying navigation to dashboard");
        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toEqual(urls.dashboardUrl);
        log.info("Successfully navigated to the dashboard");
      } catch (e) {
        log.error("Test failed: " + e);
        throw e;
      }
    });
  });
});
