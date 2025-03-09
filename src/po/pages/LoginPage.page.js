import FormComponent from "../components/form.component";

class LoginPage {
  constructor() {
    this.form = new FormComponent();
  }

  async open() {
    await browser.url("https://www.saucedemo.com/");
  }
}

export default LoginPage;
