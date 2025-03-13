import Acciones from '../../../../pages/documentosProcesados/acciones.js';
import MenuPrincipal from '../../../../pages/documentosProcesados/menuPrincipal.js';
describe('Cabecera de la tabla', () => {
    beforeEach(() => {
        cy.ingresar_Documentos_Procesados();
    })

    it("Elementos del menú Acciones", () => {
        MenuPrincipal.header.acciones().click();
        Acciones.e.descargarReporte().should('exist');
        Acciones.e.reprocesarSeleccion().should('exist');
        Acciones.e.despacharSeleccion().should('exist');
        Acciones.e.generarPlantilla().should('exist');
       
    });
    
   
})
