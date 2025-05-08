import MenuPrincipal from '../../pages/documentosProcesados/menuPrincipal.js';
import AgregarDocumento from "../../pages/documentosProcesados/agregarDocumento.js";  
import Acciones from '../../pages/documentosProcesados/acciones.js';
import FechaYFiltro from '../../pages/documentosProcesados/fechaYfiltro.js';
import Cabecera from '../../pages/documentosProcesados/cabeceraTabla.js';
import Documento from '../../pages/documentosProcesados/documentosEnTabla.js';
import DatosDocumento from "../../pages/documentosProcesados/datosExtraidos.js";
import ProcesamientoManual from "../../pages/documentosProcesados/procesamientoManual.js";



describe('Regresion Test Documentos', () => {
    
     beforeEach(() => {
        cy.ingresar_Documentos_Procesados();
     })
    
    it("Elementos del header", () => {
        MenuPrincipal.header.irInicio().should('exist');
        MenuPrincipal.header.titulo().should('contain', ' Documentos procesados');
        MenuPrincipal.header.agregarDocumento().should('exist');
        MenuPrincipal.header.agregarDocumento().should('contain', ' Añadir Documento');
        MenuPrincipal.header.acciones().should('exist');
        MenuPrincipal.header.acciones().should('contain', 'Acciones');
             
    });
        
    it("Elementos del footer", () => {
        MenuPrincipal.footer.paginador().should('exist');
        MenuPrincipal.footer.footer ().should('exist');
    });
    
    it("Abrir modal para agregar documentos", () => {
        AgregarDocumento.e.agregarDoc().should('exist');
        AgregarDocumento.e.agregarDoc().should('contain', ' Añadir Documento');
        AgregarDocumento.e.agregarDoc().click();
        AgregarDocumento.e.titulo().should('contain', 'Subir documentos al lote');
        AgregarDocumento.e.uploader().should('exist');
        AgregarDocumento.e.uploaderSection().should('exist');
        AgregarDocumento.e.inputDrag().should('exist');
        AgregarDocumento.e.inputMessage().should('contain', 'Arrastrar y soltar archivos');
        AgregarDocumento.e.examinarBtn().should('exist');
        AgregarDocumento.e.examinarBtn().should('contain', 'Examinar');
        AgregarDocumento.e.multipageToggle().should('exist');
        AgregarDocumento.e.multipageToggle().click();
        AgregarDocumento.e.multipageToggleLabel().invoke('text').should('include', ' Crear un documento por página ');
        AgregarDocumento.e.multipageToggle().click();
        AgregarDocumento.e.cerrarUploader().should('exist');
        AgregarDocumento.e.cerrarUploader().should('contain', 'Cerrar');
        AgregarDocumento.e.cerrarUploader().click();
    })

    it("Elementos del menú Acciones", () => {
        MenuPrincipal.header.acciones().click();
        Acciones.e.descargarReporte().should('exist');
        Acciones.e.reprocesarSeleccion().should('exist');
        Acciones.e.despacharSeleccion().should('exist');
        Acciones.e.generarPlantilla().should('exist');
    });
        
    it('Por defecto debe mostrar fecha actual y mes anterior', () => {
        FechaYFiltro.e.rangoFechas().should('exist');
        FechaYFiltro.e.fechaInicio().should('have.value', FechaYFiltro.diaActualMesAnterior());
        FechaYFiltro.e.fechaFin().should('have.value',  FechaYFiltro.fechaActual());
    });
    
    it('Cambiar fechas manualmente', () => {
    
        FechaYFiltro.e.fechaInicio().clear().type('05/04/2016{enter}');
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
        FechaYFiltro.e.fechaInicio().should('have.value', '15/04/2025');
        FechaYFiltro.e.fechaFin().should('have.value', '21/04/2025'); 
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
    })
    
    it("Elementos por default", () => {
        Cabecera.e.checkbox().should('exist');
        Cabecera.e.idColumn().should('exist');
        Cabecera.e.miniatura().should('exist');
        Cabecera.e.fechaCreacion().should('exist');
        Cabecera.e.nombre().should('exist');
        Cabecera.e.documento().should('exist');
        Cabecera.e.estado().should('exist');
        Cabecera.e.mensajeEstado().should('exist');
        Cabecera.e.menuSelect().should('exist');
    });
        
    it("Activar todos los elementos de la tabla y desactivarlos", () => {
        Cabecera.activarTodaLatabla();
        Cabecera.desactivarTodaLaTabla();
     });

    it('Verificar elementos de la tabla vacia', () => {
        Cabecera.activarTodaLatabla();
        Documento.vacio.tr().should('exist');
        Documento.vacio.td().contains('No hay datos para mostrar').should('exist');
    })  

    it("Subir documento de prueba", () => {
        AgregarDocumento.e.agregarDoc().click();
        cy.subirPdf('/archivos/pruebaTabla.pdf');
        AgregarDocumento.e.progresoCarga().should('be.visible');
        AgregarDocumento.e.msgSubidaOk().should('be.visible').and('contain', 'Subida de documentos completada con éxito');
        AgregarDocumento.e.cerrarUploader().click();
    });
    
    it("Validar fila default y eliminar documento", () => {
            Documento.obtenerIdFila().then((id) => {
                cy.log(`El ID de la fila es: ${id}`);
                cy.wait(2000);
                Documento.contenido.checkboxInput(id).should('exist');
                Documento.contenido.idCopyBtn(id).should('exist');
                Documento.contenido.miniatura(id).should('exist');
                Documento.contenido.fechaCreacionRow().should('exist');
                Documento.contenido.nombreRow().should('exist');
                
                Documento.contenido.documentoRow().should('exist');
                Documento.contenido.estadoRow().should('exist');
                Documento.contenido.mensajeEstadoRow().should('exist');
                Documento.contenido.accionesRow().should('exist');
                Documento.contenido.acciones.descargar(id).click();
                Documento.contenido.acciones.menu(id).click();
                Documento.contenido.menu.borrar(id).click();
                Documento.contenido.mensajeToast().should('be.visible').and('contain','Se completo la operación');
            })
    
    })
    
    it("Subir documento de prueba", () => {
        AgregarDocumento.e.agregarDoc().click();
        cy.subirPdf('/archivos/pruebaTabla.pdf');
        AgregarDocumento.e.progresoCarga().should('be.visible');
        AgregarDocumento.e.msgSubidaOk().should('be.visible').and('contain', 'Subida de documentos completada con éxito');
        AgregarDocumento.e.cerrarUploader().click();
    });
        
    it("Visualizacion de documento primera fila/columnas default", () => {
        Documento.obtenerIdFila().then((id) => {
            cy.log(`El ID de la fila es: ${id}`);
            cy.wait(2000);
            Documento.contenido.checkboxInput(id).should('exist');
            Documento.contenido.idCopyBtn(id).should('exist');
            Documento.contenido.miniatura(id).should('exist');
            Documento.contenido.fechaCreacionRow().should('exist');
            Documento.contenido.nombreRow().should('exist');
            Documento.contenido.documentoRow().should('exist');
            Documento.contenido.estadoRow().should('exist');
            Documento.contenido.mensajeEstadoRow().should('exist');
            Documento.contenido.accionesRow().should('exist');
            Documento.contenido.acciones.procesarManual(id).should('exist');
        })
    });
    
    it("Visualizacion de documento primera fila/columnas todas", () => {
         Cabecera.activarTodaLatabla();
         Documento.obtenerIdFila().then((id) => {
            cy.log(`El ID de la fila es: ${id}`);
            cy.wait(2000);
            Documento.contenido.checkboxInput(id).should('exist');
            Documento.contenido.idCopyBtn(id).should('exist');
             Documento.contenido.miniatura(id).should('exist');
            Documento.contenido.fechaCreacionRow().should('exist');
            Documento.contenido.nombreRow().should('exist');
            Documento.contenido.paginasRow().should('exist');
            Documento.contenido.documentoRow().should('exist');
            Documento.contenido.coincidenciaRow().should('exist');
            Documento.contenido.revisionManualRow().should('exist');
            Documento.contenido.mensajeValidacionRow().should('exist'); 
            Documento.contenido.deteccionesRow().should('exist');
            Documento.contenido.requeridosRow().should('exist'); 
            Documento.contenido.informacionEstadoRow().should('exist');
            Documento.contenido.detalleEstadoRow().should('exist');
            Documento.contenido.estadoRow().should('exist');
            Documento.contenido.mensajeEstadoRow().should('exist');
            Documento.contenido.accionesRow().should('exist');
            Documento.contenido.acciones.procesarManual(id).should('exist');
            Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.borrar(id).click();
            Documento.contenido.mensajeToast().should('be.visible').and('contain','Se completo la operación');
        })
    });
        
     it('TC-002 Subir documento y validar estado y contenido default', () => {
        AgregarDocumento.e.agregarDoc().click();
        cy.subirPdf('/archivos/factura_Afip_lineas_percepciones.pdf');
        AgregarDocumento.e.progresoCarga().should('be.visible');
        AgregarDocumento.e.msgSubidaOk().should('be.visible').and('contain', 'Subida de documentos completada con éxito');
        AgregarDocumento.e.cerrarUploader().click();
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.checkboxInput(id).should('exist');
            Documento.contenido.idCopyBtn(id).should('exist');
            Documento.contenido.miniatura(id).should('exist');
            Documento.validarFechaFilaSeleccionada();
            Documento.contenido.nombreRow().should('be.visible');
            Documento.contenido.documentoRow().should('exist');
            Documento.validarEstadoFilaSeleccionada('Procesando - (converting)');
            Documento.contenido.mensajeEstadoRow().first().should('have.text', 'El documento esta siendo procesado.');
            cy.wait(15000);
            cy.reload();
            Documento.validarEstadoFilaSeleccionada('Procesado - (converted)');
            Documento.contenido.documentoRow().first().should('be.visible').and('contain', ' Factura');
            Documento.contenido.mensajeEstadoRow().first().should('contain', 'Datos extraídos. Puede requerir intervencion');

            Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.borrar(id).click();
            Documento.contenido.mensajeToast().should('be.visible').and('contain','Se completo la operación');
           
        });
            
    })
    
    it('TC-003 Subir documento y clasificar manualmente', () => {
        cy.fixture('/schemas/schemasId.json').then((schemas) => {
            const schemaId = schemas['Factura']
            AgregarDocumento.e.agregarDoc().click();
            cy.subirPdf('/archivos/clasificar_a_mano.pdf');
            AgregarDocumento.e.progresoCarga().should('be.visible');
            AgregarDocumento.e.msgSubidaOk().should('be.visible').and('contain', 'Subida de documentos completada con éxito');
            AgregarDocumento.e.cerrarUploader().click();
            cy.wait(20000);
            cy.reload();
            Documento.contenido.checkboxRow().eq(0).click();
            Documento.obtenerIdFilaSeleccionada().then((id) => {
                Documento.contenido.acciones.menu(id).click();
                Documento.contenido.menu.clasificar(id).click();
                Documento.contenido.clasificar.clasificarDocumentoLabel().should('have.text', ' Esquema a utilizar ').click();
                Documento.contenido.clasificar.clasificarDocumentoField().click();
                cy.wait(1000);
                Documento.contenido.clasificar.clasificarDocumentoOptionOP(schemaId).should('exist').click({force: true});
                cy.get('mat-option').should('not.exist'); 
                Documento.contenido.clasificar.clasificarBtn().click({force: true});
                Documento.contenido.mensajeToast().contains('Reprocesando documento')
               
            })
            cy.wait(20000);
            cy.reload();
        })
    })

    it('TC-004 Validación de datos del documento, existen todas las columnas', () => {
      
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.miniatura(id). click();
            DatosDocumento.e.titulo().should('have.text', `Document ID: ${id}`);
            
            DatosDocumento.e.infoTitulo().should('have.text', 'Información Obtenida');
            
            DatosDocumento.e.inputFiltro().clear().type('cae').clear();
            DatosDocumento.e.inputFiltro().clear()
        })
        DatosDocumento.e.nombre().should('have.text', 'NOMBRE');
        DatosDocumento.e.valor().should('have.text', 'VALOR');
        DatosDocumento.verificarColumnas();
           
    })

    it('TC-004 Validar tabla items', () => {
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.miniatura(id).click();
            DatosDocumento.e.titulo().should('have.text', `Document ID: ${id}`);
            DatosDocumento.e.infoTitulo().should('contain', 'Información Obtenida');
        })

        DatosDocumento.e.subtablas().scrollIntoView().eq(0).should('exist').and('contain', 'TABLA');
        DatosDocumento.e.subtablasValores().should('exist').and('contain', 'DATOS');
        DatosDocumento.e.items().contains('items');
        DatosDocumento.e.verDatosItems().click();
        DatosDocumento.e.datosItem.cantidad().should('have.text', 'cantidad')
        DatosDocumento.e.datosItem.codigo().should('have.text', 'codigo')
        DatosDocumento.e.datosItem.descripcion().should('have.text', 'decripcion')
        DatosDocumento.e.datosItem.importeUnitario().should('have.text', 'importeUnitario')
        DatosDocumento.e.datosItem.importeTotalConIVA().should('have.text', 'items_importe_total_con_iva')
        DatosDocumento.e.datosItem.importeTotalSinIVA().should('have.text', 'items_importe_total_sin_iva')
        DatosDocumento.e.datosItem.iva().should('have.text', 'iva');
        DatosDocumento.e.cerrarVentanaSubTabla().click();
    })
    
    it('TC-004 Validar tabla percepciones', () => {
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.miniatura(id).click();
            DatosDocumento.e.titulo(id).should('have.text', `Document ID: ${id}`);
            DatosDocumento.e.infoTitulo().should('contain', 'Información Obtenida');
        })

        DatosDocumento.e.subtablas().scrollIntoView().eq(0).should('exist').and('contain', 'TABLA');
        DatosDocumento.e.subtablasValores().should('exist').and('contain', 'DATOS');
        DatosDocumento.e.percepciones().contains('percepciones');
        DatosDocumento.e.verDatosPercepciones().click();
        DatosDocumento.e.datosPercepciones.percepcionesImporte().should('have.text', 'percepciones_importe');
        DatosDocumento.e.datosPercepciones.percepcionesPorcentaje().should('have.text', 'percepciones_porcentaje');
        DatosDocumento.e.datosPercepciones.percepcionesTipo().should('have.text', 'percepciones_tipo');
        DatosDocumento.e.cerrarVentanaSubTabla().click();
    })
    
    it('TC-005 Agregar documento con datos faltantes', () => {
         Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.borrar(id).click();
            Documento.contenido.mensajeToast().should('be.visible').and('contain','Se completo la operación');
            })
        AgregarDocumento.e.agregarDoc().click();
        cy.subirPdf('/archivos/factura_dato_faltante.pdf');               
        AgregarDocumento.e.progresoCarga().should('be.visible');
        AgregarDocumento.e.msgSubidaOk().should('be.visible').and('contain', 'Subida de documentos completada con éxito');
        AgregarDocumento.e.cerrarUploader().click();
        cy.wait(15000);
        cy.reload();          
    })
    
    it('TC-005 Ingresar a procesamiento manual desde Datos extraídos', () => {
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
        Documento.contenido.miniatura(id).click();
        
        })
        DatosDocumento.e.procesarManualmenteBtn().click({force: true});
    })         
       
    it('TC-005 validación elementos, existen todos los elementos de las tablas', () => {
        Documento.ingresar()
        ProcesamientoManual.validarMenuBar();
        ProcesamientoManual.validarFiltroyTag();
        ProcesamientoManual.validarTablaDatos(); 
        ProcesamientoManual.validarTablaItems();
        ProcesamientoManual.validarTablaPercepciones(); 
    })
        
    it('TC-005 validación error cuando hay datos faltantes, muestra el error', () => {
        Documento.ingresar()
        ProcesamientoManual.borrarDatoParaError();
        Documento.ingresar()
        ProcesamientoManual.errorFaltaRequerido();
    })
         
    it('TC-005 Validacion de comportamiento cuando se agrega el dato incorrecto', () =>{
        Documento.ingresar()
        ProcesamientoManual.errorFaltaRequerido();
        ProcesamientoManual.completarDatoIncorrecto();
    });
        
    it('TC-005 Validacion de comportamiento cuando se agrega el dato faltante', () =>{
        Documento.ingresar()
        ProcesamientoManual.completarDatoFaltante();
     });
    
    it('TC-006 Agregar documento multipagina', () => {
         Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.borrar(id).click();
            Documento.contenido.mensajeToast().should('be.visible').and('contain','Se completo la operación');
        })
        AgregarDocumento.e.agregarDoc().click();
        cy.subirPdf('archivos/factura_multipagina2.pdf');
        AgregarDocumento.e.cerrarUploader().click();
        cy.wait(25000);
        cy.reload();
    });
    
    it('TC-006 En el proceso manual, se deben ver todas las páginas', () => {
        cy.visit('/document')
        Documento.ingresar();
        ProcesamientoManual.validarMultipágina();
    })
    
    it('TC-007 Invalidar Documento', () => {
        AgregarDocumento.e.agregarDoc().click();
        cy.subirPdf('/archivos/pruebaTabla.pdf');
        AgregarDocumento.e.progresoCarga().should('be.visible');
        AgregarDocumento.e.msgSubidaOk().should('be.visible').and('contain', 'Subida de documentos completada con éxito');
        AgregarDocumento.e.cerrarUploader().click();
        cy.wait(15000);
        cy.reload();
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {         
            Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.invalidar(id).click();
            cy.reload();
            Documento.validarEstadoFilaSeleccionada('Invalidado manualmente - (inva');
        })
    })

    it('TC-007 Borrar Documento', () => {
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => { 
            Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.borrar(id).click();
            Documento.contenido.mensajeToast().should('be.visible').and('contain','Se completo la operación');         
        })
            
    })

    it('TC-008 agregar Documento multipágina, y subdividir', () => {
        AgregarDocumento.e.agregarDoc().click();
        AgregarDocumento.e.multipageToggle().click();
        cy.subirPdf('/archivos/AFIP_separar_documentos.pdf');
        AgregarDocumento.e.cerrarUploader().click();
        cy.wait(15000);
        cy.reload();
    });
    
    it('TC_008 Validar multiples documentos subidos', () => {
        Documento.contenido.checkboxRow().its('length').then((numFilas) => {
            cy.log(`Numero de filas: ${numFilas}`);
        })
         Documento.contenido.checkboxRow().eq(0).click();
          Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.borrar(id).click();
            Documento.contenido.mensajeToast().should('be.visible').and('contain','Se completo la operación');
          })
        cy.reload();
         Documento.contenido.checkboxRow().eq(0).click();
          Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.borrar(id).click();
            Documento.contenido.mensajeToast().should('be.visible').and('contain','Se completo la operación');
          })
        cy.reload();
         Documento.contenido.checkboxRow().eq(0).click();
          Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.borrar(id).click();
            Documento.contenido.mensajeToast().should('be.visible').and('contain','Se completo la operación');
          })
        cy.reload();
         Documento.contenido.checkboxRow().eq(0).click();
          Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.acciones.menu(id).click();
            Documento.contenido.menu.borrar(id).click();
            Documento.contenido.mensajeToast().should('be.visible').and('contain','Se completo la operación');
          })
    })

})
