export const emptyCredentials = {
  username: "test",
  password: "test",
  error: "Epic sadface: Username is required",
};

export const usernameOnly = {
  username: "standard_user",
  password: "test",
  error: "Epic sadface: Password is required",
};

export const validCredentials = {
  username: "standard_user",
  password: "secret_sauce",
  error: "",
};

export const filedNames = {
  username: "usernameField",
  password: "passwordField",
  login: "loginButton",
  error: "errorMessage",
};

export const loggerMessages = {
  UC1: "empty credentials",
  UC2: "missing password" 
}

export const urls = {
  baseUrl: "https://www.saucedemo.com/",
  dashboardUrl: "https://www.saucedemo.com/inventory.html"
}