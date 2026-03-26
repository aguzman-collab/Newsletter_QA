import homeNewsActions from "../../actions/HomeActions"; 
import footerNewsActions from "../../actions/FooterActions"
import url from "../../url/url";

export function footerSuites(){

    context('Automatizacion - Footer', () => {

        it("Section - Footer", () =>{
        cy.viewport(1200,800)
        url.urlhome()
        homeNewsActions.clickBotonCerrar(); 
        ///headerNewsActions.volverPaginaAnterior();
        footerNewsActions.validarLogoNutraNewsFooter(); 
        footerNewsActions.validarTextoSiguenos();
        footerNewsActions.clickBotonRedesFaceb();
        footerNewsActions.clickBotonRedesInsta();
        footerNewsActions.clickBotonRedesLink(); 
        footerNewsActions.validarTextoOtros(); 
        footerNewsActions.clickBotonNutrabiotics();
        footerNewsActions.clickBotonFundanatura();
        footerNewsActions.clickBotonFarmaciaFuncional();
        footerNewsActions.clickBotonNutracademia();
        footerNewsActions.clickBotonAMF();
        footerNewsActions.validarLogoIcontec (); 
        footerNewsActions.clickBotonTyC(); 
        footerNewsActions.validarTextoPioneros();
        });
    });
        
}