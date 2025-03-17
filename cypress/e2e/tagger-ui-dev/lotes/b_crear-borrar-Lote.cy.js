import Pantalla from "../../../pages/lotes/principal.js";
import Documento from "../../../pages/documentosProcesados/documentosEnTabla.js";
import Tabla from "../../../pages/lotes/tablaLotes.js"


describe('Acciones básicas de Nuevo Lote', () => {
    let nombreLote;
    
    beforeEach(() => {
        cy.ingresar_Lotes();
    });

    it('Crear nuevo Lote', () => {
        nombreLote = 'Prueba'
        Pantalla.menuBase.agregarNuevo().click();
        Pantalla.nuevoLote.input().type(`${nombreLote}`);
        Pantalla.nuevoLote.guardarBtn().click();
        Tabla.e.toastConfirm().contains(`Lote ${nombreLote} creado con éxito`)

    });

    it('Identificar primer lote, validar datos', () => {
        nombreLote = 'Prueba'
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.checkboxInput(id).should('exist');
            Documento.contenido.idCopyBtn(id).should('exist');
            Documento.contenido.fechaCreacionRow().should('exist');
            Documento.validarFechaFilaSeleccionada();
            Tabla.e.carpeta().should('have.text', ` ${nombreLote} `);
            Tabla.e.cantItems().should('have.text', ' 0 ');
             Documento.validarEstadoFilaSeleccionada('Pendiente de procesar - (pendi');
            Tabla.e.estadoIcon(id).should('exist');
            Tabla.e.msgEstadoContent().should('have.text', 'Lote en recepcion. Procesamiento pendiente.');
            Tabla.e.detalleContent().should('have.text', 'N/A')
        })
    })

    it('Identificar primer lote, cancelar borrado', () => {
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Tabla.e.dispatchBtn(id).should('not.be.enabled');
            Tabla.e.borrarBtn(id).click();
            Tabla.modalBorrar.borrartitle(id).should('have.text', ' ¿Está seguro de querer borrar este lote? ');
            Tabla.modalBorrar.borrarContent(id).should('have.text', 'Esta acción no se puede deshacer. Una vez eliminado, el lote no podrá ser recuperado.')
            Tabla.modalBorrar.noBtn(id).click();

        })
    })
     it('Identificar primer lote, confirmar borrado', () => {
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Tabla.e.dispatchBtn(id).should('not.be.enabled');
            Tabla.e.borrarBtn(id).click();
            Tabla.modalBorrar.borrartitle(id).should('have.text', ' ¿Está seguro de querer borrar este lote? ');
            Tabla.modalBorrar.borrarContent(id).should('have.text', 'Esta acción no se puede deshacer. Una vez eliminado, el lote no podrá ser recuperado.')
            Tabla.modalBorrar.siBtn(id).click();
            Tabla.e.toastConfirm().contains('Lote borrado exitosamente')

        })
    })
})