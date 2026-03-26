import {Home} from '../elements/elements'; 
import { normalice } from  '../support/commands'

class homeNewsActions{
    clickBotonCerrar (){
        Home.obtenerBotonCerrar().click(); 
    }

    validarTextoBienvenidos () {
        cy.fixture("homeExam").then((data) =>{
            Home.obtenerTextoBienvenidos().invoke('text').then(text => 
            {expect(normalice(text)).to.contain(normalice(data.hometitulo1))}
            )
        })
    }

    validarParrafoBienvenidos() {
        cy.fixture("homeExam").then((data) =>{
            Home.obtenerParrafoBienvenidos().invoke('text').then(text => 
            {expect(normalice(text)).to.contain(normalice(data.homeparrafo1))}
            )
        })
    }

    validarTextoInteres() {
        cy.fixture("homeExam").then((data) => {
            Home.obtenerTextoInteres().invoke('text').then(text => 
            {expect(normalice(text)).to.contain(normalice(data.hometitulo2))}
            )
        })
    }

    validarTextoInvitamos() {
        cy.fixture("homeExam").then((data) =>{
            Home.obtenerTextoInvitamos().invoke('text').then(text => 
            {expect(normalice(text)).to.contain(normalice(data.hometitulo3))}
            )
        })
    }

    // acciones/blogActions.js
    validarVideosCompensar(){

     // Video 1
    Home.obtenerVideoCompensar1()
      .eq(0)
      .should('be.visible')
      .and('have.attr', 'src')
      .and('include', 'ctgV5pdRKeU'); // puedes cambiar por ID real

    // Video 2
    Home.obtenerVideoCompensar1()
      .eq(1)
      .should('be.visible')
      .and('have.attr', 'src')
      .and('include', 'fRuZurqxRuI'); // puedes cambiar por ID real
  }

    validarTextoDiversidad0() {
        cy.fixture("homeExam").then((data) =>{
            Home.obtenerTextoDiversidad0().invoke('text').then(text => 
            {expect(normalice(text)).to.contain(normalice(data.hometitulo4))}
            )
        })
    }

    validarParrafoDiversidad1() {
        cy.fixture("homeExam").then((data) =>{
            Home.obtenerParrafoDiversidad1().invoke('text').then(text => 
            {expect(normalice(text)).to.contain(normalice(data.homeparrafo2))}
            )
        })
    }

    validarTextoEventos() {
        cy.fixture("homeExam").then((data) =>{
            Home.obtenerTextoEventos().invoke('text').then(text => 
            {expect(normalice(text)).to.contain(normalice(data.hometitulo5))}
            )
        })
    }

    clickBotonCarrusel(){
        Home.obtenerBotonCarrusel().eq(1).click();
    }

}
export default new homeNewsActions(); 