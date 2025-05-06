import Schema from "../../pages/esquemas/schemaInicio.js";
import NuevoSchema from "../../pages/esquemas/nuevoSchema.js";
import Propiedades from "../../pages/esquemas/edicionPropiedades.js";
import Datasource  from "../../pages/esquemas/datasource.js";

describe('Validación de Esquemas Pantalla inicial', () => {
    beforeEach(() => {
        cy.ingresar_Esquemas();
    })

    it('Importar Schema Factura, agregando el archivo el json', () => {
        Schema.nuevoEsquemaBtn().click();
        NuevoSchema.config.importarBtn().click();
        NuevoSchema.config.agregarDocBtn().click();
        NuevoSchema.config.importarDocBtn().selectFile('cypress/fixtures/schemas/facturas.json', { force: true });

        NuevoSchema.config.guardarBtn().click();
        cy.wait(5000);
    })
    
    it('Importar Schema eCheq, pegando el json', () => {
        Schema.nuevoEsquemaBtn().click();
        NuevoSchema.config.importarBtn().click();
        cy.readFile('cypress/fixtures/schemas/eCheqs.json').then((eCheqs) => {
            const eCheqsTexto = JSON.stringify(eCheqs, null, 2);
            NuevoSchema.config.agregarJsonBtn().click()
            NuevoSchema.config.inputJson().clear()
    .type(eCheqsTexto, { delay: 0 });
        });

        NuevoSchema.config.importarJsonBtn().click({ force: true });
        cy.wait(2000);
        NuevoSchema.config.guardarBtn().click();
         cy.wait(5000);
    })

    it('Importar Schema OP, agregando el archivo el json', () => {
        Schema.nuevoEsquemaBtn().click();
        NuevoSchema.config.importarBtn().click();
        NuevoSchema.config.agregarDocBtn().click();
        NuevoSchema.config.importarDocBtn().selectFile('cypress/fixtures/schemas/ordenPago.json', { force: true });
        
        NuevoSchema.config.guardarBtn().click();
         cy.wait(5000);
    })
    

    it('Validar exiten todos los elementos en la cabecera de la tabla ', () => {
        Schema.nuevoEsquemaBtn().should('exist');
        Schema.filtroBtn().should('exist');
        Schema.tablaHeader.id().should('exist');
        Schema.tablaHeader.fcreacion().should('exist');
        Schema.tablaHeader.fmodificacion().should('exist');
        Schema.tablaHeader.nombre().should('exist');
        Schema.tablaHeader.activar().should('exist');
        Schema.tablaHeader.activarBtn().should('exist');
        Schema.tablaHeader.esquemaDefecto().should('exist');
        Schema.tablaHeader.acciones().should('exist');

    })

    it('Validar exiten todos los elementos de la tabla ', () => {
        Schema.nuevoEsquemaBtn().should('exist');
        Schema.filtroBtn().should('exist');
        Schema.tablaContent.copiar().should('exist');
        Schema.tablaContent.creacion().should('exist');
        Schema.tablaContent.modificacion().should('exist');
        Schema.tablaContent.nombre().should('exist');
        Schema.tablaContent.activar().should('exist');
        Schema.tablaContent.esquemaDefecto().should('exist');
        Schema.tablaContent.editar().should('exist');
        Schema.tablaContent.exportar().should('exist');
        Schema.tablaContent.eliminar().should('exist');
    })
    
    it('Prueba sobre esquema de Pruebas: Botones', () => {
        Schema.tablaContent.activar().eq(0).click();
        Schema.tablaContent.esquemaDefecto().eq(0).click();
        cy.wait(3000);
        Schema.tablaContent.esquemaDefecto().eq(0).click();
        Schema.tablaContent.activar().eq(0).click();
        cy.wait(3000);
        Schema.tablaContent.esquemaDefecto().eq(0).click();
    })

     it('Prueba sobre esquema de Pruebas: Editar', () => {
        Schema.tablaContent.editar().eq(0).click();
     })

    it('Prueba sobre esquema de Pruebas: Exportar', () => {
        Schema.tablaContent.exportar().eq(0).click();
    })

    it('Prueba sobre esquema de Pruebas: Eliminar-Cancelar', () => {
        Schema.tablaContent.eliminar().eq(0).click();
        Schema.tablaContent.eliminarConfirm.titulo().should('have.text', ' ¿Está seguro de querer borrar el schema? ')
        Schema.tablaContent.eliminarConfirm.mensaje().should('have.text', 'Esta operación es irreversible.');
        Schema.tablaContent.eliminarConfirm.cancelar().click();
    })
    
    it('Prueba sobre esquema de Pruebas: Eliminar-Aceptar', () => {
        Schema.tablaContent.eliminar().eq(0).click();
        Schema.tablaContent.eliminarConfirm.titulo().should('have.text', ' ¿Está seguro de querer borrar el schema? ')
        Schema.tablaContent.eliminarConfirm.mensaje().should('have.text', 'Esta operación es irreversible.');
        Schema.tablaContent.eliminarConfirm.aceptar().click();
    })

    it('Validar elementos de nuevo esquema ', () => {
        Schema.nuevoEsquemaBtn().click();
        NuevoSchema.config.titulo().should('exist').and('have.text', ' Configuración de Schema\n');
        NuevoSchema.config.nombreLable().should('exist').and('contain', 'Nombre del Schema');
        NuevoSchema.config.nombreInput().should('exist');
        NuevoSchema.config.nombreInput().clear();
        NuevoSchema.config.importarBtn().should('exist').and('contain', 'Importar Esquema');
        NuevoSchema.config.importarBtn().click();
        NuevoSchema.config.agregarPropBtn().should('exist').and('contain', 'Agregar una propiedad');
        NuevoSchema.config.guardarBtn().should('exist').and('contain', 'Guardar');
    })

    it('Agregar Nombre del Schema y guardar: Muestra mensaje Error', () => {
        Schema.nuevoEsquemaBtn().click();
        NuevoSchema.config.nombreInput().type('Prueba');
        NuevoSchema.config.guardarBtn().click();
        cy.get('#toast-container > div > div').should('have.text', ' Debe agregar al menos una propiedad. ')
        cy.wait(2000);
    })

    it('Agregar Nombre del Schema y agregar una propiedad y guardar', () => {
        Schema.nuevoEsquemaBtn().click();
        NuevoSchema.config.nombreInput().type('Prueba');
        NuevoSchema.config.agregarPropBtn().click();
        Propiedades.etiquetaInput().clear();
        Propiedades.nombre().click();
        Propiedades.etiquetaError().should('have.text',' Campo obligatorio ');
        Propiedades.etiquetaInput().type('Prueba');
        Propiedades.guardarBtn().click();
        cy.wait(2000);
        NuevoSchema.config.guardarBtn().click();
        cy.get('#toast-container > div > div').should('have.text',' Schema Prueba creado con éxito. ');
    })

    it('Ingresar al esquema de "Prueba", cambiar nombre al esquema', () => {
            Schema.tablaContent.editar().eq(0).click();
            NuevoSchema.config.nombreInput().clear().type('EdicionPrueba');
            NuevoSchema.config.guardarBtn().click();
    })

    it('Ingresar al esquema de "EdicionPrueba",ingresar por btn tabla y cancelar', () => {
        Schema.tablaContent.editar().eq(0).click();
        NuevoSchema.tabla.btnAgregarProp().click();
        Propiedades.cancelar().click();
    })

    it('Editar campo existente', () => {
        Schema.tablaContent.editar().eq(0).click();
        NuevoSchema.tabla.cuerpo.acciones.editar().eq(0).click();
        Propiedades.etiquetaInput().clear().type('NuevoNombre');
        Propiedades.nombre().clear().type('Tengo Nombre');
        Propiedades.alias().clear().type('Nombrecito');
        Propiedades.valor().clear().type('valor')
        Propiedades.orden().clear().type(1);
        Propiedades.tipoDato().click();
        Propiedades.opcionesTipoDato.texto().click();
        Propiedades.filtrosSelect().click();
        Propiedades.filtroOpciones.puntoVenta().click();
        Propiedades.filtroOpciones.cae().click();
        Propiedades.filtrosSelect().click({ force: true });
        Propiedades.guardarBtn().click({ force: true });
    })

    it('Agregar propiedades para probar lotes(Excel)', () => {
        Schema.tablaContent.editar().eq(0).click();
        NuevoSchema.config.agregarPropBtn().click();
        Propiedades.etiquetaInput().clear().type('conciliacion');
        Propiedades.tipoDato().click();
        Propiedades.opcionesTipoDato.texto().click();
        Propiedades.orden().clear().type(0);
        Propiedades.checks.valorOculto().click({ force: true });
        Propiedades.guardarBtn().click();


        NuevoSchema.config.agregarPropBtn().click();
        Propiedades.etiquetaInput().clear().type('cuentaDestino');
        Propiedades.tipoDato().click();
        Propiedades.opcionesTipoDato.texto().click();
        Propiedades.orden().clear().type(0);
        Propiedades.checks.requerido().click({ force: true });
        Propiedades.guardarBtn().click();

        NuevoSchema.config.agregarPropBtn().click();
        Propiedades.etiquetaInput().clear().type('documentoVinculado');
        Propiedades.tipoDato().click();
        Propiedades.opcionesTipoDato.texto().click();
        Propiedades.orden().clear().type(0);
        Propiedades.checks.valorOculto().click({ force: true });
        Propiedades.guardarBtn().click();

        NuevoSchema.config.agregarPropBtn().click();
        Propiedades.etiquetaInput().clear().type('fechaPago');
        Propiedades.tipoDato().click();
        Propiedades.opcionesTipoDato.fecha().click();
        Propiedades.orden().clear().type(0);
        Propiedades.checks.requerido().click({ force: true });
        Propiedades.guardarBtn().click();

        NuevoSchema.config.agregarPropBtn().click();
        Propiedades.etiquetaInput().clear().type('monto');
        Propiedades.tipoDato().click();
        Propiedades.opcionesTipoDato.moneda().click();
        Propiedades.orden().clear().type(0);
        Propiedades.checks.requerido().click({ force: true });
        Propiedades.guardarBtn().click();

        NuevoSchema.config.agregarPropBtn().click();
        Propiedades.etiquetaInput().clear().type('nroCheque');
        Propiedades.nombre().clear().type('Numero de cheque');
        Propiedades.tipoDato().click();
        Propiedades.opcionesTipoDato.numero().click();
        Propiedades.orden().clear().type(0);
        Propiedades.checks.requerido().click({ force: true });
        Propiedades.guardarBtn().click();

         NuevoSchema.config.guardarBtn().click();
    })

    it('Validar seccion Datasource (funcionamiento de los inputs)', () => {
        Schema.tablaContent.editar().eq(0).click();
        NuevoSchema.tabla.cuerpo.acciones.editar().eq(0).click();
         Propiedades.datasourceBtn().click();
        Datasource.titulo().should('have.text', ' Origen de datos de la propiedad\n');
        Datasource.urlInput().type('https://www.google.com').clear();
        Datasource.claveInput().type('123456').clear();
        Datasource.valorInput().type('algun valor').clear();
        Datasource.tipoOrigenSelect().click();
        Datasource.tipoOrigenJsonOption().click();
        Datasource.cancelarBtn().click();
        Propiedades.datasourceBtn().click();
        Datasource.guardarBtn().click();
        Propiedades.cancelar().click();
    })

    it('Prueba sobre esquema de Pruebas: Eliminar-Aceptar', () => {
        Schema.tablaContent.eliminar().eq(0).click();
        Schema.tablaContent.eliminarConfirm.titulo().should('have.text', ' ¿Está seguro de querer borrar el schema? ')
        Schema.tablaContent.eliminarConfirm.mensaje().should('have.text', 'Esta operación es irreversible.');
        Schema.tablaContent.eliminarConfirm.aceptar().click();
        cy.wait(2000);
    })

    
    
}) 