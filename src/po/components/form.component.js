class FormComponent {
  // Selectors as XPath strings
  get selectors() {
    return {
      usernamefield: '//input[@id="user-name"]',
      passwordfield: '//input[@id="password"]',
      loginbutton: '//input[@id="login-button"]',
      errormessage: '//h3[@data-test="error"]',
    };
  }

  // Input method with direct selector access
  input(param) {
    const selector = this.selectors[param.toLowerCase()];

    if (!selector) {
      throw new Error(`Invalid selector parameter: ${param}`);
    }
    return $(selector);
  }
}

export default FormComponent;
