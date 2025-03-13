class HomeTagger {
    e = {
        logo: () => cy.get('img'),
        profile: () => cy.get('.username > span'),
        profileBtn: () => cy.get('.mat-mdc-menu-trigger'),
        optionMenuQatest: () => cy.get('.mat-mdc-menu-content > :nth-child(1)'),
        optionMenuAdmin: () => cy.get('.mat-mdc-menu-content > :nth-child(2)'),
        optionMenuSalir:() => cy.get('.mat-mdc-menu-content > :nth-child(3)'),
        lotesBtn: () => cy.get('[data-test="Lotes"]'),
        docuProces: () => cy.get('[data-test="documentosProcesados"]'),
        emailProces: () => cy.get('#content > div > mat-grid-list > div > mat-grid-tile:nth-child(3) > div > div > div.mat-elevation-z8.menuButton > button'),
        plantillas: () => cy.get('[data-test="plantillas"]'),
        esquemas: () => cy.get('[data-test="esquemas"]'),
        metricas: () => cy.get('#content > div > mat-grid-list > div > mat-grid-tile:nth-child(6) > div > div > div.mat-elevation-z8.menuButton > button'),
        configuracion: () => cy.get('#content > div > mat-grid-list > div > mat-grid-tile:nth-child(7) > div > div > div.mat-elevation-z8.menuButton > button'),
        btnDescriptions: () => cy.get('.descriptionText')
    }
 
    
    btnDescriptionsInfo = () => {
        
        let btnText = ["Lotes", "Documentos Procesados", "EMails Procesados", "Subir Documentos", "Plantillas", "Esquemas", "Metricas de uso", "Configuración"];

        btnText.forEach(element => {
            if (this.e.btnDescriptions().eq){
                cy.log(element)
                 }
            })

    }
    
            
        
    
}

export default new HomeTagger();