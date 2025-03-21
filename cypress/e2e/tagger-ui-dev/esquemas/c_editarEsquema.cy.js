import NuevoSchema from "../../../pages/esquemas/nuevoSchema.js";
import Schema from "../../../pages/esquemas/schemaInicio.js";
import Propiedades from "../../../pages/esquemas/edicionPropiedades.js";
import Datasource  from "../../../pages/esquemas/datasource.js";

describe('Edición de un esquema', () => {
    beforeEach(() => {
        cy.ingresar_Esquemas();
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
})
