import Agregar from "../../../../pages/documentosProcesados/agregarDocumento.js";
import Documento from "../../../../pages/documentosProcesados/documentosEnTabla.js";



describe("TC-007 Invalidar y borrar documento", () => {
    beforeEach(() => {
        cy.ingresar_Documentos_Procesados();
    })
    it('Invalidar Documento', () => {
         Agregar.e.agregarDoc().click();
        cy.subirPdf('/archivos/pruebaTabla.pdf');
        
        Agregar.e.progresoCarga().should('be.visible');
        Agregar.e.msgSubidaOk().should('be.visible').and('contain', 'Subida de documentos completada con éxito');
        Agregar.e.cerrarUploader().click();
         cy.wait(15000);
        cy.reload();
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {         
            Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.invalidar(id).click();
            cy.reload();
            Documento.validarEstadoFilaSeleccionada('Invalidado manualmente - (inva');
        })
    })
     it('Borrar Documento', () => {
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => { 
            Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.borrar(id).click();
            Documento.contenido.mensajeToast().should('be.visible').and('contain','Se completo la operación');
         
        })
        
    })
})
