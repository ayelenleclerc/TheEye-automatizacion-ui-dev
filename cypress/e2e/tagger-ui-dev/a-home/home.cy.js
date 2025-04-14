import Home from '../../../pages/home/homeTagger.js';


describe("Home", () => {
     let datosOK;
    beforeEach(() => {
        cy.login_tagger_Session();
        cy.visit('/home');
        cy.fixture("/datos.json").then((datos) => {
            datosOK = datos;
        });
    });

    it('Validar elementos del header de la pagina de Home', () => {
        Home.e.logo().should('be.visible');
        Home.e.profile().should('have.text', datosOK.nameUser);
        Home.e.profileBtn().should('be.visible').click();
        cy.wait(1000);
        Home.e.optionMenuQatest().contains('qatest');
        Home.e.optionMenuAdmin().contains('admin');
        Home.e.optionMenuSalir().contains('Salir');
        Home.e.optionMenuQatest().click();
    });

    it('Validar elementos del body de la pagina de Home', () => {
        Home.e.lotesBtn().should('exist');
        Home.e.docuProces().should('exist');
        Home.e.emailProces().should('exist');
        Home.e.plantillas().should('exist');
        Home.e.esquemas().should('exist');
        Home.e.metricas().should('exist');
        Home.e.configuracion().should('exist');
        Home.btnDescriptionsInfo();
    });

});