import LoginPage from "../po/pages/LoginPage.page.js";
import { emptyCredentials, usernameOnly, validCredentials } from "./testData";

const loginPage = new LoginPage();

describe("Login Form Test", () => {
  beforeEach(async () => {
    await loginPage.open();
  });

  describe("UC-1 Test Login form with empty credentials", () => {
    it('should show error message "Username is required" when credentials are empty', async () => {
      await loginPage.form
        .input("usernameField")
        .setValue(emptyCredentials.username);
      await loginPage.form
        .input("passwordField")
        .setValue(emptyCredentials.password);

      await loginPage.form.input("usernameField").clearValue();
      await loginPage.form.input("passwordField").clearValue();

      await loginPage.form.input("loginButton").click();

      await expect(loginPage.form.input("errorMessage")).toBeDisplayed();
      await expect(loginPage.form.input("errorMessage")).toHaveText(
        emptyCredentials.error
      );
    });
  });

  describe("UC-2 Test Login form with credentials by passing Username", () => {
    it('should show error message "Password is required" when credentials have only valid Username', async () => {
      await loginPage.form
        .input("usernameField")
        .setValue(usernameOnly.username);
      await loginPage.form
        .input("passwordField")
        .setValue(usernameOnly.password);

      await loginPage.form.input("passwordField").clearValue();

      await loginPage.form.input("loginButton").click();

      await expect(loginPage.form.input("errorMessage")).toBeDisplayed();
      await expect(loginPage.form.input("errorMessage")).toHaveText(
        usernameOnly.error
      );
    });
  });

  describe("UC-3 Test Login form with credentials by passing Username & Password", () => {
    it("should navigate to dashboard when credentials have valid Username and Password", async () => {
      await loginPage.form
        .input("usernameField")
        .setValue(validCredentials.username);
      await loginPage.form
        .input("passwordField")
        .setValue(validCredentials.password);

      await loginPage.form.input("loginButton").click();

      const currentUrl = await browser.getUrl();
      await expect(currentUrl).toEqual("https://www.saucedemo.com/inventory.html");

      const pageTitle = await browser.getTitle();
      await expect(pageTitle).toEqual("Swag Labs");
    });
  });
});
