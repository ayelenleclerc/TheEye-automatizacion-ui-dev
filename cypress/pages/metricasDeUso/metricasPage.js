class MetricasPage {
    // Elementos de la página
    header = {
        titulo: () => cy.get('h1, .page-title').contains('Métricas de Uso'),
        subtitulo: () => cy.get('.subtitle, .page-subtitle'),
        botonVolver: () => cy.get('[data-test="back-button"], button:contains("Volver")'),
    }

    filtros = {
        rangoFechas: () => cy.get('[data-test="date-range-picker"], mat-date-range-input'),
        fechaInicio: () => cy.get('[data-test="start-date-input"], input[placeholder="Fecha inicio"]'),
        fechaFin: () => cy.get('[data-test="end-date-input"], input[placeholder="Fecha fin"]'),
        botonFiltrar: () => cy.get('[data-test="filter-button"], button:contains("Filtrar")'),
        botonLimpiar: () => cy.get('[data-test="clear-button"], button:contains("Limpiar")'),
        selectTipoGrafico: () => cy.get('[data-test="chart-type-select"], mat-select'),
        selectUsuario: () => cy.get('[data-test="user-select"], mat-select'),
    }

    graficos = {
        contenedorPrincipal: () => cy.get('[data-test="charts-container"], .charts-container'),
        graficoDocumentosProcesados: () => cy.get('[data-test="documents-chart"], .chart-documents'),
        graficoPrecision: () => cy.get('[data-test="accuracy-chart"], .chart-accuracy'),
        graficoRendimiento: () => cy.get('[data-test="performance-chart"], .chart-performance'),
        leyendaGrafico: () => cy.get('.chart-legend, .mat-legend-list'),
        tooltipGrafico: () => cy.get('.chart-tooltip'),
    }

    tabla = {
        contenedor: () => cy.get('[data-test="metrics-table"], table, mat-table'),
        encabezados: () => cy.get('th, .mat-header-cell'),
        filas: () => cy.get('tr, .mat-row'),
        celdas: () => cy.get('td, .mat-cell'),
        paginador: () => cy.get('mat-paginator'),
        itemsPorPagina: () => cy.get('.mat-paginator-page-size-select'),
        botonSiguiente: () => cy.get('[data-test="paginator-next"], .mat-paginator-navigation-next'),
        botonAnterior: () => cy.get('[data-test="paginator-previous"], .mat-paginator-navigation-previous'),
    }

    exportar = {
        botonExportar: () => cy.get('[data-test="export-button"], button:contains("Exportar")'),
        opcionExportarCSV: () => cy.get('[data-test="export-csv"], button:contains("CSV")'),
        opcionExportarPDF: () => cy.get('[data-test="export-pdf"], button:contains("PDF")'),
        opcionExportarExcel: () => cy.get('[data-test="export-excel"], button:contains("Excel")'),
    }

    // Acciones
    seleccionarRangoFechas(fechaInicio, fechaFin) {
        this.filtros.fechaInicio().clear().type(fechaInicio);
        this.filtros.fechaFin().clear().type(fechaFin);
    }

    aplicarFiltro() {
        this.filtros.botonFiltrar().click();
    }

    limpiarFiltros() {
        this.filtros.botonLimpiar().click();
    }

    seleccionarTipoGrafico(tipo) {
        this.filtros.selectTipoGrafico().click();
        cy.get('mat-option').contains(tipo).click();
    }

    seleccionarUsuario(usuario) {
        this.filtros.selectUsuario().click();
        cy.get('mat-option').contains(usuario).click();
    }

    exportarDatos(formato) {
        this.exportar.botonExportar().click();
        if (formato === 'CSV') {
            this.exportar.opcionExportarCSV().click();
        } else if (formato === 'PDF') {
            this.exportar.opcionExportarPDF().click();
        } else if (formato === 'Excel') {
            this.exportar.opcionExportarExcel().click();
        }
    }

    volverAHome() {
        this.header.botonVolver().click();
    }
}

export default new MetricasPage();