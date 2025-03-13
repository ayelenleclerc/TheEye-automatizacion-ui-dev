import Agregar from "../../../../pages/documentosProcesados/agregarDocumento.js";
import Documento from "../../../../pages/documentosProcesados/documentosEnTabla.js";


describe("Subir un comprobante, clasificar manualmente", () => {
    beforeEach(() => {
        cy.ingresar_Documentos_Procesados();
       
    })

    it('Subir documento y clasificar manualmente', () => {
        
        Agregar.e.agregarDoc().click();
        cy.subirPdf('/archivos/clasificar_a_mano.pdf');
        
        Agregar.e.progresoCarga().should('be.visible');
        Agregar.e.msgSubidaOk().should('be.visible').and('contain', 'Subida de documentos completada con éxito');
        Agregar.e.cerrarUploader().click();
        cy.wait(15000);
        cy.reload();
         Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.clasificar(id).click();
            Documento.contenido.clasificar.clasificarDocumentoLabel().should('have.text', ' Esquema a utilizar ').click();
            Documento.contenido.clasificar.clasificarDocumentoField().click();
            Documento.contenido.clasificar.clasificarDocumentoOption(id).should('exist').click();
            Documento.contenido.clasificar.clasificarBtn().click();
            Documento.contenido.mensajeToast().contains('Reprocesando documento')
        })
        
    })
   
})