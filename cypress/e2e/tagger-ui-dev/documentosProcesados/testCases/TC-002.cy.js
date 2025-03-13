import Agregar from "../../../../pages/documentosProcesados/agregarDocumento.js";
import Documento from "../../../../pages/documentosProcesados/documentosEnTabla.js";


describe("TC-002 Subir un comprobante, clasificar y leer Documento", () => {
    beforeEach(() => {
        cy.ingresar_Documentos_Procesados();
       
    })

    it('Subir documento y validar estado y contenido default', () => {
        
        Agregar.e.agregarDoc().click();
        cy.subirPdf('/archivos/factura_Afip_lineas_percepciones.pdf');
        
        Agregar.e.progresoCarga().should('be.visible');
        Agregar.e.msgSubidaOk().should('be.visible').and('contain', 'Subida de documentos completada con éxito');
        Agregar.e.cerrarUploader().click();
        
         Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
           
            Documento.contenido.checkboxInput(id).should('exist');
            Documento.contenido.idCopyBtn(id).should('exist');
            Documento.contenido.miniatura(id).should('exist');
            Documento.validarFechaFilaSeleccionada();

            Documento.contenido.nombreRow().should('be.visible');
            Documento.contenido.documentoRow().should('exist');
            Documento.validarEstadoFilaSeleccionada('Procesando - (converting)');
            Documento.contenido.mensajeEstadoRow().first().should('have.text', 'El documento esta siendo procesado.');
            cy.wait(15000);
            cy.reload();
            Documento.validarEstadoFilaSeleccionada('Procesado - (converted)');
            Documento.contenido.documentoRow().first().should('be.visible').and('contain', ' Factura');
            Documento.contenido.mensajeEstadoRow().first().should('contain', 'Datos extraídos. Puede requerir intervencion.');
           
        });
        
    })

   
})