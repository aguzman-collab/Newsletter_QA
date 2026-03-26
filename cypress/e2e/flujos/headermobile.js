import headerMobNewsActions from "../../actions/HeaderMobileActions"; 
import homeNewsActions from "../../actions/HomeActions"
import url from "../../url/url";

export function headerMobileSuites(){

    context('Automatizacion - HeaderMovil', () => {

        it("Section - HeaderMovil", () =>{
        url.urlhome()
        homeNewsActions.clickBotonCerrar();
        headerMobNewsActions.validarLogoNutraNewsMov();
        headerMobNewsActions.ValidarTextoNutraNews(); 
        headerMobNewsActions.clickLinkLogoNutraNews(); 
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