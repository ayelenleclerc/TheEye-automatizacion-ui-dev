class LoginPageAPP{
    e = {
        loginPageLogo: () => cy.get('.theeye-logo'),
        loginPageTitle: () => cy.get('.title'),
        loginPageSubTitle: () => cy.get('[data-hook="login-form-container"] > .subtitle'),
        usernameInput: () => cy.get('[placeholder="User or Email"]'),
        passwordInput: () => cy.get('[placeholder="Password"]'),
        loginButton: () => cy.get('[data-hook="start-login"]'),
        errorCredentials: () => cy.get('[data-dismiss="modal"]'),
        errorCredentialsText: () => cy.get('.bootbox-body'),
        errorCredentialsBtn: () => cy.get('[type="button"]'),
        errorFieldRequired: () => cy.get('[data-hook="message-text"]'),
        googleLoginButton: () => cy.get('[data-hook="google-login"]'),
        microsoftLoginButton: () => cy.get('[data-hook="microsoft-login"]'),
        forgotPasswordLink: () => cy.get('[data-hook="password-view-toggle"]'),
        registerText: () => cy.get('.register-link'),
        registerLinkText: () => cy.get('.register-link'),
        registerLink: () => cy.get('h2 > a'),
        profileIcon: () => cy.get('[data-hook="user-menu-toggle"]'),
        profileUsername: () => cy.get('[data-hook="username"]'),
        profileUser: () => cy.get('[data-hook="name"]'),
        profileEmail: () => cy.get('[data-hook="email"]'),
        logoutLink: () => cy.get('[data-hook="logout"]')
    }

    logo = () => {
        this.e.loginPageLogo().should('be.visible');
    }
    title = () => {
        this.e.loginPageTitle().should('have.text', 'We boost human talent by automating repetitive tasks');
    }
    subTitle = () => {
        this.e.loginPageSubTitle().should('have.text', 'Signin');   
    }


    typeUsername = (username) => {
        this.e.usernameInput().type(username);
    }

    typePassword = (password) => {
        this.e.passwordInput().type(password);
    }

    clickLoginButton = () => {
        this.e.loginButton().click();
    }

    loginButtonEnabled = () => {
        this.e.loginButton().should('be.enabled');
    }
    loginButtonVisible = () => {
        this.e.loginButton().should('be.visible');
    }

    googleLoginButtonVisible = () => {
        this.e.googleLoginButton().should('be.visible');
    }

    googleLoginButtonEnabled = () => {
        this.e.googleLoginButton().should('be.enabled');
    }
    microsoftLoginButtonVisible = () => {
        this.e.microsoftLoginButton().should('be.visible');
    }

    microsoftLoginButtonEnabled = () => {
        this.e.microsoftLoginButton().should('be.enabled');
    }
    forgotPasswordLinkVisible = () => {
        this.e.forgotPasswordLink().should('be.visible');
        this.e.forgotPasswordLink().should('have.text', 'Forgot password?');
    }

    clickForgotPasswordLink = () => {
        this.e.forgotPasswordLink().click();
    }

    registerTextVisible = () => {
        this.e.registerText().should('be.visible');
        
    }


    
    registerLinkVisible = () => {
        this.e.registerLinkText().should('be.visible');
        this.e.registerLinkText().contains('Register here');
    }

    clickRegisterLink = () => {
        this.e.registerLink().click();
    }
    clickGoogleLoginButton = () => {
        this.e.googleLoginButton().click();
    }

    clickMicrosoftLoginButton = () => {
        this.e.microsoftLoginButton().click();
    }

    clickForgotPassword = () => {
        this.e.forgotPasswordLink().click();
    }

    clickregisterLink = () => {
        this.e.registerLink().click();
    }

    profileVisible = () => {
        this.e.profileIcon().click();
    }

    profileUsernameVisible = (username) => {
        this.e.profileUsername().contains(username);
    }

    profileUserVisible = (nameUser) => {
        
        this.e.profileUser().contains(nameUser);
    }

    profileEmailVisible = (email) => {
       
        this.e.profileEmail().contains(email);
    }

    clickProfile = () => {
        this.e.profileIcon().click();
    }

    clickLogout = () => {
        this.e.logoutLink().click();
    }
}


export default new LoginPageAPP();