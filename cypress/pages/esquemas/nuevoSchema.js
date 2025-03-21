class NuevoEsquema{
    config = {
        titulo: () => cy.get('[data-test="schema-config-title"]'),
        nombreLable: () => cy.get('[data-test="schema-config-name-label"]'),
        nombreInput: () => cy.get('[data-test="schema-config-name-input"]'),
        nombreError: () => cy.get('[data-test="schema-config-name-error-required"]'),
        idExtractorLabel: () => cy.get('[data-test="schema-config-processor-id-label"]'),
        idExtractorInput: () => cy.get('[data-test="schema-config-processor-id-input"]'),
        importarBtn: () => cy.get('[data-test="schema-config-import-button"]'),
        agregarPropBtn: () => cy.get('[data-test="schema-config-add-property-button"]'),
        guardarBtn: () => cy.get('[data-test="schema-config-save-button"]'),
    }
    tabla = {
        cabecera: {
            etiqueta: () => cy.get('[data-test="schema-config-col-header-label"]'),
            nombreMostrar: () => cy.get('[data-test="schema-config-col-header-display-name"]'),
            alias: () => cy.get('[data-test="schema-config-col-header-alias"]'),
            filtros: () => cy.get('[data-test="schema-config-col-header-filters"]'),
            tipoDato: () => cy.get('[data-test="schema-config-col-header-type"]'),
            requerido: () => cy.get('[data-test="schema-config-col-header-required"]'),
            valorMultiple: () => cy.get('[data-test="schema-config-col-header-multiple"]'),
            oculto: () => cy.get('[data-test="schema-config-col-header-hidden"]'),
            campoClave: () => cy.get('[data-test="schema-config-col-header-is-key"]'),
            orden:() => cy.get('[data-test="schema-config-col-header-order"]'),
            acciones: () => cy.get('[data-test="schema-config-col-header-actions"]'),
        },
        cuerpo: {
            etiqueta: () => cy.get('[data-test="schema-config-col-cell-label"]'),
            nombreMostrar: () => cy.get('[data-test="schema-config-col-cell-display-name"]'),
            alias: () => cy.get('[data-test="schema-config-col-cell-alias"]'),
            filtros: () => cy.get('[data-test="schema-config-col-cell-filters"]'),

            tipoDato: () => cy.get('[data-test="schema-config-col-cell-type"]'),
            requerido: () => cy.get('[data-test="schema-config-col-cell-required"]'),
            valorMultiple: () => cy.get('[data-test="schema-config-col-cell-multiple"]'),
            oculto: () => cy.get('[data-test="schema-config-col-cell-hidden"]'),
            campoClave: () => cy.get('[data-test="schema-config-col-cell-is-key"]'),
            orden: () => cy.get('[data-test="schema-config-col-cell-order"]'),
            acciones: () => cy.get('[data-test="schema-config-col-cell-actions"]'),

            acciones: {
                editar: () => cy.get('[data-test="schema-config-edit-property-button"]'),
                eliminar: () => cy.get('[data-test="schema-config-delete-button"]'),
                validar: {
                    confirmar: () => cy.get('[data-test="schema-config-confirm-delete-button"]'),
                    cancelar: () => cy.get('[data-test="schema-config-cancel-delete-button"]'),
                }
            }

        },
        btnAgregarProp: ()=>cy.get('[data-test="schema-config-add-property-button-bottom"]'),
    }
}

export default new NuevoEsquema();
