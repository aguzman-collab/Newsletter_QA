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
    ValidarTextoMini(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTextoMini().should('have.text', data.TituloMiniEntusi) 
        })
    }

    ValidarTituloCumbre(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloCumbre().should('have.text', data.TituloCumbre) 
        })
    }

    ValidarParrafoCumbre(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoCumbre().should('have.text', data.ParrafoCumbre) 
        })
    }

    clickbotonobtenerVermas1 (){
        Bienestar.obtenerVermas1()
        cy.url('https://newsletter.nutrabiotics.com.co/mas-alla-de-la-cumbre-una-invitacion-a-desafiar-tus-limites/')
    }


    ValidarTextoMini2(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTextoMini2().should('have.text', data.TituloMiniEntusi) 
        })
    }

    ValidarTituloPedaleando(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloPedaleando().should('have.text', data.TituloPedaleando) 
        })
    }

    ValidarParrafoPedaleando(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoPedaleando().should('have.text', data.ParrafoPedaleando) 
        })
    }

    clickbotonobtenerVermas2 (){
        Bienestar.obtenerVermas2()
        cy.url('https://newsletter.nutrabiotics.com.co/pedaleando-juntos-primer-viaje-en-bici-hacia-la-oficina/')
    }


    ValidarTextoMini3(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTextoMini3().should('have.text', data.TituloMiniEtica) 
        })
    }

    ValidarTituloBastidas(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloBastidas().should('have.text', data.TituloBastidas) 
        })
    }

    ValidarParrafoBastidas(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoBastidas().should('have.text', data.ParrafoBastidas) 
        })
    }

    clickbotonobtenerVermas3 (){
        Bienestar.obtenerVermas3()
        cy.url('https://newsletter.nutrabiotics.com.co/celebramos-con-alegria-el-baby-shower-de-katherine-bastidas/')
    }


    ValidarTextoMini4(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTextoMini4().should('have.text', data.TituloMiniEtica4) 
        })
    }

    ValidarTituloGarcia(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloGarcía().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloGarcia))})
        })
    }

    ValidarParrafoGarcia(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoGarcía().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoGarcia))})
        })
    }

    clickbotonobtenerVermas4 (){
        Bienestar.obtenerVermas4()
        cy.url('https://newsletter.nutrabiotics.com.co/celebramos-una-nueva-vida-en-la-familia-de-eventos/')
    }


    ValidarTextoMini5(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTextoMini5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloMiniEtica))})
        })
    }

    ValidarTituloAcuña(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloAcuña().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloAcuña))})
        })
    }

    ValidarParrafoAcuña(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoAcuña().should('have.text', data.ParrafoAcuña) 
        })
    }

    clickbotonobtenerVermas5 (){
        Bienestar.obtenerVermas5()
        cy.url('https://newsletter.nutrabiotics.com.co/celebracion-de-baby-shower-de-alejandro-acuna/')
    }

    ValidarTextoMini6(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTextoMini6().should('have.text', data.TituloMiniEntusi) 
        })
    }

    ValidarTituloCopa(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloCopa().should('have.text', data.TituloCopa) 
        })
    }

    ValidarParrafoCopa(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoCopa().should('have.text', data.ParrafoCopa) 
        })
    }

    clickbotonobtenerVermas6 (){
        Bienestar.obtenerVermas6()
        cy.url('https://newsletter.nutrabiotics.com.co/exito-en-las-actividades-de-apoyo-a-la-seleccion-colombia-en-la-copa-america-2024/')
    }

    ValidarTextoMini7(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTextoMini7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloMiniEntusi))})
        })
    }

    ValidarTituloLokochon(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloLokochon().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloLokochon))})
        })
    }

    ValidarParrafoLokochon(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoLokochon().should('have.text', data.ParrafoLokochon) 
        })
    }

    clickbotonobtenerVermas7 (){
        Bienestar.obtenerVermas7()
        cy.url('https://newsletter.nutrabiotics.com.co/viernes-lokoochon/')
    }


    ValidarTextoMini8(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTextoMini8().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloMiniCumpli))})
        })
    }

    ValidarTituloJuntos(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloJuntos().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloJuntos))})
        })
    }

    ValidarParrafoJuntos(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoJuntos().should('have.text', data.ParrafoJuntos) 
        })
    }

    clickbotonobtenerVermas8 (){
        Bienestar.obtenerVermas8()
        cy.url('https://newsletter.nutrabiotics.com.co/pronto-estaremos-todos-juntos/')
    }

    ///La tribu Ayuda

    clickBotonTribuAyu(){
        Bienestar.obtenerBotonTribuAyu()
        .click()
    }

    ValidarTituloPrinTribu(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloPrinTribu().eq(1).should('have.text', data.TituloPrinTribu) 
        })
    }

    ValidarTituloMiniEmpreu(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniEmpre1().should('have.text', data.TituloMiniEmpre) 
        })
    }

    ValidarTituloPrin1(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloPrin1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloPrin1))})
        cy.url('https://newsletter.nutrabiotics.com.co/novedades/')
        })
    }

    ValidarParrafo1(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafo1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafo1))})
        })
    }

    clickBotonVermas1(){
        Bienestar.obtenerVermas1()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/nutra-emprende-catalogo-de-emprendimientos-de-nuestra-tribu/"href="https://newsletter.nutrabiotics.com.co/nutra-emprende-catalogo-de-emprendimientos-de-nuestra-tribu/')
    }

    ValidarTituloMiniVolu1(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniVolu1().should('have.text', data.TituloMiniVolu) 
        })
    }
    
    ValidarTituloPrin2(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloPrin2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloPrin2))})
        cy.url('https://newsletter.nutrabiotics.com.co/novedades/')
        })
    }

    ValidarParrafo2(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafo2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafo2))})
        })
    }

    clickBotonVermas2(){
        Bienestar.obtenerVermas2()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/tribu-to-2024-un-ano-de-servicio-con-impacto-y-corazon/')
    }

    ValidarTituloMiniVolu2(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniVolu2().should('have.text', data.TituloMiniVolu) 
        })
    }
    
    ValidarTituloPrin3(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloPrin3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloPrin3))})
        cy.url('https://newsletter.nutrabiotics.com.co/novedades/')
        })
    }

    ValidarParrafo3(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafo3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafo3))})
        })
    }

    clickBotonVermas3(){
        Bienestar.obtenerVermas3()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/tribu-to-2024-un-ano-de-servicio-con-impacto-y-corazon/')
    }

    ValidarTituloMiniVolu3(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniVolu3().should('have.text', data.TituloMiniVolu) 
        })
    }
    
    ValidarTituloPrin4(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloPrin4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloPrin4))})
        cy.url('https://newsletter.nutrabiotics.com.co/novedades/')
        })
    }

    ValidarParrafo4(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafo4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafo4))})
        })
    }

    clickBotonVermas4(){
        Bienestar.obtenerVermas4()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/promoviendo-habitos-saludables-en-la-calera-una-jornada-de-conciencia-y-nutricion/')
    }

    ValidarTituloMiniVolu4(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniVolu4().should('have.text', data.TituloMiniVolu) 
        })
    }
    
    ValidarTituloPrin5(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloPrin5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloPrin5))})
        cy.url('https://newsletter.nutrabiotics.com.co/novedades/')
        })
    }

    ValidarParrafo5(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafo5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafo5))})
        })
    }

    clickBotonVermas5(){
        Bienestar.obtenerVermas5()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/un-respiro-de-calidez-para-los-habitantes-de-calle-la-solidaridad-se-sirve-caliente/')
    }

    ValidarTituloMiniCamp(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniCamp().should('have.text', data.TituloMiniCamp) 
        })
    }
    
    ValidarTituloPrin6(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloPrin6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloPrin6))})
        cy.url('https://newsletter.nutrabiotics.com.co/novedades/')
        })
    }

    ValidarParrafo6(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafo6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafo6))})
        })
    }

    clickBotonVermas6(){
        Bienestar.obtenerVermas6()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/recicla-y-transforma-vidas-peluditas/')
    }

    ValidarTituloMiniCamp1(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniCamp1().should('have.text', data.TituloMiniCamp) 
        })
    }
    
    ValidarTituloPrin7(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloPrin7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloPrin7))})
        cy.url('https://newsletter.nutrabiotics.com.co/novedades/')
        })
    }

    ValidarParrafo7(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafo7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafo7))})
        })
    }

    clickBotonVermas7(){
        Bienestar.obtenerVermas7()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/la-tribu-altruista-acciones-del-1/')
    }

    ValidarTituloMiniVolu5(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniVolu5().should('have.text', data.TituloMiniVolu) 
        })
    }
    
    ValidarTituloPrin8(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloPrin8().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloPrin8))})
        cy.url('https://newsletter.nutrabiotics.com.co/novedades/')
        })
    }

    ValidarParrafo8(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafo8().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.Parrafo8[index]))})
                });
        });
    }

    clickBotonVermas8(){
        Bienestar.obtenerVermas8()
        .invoke('removeAttr', 'target')
        cy.url('http://newsletter.nutrabiotics.com.co/impulsa-suenos/')
    }

    
    ValidarTituloMiniVolu6(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniVolu6().should('have.text', data.TituloMiniVolu) 
        })
    }
    
    ValidarTituloPrin9(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloPrin9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloPrin9))})
        cy.url('https://newsletter.nutrabiotics.com.co/novedades/')
        })
    }

    ValidarParrafo9(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafo9().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.Parrafo9[index]))})
                    });
        })
    }

    clickBotonVermas9(){
        Bienestar.obtenerVermas9()
        .invoke('removeAttr', 'target')
        cy.url('http://newsletter.nutrabiotics.com.co/brindando-amor-y-apoyo/')
    }


    ///Noticias

    clickBotonNoti(){
        Bienestar.obtenerBotonNoti()
        .click()
    }

    ValidarTituloPrinNoti(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloPrinNoti().should('have.text', data.TituloPrinNoti) 
        })
    }

    ValidarTituloMiniCumpl1(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniCumpl1().should('have.text', data.TituloMiniCumpl) 
        })
    }
    
    ValidarTituloNoti1(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNoti1))})
        })
    }

    ValidarParrafoNoti1(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti1))})
        })
    }

    clickBotonVermasNoti1(){
        Bienestar.obtenerVermasNoti1()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/3ra-jornada-de-voluntariado-tribu-to-que-abraza/')
    }

    ValidarTituloMiniCumpl2(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniCumpl2().should('have.text', data.TituloMiniCumpl) 
        })
    }
    
    ValidarTituloNoti2(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti2().should('have.text', data.TituloNoti2) 
        })
    }

    ValidarParrafoNoti2(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti2))})
        })
    }

    clickBotonVermasNoti2(){
        Bienestar.obtenerVermasNoti2()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/guardianes-del-bienestar-2025/')
    }

    ValidarTituloMiniCumpl3(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniCumpl3().should('have.text', data.TituloMiniCumpl) 
        })
    }
    
    ValidarTituloNoti3(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti3().should('have.text', data.TituloNoti3) 
        })
    }

    ValidarParrafoNoti3(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti3))})
        })
    }

    clickBotonVermasNoti3(){
        Bienestar.obtenerVermasNoti3()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/asi-va-nuestra-encuesta-lit-segunda-aplicacion-ser-un-lugar-inspirador-para-trabajar/')
    }

    ValidarTituloMiniCumpl4(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniCumpl4().should('have.text', data.TituloMiniCumpl) 
        })
    }
    
    ValidarTituloNoti4(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti4().should('have.text', data.TituloNoti4) 
        })
    }

    ValidarParrafoNoti4(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti4().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti4))})
        })
    }

    clickBotonVermasNoti4(){
        Bienestar.obtenerVermasNoti4()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/segunda-participacion-de-nutrabiotics-en-la-carrera-de-las-rosas/')
    }

    ValidarTituloMiniCumpl5(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniCumpl5().should('have.text', data.TituloMiniCumpl) 
        })
    }
    
    ValidarTituloNoti5(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti5().should('have.text', data.TituloNoti5) 
        })
    }

    ValidarParrafoNoti5(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti5().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti5))})
        })
    }

    clickBotonVermasNoti5(){
        Bienestar.obtenerVermasNoti5()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/nutra-emprende-el-talento-emprendedor-de-la-tribu-brillo/')
    }

    ValidarTituloMiniCumpl6(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniCumpl6().should('have.text', data.TituloMiniCumpl) 
        })
    }
    
    ValidarTituloNoti6(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNoti6))})
        })
    }

    ValidarParrafoNoti6(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti6))})
        })
    }

    clickBotonVermasNoti6(){
        Bienestar.obtenerVermasNoti6()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/llego-el-momento-de-construir-juntos-un-mejor-lugar-para-trabajar-conoce-los-resultados-de-nuestra-encuesta-de-un-lugar-inspirador-para-trabajar/')
    }

    ValidarTituloMiniCumpl7(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniCumpl7().should('have.text', data.TituloMiniCumpl) 
        })
    }
    
    ValidarTituloNoti7(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNoti7))})
        })
    }

    ValidarParrafoNoti7(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti7))})
        })
    }

    clickBotonVermasNoti7(){
        Bienestar.obtenerVermasNoti7()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/nutrabiotics-presente-en-la-feria-nacional-de-empleo-del-sena-para-mujeres/')
    }

    ValidarTituloMiniCumpl8(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniCumpl8().should('have.text', data.TituloMiniCumpl) 
        })
    }
    
    ValidarTituloNoti8(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti8().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNoti8))})
        })
    }

    ValidarParrafoNoti8(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti8().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti8))})
        })
    }

    clickBotonVermasNoti8(){
        Bienestar.obtenerVermasNoti8()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/domina-el-arte-de-la-negociacion-con-nuestro-modulo-5-inteligencia-en-accion/')
    }

    ValidarTituloMiniVan9(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniVan9().should('have.text', data.TituloMiniVan) 
        })
    }
    
    ValidarTituloNoti9(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNoti9))})
        })
    }

    ValidarParrafoNoti9(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti9))})
        })
    }

    clickBotonVermasNoti9(){
        Bienestar.obtenerVermasNoti9()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/celebramos-a-los-ganadores-de-junio-en-la-gestion-de-proyectos/')
    }

    ValidarTituloMiniCumpl10(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniCumpl10().should('have.text', data.TituloMiniCumpl) 
        })
    }
    
    ValidarTituloNoti10(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti10().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNoti10))})
        })
    }

    ValidarParrafoNoti10(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti10().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti10))})
        })
    }

    clickBotonVermasNoti10(){
        Bienestar.obtenerVermasNoti10()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/se-continua-avanzando-en-el-proceso-de-ensenanza-para-los-lideres-de-nutrabiotics-pedidos-4-0/')
    }

    ValidarTituloMiniCumpl11(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniCumpl11().should('have.text', data.TituloMiniCumpl) 
        })
    }
    
    ValidarTituloNoti11(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti11().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNoti11))})
        })
    }

    ValidarParrafoNoti11(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti11().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti11))})
        })
    }

    clickBotonVermasNoti11(){
        Bienestar.obtenerVermasNoti11()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/avances-del-programa-liderazgo-responsable-con-moveminds/')
    }

    ///ValidarTituloMiniCumpl12(){
        ///cy.fixture("bienestarExam").then((data) => {
        ///Bienestar.obtenerTituloMiniCumpl12().should('have.text', data.TituloMiniCumpl) 
        ///})
    ///}
    
    ValidarTituloNoti12(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti12().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNoti12))})
        })
    }

    ValidarParrafoNoti12(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti12().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti12))})
        })
    }

    clickBotonVermasNoti12(){
        Bienestar.obtenerVermasNoti12()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/evaluacion-de-desempeno-el-camino-al-exito-profesional/')
    }

    ValidarTituloMiniAltr13(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniAltr13().should('have.text', data.TituloMiniAltr) 
        })
    }
    
    ValidarTituloNoti13(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti13().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNoti13))})
        })
    }

    ValidarParrafoNoti13(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti13().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti13))})
        })
    }

    clickBotonVermasNoti13(){
        Bienestar.obtenerVermasNoti13()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/charlas-con-don-mario-una-nueva-iniciativa-para-fortalecer-la-cultura-corporativa-en-nutrabiotics/')
    }

    ValidarTituloMiniAltr14(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniAltr14().should('have.text', data.TituloMiniAltr) 
        })
    }
    
    ValidarTituloNoti14(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti14().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNoti14))})
        })
    }

    ValidarParrafoNoti14(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti14().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti14))})
        })
    }

    clickBotonVermasNoti14(){
        Bienestar.obtenerVermasNoti14()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/nutra-tutores-la-nueva-forma-de-reforzar-nuestro-conocimiento-y-desarrollo-continuo/')
    }

    ValidarTituloMiniEntu15(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniEntu15().should('have.text', data.TituloMiniEntu) 
        })
    }
    
    ValidarTituloNoti15(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti15().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNoti15))})
        })
    }

    ValidarParrafoNoti15(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti15().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti15))})
        })
    }

    clickBotonVermasNoti15(){
        Bienestar.obtenerVermasNoti15()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/unidos-en-la-lucha-contra-el-cancer-de-mama-nutrabiotics-se-une-a-la-carrera-de-las-rosas/')
    }

    ValidarTituloMiniCumpl16(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniCumpl16().should('have.text', data.TituloMiniCumpl) 
        })
    }
    
    ValidarTituloNoti16(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti16().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNoti16))})
        })
    }

    ValidarParrafoNoti16(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti16().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti16))})
        })
    }

    clickBotonVermasNoti16(){
        Bienestar.obtenerVermasNoti16()
        .invoke('removeAttr', 'target')
        cy.url('http://newsletter.nutrabiotics.com.co/vii-convencion-internacional-de-lideres/')
    }

    ValidarTituloMiniCumpl17(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniCumpl17().should('have.text', data.TituloMiniCumpl) 
        })
    }
    
    ValidarTituloNoti17(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti17().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNoti17))})
        })
    }

    ValidarParrafoNoti17(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti17().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti17))})
        })
    }

    clickBotonVermasNoti17(){
        Bienestar.obtenerVermasNoti17()
        .invoke('removeAttr', 'target')
        cy.url('http://newsletter.nutrabiotics.com.co/categorizacion-equipo-auditor/')
    }

    ValidarTituloMiniAltr18(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniAltr18().should('have.text', data.TituloMiniAltr) 
        })
    }
    
    ValidarTituloNoti18(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti18().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNoti18))})
        })
    }

    ValidarParrafoNoti18(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti18().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti18))})
        })
    }

    clickBotonVermasNoti18(){
        Bienestar.obtenerVermasNoti18()
        .invoke('removeAttr', 'target')
        cy.url('http://newsletter.nutrabiotics.com.co/el-arbol-de-la-estrategia/')
    }

    ValidarTituloMiniEspi19(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniEspi19().should('have.text', data.TituloMiniEspi) 
        })
    }
    
    ValidarTituloNoti19(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti19().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNoti19))})
        })
    }

    ValidarParrafoNoti19(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti19().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti19))})
        })
    }

    clickBotonVermasNoti19(){
        Bienestar.obtenerVermasNoti19()
        .invoke('removeAttr', 'target')
        cy.url('http://newsletter.nutrabiotics.com.co/las-esferas-de-javier/')
    }

    ValidarTituloMiniCumpl20(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniCumpl20().should('have.text', data.TituloMiniCumpl) 
        })
    }
    
    ValidarTituloNoti20(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloNoti20().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloNoti20))})
        })
    }

    ValidarParrafoNoti20(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoNoti20().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNoti20))})
        })
    }

    clickBotonVermasNoti20(){
        Bienestar.obtenerVermasNoti20()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/uso-de-marca/')
    }


    ///Fechas Especiales

    clickBotonFechaEspe(){
        Bienestar.obtenerBotonFechaEspe().eq(0)
        .click()
    }

    ValidarTituloPrinFechaEspe(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloPrinFechaEspe().should('have.text', data.TituloPrinFechaEspe) 
        })
    }

    ValidarTituloMiniEntuFecha1(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniEntuFecha1().should('have.text', data.TituloMiniFechaEntu) 
        })
    }
    
    ValidarTituloFecha1(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloFecha1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFecha1))})
        })
    }

    ValidarParrafoFecha1(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoFecha1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFecha1))})
        })
    }

    clickBotonVermasFecha1(){
        Bienestar.obtenerVermasFecha1()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/fiesta-fin-de-ano-2025-mex/')
    }

    
    ValidarTituloMiniEntuFecha2(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniEntuFecha2().should('have.text', data.TituloMiniFechaEntu) 
        })
    }
    
    ValidarTituloFecha2(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloFecha2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFecha2))})
        })
    }

    ValidarParrafoFecha2(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoFecha2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFecha2))})
        })
    }

    clickBotonVermasFecha2(){
        Bienestar.obtenerVermasFecha2()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/fiesta-fin-de-ano-2025/')
    }

    ValidarTituloMiniEntuFecha3(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloMiniEntuFecha3().should('have.text', data.TituloMiniFechaEntu) 
        })
    }
    
    ValidarTituloFecha3(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloFecha3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloFecha3))})
        })
    }

    ValidarParrafoFecha3(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerParrafoFecha3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoFecha3))})
        })
    }

    clickBotonVermasFecha3(){
        Bienestar.obtenerVermasFecha3()
        .invoke('removeAttr', 'target')
        cy.url('https://newsletter.nutrabiotics.com.co/fiesta-nutra-kids-2025/')
    }

    ///Herramientas

    clickBotonHerra(){
        Bienestar.obtenerBotonHerra().eq(1)
        .click()
    }

    ValidarTituloPrinHerra(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloPrinHerra().eq(2).should('have.text', data.TituloPrinHerra) 
        })
    }


    ///Reconocimientos

    clickBotonRecono(){
        Bienestar.obtenerBotonRecono().eq(2)
        .click()
    }

    ValidarTituloPrinRecono(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloPrinRecono().eq(3).should('have.text', data.TituloPrinRecono) 
        })
    }

    ValidarTituloPrinCumplea(){
        cy.fixture("bienestarExam").then((data) => {
        Bienestar.obtenerTituloPrinCumplea().should('have.text', data.TituloPrinCumplea) 
        })
    }

    validarImgDici1 = () => {
        Bienestar.obtenerImgDici1()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    validarImgDici2 = () => {
        Bienestar.obtenerImgDici2()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    validarImgDici3 = () => {
        Bienestar.obtenerImgDici3()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };
}
export default new bienestarNewsActions();