import FechaYFiltro from '../../../../pages/documentosProcesados/fechaYfiltro.js';

describe('Rango de fechas y filtro', () => {
        
    beforeEach(() => {
        cy.ingresar_Documentos_Procesados();
    })

    it('Por defecto debe mostrar fecha actual y mes anterior', () => {
      
        FechaYFiltro.e.rangoFechas().should('exist');
        FechaYFiltro.e.fechaInicio().should('have.value', FechaYFiltro.diaActualMesAnterior());
        FechaYFiltro.e.fechaFin().should('have.value',  FechaYFiltro.fechaActual());

    });

    it('Cambiar fechas manualmente', () => {

        FechaYFiltro.e.fechaInicio().clear().type('05/03/2016{enter}');
        FechaYFiltro.e.fechaField().should('be.visible');
        FechaYFiltro.e.fechaFin().clear().type('04/11/2020{enter}');
    })
   
    it('MUESTRA el error. Fechas erroneas/se recuadro se pone rojo ', () => {
        FechaYFiltro.e.fechaInicio().clear().type('35/15/2010{enter}');
        FechaYFiltro.e.fechaFin().clear().type('34/16/2200{enter}');
        cy.get('[data-test="report-date-range-field"] > .mat-mdc-text-field-wrapper').should('have.class', 'mdc-text-field--invalid');
        

    })

    it('MUESTRA el error. Fechas fuera de rango ', () => {
        FechaYFiltro.e.fechaInicio().clear().type('01/01/1800{enter}');
        FechaYFiltro.e.fechaFin().clear().type('31/12/0223{enter}');
        FechaYFiltro.e.filtro().click();
        FechaYFiltro.e.fechaFinError().should('contain', 'Fecha invalida');
      
    })

    
  it('Debe seleccionar unrango de fechas en el datepicker/dia inicio-dia fin', () => {
    FechaYFiltro.e.datePicker().click(); 
    FechaYFiltro.e.elegirfecha().contains('15').click(); 
    FechaYFiltro.e.elegirfecha().contains('21').click();
    FechaYFiltro.e.fechaInicio().should('have.value', '15/02/2025');
    FechaYFiltro.e.fechaFin().should('have.value', '21/02/2025'); 
  });

    it('Debe seleccionar una fecha en el datepicker/año-mes', () => {
        FechaYFiltro.e.datePicker().click(); 
        FechaYFiltro.e.elegirMesYear().click();
        FechaYFiltro.e.elegirfecha().contains('2025').click();
        FechaYFiltro.e.elegirfecha().contains('JAN').click();
        FechaYFiltro.e.elegirfecha().contains('2').click();
        FechaYFiltro.e.elegirfecha().contains('15').click();
        FechaYFiltro.e.fechaInicio().should('have.value', '02/01/2025');
        FechaYFiltro.e.fechaFin().should('have.value', '15/01/2025'); 
    });
    
    it('Filtro: el input admite todos los caracteres', () => {
        FechaYFiltro.e.filtro().click();
        FechaYFiltro.e.filtro().type('A').should('have.value', 'A');
        FechaYFiltro.e.filtro().type('B').should('have.value', 'AB');
        FechaYFiltro.e.filtro().type('C').should('have.value', 'ABC');
        FechaYFiltro.e.filtro().type('D').should('have.value', 'ABCD');
        FechaYFiltro.e.filtro().type('E').should('have.value', 'ABCDE');
        FechaYFiltro.e.filtro().type('F').should('have.value', 'ABCDEF');
        FechaYFiltro.e.filtro().type('G').should('have.value', 'ABCDEFG');
        FechaYFiltro.e.filtro().type('H').should('have.value', 'ABCDEFGH');
        FechaYFiltro.e.filtro().type('I').should('have.value', 'ABCDEFGHI');
        FechaYFiltro.e.filtro().type('J').should('have.value', 'ABCDEFGHIJ');
        FechaYFiltro.e.filtro().type('K').should('have.value', 'ABCDEFGHIJK');
        FechaYFiltro.e.filtro().type('0').should('have.value', 'ABCDEFGHIJK0');
        FechaYFiltro.e.filtro().type('1').should('have.value', 'ABCDEFGHIJK01');
        FechaYFiltro.e.filtro().type('2').should('have.value', 'ABCDEFGHIJK012');
        FechaYFiltro.e.filtro().type('3').should('have.value', 'ABCDEFGHIJK0123');
        FechaYFiltro.e.filtro().type('4').should('have.value', 'ABCDEFGHIJK01234');
        FechaYFiltro.e.filtro().type('5').should('have.value', 'ABCDEFGHIJK012345');        
        FechaYFiltro.e.filtro().type('6').should('have.value', 'ABCDEFGHIJK0123456');        
        FechaYFiltro.e.filtro().type('!').should('have.value', 'ABCDEFGHIJK0123456!');
        FechaYFiltro.e.filtro().type('@').should('have.value', 'ABCDEFGHIJK0123456!@');
        FechaYFiltro.e.filtro().type('#').should('have.value', 'ABCDEFGHIJK0123456!@#');
        FechaYFiltro.e.filtro().type('$').should('have.value', 'ABCDEFGHIJK0123456!@#$');
        FechaYFiltro.e.filtro().type('&').should('have.value', 'ABCDEFGHIJK0123456!@#$&');
        FechaYFiltro.e.filtro().clear().should('have.value', '');
        FechaYFiltro.e.filtro().type('SELECT * FROM').should('have.value', 'SELECT * FROM');
        FechaYFiltro.e.filtro().clear().type('select title, text from news where id=$id').should('have.value', 'select title, text from news where id=$id');
        
        cy.log('No debería aceptar comandos de SQL');
    })
});
