# 🚀 Automated Testing of Saucedemo Login

## 📌 Project Overview
This project automates the testing of the login functionality on [SauceDemo](https://www.saucedemo.com/) using **WebdriverIO**.  

The following **user cases (UCs)** are covered:

### ✅ UC-1: Test Login Form with Empty Credentials
- **Steps**:
  1. Enter any credentials in the **Username** and **Password** fields.
  2. Clear both inputs.
  3. Click the **Login** button.
  4. Verify that the error message **"Username is required"** is displayed.

### ✅ UC-2: Test Login with Only Username
- **Steps**:
  1. Enter a valid **Username**.
  2. Enter any text in the **Password** field.
  3. Clear the **Password** input.
  4. Click the **Login** button.
  5. Verify that the error message **"Password is required"** is displayed.

### ✅ UC-3: Test Login with Valid Credentials
- **Steps**:
  1. Enter the valid **Username**: `standard_user`
  2. Enter the valid **Password**: `secret_sauce`
  3. Click the **Login** button.
  4. Verify that the dashboard title is **"Swag Labs"**.

---

## ⚙️ Tech Stack & Tools
- **Test Automation Framework**: [WebdriverIO](https://webdriver.io/)
- **Browsers**: Edge, Firefox
- **Locators**: XPath
- **Design Pattern**: Page Object Model (POM)
- **Assertions Framework**: Mocha/WebdriverIO
- **Logging**: WebdriverIO Logger