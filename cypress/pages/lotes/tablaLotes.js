class TablaLotes {

    e = {
        carpeta: () => cy.get(`[data-test="report-col-cell-name"]`),
        fechaCreacion: () => cy.get(`[data-test="report-col-cell-creation-date"]`),
        cantItems: () => cy.get(`[data-test="report-col-cell-documents-count"]`),
        estadoIcon: (id) => cy.get(`[data-test="report-col-cell-lifecycle-icon-${id}"]`),
        msgEstadoContent: () => cy.get('[data-test="report-col-cell-lifecycle-info"] > span'),
        detalleContent: () => cy.get('[data-test="report-col-cell-lifecycle-details"] > span'),
        borrarBtn: (id) => cy.get(`[data-test="report-col-cell-delete-batch-btn-${id}"]`),
        dispatchBtn: (id) => cy.get(`[data-test="report-col-cell-dispatch-batch-btn-${id}"]`),
        toastConfirm: () => cy.get('#toast-container > .ng-trigger')
    }
    modalBorrar= {
        borrartitle: ()=>cy.get(`[data-test="confirm-dialog-title"]`),
        borrarContent: () => cy.get(`[data-test="confirm-dialog-message"]`),
        siBtn: () => cy.get(`[data-test="confirm-dialog-accept-button"]`),
        noBtn: () => cy.get(`[data-test="confirm-dialog-refuse-button"]`),
        
    }
    
    
}

export default new TablaLotes();