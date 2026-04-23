import noticiaBieneNewsActions from "../../actions/NoticiaBieneActions"
import tribuNewsActions from "../../actions/TribuActions"
import url from "../../url/url";

export function noticiaBieneSuites(){
    context('Automatizacion - NoticiasBienestar', () => {

        it("Section - Parchando(Más allá de la cumbre)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            ///noticiasSSTNewsActions.clickBotonSST(); 
            noticiaBieneNewsActions.clickBotonVermasParcha1();   
            noticiaBieneNewsActions.ValidarTituloParcha1_1(); 
            noticiaBieneNewsActions.validarParrafosParcha1_1(); 
            noticiaBieneNewsActions.validarParrafosParcha1_2(); 
        });

        it("Section -  Parchando(Pedaleando Juntos)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonVermasParcha2();   
            noticiaBieneNewsActions.ValidarTituloParcha2_1(); 
            noticiaBieneNewsActions.validarParrafosParcha2_1(); 
            noticiaBieneNewsActions.ValidarTituloParcha2_2(); 
        });

        it("Section - Parchando(Baby Shower de Katherine Bastidas)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonVermasParcha3();   
            noticiaBieneNewsActions.ValidarTituloParcha3_1(); 
            noticiaBieneNewsActions.validarParrafosParcha3_1(); 
            noticiaBieneNewsActions.ValidarTituloParcha3_2(); 
        });

        it("Section - Parchando(Celebramos una Nueva Vida)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonVermasParcha4();   
            noticiaBieneNewsActions.ValidarTituloParcha4_1(); 
            noticiaBieneNewsActions.validarParrafosParcha4_1(); 
            noticiaBieneNewsActions.ValidarTituloParcha4_2(); 
            noticiaBieneNewsActions.ValidarTituloParcha4_3();
        });


        it("Section - Parchando(Baby Shower de Alejandro Acuña)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonVermasParcha5();   
            noticiaBieneNewsActions.ValidarTituloParcha5_1(); 
            noticiaBieneNewsActions.validarParrafosParcha5_1(); 
            noticiaBieneNewsActions.ValidarTituloParcha5_2(); 
        });


        it("Section - Parchando(Copa América 2024)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonVermasParcha6();   
            noticiaBieneNewsActions.ValidarTituloParcha6_1(); 
            noticiaBieneNewsActions.validarParrafosParcha6_1(); 
            noticiaBieneNewsActions.ValidarParrafosParcha6_2(); 
        });


        it("Section - Parchando(Viernes Lokochon)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonVermasParcha7();   
            noticiaBieneNewsActions.ValidarTituloParcha7_1(); 
            noticiaBieneNewsActions.validarParrafosParcha7_1(); 
            noticiaBieneNewsActions.validarParrafosParcha7_2(); 
        });

        it("Section - Parchando(¡Juntos Somos mejores!)", () =>{
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

        it("Section - LA TRIBU AYUDA(Nutra Emprende)", () =>{
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


         it("Section - LA TRIBU AYUDA(TRIBU-TO 2024)", () =>{
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

        it("Section - LA TRIBU AYUDA(Mayo) ", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonTriAyu();   
            noticiaBieneNewsActions.clickBotonVermasTriAyu3(); 
            noticiaBieneNewsActions.ValidarTituloTriAyu3_1(); 
            noticiaBieneNewsActions.validarParrafoTriAyu3_1(); 
        });

        it("Section - LA TRIBU AYUDA(Abril)", () =>{
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

        it("Section - LA TRIBU AYUDA(Marzo)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonTriAyu();   
            noticiaBieneNewsActions.clickBotonVermasTriAyu5();
            noticiaBieneNewsActions.ValidarTituloTriAyu5_1(); 
            noticiaBieneNewsActions.validarParrafoTriAyu5_1();
            noticiaBieneNewsActions.validarTituloTriAyu5_2();
        });


        it("Section - LA TRIBU AYUDA(Milagrinos)", () =>{
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


        it("Section - LA TRIBU AYUDA(Botellas de Amor)", () =>{
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


        it("Section - LA TRIBU AYUDA(Febrero)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonTriAyu();   
            noticiaBieneNewsActions.clickBotonVermasTriAyu8();
            noticiaBieneNewsActions.ValidarTituloTriAyu8_1(); 
            noticiaBieneNewsActions.validarParrafoTriAyu8_1();
        });


        it("Section - LA TRIBU AYUDA(Diciembre)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonTriAyu();   
            noticiaBieneNewsActions.clickBotonVermasTriAyu9();
            noticiaBieneNewsActions.ValidarTituloTriAyu9_1(); 
            noticiaBieneNewsActions.validarParrafoTriAyu9_1();
        });

        it("Section - Noticias(TRIBU-TO que Abraza)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
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

        it("Section - Noticias(Guardianes)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici2(); 
            noticiaBieneNewsActions.ValidarTituloNotici2_1();
            noticiaBieneNewsActions.ValidarTituloNotici2_2();
            noticiaBieneNewsActions.ValidarParrafoNotici2_1();
            noticiaBieneNewsActions.ValidarParrafoNotici2_2();
            noticiaBieneNewsActions.ValidarTituloNotici2_3();
            noticiaBieneNewsActions.ValidarParrafoNotici2_3();
            noticiaBieneNewsActions.ValidarTituloNotici2_4();
            noticiaBieneNewsActions.ValidarParrafoNotici2_4();
            noticiaBieneNewsActions.validarParrafoNotici2_5();
            noticiaBieneNewsActions.ValidarTituloNotici2_5();
            noticiaBieneNewsActions.ValidarParrafoNotici2_6();
            noticiaBieneNewsActions.ValidarParrafoNotici2_7();
            noticiaBieneNewsActions.ValidarParrafoNotici2_8();
            noticiaBieneNewsActions.ValidarParrafoNotici2_9();
            noticiaBieneNewsActions.ValidarTituloNotici2_6();
            noticiaBieneNewsActions.ValidarParrafoNotici2_10();
            noticiaBieneNewsActions.ValidarTituloNotici2_7();
            noticiaBieneNewsActions.ValidarParrafoNotici2_11();
            noticiaBieneNewsActions.ValidarTituloNotici2_8();
            noticiaBieneNewsActions.ValidarParrafoNotici2_12();
            noticiaBieneNewsActions.ValidarTituloNotici2_9();
            noticiaBieneNewsActions.ValidarParrafoNotici2_13();
            noticiaBieneNewsActions.ValidarParrafoNotici2_14();
        });


        it("Section - Noticias(encuesta LIT)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici3();;
            noticiaBieneNewsActions.ValidarTituloNotici3_1();
            noticiaBieneNewsActions.ValidarTituloNotici3_2();
            noticiaBieneNewsActions.ValidarParrafoNotici3_1();
            noticiaBieneNewsActions.ValidarTituloNotici3_3();
            noticiaBieneNewsActions.ValidarParrafoNotici3_2();
            noticiaBieneNewsActions.ValidarTituloNotici3_4();
            noticiaBieneNewsActions.ValidarParrafoNotici3_3();
            noticiaBieneNewsActions.ValidarTituloNotici3_5();
            noticiaBieneNewsActions.ValidarTituloNotici3_6();
            noticiaBieneNewsActions.ValidarParrafoNotici3_4();
            noticiaBieneNewsActions.ValidarTituloNotici3_7();
            noticiaBieneNewsActions.ValidarParrafoNotici3_5();
            noticiaBieneNewsActions.ValidarTituloNotici3_8();
            noticiaBieneNewsActions.ValidarParrafoNotici3_6();
            noticiaBieneNewsActions.ValidarTituloNotici3_9();
            noticiaBieneNewsActions.ValidarParrafoNotici3_7();
            noticiaBieneNewsActions.ValidarParrafoNotici3_8();
            noticiaBieneNewsActions.ValidarTituloNotici3_10();
            noticiaBieneNewsActions.ValidarParrafoNotici3_9();
            noticiaBieneNewsActions.ValidarTituloNotici3_11();
            noticiaBieneNewsActions.ValidarParrafoNotici3_10();
            noticiaBieneNewsActions.ValidarTituloNotici3_12();
            noticiaBieneNewsActions.ValidarParrafoNotici3_11();
            noticiaBieneNewsActions.ValidarTituloNotici3_13();
            noticiaBieneNewsActions.ValidarTituloNotici3_14();
            noticiaBieneNewsActions.ValidarTituloNotici3_15();
            noticiaBieneNewsActions.ValidarParrafoNotici3_12(); 
            noticiaBieneNewsActions.ValidarParrafoNotici3_13();
            noticiaBieneNewsActions.ValidarTituloNotici3_16();
            noticiaBieneNewsActions.ValidarTituloNotici3_17();
            noticiaBieneNewsActions.ValidarTituloNotici3_18();
            noticiaBieneNewsActions.ValidarParrafoNotici3_14();
            noticiaBieneNewsActions.ValidarParrafoNotici3_15();
            noticiaBieneNewsActions.ValidarParrafoNotici3_16();
            noticiaBieneNewsActions.ValidarTituloNotici3_19();
            noticiaBieneNewsActions.ValidarTituloNotici3_20();
            noticiaBieneNewsActions.ValidarTituloNotici3_21();
            noticiaBieneNewsActions.ValidarParrafoNotici3_17();
            noticiaBieneNewsActions.ValidarParrafoNotici3_18();
            noticiaBieneNewsActions.ValidarParrafoNotici3_19();
            noticiaBieneNewsActions.ValidarTituloNotici3_22();
            noticiaBieneNewsActions.ValidarParrafoNotici3_20();
            noticiaBieneNewsActions.ValidarTituloNotici3_23();
            noticiaBieneNewsActions.ValidarParrafoNotici3_21();
            noticiaBieneNewsActions.ValidarParrafoNotici3_22();
        }); 

        it("Section - Noticias(Carrera de las Rosas)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici4();
            noticiaBieneNewsActions.ValidarTituloNotici4_1();
            noticiaBieneNewsActions.ValidarTituloNotici4_2();
            noticiaBieneNewsActions.ValidarParrafoNotici4_1();
            noticiaBieneNewsActions.ValidarParrafoNotici4_2();
            noticiaBieneNewsActions.ValidarParrafoNotici4_3();
            noticiaBieneNewsActions.ValidarTituloNotici4_3(); 
        });

        it("Section - Noticias(Nutra Emprende)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici5();
            noticiaBieneNewsActions.ValidarTituloNotici5_1();
            noticiaBieneNewsActions.ValidarTituloNotici5_2();
            noticiaBieneNewsActions.ValidarParrafoNotici5_1();
            noticiaBieneNewsActions.ValidarParrafoNotici5_2();
            noticiaBieneNewsActions.ValidarParrafoNotici5_3();
            noticiaBieneNewsActions.ValidarParrafoNotici5_4(); 
            noticiaBieneNewsActions.ValidarParrafoNotici5_5(); 
        });

        it("Section - Noticias(Lugar Inspirador para Trabajar)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici6();
            noticiaBieneNewsActions.ValidarTituloNotici6_1();
            noticiaBieneNewsActions.ValidarParrafoNotici6_2();
            noticiaBieneNewsActions.ValidarParrafoNotici6_3();
            noticiaBieneNewsActions.ValidarParrafoNotici6_4();
            noticiaBieneNewsActions.ValidarParrafoNotici6_5();
            noticiaBieneNewsActions.ValidarTituloNotici6_2(); 
            noticiaBieneNewsActions.ValidarParrafoNotici6_6(); 
            noticiaBieneNewsActions.ValidarTituloNotici6_3();
            noticiaBieneNewsActions.ValidarParrafoNotici6_7();
            noticiaBieneNewsActions.ValidarParrafoNotici6_8();
            noticiaBieneNewsActions.ValidarParrafoNotici6_9();
            noticiaBieneNewsActions.ValidarTituloNotici6_4();
            noticiaBieneNewsActions.ValidarParrafoNotici6_10(); 
        });

        it("Section - Noticias(SENA)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici7();
            noticiaBieneNewsActions.ValidarTituloNotici7_1();
            noticiaBieneNewsActions.ValidarParrafoNotici7_1();
            noticiaBieneNewsActions.ValidarParrafoNotici7_2();
            noticiaBieneNewsActions.ValidarParrafoNotici7_3();
            noticiaBieneNewsActions.ValidarParrafoNotici7_4();
        });

        it("Section - Noticias(arte de la negociación)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici8();
            noticiaBieneNewsActions.ValidarTituloNotici8_1();
            noticiaBieneNewsActions.ValidarParrafoNotici8_1();
            noticiaBieneNewsActions.ValidarParrafoNotici8_2();
            noticiaBieneNewsActions.ValidarParrafoNotici8_3();
            noticiaBieneNewsActions.ValidarParrafoNotici8_4();
            noticiaBieneNewsActions.ValidarParrafoNotici8_5(); 
        });

        it("Section - Noticias(Ganadores de Junio)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici9();
            noticiaBieneNewsActions.ValidarTituloNotici9_1();
            noticiaBieneNewsActions.ValidarParrafoNotici9_1();
            noticiaBieneNewsActions.ValidarTituloNotici9_2();
            noticiaBieneNewsActions.ValidarTituloNotici9_3();
            noticiaBieneNewsActions.ValidarParrafoNotici9_2();
            noticiaBieneNewsActions.ValidarTituloNotici9_4(); 
            noticiaBieneNewsActions.ValidarParrafoNotici9_3(); 
            noticiaBieneNewsActions.ValidarParrafoNotici9_4(); 
            noticiaBieneNewsActions.ValidarParrafoNotici9_5();
            noticiaBieneNewsActions.ValidarParrafoNotici9_6();
            noticiaBieneNewsActions.ValidarParrafoNotici9_7(); 
        });

        it("Section - Noticias(Moveminds)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici10();
            noticiaBieneNewsActions.ValidarTituloNotici10_1();
            noticiaBieneNewsActions.ValidarParrafoNotici10_1();
            noticiaBieneNewsActions.ValidarParrafoNotici10_2();
            noticiaBieneNewsActions.ValidarTituloNotici10_2(); 
        });

        it("Section - Noticias(Liderazgo Responsable)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici11();
            noticiaBieneNewsActions.ValidarTituloNotici11_1();
            noticiaBieneNewsActions.ValidarParrafoNotici11_1();
            noticiaBieneNewsActions.ValidarTituloNotici11_2();
            noticiaBieneNewsActions.ValidarParrafoNotici11_2();
            noticiaBieneNewsActions.ValidarParrafoNotici11_3();
            noticiaBieneNewsActions.ValidarParrafoNotici11_4();
            noticiaBieneNewsActions.ValidarTituloNotici11_3();
            noticiaBieneNewsActions.ValidarParrafoNotici11_5(); 
            noticiaBieneNewsActions.clickBotonAquiNotici11(); 
        });

        it("Section - Noticias(Evaluación de Desempeño)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici12();
            noticiaBieneNewsActions.ValidarTituloNotici12_1();
            noticiaBieneNewsActions.ValidarParrafoNotici12_1();
            noticiaBieneNewsActions.ValidarTituloNotici12_2();
            noticiaBieneNewsActions.ValidarParrafoNotici12_2();
            noticiaBieneNewsActions.ValidarParrafoNotici12_3();
            noticiaBieneNewsActions.ValidarTituloNotici12_3();
            noticiaBieneNewsActions.ValidarParrafoNotici12_4();
            noticiaBieneNewsActions.ValidarParrafoNotici12_5(); 
            noticiaBieneNewsActions.ValidarParrafoNotici12_6();  
            noticiaBieneNewsActions.ValidarParrafoNotici12_7();  
            noticiaBieneNewsActions.ValidarParrafoNotici12_8();  
            noticiaBieneNewsActions.ValidarTituloNotici12_4();  
            noticiaBieneNewsActions.ValidarParrafoNotici12_9();  
            noticiaBieneNewsActions.ValidarTituloNotici12_5();  
            noticiaBieneNewsActions.ValidarTituloNotici12_6();  
            noticiaBieneNewsActions.ValidarTituloNotici12_7();  
            noticiaBieneNewsActions.ValidarTituloNotici12_8();  
            noticiaBieneNewsActions.ValidarTituloNotici12_9(); 
            noticiaBieneNewsActions.ValidarTituloNotici12_10(); 
            noticiaBieneNewsActions.ValidarTituloNotici12_11(); 
            noticiaBieneNewsActions.ValidarTituloNotici12_12(); 
            noticiaBieneNewsActions.ValidarTituloNotici12_13(); 
            noticiaBieneNewsActions.ValidarTituloNotici12_14(); 
            noticiaBieneNewsActions.ValidarTituloNotici12_15(); 
            noticiaBieneNewsActions.ValidarParrafoNotici12_10(); 
            noticiaBieneNewsActions.ValidarParrafoNotici12_11(); 
            noticiaBieneNewsActions.ValidarParrafoNotici12_12(); 
            noticiaBieneNewsActions.ValidarParrafoNotici12_13();  
            noticiaBieneNewsActions.ValidarTituloNotici12_16();  
            noticiaBieneNewsActions.ValidarParrafoNotici12_14();  
            noticiaBieneNewsActions.ValidarTituloNotici12_17();
        });

        it("Section - Noticias(Don Mario)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici13();
            noticiaBieneNewsActions.ValidarTituloNotici13_1();
            noticiaBieneNewsActions.ValidarParrafoNotici13_1();
            noticiaBieneNewsActions.ValidarTituloNotici13_2();
            noticiaBieneNewsActions.ValidarTituloNotici13_3();
            noticiaBieneNewsActions.ValidarParrafoNotici13_2();
            noticiaBieneNewsActions.ValidarParrafoNotici13_3();
            noticiaBieneNewsActions.ValidarTituloNotici13_4(); 
        }); 

        it("Section - Noticias(Nutra Tutores)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici14();
            noticiaBieneNewsActions.ValidarTituloNotici14_1();
            noticiaBieneNewsActions.validarimg_14_1();
            noticiaBieneNewsActions.validarimg_14_2();
            noticiaBieneNewsActions.validarimg_14_3();
            noticiaBieneNewsActions.validarimg_14_4();
            noticiaBieneNewsActions.validarimg_14_5();
        }); 

        it("Section - Noticias(Lucha Contra el Cáncer de Mama)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici15();
            noticiaBieneNewsActions.ValidarTituloNotici15_1();
            noticiaBieneNewsActions.ValidarParrafoNotici15_1();
        }); 

        it("Section - Noticias(VII Convención)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici16();
            noticiaBieneNewsActions.ValidarTituloNotici16_1();
            noticiaBieneNewsActions.ValidarTituloNotici16_2();
            noticiaBieneNewsActions.ValidarParrafoNotici16_1();
            noticiaBieneNewsActions.ValidarParrafoNotici16_2();
        }); 

        it("Section - Noticias(Equipo Auditor)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici17();
            noticiaBieneNewsActions.ValidarTituloNotici17_1();
            noticiaBieneNewsActions.ValidarParrafoNotici17_1();
            noticiaBieneNewsActions.ValidarParrafoNotici17_2();
            noticiaBieneNewsActions.ValidarTituloNotici17_2();
            noticiaBieneNewsActions.validarimg_17_1();
            noticiaBieneNewsActions.ValidarTituloNotici17_3();
            noticiaBieneNewsActions.validarimg_17_2();
        });

        it("Section - Noticias(Árbol de la Estrategia)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici18();
            noticiaBieneNewsActions.ValidarTituloNotici18_1();
            noticiaBieneNewsActions.ValidarTituloNotici18_2();
            noticiaBieneNewsActions.ValidarParrafoNotici18_1();
            noticiaBieneNewsActions.ValidarTituloNotici18_3();
            noticiaBieneNewsActions.ValidarParrafoNotici18_2();
            noticiaBieneNewsActions.ValidarParrafoNotici18_3();
            noticiaBieneNewsActions.ValidarTituloNotici18_4();
            noticiaBieneNewsActions.ValidarParrafoNotici18_4();
        });

        it("Section - Noticias(Las Esferas de Javier)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici19();
            noticiaBieneNewsActions.ValidarTituloNotici19_1();
            noticiaBieneNewsActions.ValidarParrafoNotici19_1();
            noticiaBieneNewsActions.ValidarParrafoNotici19_2();
            noticiaBieneNewsActions.ValidarTituloNotici19_2();
        });


        it("Section - Noticias(Nutrabiotics en redes sociales)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonNotici();
            noticiaBieneNewsActions.clickBotonVermasNotici20();
            noticiaBieneNewsActions.ValidarTituloNotici20_1();
            noticiaBieneNewsActions.ValidarParrafoNotici20_1();
        });

        it("Section - Fechas Especiales(FIN DE AÑO-2025 MEX)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonFechEspe();
            noticiaBieneNewsActions.clickBotonVermasFechEspe1(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe1_1();
            noticiaBieneNewsActions.ValidarTituloFechEspe1_2();
            noticiaBieneNewsActions.ValidarParrafoFechEspe1_1();
            noticiaBieneNewsActions.ValidarTituloFechEspe1_3();
            noticiaBieneNewsActions.ValidarParrafoFechEspe1_2();
            noticiaBieneNewsActions.ValidarTituloFechEspe1_4();
            noticiaBieneNewsActions.ValidarTituloFechEspe1_5();
            noticiaBieneNewsActions.ValidarTituloFechEspe1_6();
            noticiaBieneNewsActions.ValidarTituloFechEspe1_7();
            noticiaBieneNewsActions.ValidarTituloFechEspe1_8();
            noticiaBieneNewsActions.ValidarTituloFechEspe1_9();
            noticiaBieneNewsActions.ValidarParrafoFechEspe1_3();
            noticiaBieneNewsActions.ValidarTituloFechEspe1_10();
            noticiaBieneNewsActions.ValidarParrafoFechEspe1_4();
            noticiaBieneNewsActions.ValidarParrafoFechEspe1_5();
            noticiaBieneNewsActions.ValidarParrafoFechEspe1_6();
            noticiaBieneNewsActions.ValidarParrafoFechEspe1_7();
            noticiaBieneNewsActions.ValidarTituloFechEspe1_11();
            noticiaBieneNewsActions.ValidarParrafoFechEspe1_8();
            noticiaBieneNewsActions.ValidarParrafoFechEspe1_9();
        });

        it("Section - Fechas Especiales(FIN DE AÑO-2025 COL)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonFechEspe();
            noticiaBieneNewsActions.clickBotonVermasFechEspe2(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe2_1(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe2_1(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe2_2(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe2_3(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe2_4(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe2_2(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe2_3(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe2_5(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe2_4(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe2_6(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe2_5(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe2_7(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe2_8(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe2_6(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe2_7(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe2_9(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe2_8(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe2_10(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe2_11(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe2_9(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe2_10(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe2_12(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe2_11(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe2_13(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe2_12(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe2_14(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe2_13(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe2_15(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe2_14(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe2_16(); 
            noticiaBieneNewsActions.clickBotonFotosFechEspe2(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe2_17();
        });


        it("Section - Fechas Especiales(Fiesta Nutra Kids 2025)", () =>{
            cy.viewport(1200,800)
            url.urlbienestar()
            noticiaBieneNewsActions.clickBotonFechEspe();
            noticiaBieneNewsActions.clickBotonVermasFechEspe3(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_1(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_2(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe3_1(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_3(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_4(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe3_2(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_5(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_6(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe3_3(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_7(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe3_4(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_8(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_9(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe3_5(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_10(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe3_6(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_11(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe3_7(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_12(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe3_8(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_13(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe3_9(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_14(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe3_10(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe3_11(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_15(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_16(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe3_12(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_17(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe3_13(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_18(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe3_14(); 
            noticiaBieneNewsActions.ValidarTituloFechEspe3_19(); 
            noticiaBieneNewsActions.ValidarParrafoFechEspe3_15(); 
        });

    });
        
}