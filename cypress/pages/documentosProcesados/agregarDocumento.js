class AgregarDocumento{
    e = {
        agregarDoc: () => cy.get('[data-test="report-add-document-button"]'),
        titulo: () => cy.get('[data-test="upload-documents-dialog-title"]'),
        uploader: () => cy.get('[data-test="upload-documents-uploader-component"]'),
        uploaderSection: () => cy.get('[data-test="upload-documents-content-section"]'),
        inputDrag: () => cy.get('#fileDropRef'),
        inputMessage: () => cy.get('#content > app-uploader > div > div > h3:nth-child(3)'),
        examinarBtn: () => cy.get('label[for="fileDropRef"]'),

        multipageToggle: () => cy.get('[type="button"].mdc-switch'),
        multipageToggleLabel: () => cy.get('.mdc-label'),

        progresoCarga: () => cy.get('.mat-bottom-sheet-container'),
        msgSubidaOk: () => cy.get('#toast-container > .ng-trigger'),
        cerrarUploader: () => cy.get('[data-test="upload-documents-close-button"]'),
        
    }
}

export default new AgregarDocumento();