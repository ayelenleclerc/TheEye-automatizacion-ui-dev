import MenuPrincipal from '../../../../pages/documentosProcesados/menuPrincipal.js';

describe('MenuPrincipal', () => {
    beforeEach(() => {
        cy.ingresar_Documentos_Procesados();
    })

    it("Elementos del header", () => {
        MenuPrincipal.header.irInicio().should('exist');
        MenuPrincipal.header.titulo().should('contain', ' Documentos procesados');
        MenuPrincipal.header.agregarDocumento().should('exist');
        MenuPrincipal.header.agregarDocumento().should('contain', ' Añadir Documento');
        MenuPrincipal.header.acciones().should('exist');
         MenuPrincipal.header.acciones().should('contain', 'Acciones');
         
    });
    
    it("Elementos del footer", () => {
        MenuPrincipal.footer.paginador().should('exist');
        MenuPrincipal.footer.footer ().should('exist');
     });
})
