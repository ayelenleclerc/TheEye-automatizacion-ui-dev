import Pantalla from '../../pages/lotes/principal.js';
import Documento from "../../pages/documentosProcesados/documentosEnTabla.js";
import Tabla from "../../pages/lotes/tablaLotes.js"
import Agregar from "../../pages/documentosProcesados/agregarDocumento.js";
import Lote from "../../pages/lotes/in_Lotes.js";
import Resumen from "../../pages/lotes/pantallaResumen.js";


describe('Validación de lotes', () => {
    beforeEach(() => {
        cy.ingresar_Lotes();
    })

    it('Ver cuadro de lotes', () => {
        Pantalla.menuBase.titulo().should('be.visible');
        Pantalla.menuBase.agregarNuevo().should('be.visible');
        Pantalla.menuBase.tablaVacia().contains('No hay datos para mostrar');
    });

    it('Cabecera de tabla', () => {
        Pantalla.tablaHead.check().should('exist');
        Pantalla.tablaHead.id().should('exist');
        Pantalla.tablaHead.fechaCreacion().should('exist');
        Pantalla.tablaHead.carpeta().should('exist');
        Pantalla.tablaHead.cantItems().should('exist');
        Pantalla.tablaHead.estado().should('exist');;
        Pantalla.tablaHead.manejoEstado().should('exist');
        Pantalla.tablaHead.detalleEstado().should('exist');
        Pantalla.tablaHead.menuAccionBtn().should('exist');
    });

    it('Menu acciones de tabla, habilita y deshabilita todos los campos', () => {
        Pantalla.habilitarDeshabilitarCamposMenuAccion();
        cy.reload();
        Pantalla.habilitarDeshabilitarCamposMenuAccion();
    });

    it('Crear nuevo Lote sin nombre: muestra el error', () => {
        Pantalla.menuBase.agregarNuevo().click();
        Pantalla.nuevoLote.tituloNuevoLote().should('have.text', 'Nombre del nuevo lote');
        Pantalla.nuevoLote.guardarBtn().should('not.be.enabled');
        Pantalla.nuevoLote.input().type('{enter}');
        Pantalla.nuevoLote.input().should('have.value', '');
        Pantalla.nuevoLote.cancelarBtn().should('exist');
        Pantalla.nuevoLote.matDialog().click({ focus: true, force: true });
        cy.wait(1000);
        Pantalla.nuevoLote.errorVacio().should('exist').and('have.text', 'El nombre no puede estar vacío');
        Pantalla.nuevoLote.cancelarBtn().click();
    });

    it('Crear nuevo Lote', () => {
        let nombreLote = 'Prueba'
        Pantalla.menuBase.agregarNuevo().click();
        Pantalla.nuevoLote.input().type(`${nombreLote}`);
        Pantalla.nuevoLote.guardarBtn().click();
        Tabla.e.toastConfirm().contains(`Lote ${nombreLote} creado con éxito`)
    
    });
    
    it('Identificar primer lote, validar datos', () => {
        let nombreLote = 'Prueba'
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.checkboxInput(id).should('exist');
            Documento.contenido.idCopyBtn(id).should('exist');
            Documento.contenido.fechaCreacionRow().should('exist');
            Documento.validarFechaFilaSeleccionada();
            Tabla.e.carpeta().eq(0).should('have.text', ` ${nombreLote} `);
            Tabla.e.cantItems().eq(0).should('have.text', ' 0 ');
            Documento.validarEstadoFilaSeleccionada('Pendiente de procesar - (pendi');
            Tabla.e.estadoIcon(id).should('exist');
            Tabla.e.msgEstadoContent().eq(0).should('have.text', 'Lote en recepcion. Procesamiento pendiente.');
            Tabla.e.detalleContent().eq(0).should('have.text', 'N/A')
        })
    });
    
    it('Identificar primer lote, cancelar borrado', () => {
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Tabla.e.dispatchBtn(id).should('not.be.enabled');
            Tabla.e.borrarBtn(id).click();
            Tabla.modalBorrar.borrartitle(id).should('have.text', ' ¿Está seguro de querer borrar este lote? ');
            Tabla.modalBorrar.borrarContent(id).should('have.text', 'Esta acción no se puede deshacer. Una vez eliminado, el lote no podrá ser recuperado.')
            Tabla.modalBorrar.noBtn(id).click();
    
        })
    });

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
    });

    it('Crear nuevo Lote', () => {
        let nombreLote = 'Prueba'
        Pantalla.menuBase.agregarNuevo().click();
        Pantalla.nuevoLote.input().type(`${nombreLote}`);
        Pantalla.nuevoLote.guardarBtn().click();
        Tabla.e.toastConfirm().contains(`Lote ${nombreLote} creado con éxito`)
    });
    
    it('Ingresar al nuevo Lote', () => {
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.estadoRow().eq(0).click();
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
    });
    
    it('Modificar el nombre del lote: CANCELAR OPERACIÓN', () => {
        let nombreLote = 'Nombre_modificado'
        cy.probar_Lote()
        Lote.menuUp.nombreLote().should('have.text', ' Lote: Prueba edit')
        Lote.menuUp.renombrar().click();
        Lote.menuUp.renombrarInput().should('have.value', 'Prueba');
        Lote.menuUp.renombrarInput().clear().type(nombreLote);
        Lote.menuUp.renombrarCancel().click();
    });

    it('Modificar el nombre del lote: APROBAR OPERACIÓN', () => {
        let nombreLote = 'Nombre_modificado'
        cy.probar_Lote()
        Lote.menuUp.nombreLote().should('have.text', ' Lote: Prueba edit')
        Lote.menuUp.renombrar().click();
        Lote.menuUp.renombrarInput().should('have.value', 'Prueba');
        Lote.menuUp.renombrarInput().clear().type(nombreLote);
        Lote.menuUp.renombrarConfirm().click();
        Lote.menuUp.renombrarInput().should('have.value', 'Nombre_modificado');
        Documento.contenido.mensajeToast().should('have.text', ' Lote renombrado exitosamente ');
    });
    
    it('Invalidar Documento Procesado', () => {
        cy.probar_Lote()
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.invalidar(id).click();
            cy.reload();
            Documento.validarEstadoFilaSeleccionada('Invalidado manualmente - (inva');
        })
    });
    
    it('Borrar Documento Procesado', () => {
        cy.probar_Lote()
        Documento.contenido.checkboxRow().eq(1).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.borrar(id).click();
            Documento.contenido.mensajeToast().should('be.visible').and('contain', 'Se completo la operación');
        })
    });
    
    it('Borrar Lote', () => {
        cy.ingresar_Lotes()
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Tabla.e.borrarBtn(id).click();
            Tabla.modalBorrar.siBtn().click();
            Documento.contenido.mensajeToast().should('be.visible').and('contain', 'Lote borrado exitosamente');
        })
    });

    it('Crear Lote Test_Resumen', () => {
        let nombreLote = 'Test_Resumen'
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
    });
        
    it('clasificar documento para OP1500', () => {
        cy.fixture('/schemas/schemasId.json').then((schemas) => {
            const schemaId = schemas['OrdenDePago']

            cy.probar_Lote()
            Documento.contenido.checkboxRow().eq(1).click();
            Documento.obtenerIdFilaSeleccionada().then((id) => {
                Documento.contenido.acciones.menu(id).click();
                Documento.contenido.menu.clasificar(id).click();
                Documento.contenido.clasificar.clasificarDocumentoLabel().  should('have.text', ' Esquema a utilizar ').click();
                cy.wait(1000);
                Documento.contenido.clasificar.clasificarDocumentoField().  click();
                cy.wait(1000);
                Documento.contenido.clasificar.clasificarDocumentoOptionOP  (schemaId).click();
                Documento.contenido.clasificar.clasificarBtn().click();
                Documento.contenido.mensajeToast().contains('Reprocesando documento');
                cy.wait(15000);
                cy.reload();
            })
        });
    })
    it('Exportar excel : Error Filas faltantes', () => {
          cy.fixture('/schemas/schemasId.json').then((schemas) => {
            const schemaId = schemas['eCheq']
        cy.probar_Lote()
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.acciones.extraerExcel(id).click();
        })
        Documento.contenido.extraer.esquema().should('exist').click();
        cy.wait(1000);
        Documento.contenido.extraer.esquema().should('is.visible').click();
        cy.wait(1000);
        Documento.contenido.extraer.eCheqOption(schemaId).click();
        Documento.contenido.extraer.cantFilasInput().clear().type(2);
        Documento.contenido.eCheqInputs.cuentaDestino().clear().type('D');
        Documento.contenido.eCheqInputs.fechaPago().clear().type('C');
        Documento.contenido.eCheqInputs.monto().clear().type('B');
        Documento.contenido.eCheqInputs.nroCheque().clear().type('A');
        Documento.contenido.extraer.extraerBtn().click();
        Documento.contenido.mensajeToast().should('be.visible').and('contain', 'Error en Fila 2, Columna 4: Campo vacio');
        cy.reload();
    });
    });

    it('Exportar excel : ok', () => {
          cy.fixture('/schemas/schemasId.json').then((schemas) => {
            const schemaId = schemas['eCheq']
        cy.probar_Lote()
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.acciones.extraerExcel(id).click();
        })
        Documento.contenido.extraer.esquema().should('exist').click();
        cy.wait(1000);
        Documento.contenido.extraer.esquema().should('is.visible').click();
        cy.wait(1000);
        Documento.contenido.extraer.eCheqOption(schemaId).click();
        Documento.contenido.extraer.cantFilasInput().clear().type(2);
        Documento.contenido.eCheqInputs.cuentaDestino().clear().type('D');
        Documento.contenido.eCheqInputs.fechaPago().clear().type('C');
        Documento.contenido.eCheqInputs.monto().clear().type('B');
        Documento.contenido.eCheqInputs.nroCheque().clear().type('A');
        Documento.contenido.eCheqInputs.eliminarCol5().click({force: true});
        Documento.contenido.eCheqInputs.eliminarCol5Confirm().click();
        Documento.contenido.eCheqInputs.eliminarCol4().click();
        Documento.contenido.eCheqInputs.eliminarCol4Confirm().click();
        Documento.contenido.extraer.extraerBtn().click();
        cy.reload();

    });
    });

    it('Ingresar al nuevo Lote: obtener id documentos', () => {
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
            Resumen.ladoDerecho.titulo(id).contains(' Orden De Pago ');
            Resumen.ladoDerecho.edicionManual(id).should('exist');
            Resumen.ladoDerecho.invalidarOp(id).should('exist');
        })
    });
        
    it('Validar Resumen Lado izquierdo', () => {
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.estadoRow().eq(0).click();
        })
        Documento.contenido.checkboxRow().eq(0).click();
        Lote.menuUp.resumen().click();
        Resumen.capturarIdDocumento().then((id) => {
            Resumen.ladoIzquierdo.titulo(id).contains(' ECheqs ');
        })
    });

    it('Invalidar fila: cancelar', () => {
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.estadoRow().eq(0).click();
        })
        Documento.contenido.checkboxRow().eq(0).click();
        Lote.menuUp.resumen().click();
        Resumen.capturarIdFila(0).then((id) => {
            Resumen.ladoIzquierdo.accionfila(id).click();
            Resumen.ladoIzquierdo.invalidar(id).click();
            Resumen.confirmarInvalidar.titulo();
            Resumen.confirmarInvalidar.mensaje();
            Resumen.confirmarInvalidar.cancelar().click();
        })
    });

    it('Invalidar fila: aceptar', () => {
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.estadoRow().eq(0).click();
        })
        Documento.contenido.checkboxRow().eq(0).click();
        Lote.menuUp.resumen().click();
        Resumen.capturarIdFila(0).then((id) => {
            Resumen.ladoIzquierdo.accionfila(id).click();
            Resumen.ladoIzquierdo.invalidar(id).click();
            Resumen.confirmarInvalidar.titulo();
            Resumen.confirmarInvalidar.mensaje();
            Resumen.confirmarInvalidar.aceptar().click();
            cy.get('#toast-container > div > div').should('have.text', ' No se pudo invalidar el documento ')
        })
    });
})
