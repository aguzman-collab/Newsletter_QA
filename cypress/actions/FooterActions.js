import {Footer} from '../elements/elements'; 
import { normalice } from  '../support/commands';

class footerNewsActions{
    validarLogoNutraNewsFooter = () => {
        Footer.obtenerLogoNutraNewsFooter()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    validarTextoSiguenos() {
        cy.fixture("footerExam").then((data) => {
        Footer.obtenerTextoSiguenos().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.footertitulo1))})
        }) 
    } 

    clickBotonRedesFaceb (){
        Footer.obtenerBotonRedes().eq(0).invoke('removeAttr', 'target')
        cy.url('https://www.facebook.com/Nutrabiotics/')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    clickBotonRedesInsta (){
        Footer.obtenerBotonRedes().eq(1).invoke('removeAttr', 'target')
        cy.url('https://www.instagram.com/nutrabiotics_mf/?hl=en')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    clickBotonRedesLink (){
        Footer.obtenerBotonRedes().eq(2).invoke('removeAttr', 'target')
        cy.url('https://www.linkedin.com/company/nutrabiotics-sas/mycompany/')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    validarTextoOtros() {
        cy.fixture("footerExam").then((data) => {
        Footer.obtenerTextoOtros().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.footertitulo2))})
        }) 
    } 

    clickBotonNutrabiotics (){
        Footer.obtenerBotonRedesNutra().eq(0).invoke('removeAttr', 'target')
        cy.url('https://nutrabiotics.info/')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    clickBotonFundanatura (){
        Footer.obtenerBotonRedesNutra().eq(1).invoke('removeAttr', 'target')
        cy.url('https://fundanatura.com/')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    clickBotonFarmaciaFuncional (){
        Footer.obtenerBotonRedesNutra().eq(2).invoke('removeAttr', 'target')
        cy.url('https://farmaciafuncional.com/')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    clickBotonNutracademia (){
        Footer.obtenerBotonRedesNutra().eq(3).invoke('removeAttr', 'target')
        cy.url('https://nutracademia.com/')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    clickBotonAMF (){
        Footer.obtenerBotonRedesNutra().eq(4).invoke('removeAttr', 'target')
        cy.url('https://academiademedicinafuncional.info/')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    validarLogoIcontec = () => {
        Footer.obtenerLogoIcontec()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    clickBotonTyC (){
        Footer.obtenerBotonTYC().invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/terminos-y-condiciones/')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    validarTextoPioneros() {
        cy.fixture("footerExam").then((data) => {
        Footer.obtenerTextoPioneros().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.footertitulo3))})
        }) 
    }
}
export default new footerNewsActions();



