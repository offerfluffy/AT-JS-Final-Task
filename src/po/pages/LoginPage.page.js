import FormComponent from "../components/form.component";

class LoginPage {
  constructor() {
    this.form = new FormComponent(); // // Initialize form component for login interactions
  }

  async open() {
    await browser.url("https://www.saucedemo.com/"); // Navigate to the login page
  }
}

export default LoginPage;
