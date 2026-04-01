import {Bienestar} from '../elements/elements'; 
import { normalice } from  '../support/commands';

class bienestarNewsActions{

    ///BIENESTAR
    ValidarTextoBienes1(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTextoBienes1().should('have.text', data.Bienestitulo1) 
        })
    }

    ValidarParrafoBienes1(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoBienes1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.BienesParrafo1))})
        })
    }

    validarImgBienes = () => {
        Bienestar.obtenerImgBienes()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ///PARCHANDO 
}
export default new bienestarNewsActions();