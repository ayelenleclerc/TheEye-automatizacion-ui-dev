import Pantalla from "../../../pages/lotes/principal.js";
import Documento from "../../../pages/documentosProcesados/documentosEnTabla.js";
import Tabla from "../../../pages/lotes/tablaLotes.js"
import Agregar from "../../../pages/documentosProcesados/agregarDocumento.js";



describe('Prepapar para Resumen', () => {
    let nombreLote;
    
    beforeEach(() => {
        cy.ingresar_Lotes();
    });

    it('Crear Lote Test_Resumen', () => {
        nombreLote = 'Test_Resumen'
        Pantalla.menuBase.agregarNuevo().click();
        Pantalla.nuevoLote.input().type(`${nombreLote}`);
        Pantalla.nuevoLote.guardarBtn().click();
        Tabla.e.toastConfirm().contains(`Lote ${nombreLote} creado con éxito`)

    });
    
        it('Agregar documentos al lote', () => {
            cy.probar_Lote()
          
            Agregar.e.agregarDoc().click();
            cy.subirPdf('/archivos/OP1500.pdf');
            Agregar.e.cerrarUploader().click();
            Agregar.e.agregarDoc().click();
            cy.subirArchivo('input[type="file"]', './archivos/Echeqs_cuitCliente_RazonSocialCliente .xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
             Agregar.e.cerrarUploader().click();
            cy.wait(15000);
            cy.reload();

        })
    
    it('clasificar documento para OP1500', () => {
         cy.probar_Lote()
            Documento.contenido.checkboxRow().eq(1).click();
            Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.clasificar(id).click();
                Documento.contenido.clasificar.clasificarDocumentoLabel().should('have.text', ' Esquema a utilizar ').click();
                cy.wait(1000);
                Documento.contenido.clasificar.clasificarDocumentoField().click();
                cy.wait(1000);
            Documento.contenido.clasificar.clasificarDocumentoOptionOP().click();
            Documento.contenido.clasificar.clasificarBtn().click();
            Documento.contenido.mensajeToast().contains('Reprocesando documento');
            cy.wait(15000);
            cy.reload();
            })
        })
        it('Exportar excel', () => {
         cy.probar_Lote()
            Documento.contenido.checkboxRow().eq(0).click();
            Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.acciones.extraerExcel(id).click();
            })
            Documento.contenido.extraer.esquema().should('exist').click();
            cy.wait(1000);
            Documento.contenido.extraer.esquema().should('is.visible').click();
            cy.wait(1000);
            Documento.contenido.extraer.eCheqOption().click();
            Documento.contenido.extraer.cantFilasInput().clear().type(2);
            Documento.contenido.eCheqInputs.cuentaDestino().clear().type('D');
            Documento.contenido.eCheqInputs.fechaPago().clear().type('C');
            Documento.contenido.eCheqInputs.monto().clear().type('B');
            Documento.contenido.eCheqInputs.nroCheque().clear().type('A');
            Documento.contenido.extraer.extraerBtn().click();
            cy.wait(10000);
            cy.reload();
        })
    });
