import {FooterMovil} from '../elements/elements'; 
import { normalice } from  '../support/commands'

class footerMobNewsActions{

    validarLogoNutraNewsMovFooter = () => {
        FooterMovil.obtenerLogoNutraNewsMovFooter()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    validarTextoSiguenosFooter() {
        cy.fixture("footerExam").then((data) => {
        FooterMovil.obtenerTextoSiguenosFooter().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.footermMovtitulo1))})
        }) 
    }

    clickBotonRedesMovFooterFaceb (){
        FooterMovil.obtenerBotonRedesMovFooter().eq(0).invoke('removeAttr', 'target')
        cy.url('https://www.facebook.com/Nutrabiotics/')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    clickBotonRedesMovFooterInsta (){
        FooterMovil.obtenerBotonRedesMovFooter().eq(1).invoke('removeAttr', 'target')
        cy.url('https://www.instagram.com/nutrabiotics_mf/?hl=en')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    clickBotonRedesMovFooterLink (){
        FooterMovil.obtenerBotonRedesMovFooter().eq(2).invoke('removeAttr', 'target')
        cy.url('https://www.linkedin.com/company/nutrabiotics-sas/mycompany/')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    validarTextoOtrosMovFooter() {
        cy.fixture("footerExam").then((data) => {
        FooterMovil.obtenerTextoOtrosMovFooter().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.footermMovtitulo2))})
        }) 
    } 

    clickbotonMovFooterNutrabiotics (){
        FooterMovil.obtenerbotonRedesNutraMovFooter().eq(0).invoke('removeAttr', 'target')
        cy.url('https://nutrabiotics.info/')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    clickbotonMovFooterFundanatura (){
        FooterMovil.obtenerbotonRedesNutraMovFooter().eq(1).invoke('removeAttr', 'target')
        cy.url('https://fundanatura.com/')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    clickbotonMovFooterFarmaciaFuncional (){
        FooterMovil.obtenerbotonRedesNutraMovFooter().eq(2).invoke('removeAttr', 'target')
        cy.url('https://farmaciafuncional.com/')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    clickbotonMovFooterNutracademia (){
        FooterMovil.obtenerbotonRedesNutraMovFooter().eq(3).invoke('removeAttr', 'target')
        cy.url('https://nutracademia.com/')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    clickbotonMovFooterAMF (){
        FooterMovil.obtenerbotonRedesNutraMovFooter().eq(4).invoke('removeAttr', 'target')
        cy.url('https://academiademedicinafuncional.info/')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    validarLogoicontecMovFooter = () => {
        FooterMovil.obtenerLogoicontecMovFooter()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    validarLogoIqnetMovFooter = () => {
        FooterMovil.obtenerLogoIqnetMovFooter()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    clickbotonTYCMovFooter (){
        FooterMovil.obtenerbotonTYCMovFooter().invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/terminos-y-condiciones/')
    }

    volverPaginaAnterior = () => {
        cy.go('back')
    }

    validarTextoPionerosMovFooter() {
        cy.fixture("footerExam").then((data) => {
        FooterMovil.obtenerTextoPionerosMovFooter().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.footermMovtitulo3))})
        }) 
    }

    validarLogo2011MovFooter = () => {
        FooterMovil.obtenerLogo2011MovFooter()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

}
export default new footerMobNewsActions(); 