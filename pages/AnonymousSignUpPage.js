import { BaseAuthPage } from './BaseAuthPage';

export class AnonymousSignUpPage extends BaseAuthPage {

  async anonymousSignup(username,passwordAnonymous) {
    await this.clickSignup();
    await this.clickAnonymousSignUp();
    await this.enterUsername(username);
    await this.enterAnonymousPassword(passwordAnonymous);
    await this.continue();
  }
}
