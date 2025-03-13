import LoginPageTagger from "../pages/login/LoginPageTagger.js";
import Home from '../pages/home/homeTagger.js'
 Cypress.Commands.add('login_tagger', () => {
    
    LoginPageTagger.usernameInput("ayelenleclerc@gmail.com");
    LoginPageTagger.passwordInput("Ayelen102030!!");
    LoginPageTagger.loginButtonClicked();
})
 
Cypress.Commands.add('logout_tagger', () => {

        LoginPageTagger.profileButtonClicked();
        LoginPageTagger.logoutLinkClicked();
})

Cypress.Commands.add('login_tagger_Session', () => {
    
        cy.session('login_tagger_Session', () => {
                cy.visit('/login');
                cy.login_tagger();
                cy.url().should('contain', '/home')
        })
})

Cypress.Commands.add('ingresar_Documentos_Procesados', () => {
        cy.login_tagger_Session();
        cy.visit('/home');
        Home.e.docuProces().click();
       
        cy.url().should('include', '/document');
})

Cypress.Commands.add('ingresar_Lotes', () => {
        cy.login_tagger_Session();
        cy.visit('/home');
        Home.e.lotesBtn().click();
       
        cy.url().should('include', '/batch');
})

Cypress.Commands.add('ingresar_Configuracion', () => {
        cy.login_tagger_Session();
        cy.visit('/home');
        Home.e.configuracion().click();
       
})
Cypress.Commands.add('subirPdf', (archivo) => {
       cy.fixture(archivo, 'base64').then(fileContent => {
            const file = new File([Cypress.Blob.base64StringToBlob(fileContent)], archivo, { type: 'application/pdf' });

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

        cy.get('#fileDropRef')
            .trigger('dragover', { dataTransfer }) 
                .trigger('drop', { dataTransfer });
        });
})
