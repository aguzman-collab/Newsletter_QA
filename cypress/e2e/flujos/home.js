import homeNewsActions from "../../actions/HomeActions"; 
import url from "../../url/url";

beforeEach(() =>{
    cy.viewport(1200,800)
})

export function homeSuites(){

    context('Automatizacion - Home', () => {

        it("Section - Home", () =>{
        url.urlhome()
        homeNewsActions.clickBotonCerrar();
        homeNewsActions.validarTextoBienvenidos();
        homeNewsActions.validarParrafoBienvenidos();
        homeNewsActions.validarTextoInteres();
        homeNewsActions.validarTextoInvitamos();
        homeNewsActions.validarVideosCompensar();
        homeNewsActions.validarTextoDiversidad0();
        homeNewsActions.validarParrafoDiversidad1(); 
        homeNewsActions.validarTextoEventos(); 
        homeNewsActions.clickBotonCarrusel(); 
        });
    });
        
}