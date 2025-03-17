import Pantalla from "../../../pages/lotes/principal.js";
import Documento from "../../../pages/documentosProcesados/documentosEnTabla.js";
import Tabla from "../../../pages/lotes/tablaLotes.js"
import Agregar from "../../../pages/documentosProcesados/agregarDocumento.js";
import Lote from "../../../pages/lotes/in_Lotes.js";



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

    it('Ingresar al nuevo Lote', () => {
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.estadoRow().click();
            cy.url().should('include', `/batch/${id}/document`);
            cy.log('La URL está perfectamente redirigida')
        })

    });

    it('Agregar documentos al lote', () => {
        cy.probar_Lote()
      
        Agregar.e.agregarDoc().click();
        Agregar.e.multipageToggle().click();
        cy.subirPdf('/archivos/AFIP_separar_documentos.pdf');
        Agregar.e.cerrarUploader().click();
        cy.wait(15000);
        cy.reload();
    })

    it('Modificar el nombre del lote: CANCELAR OPERACIÓN', () => {
        nombreLote = 'Nombre_modificado'
        cy.probar_Lote()
        
        Lote.menuUp.nombreLote().should('have.text', ' Lote: Prueba edit')
        Lote.menuUp.renombrar().click();
        Lote.menuUp.renombrarInput().should('have.value', 'Prueba');
        Lote.menuUp.renombrarInput().clear().type(nombreLote);
        Lote.menuUp.renombrarCancel().click();
    })
    it('Modificar el nombre del lote: APROBAR OPERACIÓN', () => {
        nombreLote = 'Nombre_modificado'
        cy.probar_Lote()
        
        Lote.menuUp.nombreLote().should('have.text', ' Lote: Prueba edit')
        Lote.menuUp.renombrar().click();
        Lote.menuUp.renombrarInput().should('have.value', 'Prueba');
        Lote.menuUp.renombrarInput().clear().type(nombreLote);
        Lote.menuUp.renombrarConfirm().click();
        Lote.menuUp.renombrarInput().should('have.value', 'Nombre_modificado');
        Documento.contenido.mensajeToast().should('have.text', ' Lote renombrado exitosamente ');
    })

    it('Invalidar Documento Procesado', () => {
        cy.probar_Lote()
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
        Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.invalidar(id).click();
            cy.reload();
            Documento.validarEstadoFilaSeleccionada('Invalidado manualmente - (inva');
        })   
    })

    it('Borrar Documento Procesado', () => {
        cy.probar_Lote()
         Documento.contenido.checkboxRow().eq(1).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => { 
            Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.borrar(id).click();
            Documento.contenido.mensajeToast().should('be.visible').and('contain','Se completo la operación');
        })
    })
    
});