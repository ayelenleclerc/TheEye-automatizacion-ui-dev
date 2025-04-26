import Documento from "../../../pages/documentosProcesados/documentosEnTabla.js";
import Lote from "../../../pages/lotes/in_Lotes.js";
import Resumen from "../../../pages/lotes/pantallaResumen.js";


describe('Validar Resumen', () => {
    
    beforeEach(() => {
        cy.ingresar_Lotes();
    });

    it('Ingresar al nuevo Lote: oobtener id documentos', () => {
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.estadoRow().eq(0).click();
            cy.url().should('include', `/batch/${id}/document`);
            cy.log('La URL está perfectamente redirigida')
        })
    });

    it('Validar Resumen Lado derecho', () => {
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.estadoRow().eq(0).click();
        })
        Documento.contenido.checkboxRow().eq(1).click();   
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Lote.menuUp.resumen().click();
            Resumen.ladoDerecho.titulo(id).contains('Orden De Pago');
            Resumen.ladoDerecho.edicionManual(id).should('exist');
            Resumen.ladoDerecho.invalidarOp(id).should('exist');
        })
    })
    
    it('Validar Resumen Lado izquierdo', () => {
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
             Documento.contenido.estadoRow().eq(0).click();
        })
        Documento.contenido.checkboxRow().eq(0).click();   
        Lote.menuUp.resumen().click();
        Resumen.capturarIdDocumento().then((id) => {        
            Resumen.ladoIzquierdo.titulo(id).contains('eCheq');
        })
    })

    it('Invalidar fila: cancelar', () => { 
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
             Documento.contenido.estadoRow().eq(0).click();
        })
        Documento.contenido.checkboxRow().eq(0).click();   
        Lote.menuUp.resumen().click(); 
        Resumen.capturarIdFila(0).then((id)=>{
            Resumen.ladoIzquierdo.accionfila(id).click();
            Resumen.ladoIzquierdo.invalidar(id).click();
            Resumen.confirmarInvalidar.titulo();
            Resumen.confirmarInvalidar.mensaje();
            Resumen.confirmarInvalidar.cancelar().click();
        })       
    })

    it('Invalidar fila: aceptar', () => { 
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
             Documento.contenido.estadoRow().eq(0).click();
        })
        Documento.contenido.checkboxRow().eq(0).click();   
        Lote.menuUp.resumen().click();
        Resumen.capturarIdFila(0).then((id)=>{
            Resumen.ladoIzquierdo.accionfila(id).click();
            Resumen.ladoIzquierdo.invalidar(id).click();
            Resumen.confirmarInvalidar.titulo();
            Resumen.confirmarInvalidar.mensaje();
            Resumen.confirmarInvalidar.aceptar().click();
            cy.get('#toast-container > div > div').should('have.text',' No se pudo invalidar el documento ')
        })
    })
});