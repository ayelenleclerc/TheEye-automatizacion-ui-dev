class Resumen{
    ladoDerecho = {
        titulo: (id) => cy.get(`[data-test="batch-summary-form-document-schema-name-${id}"]`),
        edicionManual: (id) => cy.get(`[data-test="batch-summary-doc-edit-btn-${id}"]`),
        invalidarOp: (id) => cy.get(`[data-test="batch-summary-doc-invalidate-btn-${id}"]`),
    }
    ladoIzquierdo = {
        titulo: (id) => cy.get(`[data-test="batch-summary-table-document-schema-name-${id}"]`),
        cantidadDocs: (id) => cy.get(`[data-test="batch-summary-table-document-count-${id}"]`),
        
        conciliarManualCheck: (id) => cy.get(`[data-test="batch-summary-manual-reconciliation-checkbox-document-metadata-${id}"]`),
        
        accionfila: (id) => cy.get(`[data-test="batch-summary-table-document-more-actions-btn-${id}"]`),
        invalidar: (id) => cy.get(`[data-test="batch-summary-table-document-invalidate-menu-item-${id}"]`),
     }   
        confirmarInvalidar= {
            titulo: () => cy.get('[data-test="confirm-dialog-title"]').contains(' ¿Está seguro de querer invalidar este documento? '),
            mensaje: () => cy.get('[data-test="confirm-dialog-message"]').contains('Esta acción podría afectar los procesos asociados a este y a otros documentos.'),
            aceptar: () => cy.get('[data-test="confirm-dialog-accept-button"]'),
            cancelar: () => cy.get('[data-test="confirm-dialog-refuse-button"]'),
        }
    

    capturarIdDocumento = () => {
    return cy.get('[data-test="batch-summary-table-document-copy-btn-681cc05b48af6761a2dfe491"]')
        .invoke('attr', 'data-test')
        .then((dataTestValue) => {
        if (!dataTestValue) {
            cy.log('Atributo data-test no encontrado');
            throw new Error('Atributo data-test no encontrado');
        }

        const id = dataTestValue.replace('batch-summary-target-table-item-', '');
        cy.log(`ID del documento capturado: ${id}`);
        return cy.wrap(id); 
        });
    }
    capturarIdFila = (indice) => {
    return cy.get('tr[data-test^="batch-summary-table-document-row-"]')
        .eq(indice)  // Selecciona la fila según el índice proporcionado
        .invoke('attr', 'data-test')  // Obtiene el atributo 'data-test'
        .then((dataTestValue) => {
            if (!dataTestValue) {
                cy.log('Atributo data-test no encontrado');
                throw new Error('Atributo data-test no encontrado');
            }

            const id = dataTestValue.replace('batch-summary-table-document-row-', '');
            cy.log(`ID de la fila capturada: ${id}`);
            return cy.wrap(id); 
        });
    }

}

export default new Resumen();