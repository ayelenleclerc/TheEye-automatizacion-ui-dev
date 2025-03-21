import NuevoSchema from "../../../pages/esquemas/nuevoSchema.js";
import Schema from "../../../pages/esquemas/schemaInicio.js";
import Propiedades from "../../../pages/esquemas/edicionPropiedades.js";

describe('Validación de nuevo esquema', () => {
    beforeEach(() => {
        cy.ingresar_Esquemas();
    })

    it('Validar elementos de nuevo esquema ', () => {
        Schema.nuevoEsquemaBtn().click();
        NuevoSchema.config.titulo().should('exist').and('have.text', ' Configuración de Schema\n');
        NuevoSchema.config.nombreLable().should('exist').and('contain', 'Nombre del Schema');
        NuevoSchema.config.nombreInput().should('exist');
        NuevoSchema.config.nombreInput().clear();
        NuevoSchema.config.idExtractorInput().should('exist').click();
        NuevoSchema.config.nombreError().should('exist').and('contain', 'Campo obligatorio');
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

    it.only('Importar Schema', () => {
        Schema.nuevoEsquemaBtn().click();
        NuevoSchema.config.importarBtn().click();
        cy.subirArchivo('input[type="file"]', '/schemas/ordenPago.json', 'application/json');
        NuevoSchema.config.guardarBtn().click();
        
   })
 })