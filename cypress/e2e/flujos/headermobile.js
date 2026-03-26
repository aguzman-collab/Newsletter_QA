import headerMobNewsActions from "../../actions/HeaderMobileActions"; 
import homeNewsActions from "../../actions/HomeActions"
import url from "../../url/url";

export function headerMobileSuites(){

    context('Automatizacion - HeaderMovil', () => {

        it("Section - HeaderMovil", () =>{
        cy.viewport('iphone-8')
        url.urlhome()
        homeNewsActions.clickBotonCerrar();
        headerMobNewsActions.validarLogoNutraNewsMov();
        headerMobNewsActions.ValidarTextoNutraNews(); 
        headerMobNewsActions.ValidarLinkLogoNutraNews(); 
        headerMobNewsActions.clickBotonMenu();
        headerMobNewsActions.clickBotonHomeMov();
        headerMobNewsActions.clickBotonTribuMov(); 
        headerMobNewsActions.clickBotonBienesMov();
        headerMobNewsActions.clickBotonBuzonMov();
        headerMobNewsActions.clickBotonRedesFaceb();
        headerMobNewsActions.clickBotonRedesLink();
        headerMobNewsActions.clickBotonRedesInsta();
        headerMobNewsActions.clickBotonClose();
        });
    });
        
}