import {noticiasSST} from '../elements/elements'; 
import { Tribu } from '../elements/elements';
import { normalice } from  '../support/commands';

class noticiasSSTNewsActions{

    clickBotonSST(){
        noticiasSST.obtenerBotonSST()
        .click()
    }

    clickBotonVermasSST1(){
        noticiasSST.obtenerBotonVermasSST1().click() 
        
    }

    ValidarTituloNotici1_1(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici1_1().should('have.text', data.TituloNotici1_1) 
        })
    }

    clickBotonVolverNotici1_1(){
        noticiasSST.obtenerBotonVolverNotici1_1()
        cy.url('https://newsletter.nutrabiotics.com.co/tribu/#SST')
    }
    
    ValidarParrafoNotici1_1(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerParrafoNotici1_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici1_1))})
        })
    }

    ValidarTituloNotici1_2(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici1_2().should('have.text', data.TituloNotici1_2) 
        })
    }

    ValidarTituloNotici1_3(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici1_3().should('have.text', data.TituloNotici1_3) 
        })
    }

    validarImgNotici1_1  = () => {
        noticiasSST.obtenerImgNotici1_1()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTituloNotici1_4(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici1_4().should('have.text', data.TituloNotici1_4) 
        })
    }

    validarImgNotici1_2  = () => {
        noticiasSST.obtenerImgNotici1_2()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTituloNotici1_5(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici1_5().should('have.text', data.TituloNotici1_5) 
        })
    }

    ValidarTituloNotici1_6(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici1_6().should('have.text', data.TituloNotici1_3) 
        })
    }

    validarImgNotici1_3  = () => {
        noticiasSST.obtenerImgNotici1_3()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTituloNotici1_7(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici1_7().should('have.text', data.TituloNotici1_4) 
        })
    }

    validarImgNotici1_4  = () => {
        noticiasSST.obtenerImgNotici1_4()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarParrafoNotici1_2(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerParrafoNotici1_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici1_2))})
        })
    }

    ValidarParrafoNotici1_3(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerParrafoNotici1_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici1_3))})
        })
    }

    ///Noticia Numero 2

    clickBotonVermasSST2(){
        noticiasSST.obtenerBotonVermasSST2().click() 
    }

    ValidarTituloNotici2_1(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici2_1().should('have.text', data.TituloNotici2_1) 
        })
    }

    clickBotonVolverNotici2_1(){
        noticiasSST.obtenerBotonVolverNotici2_1()
        cy.url('https://newsletter.nutrabiotics.com.co/tribu/#SST')
    }

    ValidarParrafoNotici2_1(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerParrafoNotici2_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici2_1))})
        })
    }

    ValidarTituloNotici2_2(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici2_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.TituloNotici2_2))})
        })
    }

    ValidarTituloNotici2_3(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici2_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.TituloNotici2_3))})
        })
    }

    clickBotonIngresaSST2(){
        noticiasSST.obtenerBotonIngresaSST2()
        cy.url('https://forms.gle/yXVX1C4U6RncLkx38')
    }


    ValidarTituloNotici2_4(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici2_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.TituloNotici2_4))})
        })
    }

    ValidarTituloNotici2_5(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici2_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.TituloNotici2_5))})
        })
    }

    ValidarTituloNotici2_6(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici2_6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.TituloNotici2_6))})
        })
    }

    ValidarTituloNotici2_7(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici2_7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.TituloNotici2_7))})
        })
    }

    ValidarTituloNotici2_8(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici2_8().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.TituloNotici2_8))})
        })
    }

    ValidarTituloNotici2_9(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici2_9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.TituloNotici2_9))})
        })
    }

    ValidarTituloNotici2_10(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici2_10().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.TituloNotici2_10))})
        })
    }

    ValidarTituloNotici2_11(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici2_11().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.TituloNotici2_11))})
        })
    }

    ValidarTituloNotici2_12(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici2_12().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.TituloNotici2_12))})
        })
    }

    ValidarTituloNotici2_13(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici2_13().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.TituloNotici2_13))})
        })
    }

    ValidarTituloNotici2_14(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici2_14().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.TituloNotici2_14))})
        })
    }

    ValidarTituloNotici2_15(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici2_15().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.TituloNotici2_15))})
        })
    }

    ValidarTituloNotici2_16(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici2_16().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.TituloNotici2_16))})
        })
    }

    ///Noticia Numero 3

    clickBotonVermasSST3(){
        noticiasSST.obtenerBotonVermasSST3().click() 
    }

    ValidarTituloNotici2_1(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici2_1().should('have.text', data.TituloNotici2_1) 
        })
    }

    clickBotonVolverNotici2_1(){
        noticiasSST.obtenerBotonVolverNotici2_1()
        cy.url('https://newsletter.nutrabiotics.com.co/tribu/#SST')
    }

    ValidarParrafoNotici3_1(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerParrafoNotici3_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.ParrafoNotici3_1))})
        })
    }

    ValidarTituloNotici3_2(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici3_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_2))}) 
        })
    }


    ///Noticia Numero 4

    clickBotonVermasSST4(){
        noticiasSST.obtenerBotonVermasSST4().click() 
    }

    ValidarTituloNotici4_1(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici4_1().should('have.text', data.TituloNotici4_1) 
        })
    }

    clickBotonVolverNotici4_1(){
        noticiasSST.obtenerBotonVolverNotici4_1()
        cy.url('https://newsletter.nutrabiotics.com.co/tribu/#SST')
    }

    ValidarParrafoNotici4_1(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerParrafoNotici4_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.ParrafoNotici4_1))})
        })
    }

    ValidarTituloNotici4_2(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici4_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici4_2))})
        })
    }

    ValidarParrafoNotici4_2(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerParrafoNotici4_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.ParrafoNotici4_2))})
        })
    }

    ValidarTituloNotici4_3(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici4_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici4_3))})
        })
    }

    ValidarParrafoNotici4_3(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerParrafoNotici4_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.ParrafoNotici4_3))})
        })
    }

    ValidarTituloNotici4_4(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici4_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici4_4))})
        })
    }

    ValidarParrafoNotici4_4(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerParrafoNotici4_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice( data.ParrafoNotici4_4))})
        })
    }

    ValidarTituloNotici4_5(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici4_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici4_5))})
        })
    }

    ValidarTituloNotici4_6(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici4_6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici4_6))})
        })
    }

    ///Noticia Numero 5

    clickBotonVermasSST5(){
        noticiasSST.obtenerBotonVermasSST5().click() 
    }

    ValidarTituloNotici5_1(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici5_1().should('have.text', data.TituloNotici5_1) 
        })
    }

    clickBotonVolverNotici5_1(){
        noticiasSST.obtenerBotonVolverNotici5_1()
        cy.url('https://newsletter.nutrabiotics.com.co/tribu/#SST')
    }

    validarParrafosNotici5_1() {
        cy.fixture('noticiasSSTExam').then((data) => {
            noticiasSST.obtenerParrafosNotici5_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosNotici5_1[index]))}) 
            });
        });
    }

    ValidarTituloNotici5_2(){
        cy.fixture("noticiasSSTExam").then((data) => {
        noticiasSST.obtenerTituloNotici5_2().should('have.text', data.TituloNotici5_2) 
        })
    }

    // acciones/blogActions.js
    validarVideoNotici5(){
    noticiasSST.obtenerVideoNotici5()
      .should('be.visible')
      .and('have.attr', 'src')
      .and('include', 'neRCeJaTnAQ');
    }
}
export default new noticiasSSTNewsActions();