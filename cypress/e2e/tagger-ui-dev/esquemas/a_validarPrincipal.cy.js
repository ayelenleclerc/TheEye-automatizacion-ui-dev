import Schema from "../../../pages/esquemas/schemaInicio.js";

describe('Validación de Esquemas Pantalla inicial', () => {
    beforeEach(() => {
        cy.ingresar_Esquemas();
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
        Schema.tablaContent.activar().eq(0).click();
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
})
 