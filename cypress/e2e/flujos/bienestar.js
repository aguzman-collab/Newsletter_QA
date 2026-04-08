import bienestarNewsActions from "../../actions/BienestarActions"
import url from "../../url/url";

export function bienestarSuites(){

    context('Automatizacion - Bienestar', () => {

        it("Section - Bienestar", () =>{
        cy.viewport(1200,800)
        url.urlbienestar()
        bienestarNewsActions.ValidarTextoBienes1(); 
        bienestarNewsActions.ValidarParrafoBienes1(); 
        bienestarNewsActions.validarImgBienes();
        });

        it("Section - Parchando", () =>{
        cy.viewport(1200,800)
        url.urlbienestar()
        bienestarNewsActions.ValidarTextoMini();
        bienestarNewsActions.ValidarTituloCumbre(); 
        bienestarNewsActions.ValidarParrafoCumbre();
        bienestarNewsActions.clickbotonobtenerVermas1(); 

        bienestarNewsActions.ValidarTextoMini2();
        bienestarNewsActions.ValidarTituloPedaleando(); 
        bienestarNewsActions.ValidarParrafoPedaleando();
        bienestarNewsActions.clickbotonobtenerVermas2(); 

        bienestarNewsActions.ValidarTextoMini3();
        bienestarNewsActions.ValidarTituloBastidas(); 
        bienestarNewsActions.ValidarParrafoBastidas ();
        bienestarNewsActions.clickbotonobtenerVermas3(); 
        
        bienestarNewsActions.ValidarTextoMini4();
        bienestarNewsActions.ValidarTituloGarcia(); 
        bienestarNewsActions.ValidarParrafoGarcia();
        bienestarNewsActions.clickbotonobtenerVermas4(); 

        bienestarNewsActions.ValidarTextoMini5();
        bienestarNewsActions.ValidarTituloAcuña(); 
        bienestarNewsActions.ValidarParrafoAcuña();
        bienestarNewsActions.clickbotonobtenerVermas5(); 
        
        bienestarNewsActions.ValidarTextoMini6();
        bienestarNewsActions.ValidarTituloCopa(); 
        bienestarNewsActions.ValidarParrafoCopa();
        bienestarNewsActions.clickbotonobtenerVermas6(); 
        
        bienestarNewsActions.ValidarTextoMini7();
        bienestarNewsActions.ValidarTituloLokochon(); 
        bienestarNewsActions.ValidarParrafoLokochon();
        bienestarNewsActions.clickbotonobtenerVermas7(); 
        
        bienestarNewsActions.ValidarTextoMini8();
        bienestarNewsActions.ValidarTituloJuntos(); 
        bienestarNewsActions.ValidarParrafoJuntos();
        bienestarNewsActions.clickbotonobtenerVermas8(); 
        });
    
        it("Section - La Tribu Ayuda", () =>{
        cy.viewport(1200,800)
        url.urlbienestar()
        bienestarNewsActions.clickBotonTribuAyu();
        bienestarNewsActions.ValidarTituloPrinTribu(); 
        bienestarNewsActions.ValidarTituloMiniEmpreu();
        bienestarNewsActions.ValidarTituloPrin1(); 
        bienestarNewsActions.ValidarParrafo1();
        bienestarNewsActions.clickBotonVermas1();

        bienestarNewsActions.ValidarTituloMiniVolu1();
        bienestarNewsActions.ValidarTituloPrin2(); 
        bienestarNewsActions.ValidarParrafo2(); 
        bienestarNewsActions.clickBotonVermas2();

        bienestarNewsActions.ValidarTituloMiniVolu2();
        bienestarNewsActions.ValidarTituloPrin3(); 
        bienestarNewsActions.ValidarParrafo3(); 
        bienestarNewsActions.clickBotonVermas3();

        bienestarNewsActions.ValidarTituloMiniVolu3();
        bienestarNewsActions.ValidarTituloPrin4(); 
        bienestarNewsActions.ValidarParrafo4(); 
        bienestarNewsActions.clickBotonVermas4();
        
        bienestarNewsActions.ValidarTituloMiniVolu4();
        bienestarNewsActions.ValidarTituloPrin5(); 
        bienestarNewsActions.ValidarParrafo5(); 
        bienestarNewsActions.clickBotonVermas5();
        
        bienestarNewsActions.ValidarTituloMiniCamp();
        bienestarNewsActions.ValidarTituloPrin6(); 
        bienestarNewsActions.ValidarParrafo6(); 
        bienestarNewsActions.clickBotonVermas6();

        bienestarNewsActions.ValidarTituloMiniCamp1();
        bienestarNewsActions.ValidarTituloPrin7(); 
        bienestarNewsActions.ValidarParrafo7(); 
        bienestarNewsActions.clickBotonVermas7();

        bienestarNewsActions.ValidarTituloMiniVolu5();
        bienestarNewsActions.ValidarTituloPrin8(); 
        bienestarNewsActions.ValidarParrafo8(); 
        bienestarNewsActions.clickBotonVermas8();

        bienestarNewsActions.ValidarTituloMiniVolu6();
        bienestarNewsActions.ValidarTituloPrin9(); 
        bienestarNewsActions.ValidarParrafo9(); 
        bienestarNewsActions.clickBotonVermas9();
        });

        it("Section - Noticias", () =>{
        cy.viewport(1200,800)
        url.urlbienestar()
        bienestarNewsActions.clickBotonNoti();
        bienestarNewsActions.ValidarTituloPrinNoti(); 
        bienestarNewsActions.ValidarTituloMiniCumpl1(); 
        bienestarNewsActions.ValidarTituloNoti1(); 
        bienestarNewsActions.ValidarParrafoNoti1(); 
        bienestarNewsActions.clickBotonVermasNoti1(); 

        bienestarNewsActions.ValidarTituloMiniCumpl2(); 
        bienestarNewsActions.ValidarTituloNoti2(); 
        bienestarNewsActions.ValidarParrafoNoti2(); 
        bienestarNewsActions.clickBotonVermasNoti2(); 
        
        bienestarNewsActions.ValidarTituloMiniCumpl3(); 
        bienestarNewsActions.ValidarTituloNoti3(); 
        bienestarNewsActions.ValidarParrafoNoti3(); 
        bienestarNewsActions.clickBotonVermasNoti3(); 
        
        bienestarNewsActions.ValidarTituloMiniCumpl4(); 
        bienestarNewsActions.ValidarTituloNoti4(); 
        bienestarNewsActions.ValidarParrafoNoti4(); 
        bienestarNewsActions.clickBotonVermasNoti4(); 
        
        bienestarNewsActions.ValidarTituloMiniCumpl5(); 
        bienestarNewsActions.ValidarTituloNoti5(); 
        bienestarNewsActions.ValidarParrafoNoti5(); 
        bienestarNewsActions.clickBotonVermasNoti5(); 
        
        bienestarNewsActions.ValidarTituloMiniCumpl6(); 
        bienestarNewsActions.ValidarTituloNoti6(); 
        bienestarNewsActions.ValidarParrafoNoti6(); 
        bienestarNewsActions.clickBotonVermasNoti6(); 
        
        bienestarNewsActions.ValidarTituloMiniCumpl7(); 
        bienestarNewsActions.ValidarTituloNoti7(); 
        bienestarNewsActions.ValidarParrafoNoti7(); 
        bienestarNewsActions.clickBotonVermasNoti7(); 
        
        bienestarNewsActions.ValidarTituloMiniCumpl8(); 
        bienestarNewsActions.ValidarTituloNoti8(); 
        bienestarNewsActions.ValidarParrafoNoti8(); 
        bienestarNewsActions.clickBotonVermasNoti8(); 
        
        bienestarNewsActions.ValidarTituloMiniVan9(); 
        bienestarNewsActions.ValidarTituloNoti9(); 
        bienestarNewsActions.ValidarParrafoNoti9(); 
        bienestarNewsActions.clickBotonVermasNoti9(); 
        
        bienestarNewsActions.ValidarTituloMiniCumpl10(); 
        bienestarNewsActions.ValidarTituloNoti10(); 
        bienestarNewsActions.ValidarParrafoNoti10(); 
        bienestarNewsActions.clickBotonVermasNoti10();
        
        bienestarNewsActions.ValidarTituloMiniCumpl11(); 
        bienestarNewsActions.ValidarTituloNoti11(); 
        bienestarNewsActions.ValidarParrafoNoti11(); 
        bienestarNewsActions.clickBotonVermasNoti11(); 
        
        ///bienestarNewsActions.ValidarTituloMiniCumpl12(); 
        bienestarNewsActions.ValidarTituloNoti12(); 
        bienestarNewsActions.ValidarParrafoNoti12(); 
        bienestarNewsActions.clickBotonVermasNoti12(); 
        
        bienestarNewsActions.ValidarTituloMiniAltr13(); 
        bienestarNewsActions.ValidarTituloNoti13(); 
        bienestarNewsActions.ValidarParrafoNoti13(); 
        bienestarNewsActions.clickBotonVermasNoti13(); 
        
        bienestarNewsActions.ValidarTituloMiniAltr14(); 
        bienestarNewsActions.ValidarTituloNoti14(); 
        bienestarNewsActions.ValidarParrafoNoti14(); 
        bienestarNewsActions.clickBotonVermasNoti14(); 
        
        bienestarNewsActions.ValidarTituloMiniEntu15(); 
        bienestarNewsActions.ValidarTituloNoti15(); 
        bienestarNewsActions.ValidarParrafoNoti15(); 
        bienestarNewsActions.clickBotonVermasNoti15(); 
        
        bienestarNewsActions.ValidarTituloMiniCumpl16(); 
        bienestarNewsActions.ValidarTituloNoti16(); 
        bienestarNewsActions.ValidarParrafoNoti16(); 
        bienestarNewsActions.clickBotonVermasNoti16(); 
        
        bienestarNewsActions.ValidarTituloMiniCumpl17(); 
        bienestarNewsActions.ValidarTituloNoti17(); 
        bienestarNewsActions.ValidarParrafoNoti17(); 
        bienestarNewsActions.clickBotonVermasNoti17(); 
        
        bienestarNewsActions.ValidarTituloMiniAltr18(); 
        bienestarNewsActions.ValidarTituloNoti18(); 
        bienestarNewsActions.ValidarParrafoNoti18(); 
        bienestarNewsActions.clickBotonVermasNoti18(); 
        
        bienestarNewsActions.ValidarTituloMiniEspi19(); 
        bienestarNewsActions.ValidarTituloNoti19(); 
        bienestarNewsActions.ValidarParrafoNoti19(); 
        bienestarNewsActions.clickBotonVermasNoti19(); 

        bienestarNewsActions.ValidarTituloMiniCumpl20(); 
        bienestarNewsActions.ValidarTituloNoti20(); 
        bienestarNewsActions.ValidarParrafoNoti20(); 
        bienestarNewsActions.clickBotonVermasNoti20(); 
        }); 

        it("Section - Fechas Especiales", () =>{
        cy.viewport(1200,800)
        url.urlbienestar()
        bienestarNewsActions.clickBotonFechaEspe();
        bienestarNewsActions.ValidarTituloPrinFechaEspe();
        
        bienestarNewsActions.ValidarTituloMiniEntuFecha1(); 
        bienestarNewsActions.ValidarTituloFecha1(); 
        bienestarNewsActions.ValidarParrafoFecha1(); 
        bienestarNewsActions.clickBotonVermasFecha1(); 
        
        bienestarNewsActions.ValidarTituloMiniEntuFecha2(); 
        bienestarNewsActions.ValidarTituloFecha2(); 
        bienestarNewsActions.ValidarParrafoFecha2(); 
        bienestarNewsActions.clickBotonVermasFecha2(); 
        
        bienestarNewsActions.ValidarTituloMiniEntuFecha3(); 
        bienestarNewsActions.ValidarTituloFecha3(); 
        bienestarNewsActions.ValidarParrafoFecha3(); 
        bienestarNewsActions.clickBotonVermasFecha3(); 
        }); 
        
        it("Section - Herramientas", () =>{
        cy.viewport(1200,800)
        url.urlbienestar()
        bienestarNewsActions.clickBotonHerra();
        bienestarNewsActions.ValidarTituloPrinHerra();
        }); 


        it("Section - Reconocimientos", () =>{
        cy.viewport(1200,800)
        url.urlbienestar()
        bienestarNewsActions.clickBotonRecono();
        bienestarNewsActions.ValidarTituloPrinRecono();
        bienestarNewsActions.ValidarTituloPrinCumplea(); 
        bienestarNewsActions.validarImgDici1();
        bienestarNewsActions.validarImgDici2();
        bienestarNewsActions.validarImgDici3();
        }); 

    });
        
}