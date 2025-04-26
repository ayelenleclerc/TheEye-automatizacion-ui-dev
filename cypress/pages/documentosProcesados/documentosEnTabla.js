class DatosTabla {
    vacio = {
        tr: () => cy.get('[data-test="report-table-no-data-row"]'),
        td: () => cy.get('[data-test="report-table-no-data-cell"]'),
    };

    contenido = {
        tableContainer: () => cy.get('[data-test="report-table-container"]'),
        tr: () => cy.get('[data-test="report-table-data-row"]'),
        checkboxRow: () => cy.get('[data-test="report-col-cell-select"]'),
        checkboxInput: (id) => cy.get(`[data-test="report-row-checkbox-${id}"]`),
        idRow: () => cy.get('[data-test="report-col-cell-id"]'),
        idCopyBtn: (id) => cy.get(`[data-test="report-col-cell-id-copy-btn-${id}"]`),
        miniaturaRow: () => cy.get('[data-test="report-col-cell-thumbnail"]'),
        miniatura: (id) => cy.get(`[data-test="report-col-cell-thumbnail-image-${id}"]`),
        fechaCreacionRow: () => cy.get('[data-test="report-col-cell-creation-date"]'),
        ultimaModificacionRow: () => cy.get('[data-test="report-col-cell-modification-date"]'),
        nombreRow: () => cy.get('[data-test="report-col-cell-original-name"]'),
        paginasRow: () => cy.get('[data-test="report-col-cell-pages-number"]'),
        documentoRow: () => cy.get('[data-test="report-col-cell-classification-label"]'),
        coincidenciaRow: () => cy.get('[data-test="report-col-cell-classification-confidence"]'),
        revisionManualRow: () => cy.get('[data-test="report-col-cell-dispatcher-flag"]'),
        mensajeValidacionRow: () => cy.get('[data-test="report-col-cell-validator-message"]'),
        deteccionesRow: () => cy.get('[data-test="report-col-cell-completeness-fails"]'),
        requeridosRow: () => cy.get('[data-test="report-col-cell-requirements-fails"]'),
        informacionEstadoRow: () => cy.get('[data-test="report-col-cell-lifecycle-error"]'),
        detalleEstadoRow: () => cy.get('[data-test="report-col-cell-lifecycle-details"]'),
        estadoRow: () => cy.get('[data-test="report-col-cell-lifecycle"]'),
        mensajeEstadoRow: () => cy.get('[data-test="report-col-cell-lifecycle-info"]'),
        accionesRow: () => cy.get('[data-test="report-col-cell-actions"]'),
        
        acciones: {
            descargar: (id) => cy.get(`[data-test="report-col-cell-download-btn-${id}"]`),
            procesarManual: (id) => cy.get(`[data-test="report-col-cell-manual-review-btn-${id}"]`),
            menu: (id) => cy.get(`[data-test="report-col-cell-actions-menu-btn-${id}"]`),
            extraerExcel: (id) => cy.get(`[data-test="report-col-cell-xls-import-btn-${id}"]`),
            
        },

        menu: {
            verPlantilla: (id) => cy.get(`[data-test="report-col-cell-view-template-btn-${id}"]`),
            editarPlantilla: (id) => cy.get(`[data-test="report-col-cell-edit-template-btn-${id}"]`),
            reprocesarDoc: (id) => cy.get(`[data-test="report-col-cell-reprocess-btn-${id}"]`),
            despacharDoc: (id) => cy.get(`[data-test="report-col-cell-submit-document-btn-${id}"]`),
            importarPlantilla: (id) => cy.get(`[data-test="report-col-cell-import-template-btn-${id}"]`),
            invalidar: (id) => cy.get(`[data-test="report-col-cell-invalidate-btn-${id}"]`),
            clasificar: (id) => cy.get(`[data-test="report-col-cell-manual-classify-btn-${id}"]`),
            borrar: (id) => cy.get(`[data-test="report-col-cell-delete-document-btn-${id}"]`),
        },
        mensajeToast: () => cy.get('#toast-container > .ng-trigger'),
        clasificar: {
            clasificarTitulo: () => cy.get('[data-test="classify-document-dialog-title"]'),
            clasificarDocumentoField: () => cy.get('[data-test="classify-document-schema-field"]'),
            clasificarDocumentoLabel: () => cy.get('[data-test="classify-document-schema-label"]'),
            clasificarDocumentoOptionOP: (schemaId) => cy.get(`[data-test="classify-document-schema-option-${schemaId}"]`),
            clasificarBtn: ()=> cy.get('[data-test="classify-document-save-button"]'),

        },
        extraer: {
            esquema: () => cy.get('[data-test="excel-extraction-schema-field"]'),
            OPOption: (schemaId) => cy.get(`[data-test="excel-extraction-schema-option-${schemaId}"]`),
            eCheqOption: (schemaId) => cy.get(`[data-test="excel-extraction-schema-option-${schemaId}"]`),
            facturaOption: (schemaId) => cy.get(`[data-test="excel-extraction-schema-option-${schemaId}"]`),
            cantFilasInput: () => cy.get('[data-test="excel-extraction-data-row-input"]'),
            extraerBtn: () => cy.get('[data-test="excel-extraction-extract-button"]'),
        },
        eCheqInputs: {
            cuentaDestino: () => cy.get('[data-test="excel-extraction-col-cell-column-input-0"]'),
            fechaPago: () => cy.get('[data-test="excel-extraction-col-cell-column-input-1"]'),
            monto: () => cy.get('[data-test="excel-extraction-col-cell-column-input-2"]'),
            nroCheque: () => cy.get('[data-test="excel-extraction-col-cell-column-input-3"]'),
          
        }
    };
        /**
         * @returns {Cypress.Chainable<string>} 
         */
    obtenerIdFila = () => {
        return cy.get('#content > div > div.table-responsive > table > tbody > tr > td.mat-mdc-cell.mdc-data-table__cell.cdk-cell.text-center.cdk-column-id.mat-column-id.ng-star-inserted > button')
            .should('exist')
            .first()
            .invoke('attr', 'data-test')
            .then((dataTestValue) => {
                  
                const id = dataTestValue.replace('report-col-cell-id-copy-btn-', '');
                cy.log(`ID Capturado: ${id}`);
                return cy.wrap(id);
            });
    };

        obtenerIdFilaSeleccionada= () => {
            return cy.get('#content > div > div.table-responsive > table > tbody > tr')
                .each(($fila) => {
                   
                    if (Cypress.$($fila).find('input[type="checkbox"]').is(':checked')) {
                        cy.wrap($fila)
                            .find('td.mat-mdc-cell.mdc-data-table__cell.cdk-cell.text-center.cdk-column-id.mat-column-id.ng-star-inserted > button')
                            .invoke('attr', 'data-test')
                            .then((dataTestValue) => {
                                const id = dataTestValue.replace('report-col-cell-id-copy-btn-', '');
                                cy.log(`ID de la fila seleccionada: ${id}`);
                                cy.wrap(id).as('idFilaSeleccionada'); 
                            });
                    }
                })
                .then(() => {
                    return cy.get('@idFilaSeleccionada'); 
                }); 
        }

    validarFechaFilaSeleccionada = () => {
    cy.get('#content > div > div.table-responsive > table > tbody > tr').each(($fila) => {
        if (Cypress.$($fila).find('input[type="checkbox"]').is(':checked')) {
            cy.wrap($fila).within(() => {
                // ✅ Validar la fecha dentro de la fila
                this.contenido.fechaCreacionRow()
                    .invoke('text')
                    .then((fechaTexto) => {
                        const fechaLimpia = fechaTexto.trim();
                        expect(fechaLimpia).to.match(/^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}$/);
                    });

               
            });
        }
    });
    };
    validarEstadoFilaSeleccionada = (estadoEsperado) => {
        cy.get('tbody tr').each(($fila) => {
            // Verifica si el checkbox de la fila está seleccionado
            if (Cypress.$($fila).find('input[type="checkbox"]').is(':checked')) {
                cy.wrap($fila)
                    .find('[data-test="report-col-cell-lifecycle"]') 
                    .find('mat-icon') 
                    .invoke('attr', 'ng-reflect-message') 
                    .then((estado) => {
                        cy.log(`Estado de la fila seleccionada: ${estado}`);
                        expect(estado).to.equal(estadoEsperado);
                    });
            }
        });
    };
       
    ingresar = () => {
        this.contenido.checkboxRow().eq(0).click();
        this.obtenerIdFilaSeleccionada().then((id) => {
        
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                cy.visit('https://tagger-ui-dev.theeye.io/' + url); 
                }).as('nuevaPestaña');
            });
        
        this.contenido.acciones.procesarManual(id).click();
       })
    }



}

export default new DatosTabla();
