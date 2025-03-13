import Agregar from '../../../../pages/documentosProcesados/agregarDocumento.js';
import Documento from '../../../../pages/documentosProcesados/documentosEnTabla.js';


describe("Documentos en tabla", () => {
    beforeEach(() => {
       cy.ingresar_Documentos_Procesados();
    });

    it("Subir documento de prueba", () => {
        if (Cypress.env("docSubido")) {
            cy.log("El documento ya fue subido, saltando test");
            return;
        }

        Agregar.e.agregarDoc().click();
        cy.subirPdf('/archivos/pruebaTabla.pdf');

        Agregar.e.progresoCarga().should('be.visible');
        Agregar.e.msgSubidaOk().should('be.visible').and('contain', 'Subida de documentos completada con éxito');
        Agregar.e.cerrarUploader().click();

        Cypress.env("docSubido", true);
    });

    it("Validar fila default y eliminar documento", () => {
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
            Documento.contenido.acciones.descargar(id).click();
            Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.borrar(id).click();
            Documento.contenido.mensajeToast().should('be.visible').and('contain','Se completo la operación');
        })

    })
    
})
