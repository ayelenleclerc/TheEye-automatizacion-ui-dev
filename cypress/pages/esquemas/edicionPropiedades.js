class Editar{
    etiquetaInput = () => cy.get('[data-test="property-label-input"]');
    etiquetaError = () => cy.get('[data-test="property-label-required-error"]');
    nombre = () => cy.get('[data-test="property-display-name-input"]');
    alias = () => cy.get('[data-test="property-alias-input"]');
    valor = () => cy.get('[data-test="property-default-value-input"]');
    orden = () => cy.get('[data-test="property-order-input"]');
    tipoDato = () => cy.get('[data-test="property-type-select"]');
    opcionesTipoDato = {
        texto: ()=> cy.get('[data-test="property-type-option-text"]'),
        numero: ()=> cy.get('[data-test="property-type-option-number"]'),
        fecha: () => cy.get('[data-test="property-type-option-date"]'),
        moneda: () => cy.get('[data-test="property-type-option-money"]'),
        tabla: () => cy.get('[data-test="property-type-option-table"]'),
        booleano: () => cy.get('[data-test="property-type-option-boolean"]'),
    };
    verOcultarFormato = () => cy.get('[data-test="property-type-options-link"]');
    opcionesVerOcultar = {
        minimoField: () => cy.get('[data-test="property-type-min-field"]'),
        minimoInput: () => cy.get('[data-test="property-type-min-input"]'),
        maximoField: () => cy.get('[data-test="property-type-max-field"]'),
        maximoInput: () => cy.get('[data-test="property-type-pattern-input"]'),
        patronField: () => cy.get('[data-test="property-type-pattern-field"]'),
        patronInput: () => cy.get('[data-test="property-type-pattern-input"]'),

    }
    filtrosField = () => cy.get('[data-test="property-filters-field"]');
    filtrosSelect = () => cy.get('[data-test="property-filters-select"]');

    filtroOpciones = {
        cae: ()=> cy.get('[data-test="property-filters-option-cae"]'), 
        puntoVenta: ()=> cy.get('[data-test="property-filters-option-puntoVenta"]'),
        numeroComprobante: ()=> cy.get('[data-test="property-filters-option-numeroComprobante"]'),
        numeroFactura: ()=> cy.get('[data-test="property-filters-option-numeroFactura"]'),
        cuit: ()=> cy.get('[data-test="property-filters-option-cuit"]'),
        moneda: ()=> cy.get('[data-test="property-filters-option-moneda"]'),
        juntar: ()=> cy.get('[data-test="property-filters-option-juntar"]'),
        separar: ()=> cy.get('[data-test="property-filters-option-separar"]'),
    }

    reasignatValorField = () => cy.get('[data-test="property-reassign-field"]')
    reasignatValorSelect = () => cy.get('[data-test="property-reassign-select"]')
    reasignatValorOptionNone = () => cy.get('[data-test="property-reassign-option-none"]')
    
    checks = {
        requerido: ()=> cy.get('[data-test="required-checkbox"] > .mdc-form-field > .mdc-label'),
        valorMultiple: ()=> cy.get('[data-test="multiple-checkbox"] > .mdc-form-field > .mdc-label'),
        valorOculto: ()=> cy.get('[data-test="hidden-checkbox"] > .mdc-form-field > .mdc-label'),
        campoClave: ()=> cy.get('[data-test="is-key-checkbox"] > .mdc-form-field > .mdc-label'),
        removerDuplicados: ()=> cy.get('[data-test="remove-duplicates-checkbox"] > .mdc-form-field > .mdc-label'),

    }
    datasourceBtn = () => cy.get('[data-test="datasource-button"]');
    guardarBtn = () => cy.get('[data-test="save-button"]');
    cancelar = () => cy.get('[data-test="cancel-button"]');
}

export default  new Editar();
