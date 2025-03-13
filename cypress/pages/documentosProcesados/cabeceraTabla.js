class cabeceraTabla{
    e = {
        checkbox: () => cy.get('[data-test="report-col-header-checkbox"]'),
        idColumn: () => cy.get('[data-test="report-col-header-id"]'),
        miniatura: () => cy.get('[data-test="report-col-header-thumbnail"]'),
        fechaCreacion: () => cy.get('[data-test="report-col-header-creation-date"]'),
        ultimaModificacion: () => cy.get('[data-test="report-col-header-modification-date"]'),
        nombre: () => cy.get('[data-test="report-col-header-original-name"]'),
        paginas: () => cy.get('[data-test="report-col-header-pages-number"]'),
        documento: () => cy.get('[data-test="report-col-header-classification-label"]'),
        coincidencia: () => cy.get('[data-test="report-col-header-classification-confidence"]'),
        revisionManual: () => cy.get('[data-test="report-col-header-dispatcher-flag"]'),
        mensajeDeControl: () => cy.get('[data-test="report-col-header-validator-message"]'),
        detecciones: () => cy.get('[data-test="report-col-header-completeness-fails"]'),
        requeridos: () => cy.get('[data-test="report-col-header-requirements-fails"]'),
        informacionEstado: () => cy.get('[data-test="report-col-header-lifecycle-error"]'),
        detalleEstado: () => cy.get('[data-test="report-col-header-lifecycle-details"]'),
        estado: () => cy.get('[data-test="report-col-header-lifecycle"]'),
        mensajeEstado: () => cy.get('[data-test="report-col-header-lifecycle-info"]'),
        menuSelect: () => cy.get('[data-test="report-col-header-actions-open-select"]'),
        opcion: {
            miniatura: () => cy.get('[data-test="report-col-header-actions-option-thumbnail"]'),
            fechaCreacion: () => cy.get('[data-test="report-col-header-actions-option-creation_date"]'),
            ultimaModificacion: () => cy.get('[data-test="report-col-header-actions-option-modification_date"]'),
            nombre: () => cy.get('[data-test="report-col-header-actions-option-original_name"]'),
            paginas: () => cy.get('[data-test="report-col-header-actions-option-pages_number"]'),
            plantilla: () => cy.get('[data-test="report-col-header-actions-option-classification_label"]'),
            coincidencia: () => cy.get('[data-test="report-col-header-actions-option-classification_confidence"]'),
            revisionManual: () => cy.get('[data-test="report-col-header-actions-option-dispatcher_flag"]'),
            mensajeControl: () => cy.get('[data-test="report-col-header-actions-option-validator_message"]'),
            detecciones: () => cy.get('[data-test="report-col-header-actions-option-completeness_fails"]'),
            requeridos: () => cy.get('[data-test="report-col-header-actions-option-requirements_fails"]'),
            infoEstado: () => cy.get('[data-test="report-col-header-actions-option-lifecycle_error"]'),
            detallesEstado: () => cy.get('[data-test="report-col-header-actions-option-lifecycle_details"]'),
            estado: () => cy.get('[data-test="report-col-header-actions-option-lifecycle"]'),
            mensajeEstado: () => cy.get('[data-test="report-col-header-actions-option-lifecycle_info"]'),
        }
    }    
    activarTodaLatabla = () => { 
         
        this.e.checkbox().should('exist');
        this.e.idColumn().should('exist');
        this.e.miniatura().should('exist');
        this.e.fechaCreacion().should('exist');
        this.e.menuSelect().click();
        this.e.opcion.ultimaModificacion().click();
        this.e.ultimaModificacion().should('exist');
        this.e.nombre().should('exist');
        this.e.menuSelect().click();
        this.e.opcion.paginas().click();
        this.e.paginas().should('exist');
        this.e.documento().should('exist');
        this.e.menuSelect().click();
        this.e.opcion.coincidencia().click();
        this.e.coincidencia().should('exist'); 
        this.e.menuSelect().click();
        this.e.opcion.revisionManual().click();
        this.e.revisionManual().should('exist');
        this.e.menuSelect().click();
        this.e.opcion.mensajeControl().click();
        this.e.mensajeDeControl().should('exist');
        this.e.menuSelect().click();
        this.e.opcion.detecciones().click();
        this.e.detecciones().should('exist');
        this.e.menuSelect().click();
        this.e.opcion.requeridos().click();
        this.e.requeridos().should('exist');
        this.e.menuSelect().click();
        this.e.opcion.infoEstado().click();
        this.e.informacionEstado().should('exist');
        this.e.menuSelect().click();
        this.e.opcion.detallesEstado().click();
        this.e.detalleEstado().should('exist');
        this.e.estado().should('exist');
        this.e.mensajeEstado().should('exist');
        this.e.menuSelect().should('exist');
    };

    desactivarTodaLaTabla = () => {
         cy.log('Desactivar todos los elementos de la tabla');
        this.e.checkbox().should('be.visible');
        this.e.idColumn().should('be.visible');
        this.e.menuSelect().click();
        this.e.opcion.miniatura().click();
        this.e.miniatura().should('not.exist');
        this.e.menuSelect().click();
        this.e.opcion.fechaCreacion().click();
        this.e.fechaCreacion().should('not.exist');
        this.e.menuSelect().click();
        this.e.opcion.ultimaModificacion().click();
        this.e.ultimaModificacion().should('not.exist');
         this.e.menuSelect().click();
        this.e.opcion.nombre().click();
        this.e.nombre().should('not.exist');
        this.e.menuSelect().click();
        this.e.opcion.paginas().click();
        this.e.paginas().should('not.exist');
         this.e.menuSelect().click();
        this.e.opcion.plantilla().click();
        this.e.documento().should('not.exist');
        this.e.menuSelect().click();
        this.e.opcion.coincidencia().click();
        this.e.coincidencia().should('not.exist'); 
        this.e.menuSelect().click();
        this.e.opcion.revisionManual().click();
        this.e.revisionManual().should('not.exist');
        this.e.menuSelect().click();
        this.e.opcion.mensajeControl().click();
        this.e.mensajeDeControl().should('not.exist');
        this.e.menuSelect().click();
        this.e.opcion.detecciones().click();
        this.e.detecciones().should('not.exist');
        this.e.menuSelect().click();
        this.e.opcion.requeridos().click();
        this.e.requeridos().should('not.exist');
        this.e.menuSelect().click();
        this.e.opcion.infoEstado().click();
        this.e.informacionEstado().should('not.exist');
        this.e.menuSelect().click();
        this.e.opcion.detallesEstado().click();
        this.e.detalleEstado().should('not.exist');
         this.e.menuSelect().click();
        this.e.opcion.estado().click();
        this.e.estado().should('not.exist');
         this.e.menuSelect().click();
        this.e.opcion.mensajeEstado().click();
        this.e.mensajeEstado().should('not.exist');
        this.e.menuSelect().should('be.visible');
    }
}

export default new cabeceraTabla();