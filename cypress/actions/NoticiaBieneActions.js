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

    ///NOTICIA 2
    
    clickBotonVermasNotici2(){
        noticiaBiene.obtenerBotonVermasNotici2()
        .invoke('removeAttr', 'target')
        .click()

    }

    ValidarTituloNotici2_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici2_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici2_1))})
        })
    }

    ValidarTituloNotici2_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici2_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici2_2))})
        })
    }

    ValidarParrafoNotici2_1() {
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoNotici2_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici2_1))})
        })
    }

    ValidarParrafoNotici2_2() {
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoNotici2_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici2_2))})
        })
    }

    ValidarTituloNotici2_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici2_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici2_3))})
        })
    }

    ValidarParrafoNotici2_3() {
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoNotici2_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici2_3))})
        })
    }

    ValidarTituloNotici2_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici2_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici2_4))})
        })
    }

    ValidarParrafoNotici2_4() {
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoNotici2_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici2_4))})
        })
    }

    validarParrafoNotici2_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoNotici2_5().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici2_5[index]))})
                }); 
        });
    }

    ValidarTituloNotici2_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici2_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici2_5))})
        })
    }

    ValidarParrafoNotici2_6() {
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoNotici2_6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici2_6))})
        })
    }

    ValidarParrafoNotici2_7() {
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoNotici2_7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici2_7))})
        })
    }

    ValidarParrafoNotici2_8() {
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoNotici2_8().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici2_8))})
        })
    }

    ValidarParrafoNotici2_9() {
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoNotici2_9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici2_9))})
        })
    }

    ValidarTituloNotici2_6(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici2_6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici2_6))})
        })
    }

    ValidarParrafoNotici2_10() {
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoNotici2_10().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici2_10))})
        })
    }

    ValidarTituloNotici2_7(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici2_7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici2_7))})
        })
    }

    ValidarParrafoNotici2_11() {
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoNotici2_11().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici2_11))})
        })
    }

    ValidarTituloNotici2_8(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici2_8().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici2_8))})
        })
    }

    ValidarParrafoNotici2_12() {
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoNotici2_12().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici2_12))})
        })
    }

    ValidarTituloNotici2_9(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici2_9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici2_9))})
        })
    }

    ValidarParrafoNotici2_13() {
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoNotici2_13().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici2_13))})
        })
    }

    ValidarParrafoNotici2_14() {
        cy.fixture("noticiaBieneExam").then((data) => {
            noticiaBiene.obtenerParrafoNotici2_14().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici2_14))})
        })
    }


    ///Noticias 3
    clickBotonVermasNotici3(){
        noticiaBiene.obtenerBotonVermasNotici3()
        .invoke('removeAttr', 'target')
        .click()

    }

    ValidarTituloNotici3_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_1))})
        })
    }

    ValidarTituloNotici3_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_2))})
        })
    }

    ValidarParrafoNotici3_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici3_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_1))})
        })
    }

    ValidarTituloNotici3_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_3))})
        })
    }

    ValidarParrafoNotici3_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici3_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_2))})
        })
    }

    ValidarTituloNotici3_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_4))})
        })
    }

    ValidarParrafoNotici3_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici3_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_3))})
        })
    }

    ValidarTituloNotici3_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_5))})
        })
    }

    ValidarTituloNotici3_6(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_6))})
        })
    }

    ValidarParrafoNotici3_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici3_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_4))})
        })
    }

    ValidarTituloNotici3_7(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_7))})
        })
    }

    ValidarParrafoNotici3_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici3_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_5))})
        })
    }

    ValidarTituloNotici3_8(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_8().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_8))})
        })
    }

    ValidarParrafoNotici3_6(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici3_6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_6))})
        })
    }

    ValidarTituloNotici3_9(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_9))})
        })
    }

    ValidarParrafoNotici3_7(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici3_7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_7))})
        })
    }

    ValidarParrafoNotici3_8(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici3_8().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_8))})
        })
    }

    ValidarTituloNotici3_10(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_10().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_10))})
        })
    }

    ValidarParrafoNotici3_9(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici3_9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_9))})
        })
    }

    ValidarTituloNotici3_11(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_11().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_11))})
        })
    }

    ValidarParrafoNotici3_10(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici3_10().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_10))})
        })
    }

    ValidarTituloNotici3_12(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_12().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_12))})
        })
    }

    ValidarParrafoNotici3_11(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici3_11().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_11))})
        })
    }
    
    ValidarTituloNotici3_13(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_13().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_13))})
        })
    }

    ValidarTituloNotici3_14(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_14().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_14))})
        })
    }

    ValidarTituloNotici3_15(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_15().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_15))})
        })
    }

    ValidarParrafoNotici3_12() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici3_12().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_12[index]))}) 
            });
        });
    }

    ValidarParrafoNotici3_13(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici3_13().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_13))})
        })
    }
    
    ValidarTituloNotici3_16(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_16().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_16))})
        })
    }

    ValidarTituloNotici3_17(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_17().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_17))})
        })
    }

    ValidarTituloNotici3_18(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_18().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_18))})
        })
    }

    ValidarParrafoNotici3_14(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici3_14().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_14))})
        })
    }

    ValidarParrafoNotici3_15() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici3_15().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_15[index]))}) 
            });
        });
    }

    ValidarParrafoNotici3_16(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici3_16().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_16))})
        })
    }

    ValidarTituloNotici3_19(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_19().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_19))})
        })
    }

    ValidarTituloNotici3_20(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_20().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_20))})
        })
    }

    ValidarTituloNotici3_21(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_21().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_21))})
        })
    }

    ValidarParrafoNotici3_17(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici3_17().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_17))})
        })
    }

    ValidarParrafoNotici3_18() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici3_18().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_18[index]))}) 
            });
        });
    }

    ValidarParrafoNotici3_19(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici3_19().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_19))})
        })
    }

    ValidarTituloNotici3_22(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_22().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_22))})
        })
    }

    ValidarParrafoNotici3_20(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici3_20().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_20))})
        })
    }

    ValidarTituloNotici3_23(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici3_23().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici3_23))})
        })
    }

    ValidarParrafoNotici3_21() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici3_21().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_21[index]))}) 
            });
        });
    }

    ValidarParrafoNotici3_22(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici3_22().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici3_22))})
        })
    }

    ///Noticias 4
    clickBotonVermasNotici4(){
        noticiaBiene.obtenerBotonVermasNotici4()
        .invoke('removeAttr', 'target')
        .click()

    }

    ValidarTituloNotici4_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici4_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici4_1))})
        })
    }

    ValidarTituloNotici4_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici4_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici4_2))})
        })
    }

    ValidarParrafoNotici4_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici4_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici4_1))})
        })
    }

    ValidarParrafoNotici4_2() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici4_2().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici4_2[index]))}) 
            });
        });
    }

    ValidarParrafoNotici4_3() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici4_3().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici4_3[index]))}) 
            });
        });
    }

    ValidarTituloNotici4_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici4_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici4_3))})
        })
    }


    ///Noticias 5
    clickBotonVermasNotici5(){
        noticiaBiene.obtenerBotonVermasNotici5()
        .invoke('removeAttr', 'target')
        .click()

    }

    ValidarTituloNotici5_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici5_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici5_1))})
        })
    }

    ValidarTituloNotici5_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici5_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici5_2))})
        })
    }

    ValidarParrafoNotici5_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici5_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici5_1))})
        })
    }

    ValidarParrafoNotici5_2() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici5_2().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici5_2[index]))}) 
            });
        });
    }

    ValidarParrafoNotici5_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici5_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici5_3))})
        })
    }

    ValidarParrafoNotici5_4() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici5_4().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici5_4[index]))}) 
            });
        });
    }

    ValidarParrafoNotici5_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici5_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici5_5))})
        })
    }

    ///Noticias 6
    clickBotonVermasNotici6(){
        noticiaBiene.obtenerBotonVermasNotici6()
        .invoke('removeAttr', 'target')
        .click()

    }

    ValidarTituloNotici6_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici6_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici6_1))})
        })
    }

    ValidarParrafoNotici6_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici6_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici6_2))})
        })
    }

    ValidarParrafoNotici6_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici6_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici6_3))})
        })
    }

    ValidarParrafoNotici6_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici6_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici6_4))})
        })
    }

    ValidarParrafoNotici6_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici6_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici6_5))})
        })
    }

    ValidarTituloNotici6_2() {
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici6_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici6_2))})
        })
    }

    ValidarParrafoNotici6_6() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici6_6().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici6_6[index]))}) 
            });
        });
    }

    ValidarTituloNotici6_3() {
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici6_3().should('have.text', data.TituloNotici6_3)
        })
    }

    ValidarParrafoNotici6_7() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici6_7().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici6_7[index]))}) 
            });
        });
    }

    ValidarParrafoNotici6_8() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici6_8().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici6_8[index]))}) 
            });
        });
    }

    ValidarParrafoNotici6_9(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici6_9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici6_9))})
        })
    }

    ValidarTituloNotici6_4() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerTituloNotici6_4().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.TituloNotici6_4[index]))}) 
            });
        });
    }

    ValidarParrafoNotici6_10() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici6_10().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici6_10[index]))}) 
            });
        });
    }

    ///Noticias 7
    clickBotonVermasNotici7(){
        noticiaBiene.obtenerBotonVermasNotici7()
        .invoke('removeAttr', 'target')
        .click()

    }

    ValidarTituloNotici7_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici7_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici7_1))})
        })
    }

    ValidarParrafoNotici7_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici7_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici7_1))})
        })
    }

    ValidarParrafoNotici7_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici7_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici7_2))})
        })
    }

    ValidarParrafoNotici7_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici7_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici7_3))})
        })
    }

    ValidarParrafoNotici7_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici7_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici7_4))})
        })
    }


    ///Noticias 8
    clickBotonVermasNotici8(){
        noticiaBiene.obtenerBotonVermasNotici8()
        .invoke('removeAttr', 'target')
        .click()

    }

    ValidarTituloNotici8_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici8_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici8_1))})
        })
    }

    ValidarParrafoNotici8_1() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici8_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici8_1[index]))}) 
            });
        });
    }

    ValidarParrafoNotici8_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici8_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici8_2))})
        })
    }

    ValidarParrafoNotici8_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici8_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici8_3))})
        })
    }

    ValidarParrafoNotici8_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici8_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici8_4))})
        })
    }

    ValidarParrafoNotici8_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici8_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici8_5))})
        })
    }

    ///Noticias 9
    clickBotonVermasNotici9(){
        noticiaBiene.obtenerBotonVermasNotici9()
        .invoke('removeAttr', 'target')
        .click()

    }

    ValidarTituloNotici9_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici9_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici9_1))})
        })
    }

    ValidarParrafoNotici9_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici9_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici9_1))})
        })
    }

    ValidarTituloNotici9_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici9_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici9_2))})
        })
    }

    ValidarTituloNotici9_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici9_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici9_3))})
        })
    }

    ValidarParrafoNotici9_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici9_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici9_2))})
        })
    }

    ValidarTituloNotici9_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici9_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici9_4))})
        })
    }

    ValidarParrafoNotici9_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici9_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici9_3))})
        })
    }

    ValidarParrafoNotici9_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici9_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici9_4))})
        })
    }

    ValidarParrafoNotici9_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici9_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici9_5))})
        })
    }

    ValidarParrafoNotici9_6(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici9_6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici9_6))})
        })
    }

    ValidarParrafoNotici9_7(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici9_7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici9_7))})
        })
    }

    ///Noticias 9
    clickBotonVermasNotici10(){
        noticiaBiene.obtenerBotonVermasNotici10()
        .invoke('removeAttr', 'target')
        .click()

    }

    ValidarTituloNotici10_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici10_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici10_1))})
        })
    }

    ValidarParrafoNotici10_1() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici10_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici10_1[index]))}) 
            });
        });
    }

    ValidarParrafoNotici10_2() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici10_2().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici10_2[index]))}) 
            });
        });
    }

    ValidarTituloNotici10_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici10_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici10_2))})
        })
    }


    ///Noticias 11
    clickBotonVermasNotici11(){
        noticiaBiene.obtenerBotonVermasNotici11()
        .invoke('removeAttr', 'target')
        .click()

    }

    ValidarTituloNotici11_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici11_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici11_1))})
        })
    }

    ValidarParrafoNotici11_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici11_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici11_1))})
        })
    }

    ValidarTituloNotici11_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici11_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici11_2))})
        })
    }

    ValidarParrafoNotici11_2() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici11_2().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici11_2[index]))}) 
            });
        });
    }

    ValidarParrafoNotici11_3() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici11_3().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici11_3[index]))}) 
            });
        });
    }

    ValidarParrafoNotici11_4() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici11_4().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici11_4[index]))}) 
            });
        });
    }

    ValidarTituloNotici11_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici11_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici11_3))})
        })
    }

    ValidarParrafoNotici11_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici11_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici11_5))})
        })
    }

    clickBotonAquiNotici11(){
        noticiaBiene.obtenerBotonAquiNotici11()
        cy.url('https://emailfrese.my.canva.site/liderazgo-responsable-nutrabiotics-fnl')
    }

    ///Noticias 12
    clickBotonVermasNotici12(){
        noticiaBiene.obtenerBotonVermasNotici12()
        .invoke('removeAttr', 'target')
        .click()

    }

    ValidarTituloNotici12_1() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerTituloNotici12_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.TituloNotici12_1[index]))}) 
            });
        });
    }

    ValidarParrafoNotici12_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici12_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici12_1))})
        })
    }

    ValidarTituloNotici12_2() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerTituloNotici12_2().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.TituloNotici12_2[index]))}) 
            });
        });
    }

    ValidarParrafoNotici12_2() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici12_2().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici12_2[index]))}) 
            });
        });
    }

    ValidarParrafoNotici12_3() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici12_3().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici12_3[index]))}) 
            });
        });
    }

    ValidarTituloNotici12_3() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerTituloNotici12_3().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.TituloNotici12_3[index]))}) 
            });
        });
    }

    ValidarParrafoNotici12_4() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici12_4().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici12_4[index]))}) 
            }); 
        });
    }

    ValidarParrafoNotici12_5() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici12_5().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici12_5[index]))}) 
            }); 
        });
    }

    ValidarParrafoNotici12_6(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici12_6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici12_6))})
        })
    }

    ValidarParrafoNotici12_7(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici12_7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici12_7))})
        })
    }

    ValidarParrafoNotici12_8(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici12_8().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici12_8))})
        })
    }

    ValidarTituloNotici12_4() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerTituloNotici12_4().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.TituloNotici12_4[index]))}) 
            }); 
        });
    }

    ValidarParrafoNotici12_9() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici12_9().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici12_9[index]))}) 
            }); 
        });
    }

    ValidarTituloNotici12_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici12_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici12_5))})
        })
    }

    ValidarTituloNotici12_6(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici12_6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici12_6))})
        })
    }

    ValidarTituloNotici12_7(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici12_7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici12_7))})
        })
    }

    ValidarTituloNotici12_8(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici12_8().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici12_8))})
        })
    }

    ValidarTituloNotici12_9(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici12_9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici12_9))})
        })
    }

    ValidarTituloNotici12_10(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici12_10().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici12_10))})
        })
    }

    ValidarTituloNotici12_11(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici12_11().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici12_11))})
        })
    }

    ValidarTituloNotici12_12(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici12_12().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici12_12))})
        })
    }

    ValidarTituloNotici12_13(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici12_13().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici12_13))})
        })
    }

    ValidarTituloNotici12_14(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici12_14().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici12_14))})
        })
    }

    ValidarTituloNotici12_15(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici12_15().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici12_15))})
        })
    }

    ValidarParrafoNotici12_10(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici12_10().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici12_10))})
        })
    }

    ValidarParrafoNotici12_11(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici12_11().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici12_11))})
        })
    }

    ValidarParrafoNotici12_12(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici12_12().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici12_12))})
        })
    }

    ValidarParrafoNotici12_13(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici12_13().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici12_13))})
        })
    }

    ValidarTituloNotici12_16(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici12_16().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici12_16))})
        })
    }

    ValidarParrafoNotici12_14() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici12_14().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici12_14[index]))}) 
            }); 
        });
    }

    ValidarTituloNotici12_17(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici12_17().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici12_17))})
        })
    }


    ///Noticias 13
    clickBotonVermasNotici13(){
        noticiaBiene.obtenerBotonVermasNotici13()
        .invoke('removeAttr', 'target')
        .click()

    }

    ValidarTituloNotici13_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici13_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici13_1))})
        })
    }


    ValidarParrafoNotici13_1() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici13_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici13_1[index]))}) 
            });
        });
    }

    ValidarTituloNotici13_2() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerTituloNotici13_2().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.TituloNotici13_2[index]))}) 
            });
        });
    }

    ValidarTituloNotici13_3() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerTituloNotici13_3().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.TituloNotici13_3[index]))}) 
            });
        });
    }

    ValidarParrafoNotici13_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici13_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici13_2))})
        })
    }

    ValidarParrafoNotici13_3() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici13_3().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici13_3[index]))}) 
            });
        });
    }

    ValidarTituloNotici13_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici13_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici13_4))})
        })
    }


    ///Noticias 14
    clickBotonVermasNotici14(){
        noticiaBiene.obtenerBotonVermasNotici14()
        .invoke('removeAttr', 'target')
        .click()
    }

    ValidarTituloNotici14_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici14_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici14_1))})
        })
    }

    validarimg_14_1  = () => {
        noticiaBiene.obtenerimg_14_1()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    validarimg_14_2  = () => {
        noticiaBiene.obtenerimg_14_2()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    validarimg_14_3  = () => {
        noticiaBiene.obtenerimg_14_3()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    validarimg_14_4  = () => {
        noticiaBiene.obtenerimg_14_4()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    validarimg_14_5  = () => {
        noticiaBiene.obtenerimg_14_5()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };


    ///Noticias 15
    clickBotonVermasNotici15(){
        noticiaBiene.obtenerBotonVermasNotici15()
        .invoke('removeAttr', 'target')
        .click()
    }

    ValidarTituloNotici15_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici15_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici15_1))})
        })
    }

    ValidarParrafoNotici15_1() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici15_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici15_1[index]))}) 
            });
        });
    }

    ///Noticias 16
    clickBotonVermasNotici16(){
        noticiaBiene.obtenerBotonVermasNotici16()
        .invoke('removeAttr', 'target')
        .click()
    }

    ValidarTituloNotici16_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici16_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici16_1))})
        })
    }

    ValidarTituloNotici16_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici16_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici16_2))})
        })
    }

    ValidarParrafoNotici16_1() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici16_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici16_1[index]))}) 
            });
        });
    }

    ValidarParrafoNotici16_2() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici16_2().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici16_2[index]))}) 
            });
        });
    }

    ///Noticias 17
    clickBotonVermasNotici17(){
        noticiaBiene.obtenerBotonVermasNotici17()
        .invoke('removeAttr', 'target')
        .click()
    }

    ValidarTituloNotici17_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici17_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici17_1))})
        })
    }

    ValidarParrafoNotici17_1() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici17_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici17_1[index]))}) 
            });
        });
    }

    ValidarParrafoNotici17_2() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici17_2().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici17_2[index]))}) 
            });
        });
    }

    ValidarTituloNotici17_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici17_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici17_2))})
        })
    }

    validarimg_17_1  = () => {
        noticiaBiene.obtenerimg_17_1()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTituloNotici17_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici17_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici17_3))})
        })
    }

    validarimg_17_2  = () => {
        noticiaBiene.obtenerimg_17_2()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };


    ///Noticias 18
    clickBotonVermasNotici18(){
        noticiaBiene.obtenerBotonVermasNotici18()
        .invoke('removeAttr', 'target')
        .click()
    }

    ValidarTituloNotici18_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici18_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici18_1))})
        })
    }

    ValidarTituloNotici18_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici18_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici18_2))})
        })
    }

    ValidarParrafoNotici18_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici18_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici18_1))})
        })
    }

    ValidarTituloNotici18_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici18_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici18_3))})
        })
    }

    ValidarParrafoNotici18_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoNotici18_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici18_2))})
        })
    }

    ValidarParrafoNotici18_3() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici18_3().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici18_3[index]))}) 
            });
        });
    }

    ValidarTituloNotici18_4() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerTituloNotici18_4().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.TituloNotici18_4[index]))}) 
            });
        });
    }


    ValidarParrafoNotici18_4() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici18_4().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici18_4[index]))}) 
            });
        });
    }

    ///Noticias 19
    clickBotonVermasNotici19(){
        noticiaBiene.obtenerBotonVermasNotici19()
        .invoke('removeAttr', 'target')
        .click()
    }

    ValidarTituloNotici19_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici19_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici19_1))})
        })
    }

    ValidarParrafoNotici19_1() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici19_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici19_1[index]))}) 
            });
        });
    }

    ValidarParrafoNotici19_2() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici19_2().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici19_2[index]))}) 
            });
        });
    }

    ValidarTituloNotici19_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici19_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici19_2))})
        })
    }

    ///Noticias 20
    clickBotonVermasNotici20(){
        noticiaBiene.obtenerBotonVermasNotici20()
        .invoke('removeAttr', 'target')
        .click()
    }

    ValidarTituloNotici20_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloNotici20_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNotici20_1))})
        })
    }

    ValidarParrafoNotici20_1() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoNotici20_1().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoNotici20_1[index]))}) 
            });
        });
    }



    ///Fechas Especiales
    ///NOTICIA 1
    clickBotonFechEspe(){
        noticiaBiene.obtenerBotonFechEspe()
        .eq(0)
        .invoke('removeAttr', 'target')
        .click()
    }
    
    clickBotonVermasFechEspe1(){
        noticiaBiene.obtenerBotonVermasFechEspe1()
        .click()
        .invoke('removeAttr', 'target')

    }

    ValidarTituloFechEspe1_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe1_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe1_1))})
        })
    }

    ValidarTituloFechEspe1_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe1_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe1_2))})
        })
    }

    ValidarParrafoFechEspe1_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe1_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe1_1))})
        })
    }

    ValidarTituloFechEspe1_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe1_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe1_3))})
        })
    }

    ValidarParrafoFechEspe1_2() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoFechEspe1_2().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe1_2[index]))}) 
            });
        });
    }

    ValidarTituloFechEspe1_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe1_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe1_4))})
        })
    }

    ValidarTituloFechEspe1_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe1_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe1_5))})
        })
    }

    ValidarTituloFechEspe1_6(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe1_6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe1_6))})
        })
    }

    ValidarTituloFechEspe1_7(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe1_7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe1_7))})
        })
    }

    ValidarTituloFechEspe1_8(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe1_8().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe1_8))})
        })
    }

    ValidarTituloFechEspe1_9(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe1_9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe1_9))})
        })
    }

    ValidarParrafoFechEspe1_3() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoFechEspe1_3().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe1_3[index]))}) 
            });
        });
    }

    ValidarTituloFechEspe1_10(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe1_10().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe1_10))})
        })
    }

    ValidarParrafoFechEspe1_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe1_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe1_4))})
        })
    }

    ValidarParrafoFechEspe1_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe1_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe1_5))})
        })
    }

    ValidarParrafoFechEspe1_6(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe1_6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe1_6))})
        })
    }

    ValidarParrafoFechEspe1_7(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe1_7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe1_7))})
        })
    }

    ValidarTituloFechEspe1_11(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe1_11().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe1_11))})
        })
    }

    ValidarParrafoFechEspe1_8() {
        cy.fixture('noticiaBieneExam').then((data) => {
            noticiaBiene.obtenerParrafoFechEspe1_8().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe1_8[index]))}) 
            });
        });
    }

    ValidarParrafoFechEspe1_9(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe1_9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe1_9))})
        })
    }


    //Noticia 2
    clickBotonVermasFechEspe2(){
        noticiaBiene.obtenerBotonVermasFechEspe2()
        .click()
        .invoke('removeAttr', 'target')

    }

    ValidarTituloFechEspe2_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe2_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe2_1))})
        })
    }

    ValidarParrafoFechEspe2_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe2_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe2_1))})
        })
    }

    ValidarParrafoFechEspe2_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe2_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe2_2))})
        })
    }

    ValidarParrafoFechEspe2_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe2_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe2_3))})
        })
    }

    ValidarParrafoFechEspe2_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe2_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe2_4))})
        })
    }

    ValidarTituloFechEspe2_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe2_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe2_2))})
        })
    }

    ValidarTituloFechEspe2_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe2_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe2_3))})
        })
    }

    ValidarParrafoFechEspe2_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe2_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe2_5))})
        })
    }

    ValidarTituloFechEspe2_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe2_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe2_4))})
        })
    }

    ValidarParrafoFechEspe2_6(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe2_6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe2_6))})
        })
    }

    ValidarTituloFechEspe2_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe2_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe2_5))})
        })
    }

    ValidarParrafoFechEspe2_7(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe2_7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe2_7))})
        })
    }

    ValidarParrafoFechEspe2_8(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe2_8().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe2_8))})
        })
    }

    ValidarTituloFechEspe2_6(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe2_6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe2_6))})
        })
    }

    ValidarTituloFechEspe2_7(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe2_7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe2_7))})
        })
    }

    ValidarParrafoFechEspe2_9(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe2_9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe2_9))})
        })
    }

    ValidarTituloFechEspe2_8(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe2_8().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe2_8))})
        })
    }

    ValidarParrafoFechEspe2_10(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe2_10().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe2_10))})
        })
    }

    ValidarParrafoFechEspe2_11(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe2_11().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe2_11))})
        })
    }

    ValidarTituloFechEspe2_9(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe2_9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe2_9))})
        })
    }

    ValidarTituloFechEspe2_10(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe2_10().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe2_10))})
        })
    }

    ValidarParrafoFechEspe2_12(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe2_12().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe2_12))})
        })
    }

    ValidarTituloFechEspe2_11(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe2_11().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe2_11))})
        })
    }

    ValidarParrafoFechEspe2_13(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe2_13().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe2_13))})
        })
    }

    ValidarTituloFechEspe2_12(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe2_12().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe2_12))})
        })
    }

    ValidarParrafoFechEspe2_14(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe2_14().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe2_14))})
        })
    }

    ValidarTituloFechEspe2_13(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe2_13().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe2_13))})
        })
    }

    ValidarParrafoFechEspe2_15(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe2_15().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe2_15))})
        })
    }

    ValidarTituloFechEspe2_14(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe2_14().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe2_14))})
        })
    }

    ValidarParrafoFechEspe2_16(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe2_16().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe2_16))})
        })
    }

    clickBotonFotosFechEspe2(){
        noticiaBiene.obtenerBotonFotosFechEspe2()
        cy.url('https://drive.google.com/drive/folders/1Gf3uHP61xai8bnRmwh77dOPh5mCjk4A0?usp=drive_link')
    }

    ValidarParrafoFechEspe2_17(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe2_17().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe2_17))})
        })
    }



    

    //Noticia 3
    clickBotonVermasFechEspe3(){
        noticiaBiene.obtenerBotonVermasFechEspe3()
        .click()
        .invoke('removeAttr', 'target')

    }

    ValidarTituloFechEspe3_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_1))})
        })
    }

    ValidarTituloFechEspe3_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_2))})
        })
    }

    ValidarParrafoFechEspe3_1(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe3_1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe3_1))})
        })
    }

    ValidarTituloFechEspe3_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_3))})
        })
    }

    ValidarTituloFechEspe3_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_4))})
        })
    }

    ValidarParrafoFechEspe3_2(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe3_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe3_2))})
        })
    }

    ValidarTituloFechEspe3_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_5))})
        })
    }

    ValidarTituloFechEspe3_6(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_6))})
        })
    }

    ValidarParrafoFechEspe3_3(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe3_3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe3_3))})
        })
    }

    ValidarTituloFechEspe3_7(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_7))})
        })
    }

    ValidarParrafoFechEspe3_4(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe3_4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe3_4))})
        })
    }

    ValidarTituloFechEspe3_8(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_8().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_8))})
        })
    }

    ValidarTituloFechEspe3_9(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_9))})
        })
    }

    ValidarParrafoFechEspe3_5(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe3_5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe3_5))})
        })
    }

    ValidarTituloFechEspe3_10(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_10().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_10))})
        })
    }

    ValidarParrafoFechEspe3_6(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe3_6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe3_6))})
        })
    }

    ValidarTituloFechEspe3_11(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_11().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_11))})
        })
    }

    ValidarParrafoFechEspe3_7(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe3_7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe3_7))})
        })
    }

    ValidarTituloFechEspe3_12(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_12().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_12))})
        })
    }

    ValidarParrafoFechEspe3_8(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe3_8().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe3_8))})
        })
    }

    ValidarTituloFechEspe3_13(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_13().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_13))})
        })
    }

    ValidarParrafoFechEspe3_9(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe3_9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe3_9))})
        })
    }

    ValidarTituloFechEspe3_14(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_14().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_14))})
        })
    }

    ValidarParrafoFechEspe3_10(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe3_10().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe3_10))})
        })
    }

    ValidarParrafoFechEspe3_11(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe3_11().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe3_11))})
        })
    }

    ValidarTituloFechEspe3_15(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_15().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_15))})
        })
    }

    ValidarTituloFechEspe3_16(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_16().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_16))})
        })
    }

    ValidarParrafoFechEspe3_12(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe3_12().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe3_12))})
        })
    }

    ValidarTituloFechEspe3_17(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_17().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_17))})
        })
    }

    ValidarParrafoFechEspe3_13(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe3_13().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe3_13))})
        })
    }

    ValidarTituloFechEspe3_18(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_18().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_18))})
        })
    }

    ValidarParrafoFechEspe3_14(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe3_14().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe3_14))})
        })
    }

    ValidarTituloFechEspe3_19(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerTituloFechEspe3_19().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFechEspe3_19))})
        })
    }

    ValidarParrafoFechEspe3_15(){
        cy.fixture("noticiaBieneExam").then((data) => {
        noticiaBiene.obtenerParrafoFechEspe3_15().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFechEspe3_15))})
        })
    }


}
export default new noticiaBieneNewsActions();