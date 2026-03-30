import {Novedades} from '../elements/elements'; 
import { normalice } from  '../support/commands'

class novedadesNewsActions{

    ///Calamidades Domésticas
    ValidarTextoCalaDome(){
        cy.fixture("novedadesExam").then((data) => {
        Novedades.obtenerTextoCalaDome().should('have.text', data.Novedtitulo1) 
        })
    }
    
    clickBotonVolver1(){
        Novedades.obtenerBotonVolver1().invoke('removeAttr','target').click();
        cy.url('https://newsletter.nutrabiotics.com.co/tribu/#NOVED')
        cy.go('back')
    }


    ValidarParrafoCalaDome() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafoCalaDome()
            .filter((i, el) => el.innerText.trim().length > 0)
            .each(($el, index) => {
                cy.wrap($el).invoke('text').then(text => {
                    expect(normalice(text)).to.include(normalice(data.items1[index]))
                })
            })
        })
    }

    ValidarTextoPasos(){
        cy.fixture("novedadesExam").then((data) => {
        Novedades.obtenerTextoPasos().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Novedtitulo2))})
        })
    }

    validarParrafoPasos() {
        cy.fixture('novedadesExam').then((data) => {
            Novedades.obtenerParrafoPasos().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.items2[index]))}) 
            });
        });
    }

    clickBotonRegisCalami(){
        Novedades.obtenerBotonRegisCalami().invoke('removeAttr','target')
        cy.url('https://docs.google.com/forms/d/1te9TId0Wo8k3tYax2BsyeBKRuZsT2owTy8g2TtLJ2xY/edit')
    }

    ///LICENCIAS POR LUTO 

    ValidarTextoLicenLuto(){
        cy.fixture("novedadesExam").then((data) => {
        Novedades.obtenerTextoLicenLuto().should('have.text', data.Novedtitulo3) 
        })
    }

    clickBotonVolver2(){
        Novedades.obtenerBotonVolver2().invoke('removeAttr','target').click();
        cy.url('https://newsletter.nutrabiotics.com.co/tribu/#NOVED')
        cy.go('back')
    }

    validarParrafoLicenLuto() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafoLicenLuto().eq(8).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.Novedparrafo1))})
        })
    }

    ValidarTituloPasosLicenLuto(){
        cy.fixture("novedadesExam").then((data) => {
        Novedades.obtenerTextoPasosLicenLuto().should('have.text', data.Novedtitulo4) 
        })
    }

    validarParrafoPasosLicenLuto1() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafoLicenLuto().eq(9).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.Novedparrafo2))})
        })
    }

    validarParrafoPasosLicenLuto2() {
        cy.fixture('novedadesExam').then((data) => {
            Novedades.obtenerParrafoPasosLicenLuto().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.items3[index]))}) 
            });
        });
    }

    validarParrafoPasosLicenLuto3() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafoLicenLuto().eq(10).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.Novedparrafo3))})
        })
    }

    clickBotonLicenLuto(){
        Novedades.obtenerBotonLicenLuto().invoke('removeAttr','target')
        cy.url('https://docs.google.com/forms/d/e/1FAIpQLSf3-H1gYIpqI4hCxNfUl8JKb0HqGqBJ9ywx4memye9U3WVgMg/formResponse')
    }

    
    ///LICENCIAS DE PATERNIDAD

    ValidarTextoLicenPater(){
        cy.fixture("novedadesExam").then((data) => {
        Novedades.obtenerTextoLicenPater().should('have.text', data.NovedtituloPATER) 
        })
    }

    clickBotonVolver3(){
        Novedades.obtenerBotonVolver3().invoke('removeAttr','target')
        cy.url('https://newsletter.nutrabiotics.com.co/tribu/#NOVED')
    }

    validarTextoPregunta1() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerTextoPreguntas().eq(0).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.Novedpregunta1PATER))})
        })
    }

    validarParrafosLicenPater1() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosLicenPater().eq(9).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafo1PATER))})
        })
    }

    validaritems1LicenLuto() {
        cy.fixture('novedadesExam').then((data) => {
            Novedades.obteneritemsLicenPater().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.itemsPater1[index]))}) 
            });
        });
    }

    validarTextoPregunta2() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerTextoPreguntas().eq(1).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.Novedpregunta2PATER))})
        })
    }
    
    validarParrafosLicenPater2() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosLicenPater().eq(10).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafo2PATER))})
        })
    }

    validarTextoPregunta3() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerTextoPreguntas().eq(2).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.Novedpregunta3PATER))})
        })
    }

    validarParrafosLicenPater3() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosLicenPater().eq(11).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafo3PATER))})
        })
    }


    validarParrafosLicenPater4() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosLicenPater().eq(12).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafo4PATER))})
        })
    }

    validarParrafosLicenPater5() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosLicenPater().eq(13).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafo5PATER))})
        })
    }

    validarParrafosLicenPater6() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosLicenPater().eq(14).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafo6PATER))})
        })
    }

    clickBotonLicenPater(){
        Novedades.obtenerBotonLicenPater().invoke('removeAttr','target')
        cy.url('https://nutrabiotics.atlassian.net/servicedesk/customer/portal/33/group/171')
    }

    ///LICENCIAS DE MATERNIDAD

    ValidarTextoLicenMater(){
        cy.fixture("novedadesExam").then((data) => {
        Novedades.obtenerTextoLicenMater().should('have.text', data.NovedtituloMATER) 
        })
    }

    clickBotonVolver4(){
        Novedades.obtenerBotonVolver4().invoke('removeAttr','target')
        cy.url('https://newsletter.nutrabiotics.com.co/tribu/#NOVED')
    }

    validarTextoPregunta1MATER() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerTextoPreguntasMater().eq(0).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.Novedpregunta1MATER))})
        })
    }

    validarParrafosLicenMATER1() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosLicenMATER().eq(9).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafo1MATER))})
        })
    }

    validaritemsLicenMATER() {
        cy.fixture('novedadesExam').then((data) => {
            Novedades.obteneritemsLicenMATER().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.itemsMATER1[index]))}) 
            });
        });
    }

    validarTextoPregunta2MATER() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerTextoPreguntasMater().eq(1).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.Novedpregunta2MATER))})
        })
    }

    validarParrafosLicenMATER2() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosLicenMATER().eq(11).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafo2MATER))})
        })
    }

    validarTextoPregunta3MATER() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerTextoPreguntasMater().eq(2).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.Novedpregunta3MATER))})
        })
    }

    validarParrafosLicenMATER3() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosLicenMATER().eq(12).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafo4MATER))})
        })
    }

    validarParrafosLicenMATER4() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosLicenMATER().eq(13).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafo5MATER))})
        })
    }

    validarParrafosLicenMATER5() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosLicenMATER().eq(14).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafo6MATER))})
        })
    }

    validarParrafosLicenMATER6() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosLicenMATER().eq(14).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafo6MATER))})
        })
    }

    clickBotonLicenMATER(){
        Novedades.obtenerBotonLicenMATER().invoke('removeAttr','target')
        cy.url('https://docs.google.com/forms/d/e/1FAIpQLSf3-H1gYIpqI4hCxNfUl8JKb0HqGqBJ9ywx4memye9U3WVgMg/formResponse')
    }

    ///Accidentes de Trabajo

    ValidarTextoAccidenTraba(){
        cy.fixture("novedadesExam").then((data) => {
        Novedades.obtenerTextoAccidenTraba().should('have.text', data.NovedtituloAcciTrabaj) 
        })
    }

    clickBotonVolver5(){
        Novedades.obtenerBotonVolver5().invoke('removeAttr','target')
        cy.url('https://newsletter.nutrabiotics.com.co/tribu/#NOVED')
    }

    validarParrafosAccidenTraba_1() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosAccidenTraba().eq(9).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoAcciTrabaj1))})
        })
    }

    validarPreguntaAccidenTraba() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerTextoPreguntaAccidenTraba().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedpreguntaAcciTrabaj))})
        })
    }

    validarParrafosAccidenTraba_2() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosAccidenTraba().eq(10).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoAcciTrabaj2))})
        })
    }

    validaritemsAccidenTraba1() {
        cy.fixture('novedadesExam').then((data) => {
            Novedades.obteneritemsAccidenTraba().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.itemsAcciTrabaj1[index]))}) 
            });
        });
    }

    validarParrafosAccidenTraba_3() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosAccidenTraba().eq(11).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoAcciTrabaj3))})
        })
    }

    validarParrafosAccidenTraba_4() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosAccidenTraba().eq(12).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoAcciTrabaj4))})
        })
    }

    validarParrafosAccidenTraba_5() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosAccidenTraba().eq(13).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoAcciTrabaj5))})
        })
    }

    validarParrafosAccidenTraba_6() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosAccidenTraba().eq(14).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoAcciTrabaj6))})
        })
    }

    validarParrafosAccidenTraba_7() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosAccidenTraba().eq(15).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoAcciTrabaj7))})
        })
    }

    validarParrafosAccidenTraba_8() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafoAdvertAccidenTraba().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoAcciTrabaj8))})
        })
    }


    ///Vacaciones 

    ValidarTextoVacaciones(){
        cy.fixture("novedadesExam").then((data) => {
        Novedades.obtenerTextoVacaciones().should('have.text', data.NovedtituloVacacio) 
        })
    }

    clickBotonVolver6(){
        Novedades.obtenerBotonVolver6().invoke('removeAttr','target')
        cy.url('https://newsletter.nutrabiotics.com.co/tribu/#NOVED')
    }

    validarParrafosVacaciones_1() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosVacaciones().eq(8).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoVacacio_1))})
        })
    }

    validarTextoMiniVacaciones() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerTextoMiniVacaciones().eq(0).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedtituloVacacio_2))})
        })
    }

    validarParrafosVacaciones_2() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosVacaciones().eq(9).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoVacacio_2))})
        })
    }

    validarTextoMiniVacaciones2() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerTextoMiniVacaciones().eq(1).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedtituloVacacio_3))})
        })
    }

    validarParrafosVacaciones_3() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosVacaciones().eq(10).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoVacacio_3))})
        })
    }

    validarParrafosVacaciones_4() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosVacaciones().eq(11).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoVacacio_4))})
        })
    }

    validarPreguntaVacaciones() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerPreguntaVacaciones().eq(0).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedpreguntaVacacio))})
        })
    }

    validarItemsVacaciones_1() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosVacaciones().eq(12).invoke('text').then(text =>
                {expect(normalice(text)).to.include(normalice(data.itemsVacacio_2[0]))})
        })
    }

    validarItemsVacaciones_2() {
        cy.fixture('novedadesExam').then((data) => {
            Novedades.obteneritemsVacaciones().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.include(normalice(data.itemsVacacio_3[index]))}) 
            });
        });
    }

    validarParrafosVacaciones_5(){
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosVacaciones().eq(13).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoVacacio_5))})
        })
    }


    validarParrafosVacaciones_6() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosVacaciones().eq(14).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoVacacio_6))})
        })
    }

    clickBotonBotonVacaciones(){
        Novedades.obtenerBotonVacaciones().invoke('removeAttr','target')
        cy.url('https://newsletter.nutrabiotics.com.co/wp-content/uploads/2023/02/Plantilla-Vacaciones.docx')
    }

    


    ///Permisos Laborales 

    ValidarTextoPermiLabora(){
        cy.fixture("novedadesExam").then((data) => {
        Novedades.obtenerTextoPermiLabora().should('have.text', data.NovedtituloPermiLabora) 
        })
    }

    clickBotonVolver7(){
        Novedades.obtenerBotonVolver7().invoke('removeAttr','target')
        cy.url('https://newsletter.nutrabiotics.com.co/tribu/#NOVED')
    }
    
    validarParrafosPermiLabora_1() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosPermiLabora().eq(8).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoPermiLabora_1))})
        })
    }

    validarPreguntaPermiLabora() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerPreguntaPermiLabora().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedpreguntaPermiLabora))})
        })
    }

    validarParrafosPermiLabora_2() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosPermiLabora().eq(9).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoPermiLabora_2))})
        })
    }
    
    validarParrafosPermiLabora_3() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosPermiLabora().eq(10).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoPermiLabora_3))})
        })
    }

    validaritemsPermiLabora_1() {
        cy.fixture('novedadesExam').then((data) => {
            Novedades.obteneritemsPermiLabora().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.include(normalice(data.itemsPermiLabora_1[index]))}) 
            });
        });
    }


    ///Incapacidad de Origen Común

    ValidarTituloIncaOrigComu(){
        cy.fixture("novedadesExam").then((data) => {
        Novedades.obtenerTextoIncaOrigComu().should('have.text', data.NovedtituloIncaOrigComu) 
        })
    }

    clickBotonVolver8(){
        Novedades.obtenerBotonVolver8().invoke('removeAttr','target')
        cy.url('https://newsletter.nutrabiotics.com.co/tribu/#NOVED')
    }

    validarParrafosIncaOrigComu_1() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosIncaOrigComu().eq(8).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoIncaOrigComu_1))})
        })
    }

    validarParrafosIncaOrigComu_2() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosIncaOrigComu().eq(9).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoIncaOrigComu_2))})
        })
    }

    validarPreguntaIncaOrigComu() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerPreguntaIncaOrigComu().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedpreguntaIncaOrigComu))})
        })
    }

    validarParrafosIncaOrigComu_3() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosIncaOrigComu().eq(10).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoIncaOrigComu_3))})
        })
    }

    validaritemsIncaOrigComu_1() {
        cy.fixture('novedadesExam').then((data) => {
            Novedades.obteneritemsIncaOrigComu().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.include(normalice(data.itemsIncaOrigComu_1[index]))}) 
            });
        });
    }

    validarParrafosIncaOrigComu_4() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosIncaOrigComu().eq(11).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoIncaOrigComu_4))})
        })
    }

    validarParrafosIncaOrigComu_5() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosIncaOrigComu().eq(12).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoIncaOrigComu_5))})
        })
    }

    validarParrafosIncaOrigComu_6() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosIncaOrigComu().eq(13).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoIncaOrigComu_6))})
        })
    }

    clickBotonIncaOrigComu(){
        Novedades.obtenerBotonIncaOrigComu().invoke('removeAttr','target')
        cy.url('https://docs.google.com/forms/d/e/1FAIpQLSf3-H1gYIpqI4hCxNfUl8JKb0HqGqBJ9ywx4memye9U3WVgMg/viewform')
    }


    ///Citas Médicas Programadas

    ValidarTituloCitaMediProgr(){
        cy.fixture("novedadesExam").then((data) => {
        Novedades.obtenerTextoCitaMediProgra().should('have.text', data.NovedtituloCitaMediProgra) 
        })
    }

    clickBotonVolver9(){
        Novedades.obtenerBotonVolver9().invoke('removeAttr','target')
        cy.url('https://newsletter.nutrabiotics.com.co/tribu/#NOVED')
    }

    validarParrafosCitaMediProgra_1() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosCitaMediProgra().eq(8).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoCitaMediProgra_1))})
        })
    }

    validarPreguntaCitaMediProgra() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerPreguntaCitaMediProgra().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedpreguntaCitaMediProgra))})
        })
    }

    validarParrafosCitaMediProgra_2() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosCitaMediProgra().eq(9).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoCitaMediProgra_2))})
        })
    }

    validarParrafosCitaMediProgra_3() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosCitaMediProgra().eq(10).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoCitaMediProgra_3))})
        })
    }

    validarParrafosCitaMediProgra_4() {
        cy.fixture("novedadesExam").then((data) => {
            Novedades.obtenerParrafosCitaMediProgra().eq(11).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.NovedParrafoCitaMediProgra_4))})
        })
    }
}
export default new novedadesNewsActions();