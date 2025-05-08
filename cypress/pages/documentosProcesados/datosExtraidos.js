class DatosDocumento{

    e = {
        titulo: () => cy.get('.dialog-title'),
        infoTitulo: ()=> cy.get('.section-title'),
        inputFiltro: () => cy.get('#mat-input-1'),
            
        //TABLA de los datos del documento
        nombre: () => cy.get('#mat-tab-content-0-0 > div > div > div > div:nth-child(1) > table > thead > tr > th.mat-mdc-header-cell.mdc-data-table__header-cell.cdk-header-cell.cdk-column-key.mat-column-key.ng-star-inserted.mat-mdc-table-sticky.mat-mdc-table-sticky-border-elem-top'),
        valor: () => cy.get('#mat-tab-content-0-0 > div > div > div > div:nth-child(1) > table > thead > tr > th.mat-mdc-header-cell.mdc-data-table__header-cell.cdk-header-cell.cdk-column-value.mat-column-value.ng-star-inserted.mat-mdc-table-sticky.mat-mdc-table-sticky-border-elem-top'),
        cellKey: () => cy.get('.cdk-column-key'),
        cellValue: () => cy.get('.cdk-column-value'), 

        //TABLA de los items
        tabla: () => cy.get('[data-test="document-detail-tables-header-key"]'),
        datos: () => cy.get('[data-test="document-detail-tables-header-value"]'),
        subtablas: () => cy.get('#mat-tab-content-0-0 > div > div > div > div:nth-child(2) > table > thead > tr > th.mat-mdc-header-cell.mdc-data-table__header-cell.cdk-header-cell.cdk-column-key.mat-column-key.ng-star-inserted.mat-mdc-table-sticky.mat-mdc-table-sticky-border-elem-top'),
        subtablasValores: () => cy.get('#mat-tab-content-0-0 > div > div > div > div:nth-child(2) > table > thead > tr > th.mat-mdc-header-cell.mdc-data-table__header-cell.cdk-header-cell.cdk-column-value.mat-column-value.ng-star-inserted.mat-mdc-table-sticky.mat-mdc-table-sticky-border-elem-top'),
        items: () => cy.get('#mat-tab-content-0-0 > div > div > div > div:nth-child(2) > table > tbody > tr:nth-child(1) > td.mat-mdc-cell.mdc-data-table__cell.cdk-cell.cdk-column-key.mat-column-key.ng-star-inserted'),
         percepciones: () => cy.get('#mat-tab-content-0-0 > div > div > div > div:nth-child(2) > table > tbody > tr:nth-child(2) > td.mat-mdc-cell.mdc-data-table__cell.cdk-cell.cdk-column-key.mat-column-key.ng-star-inserted'),
        verDatosItems: () => cy.get('#mat-tab-content-0-0 > div > div > div > div:nth-child(2) > table > tbody > tr:nth-child(1) > td.mat-mdc-cell.mdc-data-table__cell.cdk-cell.cdk-column-value.mat-column-value.ng-star-inserted > button > span.mdc-button__label'),
        verDatosPercepciones: () => cy.get('#mat-tab-content-0-0 > div > div > div > div:nth-child(2) > table > tbody > tr:nth-child(2) > td.mat-mdc-cell.mdc-data-table__cell.cdk-cell.cdk-column-value.mat-column-value.ng-star-inserted > button > span.mdc-button__label'),
        cerrarVentanaSubTabla: () => cy.get('#actions > mat-dialog-actions > button > span.mdc-button__label'),
        datosItem: {
        
            cantidad: () => cy.get('.mat-mdc-header-row > .cdk-column-cantidad'),
            codigo: () => cy.get('.mat-mdc-header-row > .cdk-column-codigo'),
            descripcion: () => cy.get('.mat-mdc-header-row > .cdk-column-decripcion'),
            importeUnitario: () => cy.get('.mat-mdc-header-row > .cdk-column-importeUnitario'),
            importeTotalConIVA: () => cy.get('.mat-mdc-header-row > .cdk-column-items_importe_total_con_iva'),
            importeTotalSinIVA: () => cy.get('.mat-mdc-header-row > .cdk-column-items_importe_total_sin_iva'),
            iva: () => cy.get('.mat-mdc-header-row > .cdk-column-iva'),
            
        },
        datosPercepciones: {
            percepcionesImporte: () => cy.get('.cdk-column-percepciones_importe'),
            percepcionesPorcentaje: () => cy.get('.cdk-column-percepciones_porcentaje'),
            percepcionesTipo: ()=> cy.get('.cdk-column-percepciones_tipo')
        },
        procesarManualmenteBtn: () => cy.get('.dialog-footer > .ng-star-inserted > .mat-mdc-button-touch-target'),
        cerrarVentana: ()=> cy.get('data-test="document-detail-close-button"]'),
        
      // importeOtrosTributos TABLA
      abrirTributosTabla: () => cy.get(':nth-child(1) > .cdk-column-thumbnail > .thumbnail'),
      verTabla: () => cy.get(':nth-child(12) > .cdk-column-value > .mat-focus-indicator > .mat-button-wrapper'),
      tituloTributosTabla: () => cy.get('#mat-dialog-title-2'),
      verImporteOtrosTributos: () => cy.get('.mat-chip'),
      cerrarTributosTabla: () => cy.get('batch-info-table-view.ng-star-inserted > #actions > .mat-dialog-actions > .mat-focus-indicator > .mat-button-wrapper'),

    }
   
  verificarColumnas() {
    const columnas = [
        'cae', 'codigoDocumento', 'cuitJuridica', 'cuitProveedor', 'domicilioJuridica', 'domicilioProveedor',
        'fechaCae', 'fechaEmision', 'importeExento', 'importeNetoGravado', 'importeNoGravado',
        'importeOtrosTributos', 'importeTotal', 'iva10_5', 'iva21', 'iva27',
        'letraDocumento', 'moneda', 'numeroComprobante', 'numeroFactura',
        'ordenCompra', 'puntoVenta', 'razonSocialJuridica', 'razonSocialProveedor',
        'tipoCambio', 'tipoDocumento'
        ];

    columnas.forEach((columna) => {
        this.e.cellKey()
        .should('exist')
        .contains( columna);
    });

    columnas.forEach((columna) => {
    this.e.cellValue().then(($el) => {
        const valor = $el.text().trim(); 
        const resultado = valor ? `Columna ${columna}: ${valor}` : `Columna ${columna}: null`;

        cy.log(resultado);
        
        });
    });
    }
    
}

export default new DatosDocumento();