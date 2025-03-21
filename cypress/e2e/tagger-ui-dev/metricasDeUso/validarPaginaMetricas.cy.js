import MetricasPage from "../../../pages/metricasDeUso/metricasPage.js";

describe("Métricas de Uso - Validación de elementos de la página", () => {
    beforeEach(() => {
        cy.ingresar_Metricas();
        cy.wait(1000); // Esperar que la página cargue completamente
    });

    it("Validar elementos del encabezado", () => {
        MetricasPage.header.titulo().should("be.visible");
        MetricasPage.header.botonVolver().should("be.visible");
    });

    it("Validar elementos de filtros", () => {
        MetricasPage.filtros.rangoFechas().should("exist");
        MetricasPage.filtros.fechaInicio().should("be.visible");
        MetricasPage.filtros.fechaFin().should("be.visible");
        MetricasPage.filtros.botonFiltrar().should("be.visible").and("be.enabled");
        MetricasPage.filtros.botonLimpiar().should("be.visible").and("be.enabled");
    });

    it("Validar contenedores de gráficos", () => {
        MetricasPage.graficos.contenedorPrincipal().should("exist");
        MetricasPage.graficos.graficoDocumentosProcesados().should("exist");
        // Verificar que los gráficos se renderizan correctamente
        cy.get("canvas").should("exist");
    });

    it("Validar tabla de datos", () => {
        MetricasPage.tabla.contenedor().should("exist");
        MetricasPage.tabla.encabezados().should("be.visible");
        // Verificar que la tabla tiene encabezados típicos para métricas
        MetricasPage.tabla.encabezados().should("contain", "Fecha");
    });

    it("Validar paginación de la tabla", () => {
        MetricasPage.tabla.paginador().should("exist");
        MetricasPage.tabla.itemsPorPagina().should("exist");
    });

    it("Verificar funcionalidad del botón Volver", () => {
        MetricasPage.volverAHome();
        cy.url().should("include", "/home");
    });
});