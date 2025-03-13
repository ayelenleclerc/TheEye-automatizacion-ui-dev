import Agregar from "../../../../pages/documentosProcesados/agregarDocumento.js";
import Documento from "../../../../pages/documentosProcesados/documentosEnTabla.js";
import ProcesamientoManual from '../../../../pages/documentosProcesados/procesamientoManual.js';



describe("TC-006 multipagina", () => {
    beforeEach(() => {
         cy.ingresar_Documentos_Procesados();
        
    })
    it('Agregar documento multipagina', () => {
    
        Agregar.e.agregarDoc().click();
    
        cy.subirPdf('archivos/factura_multipagina2.pdf');
        Agregar.e.cerrarUploader().click();
        cy.wait(25000);
        cy.reload();

});


    it('En el proceso manual, se deben ver todas las páginas', () => {
        cy.visit('/document')

        Documento.ingresar();
        ProcesamientoManual.validarMultipágina();
    })
})
