class MenuPrincipal{
    header = {
        irInicio: () => cy.get('[data-test="report-back-button"]'),
        titulo: () => cy.get('[data-test="report-documents-processed-label"]'),
        agregarDocumento: () => cy.get('[data-test="report-add-document-button"]'),
        acciones: () => cy.get('[data-test="report-actions-menu-button"]'),
    }
    footer = {
        paginador: () => cy.get('[data-test="report-table-paginator"]'),
        footer: () => cy.get('[data-test="report-footer"]'),
    }
}

export default new MenuPrincipal();