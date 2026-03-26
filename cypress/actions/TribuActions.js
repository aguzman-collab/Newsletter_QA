import {Tribu} from '../elements/elements'; 
import { normalice } from  '../support/commands'
import url from '../url/url';

class tribuNewsActions{
    clickBotonCerrarTribu1(){
        Tribu.obtenerBotonCerrarTribu1().click(); 
    }

    clickBotonCerrarTribu2(){
        Tribu.obtenerBotonCerrarTribu2().click(); 
    }

    ValidarTextoTri(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoTri().should('have.text', data.tributitulo1) 
        })
    }

    validarParrafoTri() {
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerParrafoTri().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.tribuparrafo1))})
        }) 
    } 

    ///INGRESOS// 

    ValidarTextoIngresos(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoIngresos().should('have.text', data.tributitulo2) 
        })
    }

    ValidarTextoEnero(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoEnero().should('have.text', data.tributitulo3) 
        })
    }
    
    validarImgEne = () => {
        Tribu.obtenerImgEne()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTextoNoviem(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoNoviem().should('have.text', data.tributitulo4) 
        })
    }
    
    validarImgNoviem = () => {
        Tribu.obtenerImgNoviem()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTextoOctub(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoOctub().should('have.text', data.tributitulo5) 
        })
    }
    
    validarImgOctub = () => {
        Tribu.obtenerImgOctub()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTextoSepti(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoSepti().should('have.text', data.tributitulo6) 
        })
    }
    
    validarImgSepti = () => {
        Tribu.obtenerImgSepti()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTextoAgost(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoAgost().should('have.text', data.tributitulo7) 
        })
    }
    
    validarImgAgost = () => {
        Tribu.obtenerImgAgost()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTextoJulio(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoJulio().should('have.text', data.tributitulo8) 
        })
    }
    
    validarImgJulio = () => {
        Tribu.obtenerImgJulio()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTextoJunio(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoJunio().should('have.text', data.tributitulo9) 
        })
    }
    
    validarImgJunio = () => {
        Tribu.obtenerImgJunio()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTextoMayo(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoMayo().should('have.text', data.tributitulo10) 
        })
    }
    
    validarImgMayo = () => {
        Tribu.obtenerImgMayo()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ///RETIROS//
    clickBotonRetiros(){
        Tribu.obtenerBotonRetiros().click(); 
    }

    ValidarTextoRetiros(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoRetiros().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.tributitulo1Re))})
        })
    }

    ValidarTextoEneRe(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoEneRe().should('have.text', data.tributitulo2Re) 
        })
    }
    
    validarImgEneRe = () => {
        Tribu.obtenerImgEneRe()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTextoNoviRe(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoNoviRe().should('have.text', data.tributitulo3Re) 
        })
    }
    
    validarImgNoviRe = () => {
        Tribu.obtenerImgNoviRe()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTextoOctuRe(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoOctuRe().should('have.text', data.tributitulo4Re) 
        })
    }
    
    validarImgOctuRe = () => {
        Tribu.obtenerImgOctuRe()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTextoSeptiRe(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoSeptiRe().should('have.text', data.tributitulo5Re) 
        })
    }
    
    validarImgSeptiRe = () => {
        Tribu.obtenerImgSeptiRe()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTextoAgostRe(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoAgostRe().should('have.text', data.tributitulo6Re) 
        })
    }
    
    validarImgAgostRe = () => {
        Tribu.obtenerImgAgostRe()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTextoJulioRe(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoJulioRe().should('have.text', data.tributitulo7Re) 
        })
    }
    
    validarImgJulioRe = () => {
        Tribu.obtenerImgJulioRe()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTextoJunioRe(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoJunioRe().should('have.text', data.tributitulo8Re) 
        })
    }
    
    validarImgJunioRe = () => {
        Tribu.obtenerImgJunioRe()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTextoMayoRe(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoMayoRe().should('have.text', data.tributitulo9Re) 
        })
    }
    
    validarImgMayoRe = () => {
        Tribu.obtenerImgMayoRe()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTextoAbrilRe(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoAbrilRe().should('have.text', data.tributitulo10Re) 
        })
    }
    
    validarImgAbrilRe = () => {
        Tribu.obtenerImgAbrilRe()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTextoMarzoRe(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoMarzoRe().should('have.text', data.tributitulo11Re) 
        })
    }
    
    validarImgMarzoRe = () => {
        Tribu.obtenerImgMarzoRe()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTextoFebreroRe(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoFebreroRe().should('have.text', data.tributitulo12Re) 
        })
    }
    
    validarImgFebreroRe = () => {
        Tribu.obtenerImgFebreroRe()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };
    
    ValidarTextoEneroRe(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoEneroRe().should('have.text', data.tributitulo13Re) 
        })
    }
    
    validarImgEneroRe = () => {
        Tribu.obtenerImgEneroRe()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ///CONVOCATORIAS///
    clickBotonConvoca(){
        Tribu.obtenerBotonConvoca().click(); 
    }

    ValidarTextoConvoca(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoConvoca().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.tributitulo1Conv))})
        })
    }

    clickBotonFleCarru(){
        Tribu.obtenerBotonFleCarru().click(); 
    }

    clickBotonMasInfo(){
        Tribu.obtenerBotonMasInfo()
        cy.url('https://co.computrabajo.com/empresas/ofertas-de-trabajo-de-nutrabiotics-61D6DBABFF02EC54')
    }

    ValidarTextoInter(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoInter().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.tributitulo2Conv))})
        })
    }

    validarImgaInter  = () => {
        Tribu.obtenerImgInter ()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ValidarTextoTips(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoTips().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.tributitulo3Conv))})
        })
    }

    validarImgTips  = () => {
        Tribu.obtenerImgTips ()
        .should('exist')  
        .should('be.visible', { timeout: 10000 }) // Valida que la imagen sea visible
        .and('have.attr', 'src') // Valida que tenga el atributo 'src'
    };

    ///clickBotonSubir(){
       /// Tribu.obtenerBotonSubir()
        ///.click(); 
    //}

    ///SST///

    clickBotonSST(){
        Tribu.obtenerBotonSST().click()
    }

    ValidarTextoSST(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoSST().should('have.text', data.tributitulo1SST) 
        })
    }

    ValidarTextoSeguIndu(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoSeguIndu().should('have.text', data.tributitulo1SSTmini) 
        })
    }

    ValidarTextoDescu(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoDescu().should('have.text', data.tributitulo2SST) 
        })
    }

    ValidarParrafoDescu(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerParrafoDescu().should('have.text', data.tribuparrafo1SST) 
        })
    }

    clickBotonVermas1(){
        Tribu.obtenerBotonVermas1()
        cy.url('https://newsletter.nutrabiotics.com.co/descubre-a-los-nuevos-representantes-de-los-comites-sg-sst-2024-2026/')
    }
    
    ValidarTextoHigiOcupa(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoHigiOcupa().should('have.text', data.tributitulo2SSTmini) 
        })
    }

    ValidarTextoPierdas(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoPierdas().should('have.text', data.tributitulo3SST) 
        })
    }

    ValidarParrafoPierdas(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerParrafoPierdas().should('have.text', data.tribuparrafo2SST) 
        })
    }

    clickBotonVermas2(){
        Tribu.obtenerBotonVermas2()
        cy.url('https://newsletter.nutrabiotics.com.co/no-te-pierdas-las-pausas-activas-aprende-como-participar-y-reportarlas-facilmente/')
    }

    ValidarTextoHigiOcupa2(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoHigiOcupa2().should('have.text', data.tributitulo3SSTmini) 
        })
    }

    ValidarTextoComprom(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoComprom().should('have.text', data.tributitulo4SST) 
        })
    }

    ValidarParrafoComprom(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerParrafoComprom().should('have.text', data.tribuparrafo5SST) 
        })
    }

    clickBotonVermas3(){
        Tribu.obtenerBotonVermas3()
        cy.url('https://newsletter.nutrabiotics.com.co/compromiso-con-el-bienestar-premiacion-de-pausas-activas-del-primer-semestre/')
    }

    ValidarTextoSeguIndu2(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoSeguIndu2().should('have.text', data.tributitulo4SSTmini) 
        })
    }

    ValidarTextoPostu(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoPostu().should('have.text', data.tributitulo5SST) 
        })
    }

    ValidarParrafoPostu(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerParrafoPostu().should('have.text', data.tribuparrafo6SST) 
        })
    }

    clickBotonVermas4(){
        Tribu.obtenerBotonVermas4()
        cy.url('https://newsletter.nutrabiotics.com.co/postulate-a-los-comites-sg-sst-y-contribuye-a-un-ambiente-laboral-seguro-y-saludable/')
    }

    ValidarTextoHigiOcupa3(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoHigiOcupa3().should('have.text', data.tributitulo5SSTmini) 
        })
    }

    ValidarTextoPausas(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoPausas().should('have.text', data.tributitulo6SST) 
        })
    }

    ValidarParrafoPausas(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerParrafoPausas().should('have.text', data.tribuparrafo7SST) 
        })
    }

    clickBotonVermas5(){
        Tribu.obtenerBotonVermas5()
        cy.url('https://newsletter.nutrabiotics.com.co/descubre-como-nuestras-pausas-activas-estan-transformando-el-ambiente-laboral/')
    }

    ///NOVEDADES///

    clickBotonNoved(){
        Tribu.obtenerBotonNoved().click()
    }

    ValidarTextoNoved(){
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoNoved().should('have.text', data.tributitulo1NOV) 
        })
    }

    clickPagina1(){
        Tribu.obtenerPaginas()
        .eq(0)
        cy.url('https://newsletter.nutrabiotics.com.co/calamidades-domesticas/')
    }

    validarTextoPaginas1() {
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoPaginas().eq(0).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.tributitulo2NOV))})
        }) 
    }

    clickPagina2(){
        Tribu.obtenerPaginas()
        .eq(1)
        cy.url('https://newsletter.nutrabiotics.com.co/licencias-por-luto/')
    }

    validarTextoPaginas2() {
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoPaginas().eq(1).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.tributitulo3NOV))})
        }) 
    }

    clickPagina3(){
        Tribu.obtenerPaginas()
        .eq(2)
        cy.url('https://newsletter.nutrabiotics.com.co/licencias-de-paternidad/')
    }

    validarTextoPaginas3() {
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoPaginas().eq(2).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.tributitulo4NOV))})
        }) 
    }

    clickPagina4(){
        Tribu.obtenerPaginas()
        .eq(3)
        cy.url('https://newsletter.nutrabiotics.com.co/licencias-de-maternidad/')
    }

    validarTextoPaginas4() {
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoPaginas().eq(3).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.tributitulo5NOV))})
        }) 
    }

    clickPagina5(){
        Tribu.obtenerPaginas()
        .eq(4)
        cy.url('https://newsletter.nutrabiotics.com.co/accidentes-de-trabajo/')
    }

    validarTextoPaginas5() {
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoPaginas().eq(4).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.tributitulo6NOV))})
        }) 
    }

    clickPagina6(){
        Tribu.obtenerPaginas()
        .eq(5)
        cy.url('https://newsletter.nutrabiotics.com.co/vacaciones/')
    }

    validarTextoPaginas6() {
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoPaginas().eq(5).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.tributitulo7NOV))})
        }) 
    }

    clickPagina7(){
        Tribu.obtenerPaginas()
        .eq(6)
        cy.url('https://newsletter.nutrabiotics.com.co/permisos-laborales/')
    }

    validarTextoPaginas7() {
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoPaginas().eq(6).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.tributitulo8NOV))})
        }) 
    }

    clickPagina8(){
        Tribu.obtenerPaginas()
        .eq(7)
        cy.url('https://newsletter.nutrabiotics.com.co/incapacidad-de-origen-comun/')
    }

    validarTextoPaginas8() {
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoPaginas().eq(7).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.tributitulo9NOV))})
        }) 
    }

    clickPagina9(){
        Tribu.obtenerPaginas()
        .eq(8)
        cy.url('https://newsletter.nutrabiotics.com.co/citas-medicas-programadas/')
    }

    validarTextoPaginas9() {
        cy.fixture("tribuExam").then((data) => {
        Tribu.obtenerTextoPaginas().eq(8).invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.tributitulo10NOV))})
        }) 
    }
}
export default new tribuNewsActions(); 