import PageConfiguracion from '../../../pages/seccionConfiguracion/pageConfiguracion.js';
import Extraccion from '../../../pages/seccionConfiguracion/extraccion.js';

describe("Validación Pantalla de configuración- Extracción", () => {
    beforeEach(() => {
         cy.ingresar_Configuracion();
      
        PageConfiguracion.sections.sliderOpciones.extraccionSection().click();
       
    })

    it('Ver cuadro de configuración ', () => {
        Extraccion.extraccion.extSubtitle().contains('Configuración global de extracción de datos de documentos')
        Extraccion.extraccion.converterParametersForm().should('be.visible');
    });
    
    it('Sector Configuración Global', () => {
        Extraccion.extraccion.globalConfig.seccionGlobal().should('exist');
        Extraccion.extraccion.globalConfig.title().should('have.text', 'Configuración Global');
        Extraccion.extraccion.globalConfig.multipageTitle().contains('Documentos multipágina');
        Extraccion.extraccion.globalConfig.multiPageToggle().should('have.class', 'mat-mdc-slide-toggle-checked'); // Verifica que está activo

        Extraccion.extraccion.globalConfig.multiPageToggle().click(); // Hace click para desactivar

        // Espera hasta que el cambio ocurra
        Extraccion.extraccion.globalConfig.multiPageToggle().should('not.have.class', 'mat-mdc-slide-toggle-checked', { timeout: 6000 });
        Extraccion.extraccion.globalConfig.multiPageToggle().click();
        Extraccion.extraccion.globalConfig.subtitleMultiPage().contains('Al activar el procesamiento multipagina se procesaran todas las páginas de los documentos aunque no contengan información. Esto impacta directamente en el tiempo y costo de procesamiento global de cada documento.');

        Extraccion.extraccion.globalConfig.generativeTitle().contains('Clasificador Generativo')
        Extraccion.extraccion.globalConfig.generativeToggle().should('not.be.enabled', { timeout: 6000 });
        Extraccion.extraccion.globalConfig.generativeToggle().click();
        Extraccion.extraccion.globalConfig.generativeToggle().should('have.class','mat-mdc-slide-toggle-checked', { timeout: 6000 });
        Extraccion.extraccion.globalConfig.generativeToggle().click();
        Extraccion.extraccion.globalConfig.generativeSubtitle().contains('Al activar el clasificador generativo los documentos se clasificarán automáticamente utilizando los esquemas definidos para identificar el tipo.');
    });
    
    it('Sector Configuración de Plantillas', () => {
        Extraccion.extraccion.configPlantilla.templateTitle().should('have.text', 'Configuración de Plantillas');
        Extraccion.extraccion.configPlantilla.minScoreTitle().should('have.text', 'Puntuación mínima admitida');
        Extraccion.extraccion.configPlantilla.minScoreSubtitle().contains('La puntuación mínima de clasificación de una plantilla para ser usada en la extracción de datos de un documento.');
        Extraccion.extraccion.configPlantilla.minScoreSlider().should('be.visible');
         Extraccion.extraccion.configPlantilla.scoreSliderInput().invoke('val', 50).trigger('input').trigger('change'); 
        Extraccion.extraccion.configPlantilla.scoreSliderInput().should('have.value', '50');
        Extraccion.extraccion.configPlantilla.matchTitle().contains('Coincidencia exacta');
        Extraccion.extraccion.configPlantilla.matchToggle().should('not.be.enabled');
        Extraccion.extraccion.configPlantilla.matchToggle().click().should('have.class','mat-mdc-slide-toggle-checked', { timeout: 6000 });
        Extraccion.extraccion.configPlantilla.matchToggle().click()
        Extraccion.extraccion.configPlantilla.matchSubtitle().contains('El proceso de clasificación de documentos se detendra al encontrar la primer plantilla que supere el mínimo de puntuación y todas las reglas de clasificación definidas')

        Extraccion.extraccion.configPlantilla.bestScoreTitle().contains('Mejor puntuación');
        Extraccion.extraccion.configPlantilla.bestScoreToggle().should('not.be.enabled');
        Extraccion.extraccion.configPlantilla.bestScoreToggle().click().should('have.class','mat-mdc-slide-toggle-checked', { timeout: 6000 });
        Extraccion.extraccion.configPlantilla.bestScoreToggle().click();
        Extraccion.extraccion.configPlantilla.bestScoreSubtitle().contains('Cuando no se encuentre una plantilla para un documento se eligirá siempre el template con mejor puntuación aunque este por debajo de la puntuación mínima garantizando que siempre se asigne una plantilla a todos los documentos.')
     });

})