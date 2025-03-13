class fechaFiltro{
    e= {
        rangoFechas: () => cy.get('[data-test="report-date-range-container"]'),
        fechaInput: () => cy.get('[data-test="report-date-range-input"]'),
        fechaField: () => cy.get('[data-test="report-date-range-field"]'),
        fechaInicio: () => cy.get('[data-test="report-date-range-start"]'),
        fechaFin: () => cy.get('[data-test="report-date-range-end"]'),
        fechaFinError: () => cy.get('[data-test="report-date-range-error-end"]'),
        datePicker: () => cy.get('[data-test="report-date-range-toggle"]'),
        elegirfecha: () => cy.get('.mat-calendar-body-cell-content.mat-focus-indicator'),
        elegirMesYear: () => cy.get('.mat-calendar-period-button'),
        filtro: () => cy.get('[data-test="report-filter-input"]'),
    }   

    
    fechaActual = () => {
        const hoy = new Date();
        const dia = String(hoy.getDate()).padStart(2, '0'); 
        const mes = String(hoy.getMonth() + 1).padStart(2, '0'); 
        const anio = hoy.getFullYear();
        
        return `${dia}/${mes}/${anio}`;
    }

    diaActualMesAnterior = () => {
    const hoy = new Date();
    hoy.setMonth(hoy.getMonth() - 1);

    const dia = String(hoy.getDate()).padStart(2, '0'); 
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); 
    const anio = hoy.getFullYear();

    return `${dia}/${mes}/${anio}`;
}
}

export default new fechaFiltro();