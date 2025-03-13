class LoginPageTagger{

    e = {
        logo: () => cy.get('img'),
        title: () => cy.get('p'),
        usernameInput: () => cy.get('[name="username"]'),
        passwordInput: () => cy.get('[name="password"]'),
        loginButton: () => cy.get('button[type="submit"]'),
        profileButton: () => cy.get('body > app-root > div > app-main-screen > app-header > header > table > tr > td.profile > div > span:nth-child(2) > button'),
       
        errorCredenciales: () => cy.get('.mat-mdc-form-field-error '),

        profileUsername: () => cy.get('.username > span'),
        qatest: () => cy.get('#mat-menu-panel-0 > div > button:nth-child(1) > span > span'),
        logoutLink: () => cy.get(':nth-child(3) > span')

    }

    logoVisible = () => {
        this.e.logo().should('be.visible');
    }

    titleVisible = () => { 
        this.e.title().should('have.text', 'Adding value to human talent by automating repetitive tasks.');
    }
     
    usernameInputVisible = () => {
        this.e.usernameInput().should('be.visible');
    }
    usernameInput = (user) => {
        this.e.usernameInput().type(user);
    }

    passwordInputVisible = () => {
        this.e.passwordInput().should('be.visible');
    }
    passwordInput = (pass) => {
        this.e.passwordInput().type(pass);
    }

    loginButtonVisible = () => {
        this.e.loginButton().should('be.visible');
    }

    loginButtonClicked = () => {
        this.e.loginButton().click();
    }
    profileButtonVisible = () => {
        this.e.profileButton().should('be.visible');
   
    }

    profileButtonClicked = () => {
        this.e.profileButton().click();
    }

    profileUsernameVisible = (nameUser) => {
        this.e.profileUsername().contains(nameUser);
    }
    qatestVisible = () => {
        this.e.qatest().contains('qatest');
    }

    logoutLinkVisible = () => {
        this.e.logoutLink().should('be.visible');
       
    }

    logoutLinkClicked = () => {
        this.e.logoutLink().click();
    }
}

export default new LoginPageTagger();
