import {Buzon} from '../elements/elements'; 
import { normalice } from  '../support/commands';

class buzonNewsActions{
    
    ValidarTituloPrinBuzon(){
        cy.fixture("buzonExam").then((data) => {
        Buzon.obtenerTituloPrinBuzon().should('have.text', data.TituloPrinBuzon) 
        })
    }

    ValidarParrafoBuzon(){
        cy.fixture("buzonExam").then((data) => {
        Buzon.obtenerParrafoBuzon().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoBuzon))})
        })
    }

    ValidarTituloBuz2(){
        cy.fixture("buzonExam").then((data) => {
        Buzon.obtenerTituloBuz2().should('have.text', data.TituloBuz2) 
        })
    }

    ValidarTituloBuz3(){
        cy.fixture("buzonExam").then((data) => {
        Buzon.obtenerTituloBuz3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloBuz3))})
        })
    }

     validarImgBuzon = () => {
        Buzon.obtenerImgBuzon()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };
    
}
export default new buzonNewsActions();