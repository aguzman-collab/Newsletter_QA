import {Header} from '../elements/elements'; 

class headerNewsActions{


    validarLogoNutraNews = () => {
        Header.obtenerLogoNutraNews()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
        .and('include', 'Logo-cobranding-nutrabiotics-1.svg'); // Verifica que el 'src' contenga esta URL
    };

    clickBotonHome (){
        Header.obtenerBotonHome().click();
        cy.url('https://newsletter.nutrabiotics.com.co/')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    clickBotonTribu (){
        Header.obtenerBotonTribu().click();
        cy.url('https://newsletter.nutrabiotics.com.co/tribu/')
    }

    clickBotonBienestar (){
        Header.obtenerBotonBienestar().click();
        cy.url('https://newsletter.nutrabiotics.com.co/bienestar/')
    }

    clickBotonBuzon (){
        Header.obtenerBotonBuzon().click();
        cy.url('https://newsletter.nutrabiotics.com.co/buzon/')
    }
}
export default new headerNewsActions();