import noticiasSSTNewsActions from "../../actions/NoticiasSSTActions"
import tribuNewsActions from "../../actions/TribuActions"
import url from "../../url/url";

export function noticiasSSTSuites(){

    context('Automatizacion - NoticiasSST', () => {

        it("Section - Noticia1", () =>{
        cy.viewport(1200,800)
        url.urltribu()
        tribuNewsActions.clickBotonCerrarTribu1();
        tribuNewsActions.clickBotonCerrarTribu2();
        noticiasSSTNewsActions.clickBotonSST(); 
        noticiasSSTNewsActions.clickBotonVermasSST1(); 
        noticiasSSTNewsActions.ValidarTituloNotici1_1(); 
        noticiasSSTNewsActions.clickBotonVolverNotici1_1(); 
        noticiasSSTNewsActions.ValidarParrafoNotici1_1(); 
        noticiasSSTNewsActions.ValidarTituloNotici1_2(); 
        noticiasSSTNewsActions.ValidarTituloNotici1_3(); 
        noticiasSSTNewsActions.validarImgNotici1_1(); 
        noticiasSSTNewsActions.ValidarTituloNotici1_4(); 
        noticiasSSTNewsActions.validarImgNotici1_2(); 
        noticiasSSTNewsActions.ValidarTituloNotici1_5(); 
        noticiasSSTNewsActions.ValidarTituloNotici1_6(); 
        noticiasSSTNewsActions.validarImgNotici1_3(); 
        noticiasSSTNewsActions.ValidarTituloNotici1_7(); 
        noticiasSSTNewsActions.validarImgNotici1_4(); 
        noticiasSSTNewsActions.ValidarParrafoNotici1_2(); 
        noticiasSSTNewsActions.ValidarParrafoNotici1_3(); 
        });

        it("Section - Noticia2", () =>{
        cy.viewport(1200,800)
        url.urltribu()
        tribuNewsActions.clickBotonCerrarTribu1();
        tribuNewsActions.clickBotonCerrarTribu2();
        noticiasSSTNewsActions.clickBotonSST(); 
        noticiasSSTNewsActions.clickBotonVermasSST2(); 
        noticiasSSTNewsActions.ValidarTituloNotici2_1(); 
        noticiasSSTNewsActions.clickBotonVolverNotici2_1();
        noticiasSSTNewsActions.ValidarParrafoNotici2_1(); 
        noticiasSSTNewsActions.ValidarTituloNotici2_2(); 
        noticiasSSTNewsActions.ValidarTituloNotici2_3();
        noticiasSSTNewsActions.clickBotonIngresaSST2(); 
        noticiasSSTNewsActions.ValidarTituloNotici2_4(); 
        noticiasSSTNewsActions.ValidarTituloNotici2_5(); 
        noticiasSSTNewsActions.ValidarTituloNotici2_6();
        noticiasSSTNewsActions.ValidarTituloNotici2_7();  
        noticiasSSTNewsActions.ValidarTituloNotici2_8();  
        noticiasSSTNewsActions.ValidarTituloNotici2_9();   
        noticiasSSTNewsActions.ValidarTituloNotici2_10();   
        noticiasSSTNewsActions.ValidarTituloNotici2_11();   
        noticiasSSTNewsActions.ValidarTituloNotici2_12();   
        noticiasSSTNewsActions.ValidarTituloNotici2_13();   
        noticiasSSTNewsActions.ValidarTituloNotici2_14();   
        noticiasSSTNewsActions.ValidarTituloNotici2_15();   
        noticiasSSTNewsActions.ValidarTituloNotici2_16(); 
        });

        it("Section - Noticia3", () =>{
        cy.viewport(1200,800)
        url.urltribu()
        tribuNewsActions.clickBotonCerrarTribu1();
        tribuNewsActions.clickBotonCerrarTribu2();
        noticiasSSTNewsActions.clickBotonSST(); 
        noticiasSSTNewsActions.clickBotonVermasSST3();   
        noticiasSSTNewsActions.ValidarParrafoNotici3_1(); 
        noticiasSSTNewsActions.ValidarTituloNotici3_2(); 
        });

        it("Section - Noticia4", () =>{
        cy.viewport(1200,800)
        url.urltribu()
        tribuNewsActions.clickBotonCerrarTribu1();
        tribuNewsActions.clickBotonCerrarTribu2();
        noticiasSSTNewsActions.clickBotonSST(); 
        noticiasSSTNewsActions.clickBotonVermasSST4();   
        noticiasSSTNewsActions.ValidarTituloNotici4_1(); 
        noticiasSSTNewsActions.clickBotonVolverNotici4_1(); 
        noticiasSSTNewsActions.ValidarParrafoNotici4_1(); 
        noticiasSSTNewsActions.ValidarTituloNotici4_2(); 
        noticiasSSTNewsActions.ValidarParrafoNotici4_2(); 
        noticiasSSTNewsActions.ValidarTituloNotici4_3(); 
        noticiasSSTNewsActions.ValidarParrafoNotici4_3(); 
        noticiasSSTNewsActions.ValidarTituloNotici4_4(); 
        noticiasSSTNewsActions.ValidarParrafoNotici4_4(); 
        noticiasSSTNewsActions.ValidarTituloNotici4_5(); 
        noticiasSSTNewsActions.ValidarTituloNotici4_6(); 
        });

        it.only("Section - Noticia5", () =>{
        cy.viewport(1200,800)
        url.urltribu()
        tribuNewsActions.clickBotonCerrarTribu1();
        tribuNewsActions.clickBotonCerrarTribu2();
        noticiasSSTNewsActions.clickBotonSST(); 
        noticiasSSTNewsActions.clickBotonVermasSST5();   
        noticiasSSTNewsActions.ValidarTituloNotici5_1(); 
        noticiasSSTNewsActions.clickBotonVolverNotici5_1(); 
        noticiasSSTNewsActions.validarParrafosNotici5_1(); 
        noticiasSSTNewsActions.ValidarTituloNotici5_2(); 
        noticiasSSTNewsActions.validarVideoNotici5(); 
        });
    });
        
}