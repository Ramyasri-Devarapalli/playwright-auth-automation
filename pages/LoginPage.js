import { BaseAuthPage } from './BaseAuthPage';

export class LoginPage extends BaseAuthPage {

  async login(email, password) {

    
    await this.clickSignup();
    await this.loginTab.waitFor({ state: 'visible' });
    await this.clickLogin();
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.submit();
  }
}
