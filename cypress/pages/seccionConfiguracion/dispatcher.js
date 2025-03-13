class Dispatcher {
  dispatcher = {
    dispatcherCard: () => cy.get('[data-test="dispatcher-card"]'),
    dispatcherSubtitle: () => cy.get('[data-test="dispatcher-subtitle"]'),
    convertionCallback: () => cy.get('[data-test="convertion-callback-form"]'),
    habilitarToggle: () => cy.get('[data-test="dispatcher-enabled-toggle"]'),
    urlField: () => cy.get('[data-test="dispatcher-url-field"]'),
    urlInput: () => cy.get('[data-test="dispatcher-url-input"]'),
    urlError: () => cy.get('[data-test="dispatcher-url-error-required"]'),
    authType: () => cy.get('[data-test="dispatcher-auth-type-field"]'),
    authSelect: () => cy.get('[data-test="dispatcher-auth-type-select"]'),
      opcionesAuth: {
          sinAutentificacion: () => cy.get('[data-test="dispatcher-auth-type-option-none"]'),
          bearerToken: () => cy.get('[data-test="dispatcher-auth-type-option-bearer"]'),
            oAuthMicrosoft: () => cy.get('[data-test="dispatcher-auth-type-option-oauth-ms"]'),
    },
    methodType: () => cy.get('[data-test="dispatcher-method-field"]'),
    methodSelect: () => cy.get('[data-test="dispatcher-method-option-{{method}}"]'),
    //methodSelect: (method)=>cy.get(`[data-test="dispatcher-method-option-${method}"]`),
    payloadType: () => cy.get('[data-test="dispatcher-payload-format-field"]'),
      payloadSelect: () => cy.get('[data-test="dispatcher-payload-format-select"]'),
     payloadSelectOptions: () => cy.get('[data-test="dispatcher-payload-format-option-{{format}}"]'),
    codificarBtn: () => cy.get('[data-test="dispatcher-encoded-tags-toggle"]'),
    codificarText: () => cy.get('[data-test="dispatcher-encoded-tags-toggle"]'),
    codificarHelpText: () =>
          cy.get('[data-test="dispatcher-encoded-tags-help-icon"]'),
    codificarHelpTextContains: () => cy.get('#mat-mdc-slide-toggle-6-label > div > mat-icon'),
    header: {
      section: () => cy.get('[data-test="dispatcher-headers-section"]'),
      label: () => cy.get('[data-test="dispatcher-headers-label"]'),
      table: () => cy.get('[data-test="dispatcher-headers-table-wrapper"]'),
      addBtn: () =>
        cy.get('[data-test="dispatcher-headers-add-initial-button"]'),
      formContainer: () =>
        cy.get('[data-test="dispatcher-headers-form-container"]'),
      formTable: () => cy.get('[data-test="dispatcher-header-form-table"]'),
      tableThead: () => cy.get('[data-test="dispatcher-header-form-thead"]'),
      tableTr: () => cy.get('[data-test="dispatcher-header-form-tr"]'),
      thKey: () => cy.get('[data-test="dispatcher-header-form-th-key"]'),
        keyField: () => cy.get('[data-test="dispatcher-header-form-key-field"]'),
      keyInput: () => cy.get('[data-test="dispatcher-header-form-key-input"]'),
      keyError: () =>
        cy.get('[data-test="dispatcher-header-form-key-error-required"]'),
      thValue: () => cy.get('[data-test="dispatcher-header-form-th-value"]'),
      valueField: () =>
            cy.get('[data-test="dispatcher-header-form-value-field"]'),
      valueInput: () => cy.get('[data-test="dispatcher-header-form-value-input"]'),
      valueError: () =>
        cy.get('[data-test="dispatcher-header-form-value-error-required"]'),
      actions: () => cy.get('[data-test="dispatcher-header-form-th-actions"]'),
      actionAddBtn: () =>
        cy.get('[data-test="dispatcher-header-form-add-button"]'),
      actionAddIcon: () =>
            cy.get('[data-test="dispatcher-header-form-add-icon"]'),
      actionRemoveBtn: () => cy.get('[data-test="dispatcher-headers-remove-icon"]'),
      actionCerrarBtn: () =>
        cy.get('[data-test="dispatcher-header-form-close-button"]'),
      actionCerrarIcon: () =>
        cy.get('[data-test="dispatcher-header-form-close-icon"]'),
    },
  };
  
    

}
export default new Dispatcher();
