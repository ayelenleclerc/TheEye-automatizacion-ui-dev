import Documento from '../../../../pages/documentosProcesados/documentosEnTabla.js';
import Cabecera from '../../../../pages/documentosProcesados/cabeceraTabla.js';

describe("Documentos en tabla", () => {
    before(() => {
       cy.ingresar_Documentos_Procesados();
    });


    it('Verificar elementos de la tabla vacia', () => {
        Cabecera.activarTodaLatabla();
        Documento.vacio.tr().should('exist');
        Documento.vacio.td().contains('No hay datos para mostrar').should('exist');
    })                    
})