class Extraccion{
    extraccion= {
            extraccionCard: () => cy.get('[data-test="extraccion-card"]'),
            extSubtitle: () => cy.get('[data-test="extraccion-subtitle"]'),
            converterParametersForm: () => cy.get('[data-test="converter-parameters-form"]'),
            globalConfig: {
                seccionGlobal: () => cy.get('[data-test="extraccion-global-config-section"]'),
                title: () => cy.get('[data-test="extraccion-global-config-title"]'),
                multipageTitle: () => cy.get('[data-test="extraccion-multipage-title"]'),
                multiPageToggle: () => cy.get('[data-test="extraccion-multipage-toggle"]'),
                subtitleMultiPage: () => cy.get('[data-test="extraccion-multipage-subtitle"]'),
                generativeTitle: () => cy.get('[data-test="extraccion-generative-classifier-title"]'),
                generativeToggle: () => cy.get('[data-test="extraccion-generative-classifier-toggle"]'),
                generativeSubtitle: () => cy.get('[data-test="extraccion-generative-classifier-subtitle"]'),
                
            },
            configPlantilla: {
                template: () => cy.get('[data-test="extraccion-templates-config-section"]'),
                templateTitle: () => cy.get('[data-test="extraccion-templates-config-title"]'),
                minScoreTitle: () => cy.get('[data-test="extraccion-templates-min-score-title"]'),
                minScoreSubtitle: () => cy.get('[data-test="extraccion-templates-min-score-subtitle"]'),
                minScoreSlider: () => cy.get('[data-test="extraccion-templates-min-score-slider"]'),
                scoreSliderInput: () => cy.get('[data-test="extraccion-templates-min-score-slider"] input'),
                matchTitle: () => cy.get('[data-test="extraccion-templates-exact-match-title"]'),
                matchToggle: () => cy.get('[data-test="extraccion-templates-exact-match-toggle"]'),
                matchSubtitle: () => cy.get('[data-test="extraccion-templates-exact-match-subtitle"]'), 
                bestScoreTitle: () => cy.get('[data-test="extraccion-templates-best-score-title"]'), 
                bestScoreToggle: () => cy.get('[data-test="extraccion-templates-best-score-toggle"]'), 
                bestScoreSubtitle: () => cy.get('[data-test="extraccion-templates-best-score-subtitle"]'),
            }
        }
}

export default new Extraccion();