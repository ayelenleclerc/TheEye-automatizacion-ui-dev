import AgregarDocumento from "../../../../pages/documentosProcesados/agregarDocumento.js";  
describe('Añadir Documentos', () => {
    beforeEach(() => {
        cy.ingresar_Documentos_Procesados();
    })

    it("Abrir modal para agregar documentos", () => {
       
        AgregarDocumento.e.agregarDoc().should('exist');
        AgregarDocumento.e.agregarDoc().should('contain', ' Añadir Documento');
        AgregarDocumento.e.agregarDoc().click();
        AgregarDocumento.e.titulo().should('contain', 'Subir documentos al lote');
        AgregarDocumento.e.uploader().should('exist');
        AgregarDocumento.e.uploaderSection().should('exist');
        AgregarDocumento.e.inputDrag().should('exist');
        AgregarDocumento.e.inputMessage().should('contain', 'Arrastrar y soltar archivos');
        AgregarDocumento.e.examinarBtn().should('exist');
        AgregarDocumento.e.examinarBtn().should('contain', 'Examinar');
        AgregarDocumento.e.multipageToggle().should('exist');
        
        AgregarDocumento.e.multipageToggle().click();
        AgregarDocumento.e.multipageToggleLabel().invoke('text').should('include', ' Crear un documento por página ');
        AgregarDocumento.e.multipageToggle().click();
        
        AgregarDocumento.e.cerrarUploader().should('exist');
        AgregarDocumento.e.cerrarUploader().should('contain', 'Cerrar');
        AgregarDocumento.e.cerrarUploader().click();
    })
    
   
})
