import PageConfiguracion from '../../../pages/seccionConfiguracion/pageConfiguracion.js';
import Dispatcher from '../../../pages/seccionConfiguracion/dispatcher.js';
describe("Validación Pantalla de configuración- Dispatcher", () => {
    beforeEach(() => {
         cy.ingresar_Configuracion();
       
    })

    it('Ver configuración de Dispatcher', () => {
    
        PageConfiguracion.sections.sliderOpciones.dispatcherSection().click();
        Dispatcher.dispatcher.dispatcherSubtitle().contains('Callback / Outgoing Webhook para el envio automático de resultados');
        cy.log('Ingreso satisfactorio')
        Dispatcher.dispatcher.dispatcherCard().should('be.visible');
        Dispatcher.dispatcher.convertionCallback().should('be.visible');
        Dispatcher.dispatcher.habilitarToggle().contains('Deshabilitado');
        Dispatcher.dispatcher.habilitarToggle().click();
        Dispatcher.dispatcher.habilitarToggle().contains('Habilitado');
        cy.log('Toggle de habilitar funcionando');
        Dispatcher.dispatcher.urlField().should('be.visible');
        Dispatcher.dispatcher.urlInput().should('have.attr', 'required');
        Dispatcher.dispatcher.urlInput().click().should('have.attr','placeholder','https://ejemplo.com');
        Dispatcher.dispatcher.authType().should('be.visible');
        Dispatcher.dispatcher.authSelect().click();
        Dispatcher.dispatcher.opcionesAuth.sinAutentificacion().should('be.visible');
        Dispatcher.dispatcher.urlError().contains("Campo requerido");
        cy.log('Input URL funcionando');
        cy.log('Auth Selector y opciones funcionando');
        Dispatcher.dispatcher.opcionesAuth.bearerToken().should('be.visible');
        Dispatcher.dispatcher.opcionesAuth.oAuthMicrosoft().should('be.visible');
        Dispatcher.dispatcher.opcionesAuth.sinAutentificacion().click();
        Dispatcher.dispatcher.methodType().click();
        Dispatcher.dispatcher.methodSelect().eq(0).contains('post');
        Dispatcher.dispatcher.methodSelect().eq(1).contains('put');
        Dispatcher.dispatcher.methodSelect().eq(2).contains('patch');
        Dispatcher.dispatcher.methodSelect().eq(0).click();
        cy.log('Método validado')
        Dispatcher.dispatcher.payloadType().click();
        Dispatcher.dispatcher.payloadSelectOptions().eq(0).contains('json');
        Dispatcher.dispatcher.payloadSelectOptions().eq(1).contains('array');
        Dispatcher.dispatcher.payloadSelectOptions().eq(2).contains('soap');
        Dispatcher.dispatcher.payloadSelectOptions().eq(0).click();
        cy.log('Formato validado')
        Dispatcher.dispatcher.codificarBtn().click();
        Dispatcher.dispatcher.codificarBtn().click();
        Dispatcher.dispatcher.codificarText().contains(' Codificar en base64 la información extraída ');
        Dispatcher.dispatcher.header.section().click();
        Dispatcher.dispatcher.header.label().contains('Header');
        Dispatcher.dispatcher.header.table().contains(' Agregar Header');
        Dispatcher.dispatcher.header.addBtn().click();
        Dispatcher.dispatcher.header.formTable().should('be.visible');
        Dispatcher.dispatcher.header.tableThead().should('be.visible');
        Dispatcher.dispatcher.header.keyField().click();
        Dispatcher.dispatcher.header.keyInput().type('Prueba');
        Dispatcher.dispatcher.header.valueField().click();
        Dispatcher.dispatcher.header.valueInput().type('prueba');
         Dispatcher.dispatcher.header.keyInput().clear();
        Dispatcher.dispatcher.header.valueInput().clear();
        Dispatcher.dispatcher.header.keyError().contains('Campo requerido');
        Dispatcher.dispatcher.header.valueError().contains('Campo requerido');
        Dispatcher.dispatcher.header.keyField().click();
        Dispatcher.dispatcher.header.keyInput().type('Prueba');
        Dispatcher.dispatcher.header.valueField().click();
        Dispatcher.dispatcher.header.valueInput().type('prueba');
        Dispatcher.dispatcher.header.actionAddBtn().click();
        Dispatcher.dispatcher.header.actionRemoveBtn().click();
        Dispatcher.dispatcher.header.addBtn().click();
        Dispatcher.dispatcher.header.actionCerrarBtn().click
        cy.log('Header validado');
    });

    
})