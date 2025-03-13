class Resumen{
     
        resumen= {
            resumenTitle: () => cy.get('[data-test="resumen-configuration-title"]'),
            table: () => cy.get('[data-test="resumen-table"]'),
            tableHeaderTr: () => cy.get('[data-test="resumen-table-header-row"]'),
            thEsquema: () => cy.get('[data-test="resumen-table-th-schema"]'),
            thMainDocuments: () => cy.get('[data-test="resumen-table-th-main-document"]'),
            mainDocumentsIcon: () => cy.get('[data-test="resumen-table-main-document-icon"]'),
            thFormato: () => cy.get('[data-test="resumen-table-th-format"]'),
            thOrden: () => cy.get('[data-test="resumen-table-th-order"]'),
            orderIcon: () => cy.get('[data-test="resumen-table-order-icon"]'),
            thCampos: () => cy.get('[data-test="resumen-table-th-fields"]'),
            camposIcon: () => cy.get('[data-test="resumen-table-fields-icon"]'),
            thAcciones: () => cy.get('[data-test="resumen-table-th-actions"]'),
            tablefooterRow: () => cy.get('[data-test="resumen-table-footer-row"]'),
            schema: {
                tdSchemaFooterRow: () => cy.get('[data-test="resumen-table-td-footer-schema"]'),
                addSchemaField: () => cy.get('[data-test="resumen-add-schema-field"]'),
                addSchemaIcon: () => cy.get('[data-test="resumen-table-fields-icon"]'),
                addSchemaOption: () => cy.get('[data-test="resumen-add-schema-option-{{schema.id}}"]'),
                spanOptionText: () => cy.get('.mdc-list-item__primary-text'),                
            },
            mainDocument: {
                tdMainFooterRow: () => cy.get('[data-test="resumen-table-td-footer-main-document"]'),
                addMainDocField: () => cy.get('[data-test="resumen-add-main-document-field"]'),
                addMainDocSelect: () => cy.get('[data-test="resumen-add-main-document-select"]'),
                addMainDocOptionYes: () => cy.get('[data-test="resumen-add-main-document-option-true"]'),
                addMainDocOptionNo: () => cy.get('[data-test="resumen-add-main-document-option-false"]'),
            },
            format: {
                thFormatFooterRow: () => cy.get('[data-test="resumen-table-td-footer-format"]'),
                addFormatField: () => cy.get('[data-test="resumen-add-format-field"]'),
                addFormatSelect: () => cy.get('[data-test="resumen-add-format-select"]'),
                addFormatFormulario: () => cy.get('[data-test="resumen-add-format-option-form"]'),
                addFormatTabla: () => cy.get('[data-test="resumen-add-format-option-table"'),
            },
            order: {
                thOrderFooterRow: () => cy.get('[data-test="resumen-table-td-footer-order"]'),
                addOrderField: () => cy.get('[data-test="resumen-add-order-field"]'),
                addOrderInput: () => cy.get('[data-test="resumen-add-order-input"]'),
                spinSelect: () => cy.get('input[type="number"]'),
            },
             fields: {
                thFieldsFooterRow: () => cy.get('[data-test="resumen-table-td-footer-fields"]'),
                addFieldsBtnAdd: () => cy.get('[data-test="resumen-table-fields-button-add"]'),
                addFieldsBtnAddIcon: () => cy.get('[data-test="resumen-table-fields-add-icon"]'),
                 modal: {
                     camporOptionDialog: () => cy.get('#mat-mdc-dialog-1 > .mat-mdc-dialog-inner-container > .mat-mdc-dialog-surface'),
                     campoTitle: () => cy.get('#mat-mdc-dialog-title-1'),
                     camposDisponibles: () => cy.get(':nth-child(1) > h3'),
                     camposAMostrar: () => cy.get(':nth-child(2) > h3'),
                    //  opcion: {
                    //      percepciones: () => cy.get('#mat-mdc-chip-56'),
                    //      cae: () => cy.get('#mat-mdc-chip-57'),
                    //      codigoDocumento: () => cy.get('#mat-mdc-chip-58'),
                    //      cuitJuridica: () => cy.get('#mat-mdc-chip-59'),
                    //      cuitProveedor: () => cy.get('#mat-mdc-chip-60'),
                    //      domicilioJuridica: () => cy.get('#mat-mdc-chip-61'),
                    //      domicilioProveedor: () => cy.get('#mat-mdc-chip-62'),
                    //      fechaCae: () => cy.get('#mat-mdc-chip-63'),
                    //      fechaEmision: () => cy.get('#mat-mdc-chip-64'),
                    //      importeExento: () => cy.get('#mat-mdc-chip-65'),
                    //      importeNetoGravado: () => cy.get('#mat-mdc-chip-66'),
                    //      importeNoGravado: () => cy.get('#mat-mdc-chip-67'),
                    //      importeOtrosTributos: () => cy.get('#mat-mdc-chip-68'),
                    //      importeTotal: () => cy.get('#mat-mdc-chip-69'),
                    //      items: () => cy.get('#mat-mdc-chip-70'),
                    //      iva10_5: () => cy.get('#mat-mdc-chip-71'),
                    //      iva21: () => cy.get('#mat-mdc-chip-72'),
                    //      iva27: () => cy.get('#mat-mdc-chip-73'),
                    //      letraDocumento: () => cy.get('#mat-mdc-chip-74'),
                    //      moneda: () => cy.get('#mat-mdc-chip-75'),
                    //      numeroComprobante: () => cy.get('#mat-mdc-chip-76'),
                    //      numeroFactura: () => cy.get('#mat-mdc-chip-77'),
                    //      ordenCompra: () => cy.get('#mat-mdc-chip-78'),
                    //      puntoVenta: () => cy.get('#mat-mdc-chip-79'),
                    //      razonSocialJuridica: () => cy.get('#mat-mdc-chip-80'),
                    //      razonSocialProveedor: () => cy.get('#mat-mdc-chip-81'),
                    //      tipoCambio: () => cy.get('#mat-mdc-chip-82'),
                    //     tipoDocumento: () => cy.get('#mat-mdc-chip-83'),
                    //  },
                     btnCerrar: () => cy.get('div > div > app-fields-dialog > mat-dialog-actions > button'),
                },
            },
            actions: {
                thActionFooterRow: () => cy.get('[data-test="resumen-table-td-footer-actions"]'),
                addActionBtn: () => cy.get('[data-test="resumen-table-add-button"]'),
                addActionBtnIcon: () => cy.get('[data-test="resumen-table-add-icon"]'),
                editActionBtn: () => cy.get('[data-test="resumen-table-edit-icon"]'),
                removeActionBtn: () => cy.get('[data-test="resumen-table-remove-button"]'),
            },
            tableRow: {
                tr: () => cy.get('[data-test="resumen-table-row"]'),
                tdSchema: () => cy.get('[data-test="resumen-table-td-schema"]'),
                tdMainDoc: () => cy.get('[data-test="resumen-table-td-main-document"]'),
                tdFormat: () => cy.get('[data-test="resumen-table-td-format"]'),
                tdOrder: () => cy.get('[data-test="resumen-table-td-order"]'),
                tdFields: () => cy.get('[data-test="resumen-table-td-fields"]'),
                tdFieldsBtnView: () => cy.get('[data-test="resumen-table-fields-button-view"]'),
                tdFieldsBtnIcon: () => cy.get('[data-test="resumen-table-fields-button-icon"]'),
                tdActions: () => cy.get('[data-test="resumen-table-td-actions"]'),
                tdActionsEditBtn: () => cy.get('[data-test="resumen-table-edit-button"]'),
                tdActionsRemoveBtn: () => cy.get('[data-test="resumen-table-remove-button"]'),
                tdActionsSaveBtn: () => cy.get('[data-test="resumen-table-save-button"]'),
                tdActionsSaveIcon: () => cy.get('[data-test="resumen-table-save-icon"]'),
                tdActionsCancelBtn: () => cy.get('[data-test="resumen-table-cancel-button"]'),
                tdActionsCancelIcon: () => cy.get('[data-test="resumen-table-cancel-icon"]'),
            }
    }
    validarChipsPorTexto = (chipLabels) => {
              
        chipLabels.forEach((label) => {
        cy.contains('.mat-mdc-chip', label)
            .should('exist')
            .and('be.visible');

        // Click para seleccionar
        cy.contains('.mat-mdc-chip', label).click();
        cy.contains('.mat-mdc-chip', label).should('have.class', 'mdc-evolution-chip--selected');

        // Click para deseleccionar
        cy.contains('.mat-mdc-chip', label).click();
        cy.contains('.mat-mdc-chip', label).should('not.have.class', 'mdc-evolution-chip--selected');
    });
    }
    
}

export default new Resumen();