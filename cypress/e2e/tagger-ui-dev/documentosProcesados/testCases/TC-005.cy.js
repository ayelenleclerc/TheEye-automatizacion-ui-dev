import Agregar from "../../../../pages/documentosProcesados/agregarDocumento.js";
import ProcesamientoManual from "../../../../pages/documentosProcesados/procesamientoManual.js";
import DatosDocumento from "../../../../pages/documentosProcesados/datosExtraidos.js";
import Documento from "../../../../pages/documentosProcesados/documentosEnTabla.js";





describe("TC-005 Validación y Procesamiento manual", () => {
    beforeEach(() => {
      cy.ingresar_Documentos_Procesados();
    })
    it.skip('Agregar documento con datos faltantes', () => {
        Agregar.e.agregarDoc().click();
        cy.subirPdf('/archivos/factura_dato_faltante.pdf');
               
        Agregar.e.progresoCarga().should('be.visible');
        Agregar.e.msgSubidaOk().should('be.visible').and('contain', 'Subida de documentos completada con éxito');
        Agregar.e.cerrarUploader().click();
        cy.wait(15000);
        cy.reload();
              
    })

    it('Ingresar a procesamiento manual desde Datos extraídos', () => {
    Documento.contenido.checkboxRow().eq(0).click();
    Documento.obtenerIdFilaSeleccionada().then((id) => {
        Documento.contenido.miniatura(id).click();
        DatosDocumento.e.titulo(id).should('have.text', ` Document ID: ${id} `);
        DatosDocumento.e.infoTitulo().should('have.text', 'Información Obtenida');
        })
        DatosDocumento.e.procesarManualmenteBtn().click();
      
    })         
   
    it('validación elementos, existen todos los elementos de las tablas', () => {
            Documento.ingresar()
            ProcesamientoManual.validarMenuBar();
            ProcesamientoManual.validarFiltroyTag();
            ProcesamientoManual.validarTablaDatos(); 
            ProcesamientoManual.validarTablaItems();
            ProcesamientoManual.validarTablaPercepciones(); 
         })
    
    it('validación error cuando hay datos faltantes, muestra el error', () => {
            Documento.ingresar()

            ProcesamientoManual.borrarDatoParaError();
            Documento.ingresar()
            ProcesamientoManual.errorFaltaRequerido();
    
           
        })
    
     
        it('Validacion de comportamiento cuando se agrega el dato incorrecto', () =>{
            Documento.ingresar()
        
            ProcesamientoManual.errorFaltaRequerido();
            ProcesamientoManual.completarDatoIncorrecto();
        });
    
         it('Validacion de comportamiento cuando se agrega el dato faltante', () =>{
    
              Documento.ingresar()
            ProcesamientoManual.completarDatoFaltante();
         });
   
    
})
