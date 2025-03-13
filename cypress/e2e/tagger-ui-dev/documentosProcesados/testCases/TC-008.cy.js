
import Agregar from "../../../../pages/documentosProcesados/agregarDocumento.js";
import Documento from "../../../../pages/documentosProcesados/documentosEnTabla.js";


describe("TC-008 Subdividir en paginas al importar", () => {
    beforeEach(() => {
        cy.ingresar_Documentos_Procesados();
        
    });
    
    it('agregar Documento multipágina, y subdividir', () => {
      

        Agregar.e.agregarDoc().click();
        Agregar.e.multipageToggle().click();
        cy.subirPdf('/archivos/AFIP_separar_documentos.pdf');
        Agregar.e.cerrarUploader().click();
        cy.wait(15000);
        cy.reload();
    });

    it('Validar multiples documentos subidos', () => {
    
        Documento.contenido.checkboxRow().its('length').then((numFilas) => {
            cy.log(`Numero de filas: ${numFilas}`);
        })
    })
})
 