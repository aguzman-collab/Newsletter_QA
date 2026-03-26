import footerMobNewsActions from "../../actions/FooterMobileActions"; 
import homeNewsActions from "../../actions/HomeActions"
import url from "../../url/url";

export function footerMobileSuites(){

    context('Automatizacion - FooterMovil', () => {

        it("Section - FooterMovil", () =>{
        cy.viewport('iphone-8')
        url.urlhome()
        homeNewsActions.clickBotonCerrar();
        footerMobNewsActions.validarLogoNutraNewsMovFooter(); 
        footerMobNewsActions.validarTextoSiguenosFooter();
        footerMobNewsActions.clickBotonRedesMovFooterFaceb();
        footerMobNewsActions.clickBotonRedesMovFooterInsta();
        footerMobNewsActions.clickBotonRedesMovFooterLink(); 
        footerMobNewsActions.validarTextoOtrosMovFooter(); 
        footerMobNewsActions.clickbotonMovFooterNutrabiotics();
        footerMobNewsActions.clickbotonMovFooterFundanatura();
        footerMobNewsActions.clickbotonMovFooterFarmaciaFuncional();
        footerMobNewsActions.clickbotonMovFooterNutracademia();
        footerMobNewsActions.clickbotonMovFooterAMF();
        footerMobNewsActions.validarLogoicontecMovFooter();
        footerMobNewsActions.validarLogoIqnetMovFooter(); 
        footerMobNewsActions.clickbotonTYCMovFooter(); 
        footerMobNewsActions.validarTextoPionerosMovFooter(); 
        footerMobNewsActions.validarLogo2011MovFooter();
        });
    });
        
}