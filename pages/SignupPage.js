import { BaseAuthPage } from './BaseAuthPage';

export class SignupPage extends BaseAuthPage {

  async signup(username, email, password) {

    await this.clickSignup();
    await this.clickSignUpSubmit();
    await this.enterUsername(username);
    await this.enterEmail(email);
    await this.enterAnonymousPassword(password);
    await this.continue();
  }
}
