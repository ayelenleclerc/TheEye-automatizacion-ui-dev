import Documento from '../../../../pages/documentosProcesados/documentosEnTabla.js';
import Agregar from '../../../../pages/documentosProcesados/agregarDocumento.js';
import Cabecera from '../../../../pages/documentosProcesados/cabeceraTabla.js';

describe("Documentos en tabla", () => {
    beforeEach(() => {
       cy.ingresar_Documentos_Procesados();
    });

     it("Subir documento de prueba", () => {
           
    
            Agregar.e.agregarDoc().click();
            cy.subirPdf('/archivos/pruebaTabla.pdf');
    
            Agregar.e.progresoCarga().should('be.visible');
            Agregar.e.msgSubidaOk().should('be.visible').and('contain', 'Subida de documentos completada con éxito');
            Agregar.e.cerrarUploader().click();
    
           
    });
    
    it("Visualizacion de documento primera fila/columnas default", () => {

        Documento.obtenerIdFila().then((id) => {
            cy.log(`El ID de la fila es: ${id}`);
            cy.wait(2000);
            Documento.contenido.checkboxInput(id).should('exist');
            Documento.contenido.idCopyBtn(id).should('exist');
            Documento.contenido.miniatura(id).should('exist');
            Documento.contenido.fechaCreacionRow().should('exist');
            Documento.contenido.nombreRow().should('exist');
            Documento.contenido.documentoRow().should('exist');
            Documento.contenido.estadoRow().should('exist');
            Documento.contenido.mensajeEstadoRow().should('exist');
            Documento.contenido.accionesRow().should('exist');
            Documento.contenido.acciones.procesarManual(id).should('exist');
        })
    });

    it("Visualizacion de documento primera fila/columnas todas", () => {
        Cabecera.activarTodaLatabla();

        Documento.obtenerIdFila().then((id) => {
         
            cy.log(`El ID de la fila es: ${id}`);
            cy.wait(2000);
            Documento.contenido.checkboxInput(id).should('exist');
            Documento.contenido.idCopyBtn(id).should('exist');
            Documento.contenido.miniatura(id).should('exist');
            Documento.contenido.fechaCreacionRow().should('exist');
            Documento.contenido.nombreRow().should('exist');
            Documento.contenido.paginasRow().should('exist');
            Documento.contenido.documentoRow().should('exist');
            Documento.contenido.coincidenciaRow().should('exist');
            Documento.contenido.revisionManualRow().should('exist');
            Documento.contenido.mensajeValidacionRow().should('exist'); 
            Documento.contenido.deteccionesRow().should('exist');
            Documento.contenido.requeridosRow().should('exist'); 
            Documento.contenido.informacionEstadoRow().should('exist');
            Documento.contenido.detalleEstadoRow().should('exist');
            Documento.contenido.estadoRow().should('exist');
            Documento.contenido.mensajeEstadoRow().should('exist');
            Documento.contenido.accionesRow().should('exist');
            Documento.contenido.acciones.procesarManual(id).should('exist');
        })
    });
})