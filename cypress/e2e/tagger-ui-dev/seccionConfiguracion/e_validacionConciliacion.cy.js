import PageConfiguracion from '../../../pages/seccionConfiguracion/pageConfiguracion.js';
import Conciliacion from '../../../pages/seccionConfiguracion/conciliacion.js';

describe("Validación Pantalla de configuración- Concialiación", () => {
    beforeEach(() => {
         cy.ingresar_Configuracion();
      
        PageConfiguracion.sections.sliderOpciones.conciliacionSection().click();
    })

    it('Validacion de las cabeceras de las tablas', () => {
        Conciliacion.conciliacion.title().should('have.text', 'Configuración de Campos de Conciliación')
        Conciliacion.conciliacion.table().should('exist');
        Conciliacion.conciliacion.headerTable.headerRow().should('exist');
        Conciliacion.conciliacion.headerTable.thSourceSchema().should('have.text', 'Esquema Fuente');
        Conciliacion.conciliacion.headerTable.thTargetSchema().should('have.text', 'Esquema Destino');
        Conciliacion.conciliacion.headerTable.thUseCustomMapping().contains('Usar Mapeo Personalizado');
        Conciliacion.conciliacion.headerTable.thCustomMapping().contains('Mapeo Personalizado');
        Conciliacion.conciliacion.headerTable.thAutoMapping().should('have.text', 'Mapeo Automático info');
        Conciliacion.conciliacion.headerTable.thAutoMappingIcon().should('be.visible');
        Conciliacion.conciliacion.headerTable.thMondeyTolerance().should('have.text', 'Margen de Diferencia ($) info');
        Conciliacion.conciliacion.headerTable.thMondeyToleranceIcon().should('be.visible');
        Conciliacion.conciliacion.headerTable.thActions().should('have.text', 'Acciones');
    });
    it('Validacion de las filas de la tabla:Esquema Fuente ', () => {
        Conciliacion.conciliacion.rowFooterTable.footerRow().should('exist');
        Conciliacion.conciliacion.rowFooterTable.tdSourceSchema().should('be.visible');
        Conciliacion.conciliacion.rowFooterTable.tdSourceSchemaField().should('be.visible');
        Conciliacion.conciliacion.rowFooterTable.thSourceSchemaSelect().click();
        Conciliacion.conciliacion.rowFooterTable.thSourceSchemaOption().contains('Factura').click();
        Conciliacion.conciliacion.rowFooterTable.spanOptionText().contains('Factura');
    });

    it('Validacion de las filas de la tabla:Esquema Destino ', () => {
        Conciliacion.conciliacion.rowFooterTable.thTargetSchema().should('be.visible');
        Conciliacion.conciliacion.rowFooterTable.thTargetSchemaField().should('be.visible');
        Conciliacion.conciliacion.rowFooterTable.thTargetSchemaSelect().click();
        Conciliacion.conciliacion.rowFooterTable.thTargetSchemaOption().contains('Factura').click();
        Conciliacion.conciliacion.rowFooterTable.spanOptionText().contains('Factura');
    });

    it('Validacion de las filas de la tabla:Usar Mapeo Personalizado', () => {
            Conciliacion.conciliacion.rowFooterTable.thUseCustomMapping().click().should('exist');
            Conciliacion.conciliacion.rowFooterTable.thUseCustomMappingField().should('exist');
            Conciliacion.conciliacion.rowFooterTable.thUseCustomMappingSelect().should('exist');
            Conciliacion.conciliacion.rowFooterTable.thUseCustomMappingOptionYes().contains('Si').click();
            Conciliacion.conciliacion.rowFooterTable.thUseCustomMappingSelect().click();
            Conciliacion.conciliacion.rowFooterTable.thUseCustomMappingOptionNo().contains('No').click();
    });

    it('Validacion de las filas de la tabla:Mapeo Personalizado', () => {
            Conciliacion.conciliacion.rowFooterTable.thCustomMapping().should('exist');
            Conciliacion.conciliacion.rowFooterTable.thCustomMappingAddIcon().should('exist');
            Conciliacion.conciliacion.rowFooterTable.thCustomMappingAddBtn().click().should('exist');
            Conciliacion.conciliacion.rowFooterTable.modal.campoTitle().should('have.text','Campos');
            Conciliacion.conciliacion.rowFooterTable.modal.camposDisponibles().contains('Campos disponibles');
            const chipLabels = [
                "percepciones","cae","codigoDocumento","cuitJuridica","cuitProveedor","domicilioJuridica","domicilioProveedor","fechaCae","fechaEmision","importeExento","importeNetoGravado","importeNoGravado",
                "importeOtrosTributos", "importeTotal", "items", "iva10_5", "iva21", "iva27", "letraDocumento", "moneda", "numeroComprobante", "numeroFactura", "ordenCompra", "puntoVenta", "razonSocialJuridica", "razonSocialProveedor", "tipoCambio", "tipoDocumento"];
            Conciliacion.validarChipsPorTexto(chipLabels);
            Conciliacion.conciliacion.rowFooterTable.modal.cerrarModal().contains('Cerrar').click();
    });

    it('Validacion de las filas de la tabla:Usar Mapeo automático', () => {
            Conciliacion.conciliacion.rowFooterTable.thAutoMapping().click().should('exist');
            Conciliacion.conciliacion.rowFooterTable.thAutoMappingField().should('exist');
            Conciliacion.conciliacion.rowFooterTable.thAutoMappingSelect().should('exist');
            Conciliacion.conciliacion.rowFooterTable.thAutoMappingOptionNo().contains('No').click();
            Conciliacion.conciliacion.rowFooterTable.thAutoMappingSelect().click();
            Conciliacion.conciliacion.rowFooterTable.thAutoMappingOptionYes().contains('Si').click();
    });

     it('Validacion de las filas de la tabla: Marge de Diferencia', () => {
            Conciliacion.conciliacion.rowFooterTable.thMoneyTolerance().click().should('exist');
            Conciliacion.conciliacion.rowFooterTable.thMoneyToleranceField().should('exist');
            Conciliacion.conciliacion.rowFooterTable.thMoneyToleranceInput().should('exist');
            Conciliacion.conciliacion.rowFooterTable.thMoneyToleranceInput().type(3);
            Conciliacion.conciliacion.rowFooterTable.thMoneyToleranceInput().clear().type(0);
            Conciliacion.conciliacion.rowFooterTable.thMoneyToleranceInput().focus();
            Conciliacion.conciliacion.rowFooterTable.thMoneyToleranceCounter().focus().should('be.visible');
            Conciliacion.conciliacion.rowFooterTable.thMoneyToleranceCounter().type('{uparrow}').should('have.value', '1');
            Conciliacion.conciliacion.rowFooterTable.thMoneyToleranceCounter().type('{downarrow}').should('have.value', '0');
     });
    
    it('Validacion de las filas de la tabla: Acciones', () => {
            Conciliacion.conciliacion.rowFooterTable.thActions().should('exist');
            Conciliacion.conciliacion.rowFooterTable.thActionsAddIcon().should('exist');
            Conciliacion.conciliacion.rowFooterTable.thActionsAddBtn().should('exist').click();
    });

    it('validacion de los elementos de una fila,agregada por default', () => {
        Conciliacion.conciliacion.rowFooterTable.thActionsAddBtn().should('exist').click();
        cy.wait(2000);
        Conciliacion.conciliacion.rowFooterTable.thActionsAddIcon().should('exist').click();
        cy.wait(2000);
            Conciliacion.conciliacion.rowTable.tr().should('exist');
            Conciliacion.conciliacion.rowTable.tdSourceSchema().contains('Factura');
            Conciliacion.conciliacion.rowTable.tdTargetSchema().contains('Factura');
            Conciliacion.conciliacion.rowTable.tdUseCustomMapping().contains('No');
            Conciliacion.conciliacion.rowTable.tdCustomMapping().should('exist');
            Conciliacion.conciliacion.rowTable.tdModalCustomMapping().should('be.visible');
            Conciliacion.conciliacion.rowTable.tdAutoMapping().contains('Si');
            Conciliacion.conciliacion.rowTable.tdMoneyTolerance().contains('0');
            Conciliacion.conciliacion.rowTable.tdActions().should('be.visible');
            Conciliacion.conciliacion.rowTable.tdActionsEditBtn().should('be.visible');
            Conciliacion.conciliacion.rowTable.tdActionsRemoveBtn().should('be.visible');
            Conciliacion.conciliacion.rowTable.tdActionsEditBtn().eq(0).click();
            Conciliacion.conciliacion.rowTable.tdActionsSaveBtn().should('be.visible');
            Conciliacion.conciliacion.rowTable.tdActionsSaveIcon().should('be.visible');
            Conciliacion.conciliacion.rowTable.tdActionsCancelBtn().should('be.visible');
            Conciliacion.conciliacion.rowTable.tdActionsCancelIcon().should('be.visible');
        });
})