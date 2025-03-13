class PageConfiguracion {
    sections = {
        inicio: {

            title: () => cy.get('[data-test="configuracion-title"]'),
            dialogContent: () => cy.get('[data-test="mat-dialog-content"]'),
            elementGroup: () => cy.get('[data-test="mat-tab-group"]'),
            dialogActions: () => cy.get('[data-test="mat-dialog-actions"]'),

        },
        sliderOpciones: {
            dispatcherSection: () => cy.get('#mat-tab-label-0-0'),
            extraccionSection: () => cy.get('#mat-tab-label-0-1'),
            resumenSection: () => cy.get('#mat-tab-label-0-2'),
            conciliacionSection: () => cy.get('#mat-tab-label-0-3'),
            archivosDeConfiguracionSection: () => cy.get('[data-test="files-tab-label"]'),
            newPageIcon: () => cy.get('[data-test="files-tab-label-icon"]'),
            opcionAdelante: () => cy.get('.mat-mdc-tab-header-pagination-chevron')[0],//verificar selector
            opcionAtras: () => cy.get('.mat-mdc-tab-header-pagination-chevron')[1],//verificar selector
        },
        footerActions: {
            dialogActions: () => cy.get('[data-test="mat-dialog-actions"]'),
            saveBtn: () => cy.get('[data-test="save-button"]'),
            cancelBtn: () => cy.get('[data-test="cancel-button"]')
        }
    }

}

export default new PageConfiguracion();
