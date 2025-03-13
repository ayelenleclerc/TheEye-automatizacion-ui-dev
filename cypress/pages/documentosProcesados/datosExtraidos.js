class DatosDocumento{

    e = {
        titulo: (id) => cy.get('[data-test="document-detail-title"]'),
        infoTitulo: ()=> cy.get('[data-test="document-detail-info-obtained-title"]'),
        inputFiltro: () => cy.get('[data-test="document-detail-filter-field"]'),
            
        //TABLA de los datos del documento
        nombre: () => cy.get('[data-test="document-detail-doc-tags-header-key"]'),
        valor: () => cy.get('[data-test="document-detail-doc-tags-header-value"]'),
        cellKey: () => cy.get('[data-test="document-detail-doc-tags-cell-key"]'),
        cellValue: () => cy.get('[data-test="document-detail-doc-tags-cell-value"] > span'), 

        //TABLA de los items
        tabla: () => cy.get('[data-test="document-detail-tables-header-key"]'),
        datos: () => cy.get('[data-test="document-detail-tables-header-value"]'),
        subtablas: () => cy.get('[data-test="document-detail-tables-cell-key"]'),
        verDatos: () => cy.get('[data-test="document-detail-tables-show-data-button"]'),
        tituloSubTabla: () => cy.get('[mat-dialog-title]'),
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
        procesarManualmenteBtn: () => cy.get('[data-test="document-detail-process-manually-button"]'),
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