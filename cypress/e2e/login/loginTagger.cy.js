import LoginPageTagger from "../../pages/login/LoginPageTagger";

describe("Inicio de sesion", () => {
    let datoOK;
    let datosFailed;
    
    beforeEach(() => {
        cy.visit("/login");
        cy.fixture('datos.json').then((data) => {
            datoOK = data
        })
        cy.fixture('datosFailed.json').then((data) => {
            datosFailed = data
        })
    });

    it("Validacion de elementos de la pagina de login", () => {
        LoginPageTagger.logoVisible();
        LoginPageTagger.titleVisible();
        LoginPageTagger.usernameInputVisible();
        LoginPageTagger.passwordInputVisible();
        LoginPageTagger.loginButtonVisible();
        LoginPageTagger.loginButtonClicked();
    });

    it("Login tagger-ui-dev con credenciales incorrectas", () => {
        datosFailed.forEach(element => {
            LoginPageTagger.usernameInput(element.user);
            LoginPageTagger.passwordInput(element.pass);
            LoginPageTagger.loginButtonClicked();
            LoginPageTagger.e.errorCredenciales().contains('ERROR: Credenciales invalidas.');
        })
       
    });

    it("Login tagger-ui-dev con credenciales faltantes: Username", () => {
        LoginPageTagger.passwordInput(datoOK.pass);
        LoginPageTagger.loginButtonClicked();
        LoginPageTagger.e.errorCredenciales().contains('Llene este valor');
     
       
    });
    it("Login tagger-ui-dev con credenciales faltantes: Password", () => {
        LoginPageTagger.usernameInput(datoOK.user);
        LoginPageTagger.loginButtonClicked();
        LoginPageTagger.e.errorCredenciales().contains('Llene este valor');
    });

    it("Login y Logout tagger-ui-dev ok", () => {
        LoginPageTagger.usernameInput(datoOK.user);
        LoginPageTagger.passwordInput(datoOK.pass);
        LoginPageTagger.loginButtonClicked();
        cy.wait(2000);
         LoginPageTagger.profileButtonVisible();
         LoginPageTagger.profileButtonClicked();
         LoginPageTagger.profileUsernameVisible(datoOK.nameUser);
         LoginPageTagger.qatestVisible();
         LoginPageTagger.logoutLinkVisible();
         LoginPageTagger.logoutLinkClicked();
        
    });
})
