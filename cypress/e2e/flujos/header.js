import homeNewsActions from "../../actions/HomeActions"; 
import headerNewsActions from "../../actions/HeaderActions";
import url from "../../url/url";

export function headerSuites(){

    context('Automatizacion - Header', () => {

        it("Section - Header", () =>{
        cy.viewport(1200,800)
        url.urlhome()
        homeNewsActions.clickBotonCerrar();
        headerNewsActions.validarLogoNutraNews(); 
        headerNewsActions.clickBotonHome(); 
        homeNewsActions.clickBotonCerrar();
        headerNewsActions.clickBotonTribu(); 
        headerNewsActions.volverPaginaAnterior();
        homeNewsActions.clickBotonCerrar();
        headerNewsActions.clickBotonBienestar();
        headerNewsActions.volverPaginaAnterior(); 
        homeNewsActions.clickBotonCerrar();
        headerNewsActions.clickBotonBuzon();
        headerNewsActions.volverPaginaAnterior(); 
        homeNewsActions.clickBotonCerrar();
        });
    });
        
}