import noticiaBieneNewsActions from "../../actions/NoticiaBieneActions"
import tribuNewsActions from "../../actions/TribuActions"
import url from "../../url/url";

export function noticiaBieneSuites(){
    context('Automatizacion - NoticiasBienestar', () => {

        it("Section - Noticia1", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            ///noticiasSSTNewsActions.clickBotonSST(); 
            noticiaBieneNewsActions.clickBotonVermasParcha1();   
            noticiaBieneNewsActions.ValidarTituloParcha1_1(); 
            noticiaBieneNewsActions.validarParrafosParcha1_1(); 
            noticiaBieneNewsActions.validarParrafosParcha1_2(); 
        });

        it("Section - Noticia2", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonVermasParcha2();   
            noticiaBieneNewsActions.ValidarTituloParcha2_1(); 
            noticiaBieneNewsActions.validarParrafosParcha2_1(); 
            noticiaBieneNewsActions.ValidarTituloParcha2_2(); 
        });

        it("Section - Noticia3", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonVermasParcha3();   
            noticiaBieneNewsActions.ValidarTituloParcha3_1(); 
            noticiaBieneNewsActions.validarParrafosParcha3_1(); 
            noticiaBieneNewsActions.ValidarTituloParcha3_2(); 
        });

        it("Section - Noticia4", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonVermasParcha4();   
            noticiaBieneNewsActions.ValidarTituloParcha4_1(); 
            noticiaBieneNewsActions.validarParrafosParcha4_1(); 
            noticiaBieneNewsActions.ValidarTituloParcha4_2(); 
            noticiaBieneNewsActions.ValidarTituloParcha4_3();
        });


        it("Section - Noticia5", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonVermasParcha5();   
            noticiaBieneNewsActions.ValidarTituloParcha5_1(); 
            noticiaBieneNewsActions.validarParrafosParcha5_1(); 
            noticiaBieneNewsActions.ValidarTituloParcha5_2(); 
        });


        it("Section - Noticia6", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonVermasParcha6();   
            noticiaBieneNewsActions.ValidarTituloParcha6_1(); 
            noticiaBieneNewsActions.validarParrafosParcha6_1(); 
            noticiaBieneNewsActions.ValidarParrafosParcha6_2(); 
        });


        it("Section - Noticia7", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonVermasParcha7();   
            noticiaBieneNewsActions.ValidarTituloParcha7_1(); 
            noticiaBieneNewsActions.validarParrafosParcha7_1(); 
            noticiaBieneNewsActions.validarParrafosParcha7_2(); 
        });

        it("Section - Noticia8", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonVermasParcha8();   
            noticiaBieneNewsActions.ValidarTituloParcha8_1(); 
            noticiaBieneNewsActions.ValidarTituloParcha8_2(); 
            noticiaBieneNewsActions.ValidarTituloParcha8_3(); 
            noticiaBieneNewsActions.validarParrafosParcha8_1(); 
            noticiaBieneNewsActions.validarParrafosParcha8_2();
            noticiaBieneNewsActions.validarParrafosParcha8_3();
            noticiaBieneNewsActions.ValidarTituloParcha8_4(); 
            noticiaBieneNewsActions.validarParrafosParcha8_4();
            noticiaBieneNewsActions.validarParrafosParcha8_5();
            noticiaBieneNewsActions.validarParrafosParcha8_6();
            noticiaBieneNewsActions.validarParrafosParcha8_7();
            noticiaBieneNewsActions.validarImgComida1(); 
            noticiaBieneNewsActions.validarParrafosParcha8_8();
            noticiaBieneNewsActions.validarImgLugares1(); 
            noticiaBieneNewsActions.validarParrafosParcha8_9();
            noticiaBieneNewsActions.clickBotonInmuTocanci();
            noticiaBieneNewsActions.clickBotonInmuZipaqui(); 
        });

        it("Section - Noticia1 LA TRIBU AYUDA ", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonTriAyu();   
            noticiaBieneNewsActions.clickBotonVermasTriAyu1(); 
            noticiaBieneNewsActions.ValidarTituloTriAyu1_1(); 
            noticiaBieneNewsActions.ValidarTituloTriAyu1_2(); 
            noticiaBieneNewsActions.validarParrafoTriAyu1_1();
            noticiaBieneNewsActions.validarParrafoTriAyu1_2();  
            noticiaBieneNewsActions.ValidarTituloTriAyu1_3(); 
            noticiaBieneNewsActions.validarParrafoTriAyu1_3();  
            noticiaBieneNewsActions.ValidarTituloTriAyu1_4(); 
            noticiaBieneNewsActions.validarParrafoTriAyu1_4();  
            noticiaBieneNewsActions.ValidarTituloTriAyu1_5(); 
            noticiaBieneNewsActions.validarParrafoTriAyu1_5(); 
            noticiaBieneNewsActions.validarParrafoTriAyu1_6(); 
            noticiaBieneNewsActions.validarParrafoTriAyu1_7();
            noticiaBieneNewsActions.ValidarTituloTriAyu1_6(); 
            noticiaBieneNewsActions.validarTituloTriAyu1_7(); 
            noticiaBieneNewsActions.validarParrafoTriAyu1_8();
            noticiaBieneNewsActions.validarParrafoTriAyu1_9();
            noticiaBieneNewsActions.validarParrafoTriAyu1_10();
            noticiaBieneNewsActions.validarParrafoTriAyu1_11();
            noticiaBieneNewsActions.validarParrafoTriAyu1_12();
            noticiaBieneNewsActions.validarParrafoTriAyu1_13();
            noticiaBieneNewsActions.validarParrafoTriAyu1_14();
            noticiaBieneNewsActions.validarParrafoTriAyu1_15();
            noticiaBieneNewsActions.validarParrafoTriAyu1_16();
            noticiaBieneNewsActions.validarParrafoTriAyu1_17();
            noticiaBieneNewsActions.validarParrafoTriAyu1_18();
            noticiaBieneNewsActions.validarParrafoTriAyu1_19();
            noticiaBieneNewsActions.validarParrafoTriAyu1_20();
            noticiaBieneNewsActions.validarParrafoTriAyu1_21();
            noticiaBieneNewsActions.validarParrafoTriAyu1_22();
            noticiaBieneNewsActions.validarParrafoTriAyu1_23();
            noticiaBieneNewsActions.validarParrafoTriAyu1_24();
            noticiaBieneNewsActions.validarParrafoTriAyu1_25();
            noticiaBieneNewsActions.validarParrafoTriAyu1_26();
            noticiaBieneNewsActions.validarParrafoTriAyu1_27();
            noticiaBieneNewsActions.validarParrafoTriAyu1_28();
            noticiaBieneNewsActions.validarParrafoTriAyu1_29();
            noticiaBieneNewsActions.validarParrafoTriAyu1_30();
            noticiaBieneNewsActions.validarParrafoTriAyu1_31();
            noticiaBieneNewsActions.validarParrafoTriAyu1_32();
            noticiaBieneNewsActions.validarParrafoTriAyu1_33();
            noticiaBieneNewsActions.validarParrafoTriAyu1_34();
            noticiaBieneNewsActions.validarParrafoTriAyu1_35();
            noticiaBieneNewsActions.validarParrafoTriAyu1_36();
            noticiaBieneNewsActions.validarParrafoTriAyu1_37();
            noticiaBieneNewsActions.validarParrafoTriAyu1_38();
            noticiaBieneNewsActions.validarParrafoTriAyu1_39();
            noticiaBieneNewsActions.validarParrafoTriAyu1_40();
            noticiaBieneNewsActions.validarParrafoTriAyu1_41();
            noticiaBieneNewsActions.validarParrafoTriAyu1_42();
            noticiaBieneNewsActions.validarParrafoTriAyu1_43();
        });


         it("Section - Noticia2 LA TRIBU AYUDA ", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonTriAyu();   
            noticiaBieneNewsActions.clickBotonVermasTriAyu2(); 
            noticiaBieneNewsActions.ValidarTituloTriAyu2_1(); 
            noticiaBieneNewsActions.validarParrafoTriAyu2_1(); 
            noticiaBieneNewsActions.validarParrafoTriAyu2_2(); 
            noticiaBieneNewsActions.validarParrafoTriAyu2_3(); 
            noticiaBieneNewsActions.validarParrafoTriAyu2_4(); 
            noticiaBieneNewsActions.validarParrafoTriAyu2_5(); 
            noticiaBieneNewsActions.validarParrafoTriAyu2_6(); 
            noticiaBieneNewsActions.validarParrafoTriAyu2_7(); 
            noticiaBieneNewsActions.validarParrafoTriAyu2_8(); 
            noticiaBieneNewsActions.validarParrafoTriAyu2_9(); 
            noticiaBieneNewsActions.validarParrafoTriAyu2_10(); 
            noticiaBieneNewsActions.ValidarTituloTriAyu2_2(); 
            noticiaBieneNewsActions.validarParrafoTriAyu2_11(); 
            noticiaBieneNewsActions.validarParrafoTriAyu2_12(); 
            noticiaBieneNewsActions.validarParrafoTriAyu2_13();
            noticiaBieneNewsActions.ValidarTituloTriAyu2_3();  
            noticiaBieneNewsActions.validarParrafoTriAyu2_14(); 
            noticiaBieneNewsActions.validarParrafoTriAyu2_15();
            noticiaBieneNewsActions.ValidarTituloTriAyu2_4(); 
            noticiaBieneNewsActions.validarImgAgradeci1(); 
            noticiaBieneNewsActions.validarParrafoTriAyu2_16();
        });

        it("Section - Noticia3 LA TRIBU AYUDA ", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonTriAyu();   
            noticiaBieneNewsActions.clickBotonVermasTriAyu3(); 
            noticiaBieneNewsActions.ValidarTituloTriAyu3_1(); 
            noticiaBieneNewsActions.validarParrafoTriAyu3_1(); 
        });

        it("Section - Noticia4 LA TRIBU AYUDA ", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonTriAyu();   
            noticiaBieneNewsActions.clickBotonVermasTriAyu4(); 
            noticiaBieneNewsActions.ValidarTituloTriAyu4_1(); 
            noticiaBieneNewsActions.validarParrafoTriAyu4_1(); 
            noticiaBieneNewsActions.validarTitulosTriAyu4_2(); 
            noticiaBieneNewsActions.ValidarTituloTriAyu4_3(); 
            noticiaBieneNewsActions.validarParrafoTriAyu4_2();
        });

        it("Section - Noticia5 LA TRIBU AYUDA ", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonTriAyu();   
            noticiaBieneNewsActions.clickBotonVermasTriAyu5();
            noticiaBieneNewsActions.ValidarTituloTriAyu5_1(); 
            noticiaBieneNewsActions.validarParrafoTriAyu5_1();
            noticiaBieneNewsActions.validarTituloTriAyu5_2();
        });


        it("Section - Noticia6 LA TRIBU AYUDA ", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonTriAyu();   
            noticiaBieneNewsActions.clickBotonVermasTriAyu6();
            noticiaBieneNewsActions.ValidarTituloTriAyu6_1(); 
            noticiaBieneNewsActions.validarParrafoTriAyu6_1();
            noticiaBieneNewsActions.ValidarTituloTriAyu6_2();
            noticiaBieneNewsActions.ValidarTituloTriAyu6_3();
            noticiaBieneNewsActions.ValidarTituloTriAyu6_4();
            noticiaBieneNewsActions.validarTitulosTriAyu6_5();
            noticiaBieneNewsActions.ValidarTituloTriAyu6_6();
            noticiaBieneNewsActions.ValidarParrafoTriAyu6_2();
            noticiaBieneNewsActions.validarParrafoTriAyu6_3();
            noticiaBieneNewsActions.ValidarParrafoTriAyu6_4(); 
        });


        it("Section - Noticia7 LA TRIBU AYUDA ", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonTriAyu();   
            noticiaBieneNewsActions.clickBotonVermasTriAyu7();
            noticiaBieneNewsActions.ValidarTituloTriAyu7_1(); 
            noticiaBieneNewsActions.ValidarTituloTriAyu7_2();
            noticiaBieneNewsActions.validarParrafoTriAyu7_1();
            noticiaBieneNewsActions.validarTituloTriAyu7_3();
            noticiaBieneNewsActions.ValidarTituloTriAyu7_4();
        });


        it("Section - Noticia8 LA TRIBU AYUDA ", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonTriAyu();   
            noticiaBieneNewsActions.clickBotonVermasTriAyu8();
            noticiaBieneNewsActions.ValidarTituloTriAyu8_1(); 
            noticiaBieneNewsActions.validarParrafoTriAyu8_1();
        });


        it("Section - Noticia9 LA TRIBU AYUDA ", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonTriAyu();   
            noticiaBieneNewsActions.clickBotonVermasTriAyu9();
            noticiaBieneNewsActions.ValidarTituloTriAyu9_1(); 
            noticiaBieneNewsActions.validarParrafoTriAyu9_1();
        });

        it.only("Section - Noticias Numero1 ", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonTriAyu();
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici1(); 
            noticiaBieneNewsActions.ValidarTituloNotici1_1();
            noticiaBieneNewsActions.ValidarTituloNotici1_2();
            noticiaBieneNewsActions.ValidarParrafoNotici1_1();
            noticiaBieneNewsActions.ValidarTituloNotici1_3();
            noticiaBieneNewsActions.validarParrafoNotici1_2(); 
            noticiaBieneNewsActions.validarParrafoNotici1_3(); 
            noticiaBieneNewsActions.ValidarParrafoNotici1_4(); 
        });
    });
        
}