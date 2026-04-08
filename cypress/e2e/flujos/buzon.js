import buzonNewsActions from "../../actions/BuzonActions"
import url from "../../url/url";

export function buzonSuites(){

    context('Automatizacion - Buzon', () => {

        it.only("Section - Buzon", () =>{
        cy.viewport(1200,800)
        url.urlbuzon()
        buzonNewsActions.ValidarTituloPrinBuzon(); 
        buzonNewsActions.ValidarParrafoBuzon(); 
        buzonNewsActions.ValidarTituloBuz2(); 
        buzonNewsActions.ValidarTituloBuz3(); 
        buzonNewsActions.validarImgBuzon(); 
        });

    });
        
}