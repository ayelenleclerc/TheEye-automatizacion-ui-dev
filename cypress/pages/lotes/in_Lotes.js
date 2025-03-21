class LotesIn {
    menuUp = {
        backBtn: ()=> cy.get('[data-test="report-back-button"]'),
        nombreLote: () => cy.get('[data-test="report-batch-name-display"]'),
        renombrar: () => cy.get('[data-test="report-batch-rename-trigger"]'),
        renombrarInput: () => cy.get('[data-test="report-batch-rename-input"]'),
        renombrarConfirm: () => cy.get('[data-test="report-batch-rename-confirm-btn"]'),
        renombrarCancel: () => cy.get('[data-test="report-batch-rename-cancel-btn"]'),
        cantidadItems: () => cy.get('[data-test="report-batch-items-count"]'),
        estadoLote: () => cy.get('[data-test="report-batch-lifecycle"]'),
        despachar: () => cy.get('[data-test="report-dispatch-batch-section"]'),
        resumen: () => cy.get('[data-test="report-batch-summary-button-container"]'),

    }
}

    export default new LotesIn();