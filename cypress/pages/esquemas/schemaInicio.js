class SchemaInicio{
    nuevoEsquemaBtn = () => cy.get('[data-test="schemas-new-schema-button"]')
    filtroBtn = () => cy.get('[data-test="schemas-filter-input"]')
    
    tablaHeader = {
        id: () => cy.get('[data-test="schemas-col-header-id"]'),
        fcreacion: () => cy.get('[data-test="schemas-col-header-creation-date"]'),
        fmodificacion: () => cy.get('[data-test="schemas-col-header-modification-date"]'),
        nombre: () => cy.get('[data-test="schemas-col-header-name"]'),
        activar: () => cy.get('[data-test="schemas-col-header-enabled"]'),
        activarBtn: () => cy.get('[data-test="schemas-toggle-disabled-view-button"]'),
        esquemaDefecto: () => cy.get('[data-test="schemas-col-header-default"]'),
        acciones: () => cy.get('[data-test="schemas-col-header-actions"]'),
    }

    tablaContent = {
        copiar: () => cy.get('[data-test="schemas-id-copy-button"]'),
        creacion: () => cy.get('[data-test="schemas-col-cell-creation-date"]'),
        modificacion: () => cy.get('[data-test="schemas-col-cell-modification-date"]'),
        nombre: () => cy.get('[data-test="schemas-col-cell-name"] > span'),
        activar: () => cy.get('[data-test="schemas-col-cell-enabled-toggle"]'),
        esquemaDefecto: () => cy.get('[data-test="schemas-col-cell-default-toggle"]'),
        acciones: () => cy.get('[data-test="schemas-col-cell-actions"]'),
        editar: () => cy.get('[data-test="schemas-edit-button"]'),
        exportar: () => cy.get('[data-test="schemas-export-button"]'),
        eliminar: () => cy.get('[data-test="schemas-delete-button"]'),
        eliminarConfirm: {
            titulo: () => cy.get('[data-test="confirm-dialog-title"]'),
            mensaje: () => cy.get('[data-test="confirm-dialog-message"]'),
            aceptar: () => cy.get('[data-test="confirm-dialog-accept-button"]'),
            cancelar: () => cy.get('[data-test="confirm-dialog-cancel-button"]'),
        }

    }

}

export default  new SchemaInicio();