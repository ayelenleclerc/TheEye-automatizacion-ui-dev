
import DatosDocumento from "../../../../pages/documentosProcesados/datosExtraidos.js";
import Documento from "../../../../pages/documentosProcesados/documentosEnTabla.js";


describe("TC-004 Data Extraction", () => {
    beforeEach(() => {
        cy.ingresar_Documentos_Procesados();
    })
    
   it('Validación de datos del documento, existen todas las columnas', () => {
   
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.miniatura(id). click();
            DatosDocumento.e.titulo(id).should('have.text', ` Document ID: ${id} `);
            DatosDocumento.e.infoTitulo().should('have.text', 'Información Obtenida');
            DatosDocumento.e.inputFiltro().clear().type('cae');
            DatosDocumento.e.inputFiltro().clear();
           
        })
        DatosDocumento.e.nombre().should('have.text', ' NOMBRE ');
        DatosDocumento.e.valor().should('have.text', ' VALOR ');
        DatosDocumento.verificarColumnas();
       
   })
    it('Validar tabla items', () => {
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.miniatura(id).click();
            DatosDocumento.e.titulo(id).should('have.text', ` Document ID: ${id} `);
            DatosDocumento.e.infoTitulo().should('have.text', 'Información Obtenida');
        })
        DatosDocumento.e.subtablas().eq(0).should('exist').and('have.text', ' items ');
        DatosDocumento.e.verDatos().eq(0).should('exist').and('contain', ' Ver datos ').click();
     
        DatosDocumento.e.tituloSubTabla().contains('Tabla: items');
        DatosDocumento.e.datosItem.cantidad().should('have.text', 'cantidad')
        DatosDocumento.e.datosItem.codigo().should('have.text', 'codigo')
        DatosDocumento.e.datosItem.descripcion().should('have.text', 'decripcion')
        DatosDocumento.e.datosItem.importeUnitario().should('have.text', 'importeUnitario')
        DatosDocumento.e.datosItem.importeTotalConIVA().should('have.text', 'items_importe_total_con_iva')
        DatosDocumento.e.datosItem.importeTotalSinIVA().should('have.text', 'items_importe_total_sin_iva')
        DatosDocumento.e.datosItem.iva().should('have.text', 'iva');
       
        DatosDocumento.e.cerrarVentanaSubTabla().click();
    })

    it('Validar tabla percepciones', () => {
        Documento.contenido.checkboxRow().eq(0).click();
        Documento.obtenerIdFilaSeleccionada().then((id) => {
            Documento.contenido.miniatura(id).click();
            DatosDocumento.e.titulo(id).should('have.text', ` Document ID: ${id} `);
            DatosDocumento.e.infoTitulo().should('have.text', 'Información Obtenida');
        })
        DatosDocumento.e.subtablas().eq(1).should('exist').and('have.text', ' percepciones ');
        DatosDocumento.e.verDatos().eq(1).should('exist').and('contain', ' Ver datos ').click();
        DatosDocumento.e.tituloSubTabla().contains('Tabla: percepciones');
        DatosDocumento.e.datosPercepciones.percepcionesImporte().should('have.text', 'percepciones_importe');
        DatosDocumento.e.datosPercepciones.percepcionesPorcentaje().should('have.text', 'percepciones_porcentaje');
        DatosDocumento.e.datosPercepciones.percepcionesTipo().should('have.text', 'percepciones_tipo');
        DatosDocumento.e.cerrarVentanaSubTabla().click();
    })
})
