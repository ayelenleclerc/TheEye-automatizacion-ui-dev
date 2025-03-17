class PantallaPrincipal{
    menuBase = {
        atras: () => cy.get('[data-test="report-back-button"]'),
        titulo: () => cy.get('[data-test="report-toolbar-lots-label"]'),
        agregarNuevo: () => cy.get('[data-test="report-new-batch-button"]'),
        tablaVacia: () => cy.get('[data-test="report-table-no-data-cell"]'),
    }
    tablaHead = {
        check: () => cy.get('[data-test="report-col-header-select"]'),
        id: () => cy.get('[data-test="report-col-header-id"]'),
        fechaCreacion: () => cy.get('[data-test="report-col-header-creation-date"]'),
        carpeta: () => cy.get('[data-test="report-col-header-name"]'),
        cantItems: () => cy.get('[data-test="report-col-header-documents-count"]'),
        estado: () => cy.get('[data-test="report-col-header-lifecycle"]'),
        manejoEstado: () => cy.get('[data-test="report-col-header-lifecycle-info"]'),
        detalleEstado: () => cy.get('[data-test="report-col-header-lifecycle-details"]'),
        menuAccionBtn: () => cy.get('[data-test="report-col-header-actions-open-select"]'),
        menuAccion: {
            fcreacion: () => cy.get('[data-test="report-col-header-actions-option-creation_date"]'),
            carpeta: () => cy.get('[data-test="report-col-header-actions-option-name"]'),
            cantItems: () => cy.get('[data-test="report-col-header-actions-option-documents_count"]'),
            estado: () => cy.get('[data-test="report-col-header-actions-option-lifecycle"]'),
            msgEstado: () => cy.get('[data-test="report-col-header-actions-option-lifecycle_info"]'),
            detallesEstado: () => cy.get('[data-test="report-col-header-actions-option-lifecycle_details"]'),
        },
    }
    nuevoLote = {
        matDialog: () =>cy.get('.mat-mdc-dialog-content'),
        tituloNuevoLote: () => cy.get('h4'),
        input: () => cy.get('#mat-mdc-form-field-label-8 > mat-label'),
        cancelarBtn: () => cy.get('#mat-mdc-dialog-0 > div > div > app-my-dialog > mat-dialog-actions > button:nth-child(1)'),
        guardarBtn: () => cy.get('#mat-mdc-dialog-0 > div > div > app-my-dialog > mat-dialog-actions > button:nth-child(2)'),
        errorVacio: ()=> cy.get('mat-error'),
    }
    habilitarDeshabilitarCamposMenuAccion = () => {
        this.tablaHead.menuAccionBtn().click();
        this.tablaHead.menuAccion.fcreacion().click();
        this.tablaHead.menuAccionBtn().click();
        this.tablaHead.menuAccion.carpeta().click();
        this.tablaHead.menuAccionBtn().click();
        this.tablaHead.menuAccion.cantItems().click();
        this.tablaHead.menuAccionBtn().click();
        this.tablaHead.menuAccion.estado().click();
        this.tablaHead.menuAccionBtn().click();
        this.tablaHead.menuAccion.msgEstado().click();
        this.tablaHead.menuAccionBtn().click();
        this.tablaHead.menuAccion.detallesEstado().click();
    };

}

export default new PantallaPrincipal();