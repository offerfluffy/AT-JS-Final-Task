# at-js-final-task

## Installation

Follow these steps to set up the project locally:

1. Navigate to the project directory:
   ```sh
   cd at-js-final-task
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Configuration

The WebDriverIO configuration is defined in `src/config/wdio.conf.js`. Key settings include:

- **Runner**: Local execution.
- **Browser**: Firefox (configured in capabilities). Microsoft Edge is supported but commented out.
- **Test Files**: Located in `src/tests/*.js`.
- **Framework**: Mocha with BDD style (`describe`, `it`).
- **Reporter**: Spec reporter for detailed console output.
- **Timeouts**: 10 seconds for element waits, 60 seconds for test timeouts.

### Customizing Configuration

To run tests on Microsoft Edge, uncomment the Edge capability in `src/config/wdio.conf.js`:
```js
capabilities: [
  {
    browserName: 'MicrosoftEdge'
  },
  {
    browserName: 'firefox'
  }
],
```

Adjust the `specs` path if your test files are moved to a different directory.

## Running Tests

Execute the tests with the following command from the project root:

```sh
npm run wdio
```

This command runs the tests in Firefox and outputs the results to the console using the spec reporter.

### Expected Output

The test suite will execute three test cases, displaying results such as:

- **UC-1**: Pass if the "Username is required" error is shown.
- **UC-2**: Pass if the "Password is required" error is shown.
- **UC-3**: Pass if the login redirects to the dashboard with the correct URL and title.

## Test Cases

The test suite, located in `src/po/tests/loginPage.tests.js`, covers three use cases:

### **UC-1: Test Login with Empty Credentials**
- **Action**: Clear both username and password fields, then click the login button.
- **Expected Result**: Error message: *"Epic sadface: Username is required"*.

### **UC-2: Test Login with Only Username**
- **Action**: Enter a valid username (`standard_user`), clear the password field, then click the login button.
- **Expected Result**: Error message: *"Epic sadface: Password is required"*.

### **UC-3: Test Login with Valid Credentials**
- **Action**: Enter valid credentials (`standard_user`, `secret_sauce`), then click the login button.
- **Expected Result**: Successful login, redirecting to `https://www.saucedemo.com/inventory.html` with the page title *"Swag Labs"*.

## Project Structure

The project is organized as follows:

```
at-js-final-task/
├── src/
│   ├── config/
│   │   └── wdio.conf.js          # WebDriverIO configuration
│   ├── po/
│   │   ├── components/
│   │   │   └── form.component.js # Form component with XPath selectors
│   │   └── pages/
│   │       └── LoginPage.page.js # Login page object
│   ├── tests/
│   │   ├── loginPage.tests.js    # Test specifications
│   │   └── testData.js           # Test data for login scenarios
├── package.json                  # Project metadata and scripts
└── README.md                     # This documentation
```

## Key Files

- **`src/po/tests/loginPage.tests.js`**: Defines the test cases using Mocha and WebDriverIO assertions.
- **`src/po/pages/LoginPage.page.js`**: Implements the `LoginPage` class, which interacts with the login form via `FormComponent`.
- **`src/po/components/form.component.js`**: Provides a `FormComponent` class with methods to locate form elements using XPath selectors.
- **`src/config/wdio.conf.js`**: Configures the test runner and browser settings.
- **`src/po/tests/testData.js`**: Exports test data for the three scenarios:

```js
emptyCredentials: { username: "", password: "", error: "Epic sadface: Username is required" }
usernameOnly: { username: "standard_user", password: "", error: "Epic sadface: Password is required" }
validCredentials: { username: "standard_user", password: "secret_sauce", error: "" }
```

## Test Data Parameterization

The test data is managed in `src/po/tests/testData.js`, allowing parameterization of test cases. This ensures the tests can easily be extended to cover additional scenarios by updating the data file without modifying the test logic.

## Troubleshooting

If tests fail to run, check the following:

- **File Paths**: Ensure `wdio.conf.js` points to the correct test files (`src/po/tests/*.js`).
- **Dependencies**: Run `npm install` to ensure all packages are installed.
- **Browser**: Verify Firefox is installed and up to date.
- **Logs**: Review the console output for detailed error messages.
- For additional debugging, set `logLevel: 'debug'` in `wdio.conf.js` to get more detailed logs.

## Author

**Kyrylo Sheludchenko**