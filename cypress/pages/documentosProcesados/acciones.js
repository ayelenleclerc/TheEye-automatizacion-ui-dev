class Acciones{

    e = {
        descargarReporte: () => cy.get('[data-test="report-menu-download-report"]'),
        reprocesarSeleccion: () => cy.get('[data-test="report-menu-reprocess-selected"]'),
        despacharSeleccion: () => cy.get('[data-test="report-menu-dispatch-selected"]'),
        generarPlantilla: () => cy.get('[data-test="report-menu-generate-autotemplates"]'),
    }
}

export default new Acciones();