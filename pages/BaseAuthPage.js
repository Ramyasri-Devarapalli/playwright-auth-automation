export class BaseAuthPage {

  constructor(page) {
    this.page = page;

    this.signupButton = page.getByRole('button', { name: 'Sign Up' });
    this.loginTab = page.getByText('Login');
    this.signupWithEmail=page.getByRole('button',{name:'Sign Up with Email'});
    this.loginButton = page.getByRole('button',{name:'Login With Email or Alias'});
    this.anoymousButton=page.getByText('Anonymous Sign Up');

    this.usernameInput = page.getByRole('textbox', {name: 'Please enter your name or alias'});
    this.emailInput = page.getByRole('textbox', {name: 'Enter a valid email address'});
    this.passwordInput = page.getByRole('textbox', {name: 'Enter your Password'});
    this.continueLoginButton = page.getByRole('button', { name: 'Login' });
    this.continueButton=page.getByRole('button',{name:'Continue'});
    this.anonymousPassword = page.getByRole('textbox',{name:'Minimum 8 Characters'});

    this.signupSuccess = page.getByText('Registered Successfully!! Please Check your mail to verify your account...');
    this.alreadyRegistered = page.getByRole('modal', { name: 'Account Already Exists!' });
    this.anonymousUserExists = page.getByRole('modal',{name:"It seems you've already created an anonymous account. Please "});
    this.loginSuccesful=page.getByText('Login Success');
    this.loginFailed=page.getByText('Invalid credentials')
  }

  async navigate() {
    await this.page.goto('https://healotest.infiheal.com/');

  }

  async clickSignup() {
    await this.signupButton.click();
  }

  async clickLogin() {
    await this.loginTab.click();
    await this.loginButton.click();
  }
 async clickAnonymousSignUp() {
    await this.anoymousButton.click();
  }
  async enterUsername(username) {
    if (username) await this.usernameInput.fill(username);
  }

  async enterEmail(email) {
    if (email) await this.emailInput.fill(email);
  }

  async enterPassword(password) {
    if (password) await this.passwordInput.fill(password);
  }

  async enterAnonymousPassword(passwordAnonymous){
    if(passwordAnonymous)await this.anonymousPassword.fill(passwordAnonymous);
  }

  async submit() {
    await this.continueLoginButton.click();
  }
  async clickSignUpSubmit(){
    await this.signupWithEmail.click(); 
  }

  async continue(){
    await this.continueButton.click();
  }
  async getSignupResult() {
        if (await this.signupSuccess.isVisible()) {
            return 'Signup success';
        } else if (await this.alreadyRegistered.isVisible()) {
            return 'User Already Registered';
        } else {
            return 'unknown';
        }
    }

  async getAnonymousSignupResult() {
        if (await this.loginSuccesful.isVisible()) {
            return 'Anonymous Signup Success';
        } else if (await this.anonymousUserExists.isVisible()) {
            return 'Anonymous User Already Exists';
        } else {
            return 'unknown';
        }
   }
  async getLoginResult() {
        if (await this.loginSuccesful.isVisible()) {
            return 'Login success';
        } else if (await this.loginFailed.isVisible()) {
            return 'Invalid Credentials';
        } else {
            return 'unknown';
        }
      }
  async getAnonymousLoginResult(){
    if(await this.loginSuccesful.isVisible()){
      return 'Login success';
    }
    else if(await this.anonymousUserExists.isVisible()){
      return 'Anonymous User Already Exists';
    }
    else return 'unknown';
  }
}