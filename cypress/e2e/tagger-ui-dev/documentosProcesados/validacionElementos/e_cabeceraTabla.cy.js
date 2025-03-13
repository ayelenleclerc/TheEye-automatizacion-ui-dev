import Cabecera from '../../../../pages/documentosProcesados/cabeceraTabla.js';

describe('Cabecera de la tabla', () => {
    beforeEach(() => {
        cy.ingresar_Documentos_Procesados();
    })

    it("Elementos por default", () => {
        Cabecera.e.checkbox().should('exist');
        Cabecera.e.idColumn().should('exist');
        Cabecera.e.miniatura().should('exist');
        Cabecera.e.fechaCreacion().should('exist');
        Cabecera.e.nombre().should('exist');
        Cabecera.e.documento().should('exist');
        Cabecera.e.estado().should('exist');
        Cabecera.e.mensajeEstado().should('exist');
        Cabecera.e.menuSelect().should('exist');
    });
    
    it("Activar todos los elementos de la tabla y desactivarlos", () => {
        Cabecera.activarTodaLatabla();
       
        Cabecera.desactivarTodaLaTabla();
       
    });
})
