import {HeaderMovil} from '../elements/elements'; 
import { normalice } from  '../support/commands'

class headerMobNewsActions{

    validarLogoNutraNewsMov = () => {
        HeaderMovil.obtenerLogoNutraNewsMov()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
        .and('include', 'Logo-cobranding-nutrabiotics-1.svg'); // Verifica que el 'src' contenga esta URL
    };

    
    ValidarTextoNutraNews(){
        cy.fixture("headermobileExam").then((data) => {
        HeaderMovil.obtenerTextoNutraNews().should('have.text', data.headerMovtitulo1)
        }) 
    }

    clickLinkLogoNutraNews(){
        HeaderMovil.obtenerLinkLogoNutraNews()
        cy.url('https://newsletter.nutrabiotics.com.co/')
    }
    

    clickBotonMenu (){
        HeaderMovil.obtenerBotonMenu().click();
    }

    clickBotonHomeMov (){
        HeaderMovil.obtenerBotonesMov().eq(0)
        cy.url('https://newsletter.nutrabiotics.com.co/')
    }

    clickBotonTribuMov (){
        HeaderMovil.obtenerBotonesMov().eq(1)
        cy.url('https://newsletter.nutrabiotics.com.co/tribu/')
    }

    clickBotonBienesMov (){
        HeaderMovil.obtenerBotonesMov().eq(2)
        cy.url('https://newsletter.nutrabiotics.com.co/bienestar/')
    }

    clickBotonBuzonMov (){
        HeaderMovil.obtenerBotonesMov().eq(3)
        cy.url('https://newsletter.nutrabiotics.com.co/buzon/')
    }

    clickBotonRedesFaceb (){
        HeaderMovil.obtenerBotonesRedes().eq(0)
        cy.url('https://www.facebook.com/Nutrabiotics/')
    }

    clickBotonRedesLink (){
        HeaderMovil.obtenerBotonesRedes().eq(1)
        cy.url('https://co.linkedin.com/company/nutrabiotics-sas?original_referer=https%3A%2F%2Fnutrabiotics.info%2F')
    }
    
    clickBotonRedesInsta (){
        HeaderMovil.obtenerBotonesRedes().eq(2)
        cy.url('https://www.instagram.com/nutrabiotics_mf/?hl=en')
    }
    
    clickBotonClose(){
        HeaderMovil.obtenerBotonClose().click();
    }
}
export default new headerMobNewsActions(); 