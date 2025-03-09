class FormComponent {
  input(param) {
    const selectors = {
      usernamefield: 'input[@id="user-name"]',
      passwordfield: 'input[@id="password"]',
      loginbutton: 'input[@id="login-button"]',
      errormessage: 'h3[@data-test="error"]'
    };

    return $(`//${selectors[param.toLowerCase()]}`)
  }
}

export default FormComponent;