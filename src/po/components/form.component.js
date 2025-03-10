import logger from "@wdio/logger";
class FormComponent {
  constructor() {
    this.logger = logger("FormComponent")
  }
  
  // Selectors as XPath strings
  get selectors() {
    return {
      usernamefield: '//input[@id="user-name"]',
      passwordfield: '//input[@id="password"]',
      loginbutton: '//input[@id="login-button"]',
      errormessage: '//h3[@data-test="error"]',
    };
  }

  // Input method with direct selector access and logging
  input(param) {
    const selector = this.selectors[param.toLowerCase()];

    if (!selector) {
      this.logger.error(`Invalid selector parameter: ${param}`);
      throw new Error(`Invalid selector parameter: ${param}`);
    }

    this.logger.info(`Selecting element: ${param}`);
    return $(selector);
  }
}

export default FormComponent;