class ProcesamientoManual{
    el = {
        iconoProcesar: () => cy.get(':nth-child(1) > .cdk-column-actions > .eye-button > .mat-button-wrapper > .mat-icon'),
        menubar: {
            volver: () => cy.get('[mattooltip="Ir al reporte de Documentos"]'),
            presentar: () =>cy.get('[mattooltip="Enviar documento"]'),
            iconodesplegable: () => cy.get('body > app-root > div > app-tagger-processing > mat-toolbar > button.mat-mdc-menu-trigger.submit-menu.mdc-button.mdc-button--outlined.mat-mdc-outlined-button.mat-unthemed.mat-mdc-button-base.ng-star-inserted'),
            invalidar: () => cy.get('.mat-mdc-menu-item-text > span'),
            cerrarDesplegable: () => cy.get('.cdk-overlay-backdrop'),
            iconoDocumentoConverted: () => cy.get('[ng-reflect-svg-icon="converted_document"] > #Capa_1'),
            nombreDocumento: () => cy.get('.file-name'),
            visibilidadEtiquetas: () => cy.get('body > app-root > div > app-tagger-processing > mat-toolbar > button:nth-child(12)').invoke('text').then((text) => {expect(text.trim()).to.be.oneOf(['label', 'label_off']);}),
            informacionReconocimiento: ()=>cy.get('body > app-root > div > app-tagger-processing > mat-toolbar > button:nth-child(13) > mat-icon').invoke('text').then((text) => {expect(text.trim()).to.be.oneOf(['visibility', 'visibility_off']);}),
            zoomIn: () => cy.get('body > app-root > div > app-tagger-processing > mat-toolbar > button:nth-child(14) > mat-icon').contains('zoom_in'),
            zoomOut: () => cy.get('body > app-root > div > app-tagger-processing > mat-toolbar > button:nth-child(15) > mat-icon').contains('zoom_out'),
            fullScreen: () => cy.get('body > app-root > div > app-tagger-processing > mat-toolbar > button:nth-child(16) > mat-icon').contains('fullscreen'),
            descargar: () => cy.get('body > app-root > div > app-tagger-processing > mat-toolbar > button.mat-mdc-tooltip-trigger.mdc-button.mat-mdc-button.mat-unthemed.mat-mdc-button-base > mat-icon').contains('file_download'),
            guardar: () => cy.get('body > app-root > div > app-tagger-processing > mat-toolbar > button:nth-child(18) > mat-icon').contains('save'),
            menuMostrarTablas:()=>cy.get('body > app-root > div > app-tagger-processing > mat-toolbar > button:nth-child(19) > mat-icon').contains('menu')
        },
        paginador: {
            flechaAtras: () => cy.get('body > app-root > div > app-tagger-processing > mat-toolbar > button:nth-child(9)'),
            flechaAdelante: () => cy.get('body > app-root > div > app-tagger-processing > mat-toolbar > button:nth-child(11)'),
            contador: ()=> cy.get('.toolbar > .ng-untouched')
        },
        filtro: {
            inputFiltro: () => cy.get('#mat-input-0'),
            limpiarFiltro: () => cy.get('#drawer > div > div > div > div:nth-child(2) > mat-toolbar > button.mat-mdc-tooltip-trigger.mdc-icon-button.mat-mdc-icon-button.mat-unthemed.mat-mdc-button-base > mat-icon').contains('clear'),
            desplegableFiltro: () => cy.get('#drawer > div > div > div > div:nth-child(2) > mat-toolbar > button.mat-mdc-menu-trigger.mdc-icon-button.mat-mdc-icon-button.mat-unthemed.mat-mdc-button-base > mat-icon'),
            pendienteCarga: () => cy.get('#mat-menu-panel-1 > div > button:nth-child(1)'),
            errorValidacion: () => cy.get('#mat-menu-panel-1 > div > button:nth-child(2)'),
            requeridas: ()=> cy.get('#mat-menu-panel-1 > div > button:nth-child(3)'),
            agregarTag: ()=> cy.get('#drawer > div > div > div > div:nth-child(2) > mat-toolbar > button.mdc-button.mat-mdc-button.mat-unthemed.mat-mdc-button-base.ng-star-inserted > span.mdc-button__label'),
        },

        tablaDatos: {
            tituloTablaDatos: () => cy.get('[style="padding: 10px;"] > h3'),
            table: () => cy.get('#tags'),
            tr: (n) => cy.get(`#tags > tr:nth-child(${n}`),
            td: (n) => cy.get(`#tags > tr:nth-child(${n} > td`),
            matformfield: () => cy.get('#tags > tr > td > mat-form-field'),


            cae: () => cy.get('#tags > tr:nth-child(1)'),
            codigoDocumento: () => cy.get(':nth-child(2) > th'),
            cuitJuridica: () => cy.get(':nth-child(3) > th'),
            cuitProveedor: () => cy.get(':nth-child(4) > th'),
            domicilioJuridica: () => cy.get(':nth-child(5) > th > .spaced-items > :nth-child(1)'),
            domicilioProveedor: () => cy.get(':nth-child(6) > th > .spaced-items > :nth-child(1)'),
            fechaCae: () => cy.get(':nth-child(7) > th > .spaced-items > :nth-child(1)'),
            fechaEmision: () => cy.get(':nth-child(8) > th'),
            importeExento: () => cy.get(':nth-child(9) > th > .spaced-items > :nth-child(1)'),
            importeNetoGravado: () => cy.get(':nth-child(10) > th > .spaced-items > :nth-child(1)'),
            importeNoGravado:() => cy.get(':nth-child(11) > th > .spaced-items > :nth-child(1)'),
            importeOtrosTributos: () => cy.get(':nth-child(12) > th > .spaced-items > :nth-child(1)'),
            importeTotal:()=> cy.get(':nth-child(13) > th'),
            iva10_5: () => cy.get(':nth-child(14) > th > .spaced-items > :nth-child(1)'),
            iva21: () => cy.get(':nth-child(15) > th'),
            iva27: () => cy.get(':nth-child(16) > th > .spaced-items > :nth-child(1)'),
            letraDocumento: () => cy.get(':nth-child(17) > th > .spaced-items > :nth-child(1)'),
            moneda: () => cy.get(':nth-child(18) > th > .spaced-items > :nth-child(1)'),
            numeroComprobante: () => cy.get(':nth-child(19) > th > .spaced-items > :nth-child(1)'),
            numeroFactura: () => cy.get(':nth-child(20) > th > .spaced-items > :nth-child(1)'),
            ordenCompra:() => cy.get(':nth-child(21) > th > .spaced-items > :nth-child(1)'),
            puntoVenta: () => cy.get(':nth-child(22) > th > .spaced-items > :nth-child(1)'),
            razonSocialJuridica: () => cy.get(':nth-child(23) > th > .spaced-items > :nth-child(1)'),
            razonSocialProveedor: () => cy.get(':nth-child(24) > th > .spaced-items > :nth-child(1)'),
            tipoCambio: () => cy.get(':nth-child(25) > th > .spaced-items > :nth-child(1)'),
            tipoDocumento:() => cy.get(':nth-child(26) > th > .spaced-items > :nth-child(1)'),
        },
        inputsRequired: {
            inputCae: () => cy.get('#tags > :nth-child(1) > td > .vertical-stack'),
            inputCodigoDocumento: () => cy.get('#tags > :nth-child(2) > td > .vertical-stack'),
            inputCuitJuridica:()=> cy.get('#tags > :nth-child(3) > td > .vertical-stack'),
            inputCuitProveedor: () => cy.get('#tags > :nth-child(4) > td > .vertical-stack'),
            inputFechaEmision: () => cy.get('#tags > :nth-child(8) > td > .vertical-stack'),
            inputImporteTotal:() => cy.get('#tags > :nth-child(13) > td > .vertical-stack'),
        },

        tablaItems: {
            tituloTabla: () => cy.get(':nth-child(3) > h3'),
            items_importe_total_con_iva: () => cy.get(':nth-child(3) > .data-table > thead > tr > :nth-child(1) > .spaced-items > span'),
            items_importe_total_sin_iva: () => cy.get(':nth-child(3) > .data-table > thead > tr > :nth-child(2) > .spaced-items > span'),
            scrollLateral: () => cy.get('[style="width: 100%;"] > :nth-child(3)'),
            cantidad: () => cy.get(':nth-child(3) > .spaced-items > span').contains('cantidad'),
            codigo: () => cy.get(':nth-child(4) > .spaced-items > span').contains('codigo'),
            descripcion: () => cy.get(':nth-child(5) > .spaced-items > span'),
            importeUnitario: () => cy.get(':nth-child(6) > .spaced-items > span').contains('importeUnitario'),
            iva: () => cy.get(':nth-child(7) > .spaced-items > span'),
            accionesItems: () => cy.get('#drawer > div > div > div > div:nth-child(2) > div:nth-child(3) > table > thead > tr > th.th-actions'),
            eliminar: ()=> cy.get(':nth-child(4) > .data-table > tbody > tr.ng-star-inserted > .td-actions > .mat-mdc-tooltip-trigger > .mat-mdc-button-touch-target'),
            agregarFila: () => cy.get(':nth-child(3) > .mdc-button > .mat-mdc-button-touch-target'),
      },
        
        tablaPercepciones: {
            tablaTitulo: () => cy.get('div:nth-child(2) > div:nth-child(4) > h3').contains('percepciones'),
            percepcionesImporte: () => cy.get(':nth-child(4) > .data-table > thead > tr > :nth-child(1) > .spaced-items > span'),
            percepcionesPorcentaje: () => cy.get(':nth-child(4) > .data-table > thead > tr > :nth-child(2) > .spaced-items > span'),
            percepcionesTipo: () => cy.get(':nth-child(4) > .data-table > thead > tr > :nth-child(3) > .spaced-items > span'),
            accionesPercepciones: () => cy.get(':nth-child(4) > .data-table > thead > tr > .th-actions'),
            eliminarIcono: () => cy.get(':nth-child(4) > .data-table > tbody > tr.ng-star-inserted > .td-actions > .mat-mdc-tooltip-trigger > .mat-icon'),
            agregarPercepcion:() => cy.get(':nth-child(4) > .data-table > tbody > tr.ng-star-inserted > .td-actions > .mat-mdc-tooltip-trigger > .mat-mdc-button-touch-target'),
              
      },
        
        otros: {
            errorInput: () => cy.get('.error-box'),
            avisoToast:()=> cy.get('#toast-container > .ng-trigger')
        }
    }
    ingresar = () => {
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                cy.visit('https://tagger-ui-dev.theeye.io/' + url); 
                }).as('nuevaPestaña');
            });
        
        this.el.iconoProcesar().click();
       
    }
    validarMenuBar = () => {
        this.el.menubar.volver().should('be.visible');
        this.el.menubar.iconodesplegable().click();
        this.el.menubar.invalidar().should('have.text', 'Invalidar documento');
        this.el.menubar.cerrarDesplegable().click();
        this.el.menubar.presentar().should('be.visible');
        this.el.menubar.presentar().should('have.text', ' Presentar ');
        this.el.menubar.iconoDocumentoConverted().should('have.attr', 'data-name', 'Capa 1');
        this.el.menubar.nombreDocumento().should('have.class', 'file-name');
        
        this.el.paginador.flechaAtras().contains('keyboard_arrow_left');
        this.el.paginador.contador().should('have.value', '1');
        this.el.paginador.flechaAdelante().contains('keyboard_arrow_right');
        
        this.el.menubar.visibilidadEtiquetas();
        this.el.menubar.informacionReconocimiento();
        this.el.menubar.zoomIn().should('be.visible');
        this.el.menubar.zoomOut().should('be.visible');
        this.el.menubar.fullScreen().should('be.visible');
        this.el.menubar.descargar().should('be.visible');
        this.el.menubar.guardar().should('be.visible');
        this.el.menubar.menuMostrarTablas().should('be.visible');

    }

    validarFiltroyTag = () => {
        this.el.filtro.inputFiltro().should('have.id', 'mat-input-0');
        this.el.filtro.limpiarFiltro().should('have.text', ' clear ').and('be.visible');
        this.el.filtro.desplegableFiltro().should('have.text', 'more_vert').click();
        this.el.filtro.pendienteCarga().click();
        this.el.filtro.desplegableFiltro().should('have.text', 'more_vert').click();
        this.el.filtro.errorValidacion().click();
        this.el.filtro.desplegableFiltro().should('have.text', 'more_vert').click();
        this.el.filtro.errorValidacion().click();
        this.el.filtro.limpiarFiltro().should('have.text', ' clear ').click();
        this.el.filtro.agregarTag().should('have.text', ' Agregar Tag ');

    }


    validarTablaDatos = () => {
        this.el.tablaDatos.tituloTablaDatos().should('have.text', 'Factura');
        this.el.tablaDatos.cae();
        this.el.tablaDatos.codigoDocumento();
        this.el.tablaDatos.cuitJuridica();
        this.el.tablaDatos.cuitProveedor();
       
        this.el.tablaDatos.domicilioJuridica();
        this.el.tablaDatos.domicilioProveedor().contains(' domicilioProveedor ');
        this.el.tablaDatos.fechaCae().should('have.text', ' fechaCae ');
        this.el.tablaDatos.fechaEmision();
        this.el.tablaDatos.importeExento().should('have.text', ' importeExento ');
        this.el.tablaDatos.importeNetoGravado().should('have.text', ' importeNetoGravado ');
        this.el.tablaDatos.importeNoGravado().should('have.text', ' importeNoGravado ');
        this.el.tablaDatos.importeOtrosTributos().should('have.text', ' importeOtrosTributos ');
        this.el.tablaDatos.importeTotal();
        this.el.tablaDatos.iva10_5().should('have.text', ' iva10_5 ');
        this.el.tablaDatos.iva21().should('have.text', ' iva21 ');
        this.el.tablaDatos.iva27().should('have.text', ' iva27 ');
        this.el.tablaDatos.letraDocumento().should('have.text', ' letraDocumento ');
        this.el.tablaDatos.moneda().should('have.text', ' moneda ');
        this.el.tablaDatos.numeroComprobante().should('have.text', ' numeroComprobante ');
        this.el.tablaDatos.numeroFactura().should('have.text', ' numeroFactura ');
        this.el.tablaDatos.ordenCompra().should('have.text', ' ordenCompra ');
        this.el.tablaDatos.puntoVenta().should('have.text', ' puntoVenta ');
        this.el.tablaDatos.razonSocialJuridica().should('have.text', ' razonSocialJuridica ');
        this.el.tablaDatos.razonSocialProveedor().should('have.text', ' razonSocialProveedor ');
        this.el.tablaDatos.tipoCambio().should('have.text', ' tipoCambio ');
        this.el.tablaDatos.tipoDocumento().should('have.text', ' tipoDocumento ');
    }

    validarTablaItems = () => {
        this.el.tablaItems.tituloTabla().should('have.text', ' items ');
        this.el.tablaItems.items_importe_total_con_iva().should('have.text', ' items_importe_total_con_iva ');
        this.el.tablaItems.items_importe_total_sin_iva().should('have.text', ' items_importe_total_sin_iva ');
      
        this.el.tablaItems.scrollLateral().click();
        this.el.tablaItems.cantidad().should('have.text', ' cantidad ');
        this.el.tablaItems.codigo().should('have.text', ' codigo ');
        this.el.tablaItems.descripcion().should('have.text', ' decripcion ');
        this.el.tablaItems.importeUnitario().should('have.text', ' importeUnitario ');
        this.el.tablaItems.iva();
        this.el.tablaItems.accionesItems();
        this.el.tablaItems.eliminar();
        this.el.tablaItems.agregarFila();
    }

    validarTablaPercepciones = () => {
        this.el.tablaPercepciones.tablaTitulo(),
        this.el.tablaPercepciones.percepcionesImporte().should('have.text', ' percepciones_importe ');
        this.el.tablaPercepciones.percepcionesPorcentaje().should('have.text', ' percepciones_porcentaje ');
        this.el.tablaPercepciones.percepcionesTipo().should('have.text', ' percepciones_tipo ');
        this.el.tablaPercepciones.accionesPercepciones().should('have.text', 'Acciones');
        this.el.tablaPercepciones.eliminarIcono();
        this.el.tablaPercepciones.agregarPercepcion();
    }
  errorFaltaRequerido = () => {

    cy.intercept('POST', 'https://tagger-api-dev.theeye.io/api/Documents/*', (req) => {
              this.el.otros.faltaCompletar().should('not.exist');
            }).as('apiRequest');

    this.el.menubar.presentar().click();
    cy.wait(2000);
    this.el.otros.errorInput(); 
    this.el.otros.avisoToast().should('have.text', ' El documento debe ser corregido para continuar ');
   
};

    completarDatoIncorrecto = () => {
    
       cy.get('.error-box').each(($errorBox) => {
      cy.wrap($errorBox)
        .closest('div') 
        .find('input') 
        .then(($input) => {
          const fieldName = $input.attr('id'); 

         
          const valorAIngresar = this.el[fieldName] || 'Valor de prueba';


          cy.wrap($input).type(valorAIngresar, { force: true });
        });
       });
      this.el.menubar.guardar().click();
      cy.wait(2000);
        this.el.menubar.presentar().click();
        this.el.otros.errorInput(); 
    this.el.otros.avisoToast().should('have.text', ' El documento debe ser corregido para continuar ');
  }

    completarDatoFaltante = () => {
    this.el.menubar.presentar().click();
  const selectores = [
    { selector: () => cy.get('#mat-input-1'), valor: '12345612378912' },
    { selector: () => cy.get('#mat-input-2'), valor: '12345678' },
    { selector: () => cy.get('#mat-input-3'), valor: '30681697272' },
    { selector: () => cy.get('#mat-input-4'), valor: '30571022547' },
    { selector: () => cy.get('#mat-input-8'), valor: '05-07-2025' },
    { selector: () => cy.get('#mat-input-13'), valor: '123456' },
  ];

  cy.get('.error-box').each(($errorBox) => {
    cy.wrap($errorBox)
      .closest('div')
      .then(($container) => {
        selectores.forEach(({ selector, valor }) => {
          selector().then(($input) => {
            if ($container.find($input).length) {
              cy.wrap($input).type(valor, { force: true });
            }
          });
        });
      });
  });

  this.el.menubar.guardar().click();
  this.el.menubar.presentar().click();
  cy.wait(2000);
};
  validarMultipágina = () => {
    
    this.el.paginador.flechaAdelante().click();
    this.el.paginador.contador().should('not.be.equal', '1')
    this.el.paginador.flechaAtras().should('be.enabled');
    this.el.paginador.flechaAtras().click();
}
  borrarDatoParaError = () => {
    
     cy.get('#mat-input-13').clear();
        this.el.menubar.guardar().click();
        this.el.menubar.volver().click();
 }
    
 recorrerTablaValidarCampos = () => {
  // Array con los nombres de los campos requeridos
  const camposRequeridos = [
    "cae",
    "codigoDocumento",
    "cuitJuridica",
    "cuitProveedor",
    "fechaEmision",
    "importeTotal"
  ];

  // Selecciona todas las filas de la tabla
  cy.get('#tags > tr').each(($row) => {
    // Obtiene el nombre del campo desde el <span> dentro del <th>
    cy.wrap($row).find('th > div > span').invoke('text').then((campo) => {
      // Limpia el texto para evitar espacios en blanco
      const nombreCampo = campo.trim();

      // Verifica si el campo está marcado como requerido (clase CSS 'red')
      const esRequerido = $row.find('th > div > span[mattooltip="Valor requerido"]').length > 0 && $row.find('*').length > 0;

      // Encuentra el valor dentro del <td>
      cy.wrap($row).find('td input').invoke('val').then((valor) => {
        const valorCampo = valor ? valor.trim() : "";

        // Verificación según el estado del campo (requerido u opcional)
        if (esRequerido && camposRequeridos.includes(nombreCampo)) {
          // Validación de campo requerido: no debe ser vacío o nulo
          expect(valorCampo).to.not.be.empty;
          cy.log(`Campo requerido: ${nombreCampo} - Valor: ${valorCampo}`);
        } else {
          cy.log(`Campo opcional: ${nombreCampo} - Valor: ${valorCampo}`);
        }
      });
    });
  });
};


}

export default new ProcesamientoManual();