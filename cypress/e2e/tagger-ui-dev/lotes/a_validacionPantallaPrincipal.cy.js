import PantallaPrincipal from '../../../pages/lotes/principal.js';

describe('Validación de lotes', () => {
    beforeEach(() => {
        cy.ingresar_Lotes();
    })

    it('Ver cuadro de lotes', () => {
        PantallaPrincipal.menuBase.titulo().should('be.visible');
        PantallaPrincipal.menuBase.agregarNuevo().should('be.visible');
        PantallaPrincipal.menuBase.tablaVacia().contains('No hay datos para mostrar');
    });

    it('Cabecera de tabla', () => {
        PantallaPrincipal.tablaHead.check().should('exist');
        PantallaPrincipal.tablaHead.id().should('exist');
        PantallaPrincipal.tablaHead.fechaCreacion().should('exist');
        PantallaPrincipal.tablaHead.carpeta().should('exist');
        PantallaPrincipal.tablaHead.cantItems().should('exist');
        PantallaPrincipal.tablaHead.estado().should('exist');;
        PantallaPrincipal.tablaHead.manejoEstado().should('exist');
        PantallaPrincipal.tablaHead.detalleEstado().should('exist');
        PantallaPrincipal.tablaHead.menuAccionBtn().should('exist');
    });
    it('Menu acciones de tabla, habilita y deshabilita todos los campos', () => {
        PantallaPrincipal.habilitarDeshabilitarCamposMenuAccion();
        cy.reload();
        PantallaPrincipal.habilitarDeshabilitarCamposMenuAccion();
    })

    it('Crear nuevo Lote sin nombre: muestra el error', () => {
        PantallaPrincipal.menuBase.agregarNuevo().click();
        PantallaPrincipal.nuevoLote.tituloNuevoLote().should('have.text',  'Nombre del nuevo lote');
        PantallaPrincipal.nuevoLote.guardarBtn().should('not.exist');
        PantallaPrincipal.nuevoLote.input().type('{enter}');
        PantallaPrincipal.nuevoLote.input().should('have.value', '');
        PantallaPrincipal.nuevoLote.cancelarBtn().should('exist');
        PantallaPrincipal.nuevoLote.matDialog().click({focus: true, force: true});
        cy.wait(1000);
        PantallaPrincipal.nuevoLote.errorVacio().should('exist').and('have.text', 'El nombre no puede estar vacío');
        PantallaPrincipal.nuevoLote.cancelarBtn().click();
    
    })

})