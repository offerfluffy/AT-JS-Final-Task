# Automated Testing

## Task Description
This project automates testing of the login functionality on https://www.saucedemo.com/ using WebdriverIO. The following user cases are covered:

- **UC-1**: Test login form with empty credentials.
  - Steps: Enter any credentials, clear inputs, click login, verify "Username is required" error.
- **UC-2**: Test login with only username.
  - Steps: Enter username, enter password, clear password, click login, verify "Password is required" error.
- **UC-3**: Test login with valid username and password.
  - Steps: Enter "standard_user" and "secret_sauce", click login, verify dashboard title "Swag Labs".

## Requirements
- **Tool**: WebdriverIO
- **Browsers**: Edge, Firefox
- **Locators**: XPath
- **Patterns**: Page Object Model
- **Assertions**: Mocha/WebdriverIO

## Setup
1. Install dependencies: `npm install`
2. Run tests: `npm run wdio`