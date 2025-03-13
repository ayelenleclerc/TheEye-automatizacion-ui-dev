import LoginPage from "../../pages/login/LoginPageAPP";

describe("Inicio de sesion", () => {
    let datosOK;
    let datosFailed;
    beforeEach(() => {
        cy.visit("https://app.theeye.io/login");
        cy.fixture("/datos.json").then((datos) => {
            datosOK = datos;
        });
        cy.fixture('datosFailed.json').then((data) => {
            datosFailed = data
        })
    });

    it('Se valida la presencia de todos los elementos de la pantalla de login', () => {
        LoginPage.logo()
        LoginPage.title()
        LoginPage.subTitle()
        LoginPage.loginButtonEnabled()
        LoginPage.loginButtonVisible()
        LoginPage.googleLoginButtonVisible()
        LoginPage.googleLoginButtonEnabled()
        LoginPage.microsoftLoginButtonVisible()
        LoginPage.microsoftLoginButtonEnabled()
        LoginPage.forgotPasswordLinkVisible()
        LoginPage.registerTextVisible()
        LoginPage.registerLinkVisible()
    });

    it("Login APP credenciales incorrectas", () => {
         datosFailed.forEach(element => {
        LoginPage.typeUsername(element.user);
        LoginPage.typePassword(element.pass);
        LoginPage.clickLoginButton();
        LoginPage.e.errorCredentials().should('be.visible');
        LoginPage.e.errorCredentialsText().contains('Invalid credentials.');
        LoginPage.e.errorCredentialsBtn().contains('OK').click();
         });
        
    });

    it("Login APP falta username", () => {
     
        LoginPage.typePassword(datosOK.pass);
        LoginPage.clickLoginButton();
        LoginPage.e.errorFieldRequired().should('be.visible');
        LoginPage.e.errorFieldRequired().contains('This field is required.');
    })
    it("Login APP falta password", () => {
        LoginPage.typeUsername(datosOK.user);
        LoginPage.clickLoginButton();
        LoginPage.e.errorFieldRequired().should('be.visible');
        LoginPage.e.errorFieldRequired().contains('This field is required.');
    })
    it("Login APP ok", () => {
        LoginPage.typeUsername(datosOK.user);
        LoginPage.typePassword(datosOK.pass);
        LoginPage.clickLoginButton();
        cy.wait(2000);
    })

    it("Login APP  y Logout APP ok", () => {
        
         LoginPage.clickProfile ();
         LoginPage.profileUsernameVisible(datosOK.username);
         LoginPage.profileUserVisible(datosOK.nameUser);
         LoginPage.profileEmailVisible(datosOK.email);
         LoginPage.clickLogout();
    })
})