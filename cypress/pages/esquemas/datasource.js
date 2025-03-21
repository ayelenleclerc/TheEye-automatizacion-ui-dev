class Datasource{
    titulo = () => cy.get('[data-test="property-ds-dialog-title"]');
    urlField = () => cy.get('[data-test="property-ds-url-field"]');
    urlInput = () => cy.get('[data-test="property-ds-url-input"]');
    claveField = () => cy.get('[data-test="property-ds-key-field"]');
    claveInput = () => cy.get('[data-test="property-ds-key-input"]');
    valorField = () => cy.get('[data-test="property-ds-value-field"]');
    valorInput = () => cy.get('[data-test="property-ds-value-input"]');
    tipoOrigenField = () => cy.get('[data-test="property-ds-type-field"]');
    tipoOrigenSelect = () => cy.get('[data-test="property-ds-type-select"]');
    tipoOrigenJsonOption = () => cy.get('[data-test="property-ds-type-option-json"]');

    guardarBtn = () => cy.get('[data-test="property-ds-save-button"]');
    cancelarBtn = () => cy.get('[data-test="property-ds-cancel-button"]');
}

export default new Datasource();
