import {noticiaBiene} from '../elements/elements'; 
import { Tribu } from '../elements/elements';
import { normalice } from  '../support/commands';

class noticiaBieneNewsActions{

    ///PARCHANDO
    ///Noticia Numero 1
    clickBotonVermasParcha1(){
        noticiaBiene.obtenerBotonVermasParcha1().click() 
    }

    ValidarTituloParcha1_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloParcha1_1().should('have.text', data.TituloParcha1_1) 
        })
    }

    validarParrafosParcha1_1() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafosParcha1_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosParcha1_1[index]))}) 
            });
        });
    }

    validarParrafosParcha1_2() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafosParcha1_2().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosParcha1_2[index]))}) 
            });
        });
    }


    ///Noticia Numero 2
    clickBotonVermasParcha2(){
        noticiaBiene.obtenerBotonVermasParcha2().click() 
    }

    ValidarTituloParcha2_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloParcha2_1().should('have.text', data.TituloParcha2_1) 
        })
    }

    validarParrafosParcha2_1() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafosParcha2_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosParcha2_1[index]))}) 
            });
        });
    }

    ValidarTituloParcha2_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloParcha2_2().should('have.text', data.TituloParcha2_2) 
        })
    }

    ///Noticia Numero 3
    clickBotonVermasParcha3(){
        noticiaBiene.obtenerBotonVermasParcha3().click() 
    }

    ValidarTituloParcha3_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloParcha3_1().should('have.text', data.TituloParcha3_1) 
        })
    }

    validarParrafosParcha3_1() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafosParcha3_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosParcha3_1[index]))}) 
            });
        });
    }

    ValidarTituloParcha3_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloParcha3_2().should('have.text', data.TituloParcha3_2) 
        })
    }

    ///Noticia Numero 4
    clickBotonVermasParcha4(){
        noticiaBiene.obtenerBotonVermasParcha4().eq(0).click() 
    }

    ValidarTituloParcha4_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloParcha4_1().should('have.text', data.TituloParcha4_1) 
        })
    }

    validarParrafosParcha4_1() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafosParcha4_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosParcha4_1[index]))}) 
            });
        });
    }

    ValidarTituloParcha4_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloParcha4_2().should('have.text', data.TituloParcha4_2) 
        })
    }

    ValidarTituloParcha4_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloParcha4_3().should('have.text', data.TituloParcha4_3) 
        })
    }


    ///Noticia Numero 5
    clickBotonVermasParcha5(){
        noticiaBiene.obtenerBotonVermasParcha5().click() 
    }

    ValidarTituloParcha5_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloParcha5_1().should('have.text', data.TituloParcha5_1) 
        })
    }

    validarParrafosParcha5_1() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafosParcha5_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosParcha5_1[index]))}) 
            });
        });
    }

    ValidarTituloParcha5_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloParcha5_2().should('have.text', data.TituloParcha5_2) 
        })
    }


     ///Noticia Numero 6
    clickBotonVermasParcha6(){
        noticiaBiene.obtenerBotonVermasParcha6().click() 
    }

    ValidarTituloParcha6_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloParcha6_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.TituloParcha6_1[index]))})
                });   
        })
    }

    validarParrafosParcha6_1() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafosParcha6_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosParcha6_1[index]))}) 
            });
        });
    }

    ValidarParrafosParcha6_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoParcha6_2().should('have.text', data.ParrafoParcha6_2) 
        })
    }


    ///Noticia Numero 7
    clickBotonVermasParcha7(){
        noticiaBiene.obtenerBotonVermasParcha7().click() 
    }

    ValidarTituloParcha7_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloParcha7_1().should('have.text', data.TituloParcha7_1) 
        })
    }

    validarParrafosParcha7_1() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafosParcha7_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosParcha7_1[index]))}) 
            });
        });
    }

    validarParrafosParcha7_2() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoParcha7_2().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosParcha7_2[index]))}) 
            });
        });
    }

    ///Noticia Numero 7
    clickBotonVermasParcha8(){
        noticiaBiene.obtenerBotonVermasParcha8().click() 
    }

    ValidarTituloParcha8_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloParcha8_1().should('have.text', data.TituloParcha8_1) 
        })
    }

    ValidarTituloParcha8_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloParcha8_2().should('have.text', data.TituloParcha8_2) 
        })
    }

    ValidarTituloParcha8_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloParcha8_3().should('have.text', data.TituloParcha8_3) 
        })
    }

    validarParrafosParcha8_1() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoParcha8_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosParcha8_1[index]))}) 
            });
        });
    }

    validarParrafosParcha8_2() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoParcha8_2().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosParcha8_2[index]))}) 
            });
        });
    }

    validarParrafosParcha8_3() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoParcha8_3().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosParcha8_3[index]))}) 
            });
        });
    }

    ValidarTituloParcha8_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloParcha8_4().should('have.text', data.TituloParcha8_4) 
        })
    }

    validarParrafosParcha8_4() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoParcha8_4().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosParcha8_4[index]))}) 
            });
        });
    }

    validarParrafosParcha8_5() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoParcha8_5().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosParcha8_5[index]))}) 
            });
        });
    }

    validarParrafosParcha8_6() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoParcha8_6().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosParcha8_6[index]))}) 
            });
        });
    }

    validarParrafosParcha8_7() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoParcha8_7().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosParcha8_7[index]))}) 
            });
        });
    }

    validarImgComida1  = () => {
        noticiaBiene.obtenerImgComida1()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    validarParrafosParcha8_8() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoParcha8_8().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosParcha8_8[index]))}) 
            });
        });
    }

    validarImgLugares1  = () => {
        noticiaBiene.obtenerImgLugares1()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    validarParrafosParcha8_9() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoParcha8_9().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafosParcha8_9[index]))}) 
            });
        });
    }

    clickBotonInmuTocanci(){
        noticiaBiene.obtenerBotonInmuTocanci()
        cy.url('https://www.fincaraiz.com.co/apartaestudios-apartamentos-casas/arriendos/tocancipa/cundinamarca?utm_source=google-adwords&utm_medium=cpc-ppc&utm_campaign=alwayson_traffic_feb_2023_brokers_-MARCA_2018&utm_term=search_na_-finca+raiz+arriendo&utm_content=na_na_na&hsa_acc=7897484587&hsa_cam=1469176255&hsa_grp=57293545819&hsa_ad=648379569742&hsa_src=g&hsa_tgt=kwd-295318419566&hsa_kw=finca+raiz+arriendo&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAiAu5agBhBzEiwAdiR5tJ1RsZ7TGiShoUrf_60FHhXoPyZfL9o5PeIyDesFo2EXvGVNG6cq4RoC1YsQAvD_BwE&pagina=1')
    }

    clickBotonInmuZipaqui(){
        noticiaBiene.obtenerBotonInmuZipaqui()
        cy.url('https://www.fincaraiz.com.co/apartaestudios-apartamentos-casas/arriendos/zipaquira/cundinamarca?utm_source=google-adwords&utm_medium=cpc-ppc&utm_campaign=alwayson_traffic_feb_2023_brokers_-MARCA_2018&utm_term=search_na_-finca+raiz+arriendo&utm_content=na_na_na&hsa_acc=7897484587&hsa_cam=1469176255&hsa_grp=57293545819&hsa_ad=648379569742&hsa_src=g&hsa_tgt=kwd-295318419566&hsa_kw=finca+raiz+arriendo&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAiAu5agBhBzEiwAdiR5tJ1RsZ7TGiShoUrf_60FHhXoPyZfL9o5PeIyDesFo2EXvGVNG6cq4RoC1YsQAvD_BwE&pagina=1&precioHasta=1000000')
    }

    /// LA TRIBU AYUDA 
    clickBotonTriAyu(){
        noticiaBiene.obtenerBotonTriAyu()
        .invoke('removeAttr', 'target')
        .click();
    }

    clickBotonVermasTriAyu1(){
        noticiaBiene.obtenerBotonVermasTriAyu1()
        .invoke('removeAttr', 'target')
        .click();
    }

    ValidarTituloTriAyu1_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu1_1().should('have.text', data.TituloTriAyu1_1) 
        })
    }

    ValidarTituloTriAyu1_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu1_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloTriAyu1_2))})
        })
    }

    validarParrafoTriAyu1_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_1))})
        })
    }

    validarParrafoTriAyu1_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_2))})
        })
    }

    ValidarTituloTriAyu1_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu1_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloTriAyu1_3))})
        })
    }

    validarParrafoTriAyu1_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_3))})
        })
    }

    ValidarTituloTriAyu1_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu1_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloTriAyu1_4))})
        })
    }

    validarParrafoTriAyu1_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_4))})
        })
    }

    ValidarTituloTriAyu1_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu1_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloTriAyu1_5))})
        })
    }

    validarParrafoTriAyu1_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_5))})
        })
    }

    validarParrafoTriAyu1_6(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_6))})
        })
    }

    validarParrafoTriAyu1_7(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_7))})
        })
    }

    ValidarTituloTriAyu1_6(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu1_7().eq(0).invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloTriAyu1_6))})
        })
    }

    validarTituloTriAyu1_7(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerTituloTriAyu1_7().eq(1).invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloTriAyu1_7))})
        })
    }

    validarParrafoTriAyu1_8(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_8().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_8))})
        })
    }

    validarParrafoTriAyu1_9(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_9))})
        })
    }

    validarParrafoTriAyu1_10(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_10().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_10))})
        })
    }

    validarParrafoTriAyu1_11(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_11().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_11))})
        })
    }

    validarParrafoTriAyu1_12(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_12().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_12))})
        })
    }

    validarParrafoTriAyu1_13(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_13().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_13))})
        })
    }

    validarParrafoTriAyu1_14(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_14().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_14))})
        })
    }

    validarParrafoTriAyu1_15(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_15().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_15))})
        })
    }

    validarParrafoTriAyu1_16(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_16().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_16))})
        })
    }

    validarParrafoTriAyu1_17(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_17().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_17))})
        })
    }

    validarParrafoTriAyu1_18(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_18().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_18))})
        })
    }

    validarParrafoTriAyu1_19(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_19().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_19))})
        })
    }

    validarParrafoTriAyu1_20(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_20().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_20))})
        })
    }

    validarParrafoTriAyu1_21(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_21().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_21))})
        })
    }

    validarParrafoTriAyu1_22(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_22().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_22))})
        })
    }

    validarParrafoTriAyu1_23(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_23().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_23))})
        })
    }

    validarParrafoTriAyu1_24(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_24().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_24))})
        })
    }

    validarParrafoTriAyu1_25(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_25().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_25))})
        })
    }

    validarParrafoTriAyu1_26(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_26().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_26))})
        })
    }

    validarParrafoTriAyu1_27(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_27().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_27))})
        })
    }

    validarParrafoTriAyu1_28(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_28().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_28))})
        })
    }

    validarParrafoTriAyu1_29(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_29().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_29))})
        })
    }

    validarParrafoTriAyu1_30(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_30().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_30))})
        })
    }

    validarParrafoTriAyu1_31(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_31().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_31))})
        })
    }

    validarParrafoTriAyu1_32(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_32().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_32))})
        })
    }

    validarParrafoTriAyu1_33(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_33().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_33))})
        })
    }

    validarParrafoTriAyu1_34(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_34().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_34))})
        })
    }

    validarParrafoTriAyu1_35(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_35().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_35))})
        })
    }

    validarParrafoTriAyu1_36(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_36().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_36))})
        })
    }

    validarParrafoTriAyu1_37(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_37().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_37))})
        })
    }

    validarParrafoTriAyu1_38(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_38().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_38))})
        })
    }

    validarParrafoTriAyu1_39(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_39().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_39))})
        })
    }

    validarParrafoTriAyu1_40(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_40().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_40))})
        })
    }

    validarParrafoTriAyu1_41(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_41().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_41))})
        })
    }

    validarParrafoTriAyu1_42(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_42().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_42))})
        })
    }

    validarParrafoTriAyu1_43(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu1_43().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu1_43))})
        })
    }

    ///Noticia 2 LA TRIBU AYUDA 

    clickBotonVermasTriAyu2(){
        noticiaBiene.obtenerBotonVermasTriAyu2().invoke('removeAttr', 'target').click() 
    }

    ValidarTituloTriAyu2_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu2_1().should('have.text', data.TituloTriAyu2_1) 
        })
    }

    validarParrafoTriAyu2_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu2_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu2_1))})
        })
    }

    validarParrafoTriAyu2_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu2_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu2_2))})
        })
    }

    validarParrafoTriAyu2_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu2_3().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu2_3[index]))})
                }); 
        });
    }

    validarParrafoTriAyu2_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu2_4().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu2_4[index]))})
                }); 
        });
    }

    validarParrafoTriAyu2_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu2_5().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu2_5[index]))})
                }); 
        });
    }

    validarParrafoTriAyu2_6(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu2_6().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu2_6[index]))})
                }); 
        });
    }

    validarParrafoTriAyu2_7(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu2_7().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu2_7[index]))})
                }); 
        });
    }

    validarParrafoTriAyu2_8(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu2_8().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu2_8[index]))})
                }); 
        });
    }

    validarParrafoTriAyu2_9(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu2_9().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu2_9[index]))})
                }); 
        });
    }

    validarParrafoTriAyu2_10(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu2_10().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu2_10[index]))})
                }); 
        });
    }

    ValidarTituloTriAyu2_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu2_2().should('have.text', data.TituloTriAyu2_2) 
        })
    }

    validarParrafoTriAyu2_11(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu2_11().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu2_11))})
        })
    }

    validarParrafoTriAyu2_12(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu2_12().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu2_12))})
        })
    }

    validarParrafoTriAyu2_13(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu2_13().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu2_13))})
        })
    }

    ValidarTituloTriAyu2_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu2_3().should('have.text', data.TituloTriAyu2_3) 
        })
    }

    validarParrafoTriAyu2_14(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu2_14().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu2_14))})
        })
    }

    validarParrafoTriAyu2_15(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu2_15().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu2_15))})
        })
    }

    ValidarTituloTriAyu2_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu2_4().should('have.text', data.TituloTriAyu2_4) 
        })
    }

    validarImgAgradeci1  = () => {
        noticiaBiene.obtenerImgAgradeci1()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    validarParrafoTriAyu2_16(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu2_16().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu2_16))})
        })
    }

    ///Noticia 3

    clickBotonVermasTriAyu3(){
        noticiaBiene.obtenerBotonVermasTriAyu3().invoke('removeAttr', 'target').click() 
    }

    ValidarTituloTriAyu3_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu3_1().should('have.text', data.TituloTriAyu3_1) 
        })
    }

    validarParrafoTriAyu3_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu3_1().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu3_1[index]))})
                }); 
        });
    }


    ///Noticia 4

    clickBotonVermasTriAyu4(){
        noticiaBiene.obtenerBotonVermasTriAyu4().invoke('removeAttr', 'target').click() 
    }

    ValidarTituloTriAyu4_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu4_1().should('have.text', data.TituloTriAyu4_1) 
        })
    }

    validarParrafoTriAyu4_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu4_1().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu4_1[index]))})
                }); 
        });
    }

    validarTitulosTriAyu4_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerTitulosTriAyu4_2().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.TitulosTriAyu4_2[index]))})
                }); 
        });
    }

    ValidarTituloTriAyu4_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu4_3().should('have.text', data.TituloTriAyu4_3) 
        })
    }


    validarParrafoTriAyu4_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu4_2().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu4_2[index]))})
                }); 
        });
    }

    
    ///Noticia 5

    clickBotonVermasTriAyu5(){
        noticiaBiene.obtenerBotonVermasTriAyu5().invoke('removeAttr', 'target').click() 
    }

    ValidarTituloTriAyu5_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu5_1().should('have.text', data.TituloTriAyu5_1) 
        })
    }

    validarParrafoTriAyu5_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu5_1().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu5_1[index]))})
                }); 
        });
    }

    validarTituloTriAyu5_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerTituloTriAyu5_2().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.TituloTriAyu5_2[index]))})
                }); 
        });
    }


    ///Noticia 6

    clickBotonVermasTriAyu6(){
        noticiaBiene.obtenerBotonVermasTriAyu6().invoke('removeAttr', 'target').click() 
    }

    ValidarTituloTriAyu6_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu6_1().should('have.text', data.TituloTriAyu6_1) 
        })
    }

    validarParrafoTriAyu6_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu6_1().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu6_1[index]))})
                }); 
        });
    }

    ValidarTituloTriAyu6_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu6_2().should('have.text', data.TituloTriAyu6_2) 
        })
    }

    ValidarTituloTriAyu6_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu6_3().should('have.text', data.TituloTriAyu6_3) 
        })
    }

    ValidarTituloTriAyu6_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu6_4().should('have.text', data.TituloTriAyu6_4) 
        })
    }

    validarTitulosTriAyu6_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerTitulosTriAyu6_5().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.TituloTriAyu6_5[index]))})
                }); 
        });
    }

    ValidarTituloTriAyu6_6(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu6_6().should('have.text', data.TituloTriAyu6_6) 
        })
    }

    ValidarParrafoTriAyu6_2() {
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu6_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu6_2))})
        })
    }

    validarParrafoTriAyu6_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu6_3().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu6_3[index]))})
                }); 
        });
    }


    ValidarParrafoTriAyu6_4() {
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu6_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu6_4))})
        })
    }



    ///Noticia 7

    clickBotonVermasTriAyu7(){
        noticiaBiene.obtenerBotonVermasTriAyu7().invoke('removeAttr', 'target').click() 
    }

    ValidarTituloTriAyu7_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu7_1().should('have.text', data.TituloTriAyu7_1) 
        })
    }

    ValidarTituloTriAyu7_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu7_2().should('have.text', data.TituloTriAyu7_2) 
        })
    }
    
    validarParrafoTriAyu7_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu7_1().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu7_1[index]))})
                }); 
        });
    }

    validarTituloTriAyu7_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerTituloTriAyu7_3().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.TituloTriAyu7_3[index]))})
                }); 
        });
    }

    ValidarTituloTriAyu7_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu7_4().should('have.text', data.TituloTriAyu7_4) 
        })
    }



    ///Noticia 8

    clickBotonVermasTriAyu8(){
        noticiaBiene.obtenerBotonVermasTriAyu8().invoke('removeAttr', 'target').click() 
    }

    ValidarTituloTriAyu8_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu8_1().should('have.text', data.TituloTriAyu8_1) 
        })
    }

    validarParrafoTriAyu8_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu8_1().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu8_1[index]))})
                }); 
        });
    }


    ///Noticia 9

    clickBotonVermasTriAyu9(){
        noticiaBiene.obtenerBotonVermasTriAyu9()
        .invoke('removeAttr', 'target').click()
        .should('be.visible')

    }

    ValidarTituloTriAyu9_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloTriAyu9_1().should('have.text', data.TituloTriAyu9_1) 
        })
    }

    validarParrafoTriAyu9_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoTriAyu9_1().filter((i, el) => el.innerText.trim() !== '')
            .each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoTriAyu9_1[index]))})
                }); 
        });
    }


    ///NOTICIAS 
    ///NOTICIA 1
    clickBotonNotici(){
        noticiaBiene.obtenerBotonNotici()
        .invoke('removeAttr', 'target').click()

    }
    
    clickBotonVermasNotici1(){
        noticiaBiene.obtenerBotonVermasNotici1()
        .invoke('removeAttr', 'target')
        .click()

    }

    ValidarTituloNotici1_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici1_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici1_1))})
        })
    }

    ValidarTituloNotici1_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici1_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici1_2))})
        })
    }

    ValidarParrafoNotici1_1() {
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoNotici1_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici1_1))})
        })
    }

    ValidarTituloNotici1_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici1_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici1_3))})
        })
    }

    validarParrafoNotici1_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoNotici1_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici1_2))})
        }) 
        
    }

    validarParrafoNotici1_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoNotici1_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici1_3))})
        }) 
        
    }

    ValidarParrafoNotici1_4() {
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoNotici1_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici1_4))})
        })
    }
}
export default new noticiaBieneNewsActions();