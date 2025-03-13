import PageConfiguracion from '../../../pages/seccionConfiguracion/pageConfiguracion.js';
import Resumen from '../../../pages/seccionConfiguracion/resumen.js';
describe("Validación Pantalla de configuración- Resumen", () => {
    beforeEach(() => {
        cy.ingresar_Configuracion();

        PageConfiguracion.sections.sliderOpciones.resumenSection().click();
       
    })

    it('Al ingresar estan todos los elementos del encabezado', () => {
        Resumen.resumen.resumenTitle().should('have.text', 'Configuración de Pantalla de Resumen');
        Resumen.resumen.table().should('exist');
        Resumen.resumen.tableHeaderTr().should('exist');
        Resumen.resumen.thEsquema().should('have.text', 'Esquema');
        Resumen.resumen.thMainDocuments().should('have.text', 'Documento Principal info');
        Resumen.resumen.mainDocumentsIcon().should('be.visible');
        Resumen.resumen.thFormato().should('have.text', 'Formato');
        Resumen.resumen.thOrden().should('have.text', 'Orden info');
        Resumen.resumen.orderIcon().should('be.visible');
        Resumen.resumen.thCampos().should('have.text', 'Campos info');
        Resumen.resumen.camposIcon().should('be.visible');
         Resumen.resumen.thAcciones().contains('Acciones');
        Resumen.resumen.tablefooterRow().should('exist');
    });

    it('Se puede acceder a las opciones de la tabla Esquema', () => {
        Resumen.resumen.actions.removeActionBtn().click();
        Resumen.resumen.schema.tdSchemaFooterRow().click().should('exist');
        Resumen.resumen.schema.addSchemaIcon().click().should('be.visible');
        Resumen.resumen.schema.addSchemaField().click();
        Resumen.resumen.schema.addSchemaOption().click();
        Resumen.resumen.schema.spanOptionText().contains('Factura');
        
    });

    it('Se puede acceder a las opciones de la tabla Documento Principal', () => {
        Resumen.resumen.actions.removeActionBtn().click();
        Resumen.resumen.mainDocument.tdMainFooterRow().click().should('exist');
        Resumen.resumen.mainDocument.addMainDocField().should('exist');
        Resumen.resumen.mainDocument.addMainDocSelect().should('exist');
        Resumen.resumen.mainDocument.addMainDocOptionYes().contains('Si').click();
        Resumen.resumen.mainDocument.addMainDocSelect().click();
        Resumen.resumen.mainDocument.addMainDocOptionNo().contains('No').click();
        
    });

    it('Se puede acceder a las opciones de la tabla Formato', () => {
        Resumen.resumen.actions.removeActionBtn().click();
        Resumen.resumen.format.thFormatFooterRow().click().should('exist');
        Resumen.resumen.format.addFormatField().should('exist');
        Resumen.resumen.format.addFormatSelect().should('exist');
        Resumen.resumen.format.addFormatFormulario().contains('Formulario').click();
        Resumen.resumen.format.addFormatSelect().click();
        Resumen.resumen.format.addFormatTabla().contains('Tabla').click();
        
    });
    it('Se puede acceder a las opciones de la tabla Orden', () => {
        Resumen.resumen.actions.removeActionBtn().click();
        Resumen.resumen.order.thOrderFooterRow().click().should('exist');
        Resumen.resumen.order.addOrderField().should('exist');
        Resumen.resumen.order.addOrderInput().should('exist');
        Resumen.resumen.order.addOrderInput().type(3);
        Resumen.resumen.order.addOrderInput().clear().type(0);
        Resumen.resumen.order.addOrderInput().focus();
        Resumen.resumen.order.spinSelect().focus().should('be.visible');
        Resumen.resumen.order.spinSelect().type('{uparrow}').should('have.value', '1');
        Resumen.resumen.order.spinSelect().type('{downarrow}').should('have.value', '0');
    });
    
    it('Se puede acceder a las opciones de la tabla Campos', () => {
        Resumen.resumen.actions.removeActionBtn().click();
        Resumen.resumen.fields.thFieldsFooterRow().should('exist');
        Resumen.resumen.fields.addFieldsBtnAddIcon().should('exist');
        Resumen.resumen.fields.addFieldsBtnAdd().click().should('exist');

        Resumen.resumen.fields.modal.camporOptionDialog().should('exist');
        Resumen.resumen.fields.modal.campoTitle().contains('Campos');
        Resumen.resumen.fields.modal.camposDisponibles().contains('Campos disponibles');
        Resumen.resumen.fields.modal.camposAMostrar().contains('Campos a mostrar');
         const chipLabels = [
            "percepciones","cae","codigoDocumento","cuitJuridica","cuitProveedor","domicilioJuridica","domicilioProveedor","fechaCae","fechaEmision","importeExento","importeNetoGravado","importeNoGravado",
            "importeOtrosTributos", "importeTotal", "items", "iva10_5", "iva21", "iva27", "letraDocumento", "moneda", "numeroComprobante", "numeroFactura", "ordenCompra", "puntoVenta", "razonSocialJuridica", "razonSocialProveedor", "tipoCambio", "tipoDocumento"];
        Resumen.validarChipsPorTexto(chipLabels);
        Resumen.resumen.fields.modal.btnCerrar().contains('Cerrar').click();
    });
    
    it.only('Se puede acceder a las opciones de la tabla Acciones', () => {
        Resumen.resumen.actions.removeActionBtn().click();
        Resumen.resumen.actions.thActionFooterRow().should('exist');
        Resumen.resumen.actions.addActionBtnIcon().should('exist');
        Resumen.resumen.actions.addActionBtn().click().should('exist');
        
    });

    it('validacion de los elementos de una fila,agregada por default', () => {
        Resumen.resumen.tableRow.tr().should('exist');
        Resumen.resumen.tableRow.tdSchema().contains('Factura');
        Resumen.resumen.tableRow.tdMainDoc().contains('No');
        Resumen.resumen.tableRow.tdFormat().contains('Formulario');
        Resumen.resumen.tableRow.tdOrder().contains('0');
        Resumen.resumen.tableRow.tdFields().should('exist');
        Resumen.resumen.tableRow.tdFieldsBtnView().should('be.visible');
        Resumen.resumen.tableRow.tdFieldsBtnIcon().should('be.visible');
        Resumen.resumen.tableRow.tdActions().should('be.visible');
        Resumen.resumen.tableRow.tdActionsEditBtn().should('be.visible');
        Resumen.resumen.tableRow.tdActionsRemoveBtn().should('be.visible');
        Resumen.resumen.tableRow.tdActionsEditBtn().click();
        Resumen.resumen.tableRow.tdActionsSaveBtn().should('be.visible');
        Resumen.resumen.tableRow.tdActionsSaveIcon().should('be.visible');
        Resumen.resumen.tableRow.tdActionsCancelBtn().should('be.visible');
        Resumen.resumen.tableRow.tdActionsCancelIcon().should('be.visible');
       
    });


})