import bienestarNewsActions from "../../actions/BienestarActions"
import url from "../../url/url";

export function bienestarSuites(){

    context('Automatizacion - Bienestar', () => {

        it("Section - Bienestar", () =>{
        cy.viewport(1200,800)
        url.urlbienestar()
        bienestarNewsActions.ValidarTextoBienes1(); 
        bienestarNewsActions.ValidarParrafoBienes1(); 
        bienestarNewsActions.validarImgBienes();
        });
    });
        
}